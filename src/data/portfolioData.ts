export interface Project {
  id: string;
  title: string;
  description: string;
  type: 'demo' | 'case-study' | 'architecture';
  category: string;
  technologies: string[];
  link: string;
  linkLabel: string;
}

export const portfolioData: Project[] = [
  {
    id: 'p1',
    title: 'Aura Analytics Platform',
    description: 'Una aplicación web responsiva de alto rendimiento construida para la visualización de analíticas financieras en tiempo real. Utiliza optimizaciones de renderizado y caches del navegador para un tiempo de interacción de nivel milisegundo.',
    type: 'demo',
    category: 'Desarrollo Web',
    technologies: ['React', 'TypeScript', 'Vite', 'Framer Motion', 'Recharts'],
    link: 'https://demo.wilocorp.com/aura',
    linkLabel: 'Live Demo',
  },
  {
    id: 'p2',
    title: 'Fintech Mobile App Re-design',
    description: 'Investigación profunda de experiencia de usuario y diseño de interfaz completa en Figma para una banca móvil de la próxima generación. Incluye el modelado de un Design System escalable de más de 200 componentes interactivos.',
    type: 'case-study',
    category: 'Diseño UX/UI',
    technologies: ['Figma', 'UI/UX Research', 'Design System', 'Wireframing'],
    link: '/casos/fintech-redesign',
    linkLabel: 'Ver Caso de Estudio',
  },
  {
    id: 'p3',
    title: 'NLP Semantic Tagging Engine',
    description: 'Herramienta inteligente de procesamiento de lenguaje natural diseñada para clasificar y etiquetar semánticamente grandes volúmenes de datos transaccionales no estructurados. Integra modelos Transformers y optimizaciones de pipelines SQL.',
    type: 'architecture',
    category: 'NLP & IA',
    technologies: ['Python', 'SQL', 'Transformers', 'PyTorch', 'FastAPI'],
    link: '/arquitectura/nlp-semantic-engine',
    linkLabel: 'Ver Arquitectura',
  },
];
