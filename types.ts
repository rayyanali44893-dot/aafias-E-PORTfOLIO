import { LucideIcon } from 'lucide-react';

export interface EvidenceItem {
  id: string;
  title: string;
  description: string;
  type: 'Certificate' | 'Image' | 'Document' | 'Video';
  date?: string;
  imageUrl?: string; // Optional URL for display
}

export interface Competency {
  id: string;
  title: string;
  shortTitle: string;
  icon: LucideIcon;
  description: string;
  keyConcepts: string[];
  evidencePlaceholder: string;
  color: string;
  evidence: EvidenceItem[];
}

export interface Section {
  title: string;
  content: string;
}