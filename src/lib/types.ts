
export interface NavItem {
  title: string;
  href: string;
}

export interface SafetyTip {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface ReportSubmission {
  id: string;
  name: string;
  location: string;
  incidentType: string;
  description: string;
  imageUrl?: string;
  date: string;
}

export interface Volunteer {
  id: string;
  name: string;
  email: string;
  interest: string;
  message?: string;
}

export interface RescueStory {
  id: string;
  title: string;
  content: string;
  author: string;
  date: string;
  imageUrl?: string;
}

export interface ContactInfo {
  id: string;
  name: string;
  address: string;
  phone: string;
  email: string;
  type: 'shelter' | 'helpline' | 'vet';
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
}
