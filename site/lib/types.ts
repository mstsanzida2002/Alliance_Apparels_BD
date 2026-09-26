export interface Service {
  id: number;
  title: string;
  description: string;
  image: string;
}

export interface WorkStep {
  step: number;
  title: string;
  description: string;
  icon: string;
}

export interface Machinery {
  id: number;
  name: string;
  function: string;
  manufacturer: string;
}

export interface TeamMember {
  id: number;
  name: string;
  role: string;
  image: string;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface BreadcrumbItem {
  label: string;
  href?: string;
}
