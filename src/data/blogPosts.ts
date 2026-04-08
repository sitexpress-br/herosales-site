export interface BlogPostAuthor {
  name: string;
  avatar: string;
  bio: string;
}

export interface BlogPost {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  category: string;
  author: BlogPostAuthor;
  date: string;
  rawDate: string;
  readTime: string;
  featured: boolean;
}
