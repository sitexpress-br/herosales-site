const WP_API_BASE = "https://cms.clinicaautoridade.com.br/wp-json/wp/v2";

export interface WPPost {
  id: number;
  slug: string;
  title: { rendered: string };
  content: { rendered: string };
  excerpt: { rendered: string };
  date: string;
  categories: number[];
  _embedded?: {
    "wp:featuredmedia"?: Array<{ source_url: string }>;
    "wp:term"?: Array<Array<{ id: number; name: string; slug: string }>>;
    author?: Array<{ name: string; avatar_urls: Record<string, string> }>;
  };
  acf_fields?: Record<string, unknown>;
}

export interface WPProject extends WPPost {
  acf_fields?: {
    area?: string;
    location?: string;
    result?: string;
    result_label?: string;
    url?: string;
    logo?: string;
    hero_result?: string;
    hero_result_label?: string;
    challenge_title?: string;
    challenge_description?: string;
    challenge_problems?: Array<{ problema: string }>;
    solution_title?: string;
    solution_description?: string;
    solution_services?: Array<{
      icon: string;
      name: string;
      description: string;
    }>;
    results?: Array<{
      label: string;
      before: string;
      after: string;
      growth: string;
    }>;
    testimonial_quote?: string;
    testimonial_author?: string;
    testimonial_role?: string;
    testimonial_avatar?: string;
    before_image?: string;
    after_image?: string;
  };
}

/**
 * Fetches all blog posts from WordPress
 */
export async function fetchPosts(limit?: number): Promise<WPPost[]> {
  const params = new URLSearchParams({
    _embed: "true",
    per_page: limit?.toString() || "100",
    orderby: "date",
    order: "desc",
  });

  const response = await fetch(`${WP_API_BASE}/posts?${params}`);
  
  if (!response.ok) {
    throw new Error(`Failed to fetch posts: ${response.statusText}`);
  }
  
  return response.json();
}

/**
 * Fetches a single post by slug
 */
export async function fetchPostBySlug(slug: string): Promise<WPPost | null> {
  const params = new URLSearchParams({
    _embed: "true",
    slug: slug,
  });

  const response = await fetch(`${WP_API_BASE}/posts?${params}`);
  
  if (!response.ok) {
    throw new Error(`Failed to fetch post: ${response.statusText}`);
  }
  
  const posts: WPPost[] = await response.json();
  return posts.length > 0 ? posts[0] : null;
}

/**
 * Fetches all projects from WordPress (custom post type)
 */
export async function fetchProjects(limit?: number): Promise<WPProject[]> {
  const params = new URLSearchParams({
    _embed: "true",
    per_page: limit?.toString() || "100",
    orderby: "date",
    order: "desc",
  });

  try {
    const response = await fetch(`${WP_API_BASE}/projetos?${params}`);
    
    if (!response.ok) {
      console.error(`[WordPress] Projects API Error: ${response.status} - ${response.statusText}`);
      throw new Error(`Failed to fetch projects: ${response.statusText}`);
    }
    
    const data = await response.json();
    
    // Ensure we always return an array
    if (!Array.isArray(data)) {
      console.warn("[WordPress] Projects API returned non-array:", typeof data);
      return [];
    }
    
    return data;
  } catch (error) {
    console.error("[WordPress] Fetch projects error:", error);
    throw error;
  }
}

/**
 * Fetches a single project by slug
 */
export async function fetchProjectBySlug(slug: string): Promise<WPProject | null> {
  const params = new URLSearchParams({
    _embed: "true",
    slug: slug,
  });

  const response = await fetch(`${WP_API_BASE}/projetos?${params}`);
  
  if (!response.ok) {
    throw new Error(`Failed to fetch project: ${response.statusText}`);
  }
  
  const projects: WPProject[] = await response.json();
  return projects.length > 0 ? projects[0] : null;
}

/**
 * Fetches all categories
 */
export async function fetchCategories(): Promise<Array<{ id: number; name: string; slug: string }>> {
  const response = await fetch(`${WP_API_BASE}/categories`);
  
  if (!response.ok) {
    throw new Error(`Failed to fetch categories: ${response.statusText}`);
  }
  
  return response.json();
}
