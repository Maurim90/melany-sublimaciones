export interface Product {
  id: string;
  name: string;
  description: string;
  image: string;
  price?: string;
  category: 'ropa' | 'gorras' | 'tazas' | 'otros';
}

export interface GalleryItem {
  id: number;
  image: string;
  category: string;
  title: string;
}