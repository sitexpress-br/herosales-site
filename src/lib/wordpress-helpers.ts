import DOMPurify from "dompurify";
import type { WPPost, WPProject } from "@/services/wordpress";
import type { BlogPost, BlogPostAuthor } from "@/data/blogPosts";
import type { Project } from "@/data/projects";

const ALLOWED_TAGS = [
  "p", "br", "strong", "em", "u", "s", "del",
  "h1", "h2", "h3", "h4", "h5", "h6",
  "ul", "ol", "li", "a", "img", "figure", "figcaption",
  "blockquote", "code", "pre", "hr", "span", "div",
  "table", "thead", "tbody", "tfoot", "tr", "th", "td",
  "iframe", "video", "source", "audio",
];

const ALLOWED_ATTR = [
  "href", "src", "alt", "title", "class", "id",
  "target", "rel", "width", "height", "loading",
  "allow", "allowfullscreen", "frameborder",
  "type", "controls", "autoplay", "loop", "muted",
];

export function sanitizeHtml(html: string): string {
  return DOMPurify.sanitize(html, {
    ALLOWED_TAGS,
    ALLOWED_ATTR,
    ALLOW_DATA_ATTR: false,
  });
}

/**
 * Strips HTML tags from a string
 */
function stripHtml(html: string): string {
  return html.replace(/<[^>]*>/g, "").trim();
}

/**
 * Safely extracts rendered content from WordPress fields
 */
function safeRendered(field: { rendered?: string } | null | undefined): string {
  return field?.rendered || "";
}

/**
 * Decodes HTML entities safely (works in SSR and browser)
 */
function decodeHtmlEntities(text: string): string {
  if (!text) return "";
  
  // Fallback for SSR or edge cases where document is not available
  if (typeof document === "undefined") {
    return text
      .replace(/&amp;/g, "&")
      .replace(/&lt;/g, "<")
      .replace(/&gt;/g, ">")
      .replace(/&quot;/g, '"')
      .replace(/&#039;/g, "'")
      .replace(/&#8217;/g, "'")
      .replace(/&#8220;/g, "\u201C")
      .replace(/&#8221;/g, "\u201D")
      .replace(/&#8211;/g, "\u2013")
      .replace(/&#8212;/g, "\u2014");
  }
  
  try {
    const textarea = document.createElement("textarea");
    textarea.innerHTML = text;
    return textarea.value;
  } catch {
    // Final fallback: return original text
    return text;
  }
}

/**
 * Calculates estimated reading time based on word count
 */
/**
 * Extracts problems from ACF repeater format
 */
function extractProblems(problems: unknown): string[] {
  if (!Array.isArray(problems)) return [];
  return problems
    .map(p => (typeof p === "object" && p !== null && "problema" in p) 
      ? (p as { problema: string }).problema 
      : "")
    .filter(Boolean);
}

/**
 * Calculates estimated reading time based on word count
 */
function calculateReadTime(content: string): string {
  const text = stripHtml(content);
  const words = text.split(/\s+/).length;
  const minutes = Math.ceil(words / 200); // Average reading speed
  return `${minutes} min`;
}

/**
 * Formats a date string to Brazilian Portuguese format
 */
function formatDate(dateString: string): string {
  const date = new Date(dateString);
  const months = [
    "Jan", "Fev", "Mar", "Abr", "Mai", "Jun",
    "Jul", "Ago", "Set", "Out", "Nov", "Dez"
  ];
  const day = date.getDate().toString().padStart(2, "0");
  const month = months[date.getMonth()];
  const year = date.getFullYear();
  return `${day} ${month} ${year}`;
}

/**
 * Returns ISO 8601 date format for Schema.org
 * Includes error handling to prevent crashes from invalid dates
 */
export function getISODate(dateString: string): string {
  try {
    const date = new Date(dateString);
    if (isNaN(date.getTime())) {
      return new Date().toISOString();
    }
    return date.toISOString();
  } catch {
    return new Date().toISOString();
  }
}

/**
 * Extracts featured image URL from WordPress embedded data
 */
function getFeaturedImage(post: WPPost | WPProject): string {
  const media = post._embedded?.["wp:featuredmedia"];
  if (media && Array.isArray(media) && media.length > 0 && media[0]?.source_url) {
    return media[0].source_url;
  }
  return "/placeholder.svg";
}

/**
 * Extracts category name from WordPress embedded data
 */
function getCategory(post: WPPost): string {
  const terms = post._embedded?.["wp:term"];
  if (terms && terms.length > 0 && terms[0].length > 0) {
    return terms[0][0].name;
  }
  return "Geral";
}

/**
 * Extracts author info from WordPress embedded data
 */
function getAuthor(post: WPPost): BlogPostAuthor {
  const authors = post._embedded?.author;
  if (authors && authors.length > 0) {
    const author = authors[0];
    return {
      name: author.name,
      avatar: author.avatar_urls?.["96"] || "/placeholder.svg",
      bio: "Especialistas em marketing digital para o mercado da saúde.",
    };
  }
  return {
    name: "Equipe Hero Sales",
    avatar: "/placeholder.svg",
    bio: "Especialistas em marketing digital para o mercado da saúde, ajudando clínicas e profissionais de saúde a conquistarem mais pacientes através da plataforma Hero Sales.",
  };
}

/**
 * Transforms a WordPress post into a BlogPost
 */
export function wpPostToBlogPost(post: WPPost, index: number = 0): BlogPost {
  return {
    id: post.id,
    slug: post.slug,
    title: decodeHtmlEntities(post.title.rendered),
    excerpt: decodeHtmlEntities(stripHtml(post.excerpt.rendered)),
    content: sanitizeHtml(post.content.rendered),
    image: getFeaturedImage(post),
    category: getCategory(post),
    author: getAuthor(post),
    date: formatDate(post.date),
    rawDate: post.date,
    readTime: calculateReadTime(post.content.rendered),
    featured: index === 0, // First post is featured
  };
}

/**
 * Transforms a WordPress project into a Project
 */
export function wpProjectToProject(project: WPProject): Project {
  const acf = project.acf_fields || {};
  
  // Use after_image from ACF if available, otherwise fall back to featured image
  const projectImage = (acf.after_image as string) || getFeaturedImage(project);
  
  return {
    slug: project.slug,
    name: decodeHtmlEntities(project.title.rendered),
    url: (acf.url as string) || "",
    area: (acf.area as string) || "Geral",
    location: (acf.location as string) || "",
    result: (acf.hero_result as string) || (acf.result as string) || "",
    resultLabel: (acf.hero_result_label as string) || (acf.result_label as string) || "",
    image: projectImage,
    logo: (acf.logo as string) || "/placeholder.svg",
    description: decodeHtmlEntities(stripHtml(safeRendered(project.excerpt))),
  };
}

/**
 * Transforms a WordPress project into detailed case data
 */
export function wpProjectToCaseData(project: WPProject) {
  const acf = project.acf_fields || {};
  
  return {
    slug: project.slug,
    name: decodeHtmlEntities(project.title.rendered),
    url: (acf.url as string) || "",
    logo: (acf.logo as string) || "/placeholder.svg",
    area: (acf.area as string) || "Geral",
    location: (acf.location as string) || "",
    heroResult: (acf.hero_result as string) || (acf.result as string) || "",
    heroResultLabel: (acf.hero_result_label as string) || (acf.result_label as string) || "",
    challenge: {
      title: (acf.challenge_title as string) || "O Desafio",
      description: (acf.challenge_description as string) || stripHtml(safeRendered(project.content)),
      problems: extractProblems(acf.challenge_problems),
    },
    solution: {
      title: (acf.solution_title as string) || "Nossa Solução",
      description: (acf.solution_description as string) || "",
      services: (acf.solution_services as Array<{ icon: string; name: string; description: string }>) || [],
    },
    results: (acf.results as Array<{ label: string; before: string; after: string; growth: string }>) || [],
    testimonial: {
      quote: (acf.testimonial_quote as string) || "",
      author: (acf.testimonial_author as string) || "",
      role: (acf.testimonial_role as string) || "",
      avatar: (acf.testimonial_avatar as string) || "/placeholder.svg",
    },
    images: {
      before: (acf.before_image as string) || "/placeholder.svg",
      after: (acf.after_image as string) || getFeaturedImage(project),
    },
  };
}

/**
 * Extracts unique categories from blog posts
 */
export function extractCategories(posts: BlogPost[]): string[] {
  const categories = new Set(posts.map((post) => post.category));
  return ["Todos", ...Array.from(categories)];
}

/**
 * Extracts unique areas from projects
 */
export function extractProjectAreas(projects: Project[]): string[] {
  const areas = new Set(projects.map((project) => project.area));
  return ["Todos", ...Array.from(areas)];
}

/**
 * Filters posts to get related posts by category
 */
export function getRelatedPosts(
  currentPost: BlogPost,
  allPosts: BlogPost[],
  limit: number = 3
): BlogPost[] {
  return allPosts
    .filter((post) => post.id !== currentPost.id && post.category === currentPost.category)
    .slice(0, limit);
}
