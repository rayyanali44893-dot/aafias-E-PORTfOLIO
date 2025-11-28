import { 
  Stethoscope, 
  BookOpen, 
  HeartHandshake, 
  MessageCircle, 
  Users, 
  Briefcase, 
  Building2, 
  TrendingUp, 
  Globe 
} from 'lucide-react';
import { Competency } from './types';

export const COMPETENCIES: Competency[] = [
  {
    id: 'medical-expert',
    title: 'Medical Expert',
    shortTitle: 'Medical Expert',
    icon: Stethoscope,
    color: 'bg-pink-100 text-pink-700',
    description: 'As a Medical Expert, physicians integrate all of the CanMEDS Roles, applying medical knowledge, clinical skills, and professional values in their provision of high-quality and safe patient-centered care.',
    keyConcepts: ['Clinical Skills', 'Anatomy & Physiology', 'Diagnostic Reasoning', 'Patient Management'],
    evidencePlaceholder: 'Upload OSCE results or procedural logs.',
    evidence: [
      {
        id: 'me-1',
        title: 'Clinical Procedure: Capillary Blood Sampling',
        type: 'Image',
        date: 'Fall 2024',
        description: 'Demonstration of aseptic technique during capillary blood collection. Successfully performed procedure with patient consent.',
        imageUrl: 'https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&q=80&w=1000' // Placeholder for the finger prick photo
      },
      {
        id: 'me-2',
        title: 'Anatomy Competence',
        type: 'Certificate',
        date: 'October 16, 2025',
        description: 'Certificate of Participation in World Anatomy Day at Gulf Medical University, demonstrating foundational knowledge reinforcement.',
        imageUrl: '' // Placeholder for Anatomy Cert
      }
    ]
  },
  {
    id: 'scholar',
    title: 'Evidence Based Practitioner & Scholar',
    shortTitle: 'Scholar',
    icon: BookOpen,
    color: 'bg-rose-100 text-rose-700',
    description: 'Physicians demonstrate a lifelong commitment to reflective learning, as well as the creation, dissemination, application and translation of medical knowledge.',
    keyConcepts: ['Research Methodology', 'Critical Appraisal', 'Lifelong Learning', 'Teaching'],
    evidencePlaceholder: 'Upload research posters or journal club presentations.',
    evidence: [
      {
        id: 'sc-1',
        title: 'Cardiac & Antioxidant Function Research',
        type: 'Image',
        date: '2025',
        description: 'Presented findings on cardiac function biomarkers and antioxidant capacity. Analyzed data on heart rate, SV, and oxidative stress markers.',
        imageUrl: 'https://images.unsplash.com/photo-1544531586-fde5298cdd40?auto=format&fit=crop&q=80&w=1000' // Placeholder for presentation photo
      },
      {
        id: 'sc-2',
        title: 'Fakeeh University Hospital Conference',
        type: 'Certificate',
        date: 'Nov 14-15, 2025',
        description: 'Attended the 4th International Conference. Gained insights into latest clinical advancements and evidence-based practices.',
        imageUrl: '' // Placeholder for Conference Cert
      }
    ]
  },
  {
    id: 'health-advocate',
    title: 'Patient Care Provider & Health Advocate',
    shortTitle: 'Health Advocate',
    icon: HeartHandshake,
    color: 'bg-pink-100 text-pink-700',
    description: 'Physicians contribute their expertise and influence as they work with communities or patient populations to improve health.',
    keyConcepts: ['Determinants of Health', 'Health Promotion', 'Disease Prevention', 'Patient Safety'],
    evidencePlaceholder: 'Reflections on community service or advocacy.',
    evidence: [
      {
        id: 'ha-1',
        title: 'World Diabetes Day Initiative',
        type: 'Certificate',
        date: 'Nov 20, 2025',
        description: 'Active participation in community awareness campaign for diabetes prevention and management.',
        imageUrl: '' // Placeholder for Diabetes Cert
      }
    ]
  },
  {
    id: 'communicator',
    title: 'Communicator',
    shortTitle: 'Communicator',
    icon: MessageCircle,
    color: 'bg-rose-100 text-rose-700',
    description: 'Physicians effectively facilitate the doctor-patient relationship and the dynamic exchanges that occur before, during, and after the medical encounter.',
    keyConcepts: ['Patient History Taking', 'Breaking Bad News', 'Written Documentation', 'Active Listening'],
    evidencePlaceholder: 'Video recordings of patient interactions (mock) or anonymized notes.',
    evidence: []
  },
  {
    id: 'collaborator',
    title: 'Collaborator, Innovator & Leader',
    shortTitle: 'Collaborator & Leader',
    icon: Users,
    color: 'bg-pink-100 text-pink-700',
    description: 'Physicians work effectively within a healthcare team to achieve optimal patient care. They engage with others to contribute to a vision of a high-quality health care system.',
    keyConcepts: ['Interprofessional Practice', 'Conflict Resolution', 'Team Leadership', 'Innovation'],
    evidencePlaceholder: 'Feedback from nurses/peers or group project outcomes.',
    evidence: [
      {
        id: 'col-1',
        title: 'White Coat Ceremony Cohort',
        type: 'Image',
        date: '2025',
        description: 'Celebrating entry into the medical profession with peers, fostering a spirit of camaraderie and professional support.',
        imageUrl: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=1000' // Placeholder for Group photo
      }
    ]
  },
  {
    id: 'professional',
    title: 'Professional',
    shortTitle: 'Professional',
    icon: Briefcase,
    color: 'bg-rose-100 text-rose-700',
    description: 'Physicians are committed to the health and well-being of individuals and society through ethical practice, profession-led regulation, and high personal standards of behaviour.',
    keyConcepts: ['Medical Ethics', 'Professional Conduct', 'Resilience', 'Accountability'],
    evidencePlaceholder: 'Certificates of professionalism or ethics reflections.',
    evidence: [
      {
        id: 'prof-1',
        title: 'White Coat Ceremony 2025',
        type: 'Image',
        date: '2025',
        description: 'Official induction into the medical profession, affirming commitment to ethical practice and patient care.',
        imageUrl: '' 
      }
    ]
  },
  {
    id: 'health-system',
    title: 'Health System Proponent',
    shortTitle: 'System Proponent',
    icon: Building2,
    color: 'bg-pink-100 text-pink-700',
    description: 'Physicians work to improve the efficiency and effectiveness of the healthcare system. They understand the economic and political nuances of healthcare delivery.',
    keyConcepts: ['Resource Allocation', 'Cost-Effective Care', 'Quality Improvement', 'Patient Safety Systems'],
    evidencePlaceholder: 'Quality improvement project proposals.',
    evidence: []
  },
  {
    id: 'self-enhancer',
    title: 'Self Profession Enhancer',
    shortTitle: 'Self Enhancer',
    icon: TrendingUp,
    color: 'bg-rose-100 text-rose-700',
    description: 'Physicians demonstrate a commitment to physician health and sustainable practice. They balance personal life with professional responsibilities.',
    keyConcepts: ['Work-Life Balance', 'Career Planning', 'Personal Wellness', 'CME'],
    evidencePlaceholder: 'Personal development plans or wellness workshops.',
    evidence: [
      {
        id: 'se-1',
        title: 'Professional Development: Conference Attendance',
        type: 'Certificate',
        date: 'Nov 2025',
        description: 'Engaging in continuous medical education at Fakeeh University Hospital to enhance professional knowledge base.',
        imageUrl: ''
      }
    ]
  },
  {
    id: 'socially-accountable',
    title: 'Socially Accountable',
    shortTitle: 'Socially Accountable',
    icon: Globe,
    color: 'bg-pink-100 text-pink-700',
    description: 'Physicians recognize and respond to the societal needs of the communities they serve. They address health inequities and advocate for social justice.',
    keyConcepts: ['Social Justice', 'Health Equity', 'Global Health', 'Community Engagement'],
    evidencePlaceholder: 'Reports on rural health electives or volunteering.',
    evidence: []
  }
];