import { FaqItem, Testimonial } from '../types';

export const FAQS_DATA: FaqItem[] = [
  {
    id: 'f1',
    question: 'What web development technologies and frameworks do you use?',
    answer: 'We engineer high-performance web applications using modern full-stack architectures including React, Next.js, TypeScript, Node.js, Python, PostgreSQL, and scalable cloud infrastructures (AWS, Docker, Vercel). Every project is designed for ultra-fast loading, mobile responsiveness, and bank-grade security.',
    category: 'Web Development'
  },
  {
    id: 'f2',
    question: 'How do your SEO services help rank our website on Google #1?',
    answer: 'Our SEO engineering combines in-depth technical audits (Core Web Vitals, crawlability, indexing), high-intent commercial keyword clustering, rich JSON-LD schema markup, and authoritative white-hat editorial backlinks to generate sustainable organic traffic that converts into revenue.',
    category: 'SEO'
  },
  {
    id: 'f3',
    question: 'What digital marketing services and ad networks do you manage?',
    answer: 'We run full-funnel performance marketing campaigns across Google Search & Display Ads, Meta (Facebook & Instagram) Ads, TikTok Ads, and automated CRM email funnels. Our media buyers focus strictly on maximizing Return On Ad Spend (ROAS) and lowering cost-per-acquisition (CPA).',
    category: 'Digital Marketing'
  },
  {
    id: 'f4',
    question: 'How do you help creators and pages with Facebook Monetization?',
    answer: 'We provide end-to-end support for Facebook In-Stream Ads approval, Reels Performance Bonuses, policy compliance resolution (fixing Limited Originality of Content and Yellow/Red flags), international payout bank setups, and viral high-retention video production.',
    category: 'Facebook Monetization'
  },
  {
    id: 'f5',
    question: 'What IoT (Internet of Things) and connected solutions do you build?',
    answer: 'We develop custom embedded firmware (ESP32, STM32, ARM, Raspberry Pi), low-latency MQTT and WebSocket telemetry streaming pipelines, edge computing modules, and real-time cloud analytics dashboards for industrial and commercial automation.',
    category: 'IoT Solutions'
  },
  {
    id: 'f6',
    question: 'Can you integrate Generative Language Models (GLM) and AI into our business?',
    answer: 'Yes! We develop domain-specific Generative AI solutions including enterprise Retrieval-Augmented Generation (RAG) pipelines, autonomous workflow AI agents, custom fine-tuned LLMs, vector database search (Pinecone, ChromaDB), and zero-hallucination customer support bots.',
    category: 'GLM & AI'
  },
  {
    id: 'f7',
    question: 'Do you build custom E-Commerce stores with secure payment gateways?',
    answer: 'Yes, we build scalable e-commerce platforms using headless Next.js, Shopify, and WooCommerce. We integrate international and local payment gateways (Stripe, PayPal, credit cards), automated inventory management, abandoned cart recovery, and high-converting checkout flows.',
    category: 'E-Commerce'
  },
  {
    id: 'f8',
    question: 'What graphic design and branding services do you provide?',
    answer: 'We craft complete visual brand identities, bespoke logos, Figma UI/UX prototypes, social media ad creatives, corporate stationery, and marketing pitch decks tailored to make your brand instantly recognizable.',
    category: 'Graphic Design'
  },
  {
    id: 'f9',
    question: 'How do we start a project and get a cost estimation?',
    answer: 'You can reach out through our Contact page or call our tech and operations team directly at +92 329 078 1709 for a free discovery consultation. We analyze your requirements, provide a transparent project roadmap with milestone deliverables, and execute through agile sprints.',
    category: 'Consultation'
  }
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: 't1',
    name: 'Hamza Malik',
    role: 'CEO & Founder',
    company: 'FinTech Growth Labs',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
    rating: 5,
    courseTaken: 'Web Development & SEO Scaling',
    content: 'Beture Web delivered our enterprise SaaS platform ahead of schedule with flawless architecture. Their technical SEO optimization tripled our organic lead generation within 90 days!',
    location: 'Lahore, Pakistan'
  },
  {
    id: 't2',
    name: 'Ayesha Khan',
    role: 'Digital Marketing Director',
    company: 'PayTech Global',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
    rating: 5,
    courseTaken: 'Digital Marketing & AI Automation',
    content: 'The AI automation pipelines and targeted ad campaigns managed by Beture Web reduced our customer acquisition cost by 42%. Their technical expertise and communication are exceptional.',
    location: 'Karachi, Pakistan'
  },
  {
    id: 't3',
    name: 'Usman Chaudhry',
    role: 'Managing Director',
    company: 'Apex Media Network',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80',
    rating: 5,
    courseTaken: 'Facebook Monetization & E-Commerce',
    content: 'Beture Web solved our Facebook policy monetization issues within days and scaled our monthly in-stream ad revenue dramatically. They are our go-to technology partner.',
    location: 'Islamabad, Pakistan'
  }
];
