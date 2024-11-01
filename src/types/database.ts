export interface Service {
  id: number;
  title: string;
  description: string;
  price: number;
  icon: string;
  created_at: string;
}

export interface Contact {
  id: number;
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
  created_at: string;
}

export interface Testimonial {
  id: number;
  author: string;
  company: string;
  quote: string;
  created_at: string;
}