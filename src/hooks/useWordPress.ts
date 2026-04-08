import { useQuery } from "@tanstack/react-query";
import {
  fetchPosts,
  fetchPostBySlug,
  fetchProjects,
  fetchProjectBySlug,
  fetchCategories,
} from "@/services/wordpress";
import {
  wpPostToBlogPost,
  wpProjectToProject,
  wpProjectToCaseData,
  extractCategories,
  extractProjectAreas,
} from "@/lib/wordpress-helpers";
import type { BlogPost } from "@/data/blogPosts";
import type { Project } from "@/data/projects";

// No fallback imports - using skeleton loading for all content
const STALE_TIME = 5 * 60 * 1000; // 5 minutes

/**
 * Hook to fetch all blog posts
 */
export function useBlogPosts(limit?: number) {
  return useQuery({
    queryKey: ["blog-posts", limit],
    queryFn: async () => {
      const posts = await fetchPosts(limit);
      return posts.map((post, index) => wpPostToBlogPost(post, index));
    },
    staleTime: STALE_TIME,
  });
}

/**
 * Hook to fetch a single blog post by slug
 */
export function useBlogPost(slug: string | undefined) {
  return useQuery({
    queryKey: ["blog-post", slug],
    queryFn: async () => {
      if (!slug) return null;
      const post = await fetchPostBySlug(slug);
      if (!post) return null;
      return wpPostToBlogPost(post);
    },
    staleTime: STALE_TIME,
    enabled: !!slug,
  });
}

/**
 * Hook to fetch blog categories
 */
export function useBlogCategories() {
  const { data: posts, isLoading } = useBlogPosts();
  
  if (posts && posts.length > 0) {
    return { categories: extractCategories(posts), isLoading: false };
  }
  
  return { categories: ["Todos"], isLoading };
}

/**
 * Hook to fetch all projects
 */
export function useProjects(limit?: number) {
  return useQuery({
    queryKey: ["projects", limit],
    queryFn: async () => {
      const projects = await fetchProjects(limit);
      return projects.map(wpProjectToProject);
    },
    staleTime: STALE_TIME,
  });
}

/**
 * Hook to fetch a single project by slug
 */
export function useProject(slug: string | undefined) {
  return useQuery({
    queryKey: ["project", slug],
    queryFn: async () => {
      if (!slug) return null;
      const project = await fetchProjectBySlug(slug);
      if (!project) return null;
      return wpProjectToCaseData(project);
    },
    staleTime: STALE_TIME,
    enabled: !!slug,
  });
}

/**
 * Hook to fetch project areas (returns object with isLoading state)
 */
export function useProjectAreas() {
  const { data: projects, isLoading } = useProjects();
  
  if (projects && projects.length > 0) {
    return { areas: extractProjectAreas(projects), isLoading: false };
  }
  
  return { areas: ["Todos"], isLoading };
}

/**
 * Hook to get related posts
 * Prioritizes same category, falls back to other categories
 */
export function useRelatedPosts(currentPost: BlogPost | null, limit: number = 3) {
  const { data: allPosts } = useBlogPosts();
  
  if (!currentPost || !allPosts) return [];
  
  // Exclude current post
  const otherPosts = allPosts.filter((post) => post.id !== currentPost.id);
  
  // First: posts from the same category
  const sameCategoryPosts = otherPosts.filter(
    (post) => post.category === currentPost.category
  );
  
  // If enough posts in same category, return them
  if (sameCategoryPosts.length >= limit) {
    return sameCategoryPosts.slice(0, limit);
  }
  
  // Otherwise, fill with posts from other categories
  const differentCategoryPosts = otherPosts.filter(
    (post) => post.category !== currentPost.category
  );
  
  return [...sameCategoryPosts, ...differentCategoryPosts].slice(0, limit);
}

/**
 * Hook to fetch cases data for the Cases section
 */
export function useCasesData(limit: number = 3) {
  return useQuery({
    queryKey: ["cases-data", limit],
    queryFn: async () => {
      const projects = await fetchProjects(limit);
      return projects.map(wpProjectToCaseData);
    },
    staleTime: STALE_TIME,
  });
}
