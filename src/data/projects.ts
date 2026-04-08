// Project interface - data comes from WordPress
export interface Project {
  slug: string;
  name: string;
  url: string;
  area: string;
  location: string;
  result: string;
  resultLabel: string;
  image: string;
  logo: string;
  description?: string;
}
