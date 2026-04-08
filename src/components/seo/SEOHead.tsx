import { useEffect } from "react";
import { SEO_CONFIG } from "@/lib/seo-config";

interface SEOHeadProps {
  title: string;
  description: string;
  canonical?: string;
  ogType?: "website" | "article";
  ogImage?: string;
  article?: {
    publishedTime: string;
    modifiedTime?: string;
    author: string;
    section: string;
  };
  noindex?: boolean;
}

function updateMetaTag(name: string, content: string) {
  // Check for property-based meta tags (Open Graph, article)
  const isProperty = name.startsWith("og:") || name.startsWith("article:");
  const selector = isProperty
    ? `meta[property="${name}"]`
    : `meta[name="${name}"]`;

  let meta = document.querySelector(selector);

  if (!meta) {
    meta = document.createElement("meta");
    if (isProperty) {
      meta.setAttribute("property", name);
    } else {
      meta.setAttribute("name", name);
    }
    document.head.appendChild(meta);
  }

  meta.setAttribute("content", content);
}

function removeMetaTag(name: string) {
  const isProperty = name.startsWith("og:") || name.startsWith("article:");
  const selector = isProperty
    ? `meta[property="${name}"]`
    : `meta[name="${name}"]`;
  const meta = document.querySelector(selector);
  if (meta) {
    meta.remove();
  }
}

function updateCanonicalLink(url?: string) {
  let link = document.querySelector('link[rel="canonical"]');

  if (url) {
    if (!link) {
      link = document.createElement("link");
      link.setAttribute("rel", "canonical");
      document.head.appendChild(link);
    }
    link.setAttribute("href", url);
  } else if (link) {
    link.remove();
  }
}

function updateRobotsTag(noindex: boolean) {
  let meta = document.querySelector('meta[name="robots"]');

  if (noindex) {
    if (!meta) {
      meta = document.createElement("meta");
      meta.setAttribute("name", "robots");
      document.head.appendChild(meta);
    }
    meta.setAttribute("content", "noindex, nofollow");
  } else if (meta) {
    meta.setAttribute("content", "index, follow");
  }
}

export const SEOHead = ({
  title,
  description,
  canonical,
  ogType = "website",
  ogImage,
  article,
  noindex = false,
}: SEOHeadProps) => {
  useEffect(() => {
    // Update document title
    document.title = title;

    // Update meta tags
    updateMetaTag("description", description);

    // Open Graph
    updateMetaTag("og:title", title);
    updateMetaTag("og:description", description);
    updateMetaTag("og:type", ogType);
    updateMetaTag("og:url", canonical || window.location.href);
    updateMetaTag("og:image", ogImage || SEO_CONFIG.defaultImage);
    updateMetaTag("og:site_name", SEO_CONFIG.siteName);
    updateMetaTag("og:locale", SEO_CONFIG.locale);

    // Twitter Cards
    updateMetaTag("twitter:card", "summary_large_image");
    updateMetaTag("twitter:title", title);
    updateMetaTag("twitter:description", description);
    updateMetaTag("twitter:image", ogImage || SEO_CONFIG.defaultImage);

    // Article-specific meta tags
    if (article) {
      updateMetaTag("article:published_time", article.publishedTime);
      if (article.modifiedTime) {
        updateMetaTag("article:modified_time", article.modifiedTime);
      }
      updateMetaTag("article:author", article.author);
      updateMetaTag("article:section", article.section);
    } else {
      // Remove article meta tags if not an article
      removeMetaTag("article:published_time");
      removeMetaTag("article:modified_time");
      removeMetaTag("article:author");
      removeMetaTag("article:section");
    }

    // Canonical URL
    updateCanonicalLink(canonical);

    // Robots
    updateRobotsTag(noindex);

    // Cleanup function
    return () => {
      // Reset to defaults when component unmounts
      document.title = SEO_CONFIG.defaultTitle;
    };
  }, [title, description, canonical, ogType, ogImage, article, noindex]);

  return null;
};

export default SEOHead;
