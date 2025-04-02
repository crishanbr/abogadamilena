export interface NavItems {
  title: string;
  href: string;
}

interface ServiceItem {
  name: string;
}

export interface Service {
  title: string;
  description?: string;
  background?: string;
  items: ServiceItem[];
}