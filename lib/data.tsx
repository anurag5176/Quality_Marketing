// icons
import {
  BarChart3,
  BrainCircuit,
  Code,
  FileText,
  ImageIcon,
  LayoutGrid,
  MessageSquare,
  Palette,
  Search,
} from "lucide-react"

// services array
export const services = [
  {
    id: "digital-marketing",
    title: "Digital Marketing",
    description:
      "Strategic digital campaigns that drive engagement, conversions, and growth for your business.",
    icon: <BarChart3 className="h-6 w-6 text-primary" />,
    features: [
      "Search Engine Marketing (SEM)",
      "Pay-Per-Click (PPC) Advertising",
      "Display Advertising",
      "Remarketing Campaigns",
      "Performance Tracking & Analytics",
    ],
  },
  {
    id: "branding",
    title: "Branding & Identity",
    description:
      "Distinctive brand identities that resonate with your target audience and set you apart from competitors.",
    icon: <Palette className="h-6 w-6 text-primary" />,
    features: [
      "Brand Strategy Development",
      "Visual Identity Design",
      "Brand Guidelines",
      "Logo Design & Brand Assets",
      "Brand Messaging & Voice",
    ],
  },
  {
    id: "social-media",
    title: "Social Media Management",
    description:
      "Engaging social strategies that build community, drive brand loyalty, and increase your online presence.",
    icon: <MessageSquare className="h-6 w-6 text-primary" />,
    features: [
      "Platform Strategy & Management",
      "Content Creation & Curation",
      "Community Management",
      "Paid Social Campaigns",
      "Performance Analytics & Reporting",
    ],
  },
  {
    id: "content-creation",
    title: "Content Creation",
    description:
      "Compelling content that tells your brand story, engages your audience, and drives meaningful actions.",
    icon: <FileText className="h-6 w-6 text-primary" />,
    features: [
      "Content Strategy Development",
      "Blog & Article Writing",
      "Copywriting for Web & Print",
      "Email Marketing Content",
      "Video Script Writing",
    ],
  },
  {
    id: "web-development",
    title: "Web Development",
    description:
      "Custom websites that deliver exceptional user experiences, drive conversions, and showcase your brand.",
    icon: <Code className="h-6 w-6 text-primary" />,
    features: [
      "Custom Website Design & Development",
      "E-commerce Solutions",
      "Content Management Systems",
      "Website Maintenance & Support",
      "Performance Optimization",
    ],
  },
  {
    id: "ui-ux-design",
    title: "UI/UX Design",
    description:
      "Intuitive, engaging user experiences for your digital products that delight users and achieve business goals.",
    icon: <LayoutGrid className="h-6 w-6 text-primary" />,
    features: [
      "User Research & Persona Development",
      "Information Architecture",
      "Wireframing & Prototyping",
      "Visual Design & UI Systems",
      "Usability Testing",
    ],
  },
  {
    id: "seo",
    title: "SEO Optimization",
    description:
      "Data-driven strategies to improve your search visibility, drive organic traffic, and increase conversions.",
    icon: <Search className="h-6 w-6 text-primary" />,
    features: [
      "Technical SEO Audits & Implementation",
      "Keyword Research & Strategy",
      "On-Page & Off-Page Optimization",
      "Content Strategy for SEO",
      "Local SEO & Google Business Profile Optimization",
    ],
  },
  {
    id: "email-marketing",
    title: "Email Marketing",
    description:
      "Targeted email campaigns that nurture leads, drive conversions, and build lasting customer relationships.",
    icon: <MessageSquare className="h-6 w-6 text-primary" />,
    features: [
      "Email Strategy Development",
      "Campaign Design & Copywriting",
      "Automation & Drip Campaigns",
      "List Management & Segmentation",
      "Performance Analytics & Optimization",
    ],
  },
  {
    id: "ppc-advertising",
    title: "PPC Advertising",
    description:
      "Strategic paid campaigns that maximize ROI, drive qualified traffic, and achieve your business objectives.",
    icon: <BarChart3 className="h-6 w-6 text-primary" />,
    features: [
      "Campaign Strategy & Planning",
      "Keyword Research & Selection",
      "Ad Copywriting & Design",
      "Bid Management & Optimization",
      "Performance Tracking & Reporting",
    ],
  },
  {
    id: "analytics",
    title: "Analytics & Reporting",
    description:
      "Comprehensive insights that inform strategic decision-making and drive continuous improvement.",
    icon: <BrainCircuit className="h-6 w-6 text-primary" />,
    features: [
      "Custom Dashboard Development",
      "Data Analysis & Insights",
      "Conversion Tracking Setup",
      "Regular Performance Reporting",
      "Recommendations & Strategy Adjustments",
    ],
  },
  {
    id: "video-production",
    title: "Video Production",
    description:
      "High-quality video content that captivates your audience, tells your story, and drives engagement.",
    icon: <ImageIcon className="h-6 w-6 text-primary" />,
    features: [
      "Video Strategy & Concept Development",
      "Scriptwriting & Storyboarding",
      "Production & Filming",
      "Editing & Post-Production",
      "Distribution Strategy",
    ],
  },
]

// portfolio projects array
export const portfolioProjects = [
  {
    id: "luxury-brand-relaunch",
    title: "Luxury Brand Relaunch",
    category: "Branding & Strategy",
    image: "/placeholder.webp?height=600&width=800",
    summary:
      "A complete brand overhaul for a luxury fashion retailer, resulting in 200% increase in brand engagement and 45% growth in sales.",
    tags: ["Branding", "Digital Strategy", "Web Design"],
  },
  {
    id: "tech-startup-growth",
    title: "Tech Startup Growth Campaign",
    category: "Digital Marketing",
    image: "/placeholder.webp?height=600&width=800",
    summary:
      "Comprehensive digital marketing strategy for a SaaS startup, driving user acquisition and establishing market presence.",
    tags: ["SEM", "Content Marketing", "Social Media"],
  },
  {
    id: "hospitality-rebrand",
    title: "Luxury Hotel Chain Rebrand",
    category: "Branding & Digital",
    image: "/placeholder.webp?height=600&width=800",
    summary:
      "Strategic rebranding and digital presence overhaul for a boutique hotel chain, positioning them as a luxury destination.",
    tags: ["Branding", "Web Development", "SEO"],
  },
  {
    id: "ecommerce-optimization",
    title: "E-commerce Conversion Optimization",
    category: "E-commerce & CRO",
    image: "/placeholder.webp?height=600&width=800",
    summary:
      "Data-driven optimization of an e-commerce platform, focusing on user experience and conversion rate improvement.",
    tags: ["UX Design", "CRO", "Analytics"],
  },
]

// blog posts array
export const blogPosts = [
  {
    slug: "why-quality-marketing-matters",
    title: "Why Quality Marketing Matters in Today's Digital Landscape",
    excerpt: "Discover why quality marketing is crucial for business success in the digital age. Learn how to stand out in a crowded market.",
    date: "April 24, 2025",
    author: "Quality Marketing Team",
    authorImage: "/images/placeholder-user.jpg",
    category: "Digital Marketing",
    image: "/images/Blog_image.webp",
  },
  {
    slug: "viral-in-seconds",
    title: "Viral in Seconds: Why Short-Form Video Is the Future of Digital Marketing in 2025",
    excerpt: "Discover why short-form video content is revolutionizing digital marketing and how your brand can leverage this trend for maximum impact.",
    date: "April 25, 2025",
    author: "Quality Marketing Team",
    authorImage: "/images/placeholder-user.jpg",
    category: "Digital Marketing",
    image: "/images/Blog_Image2.webp",
  },
  {
    slug: "content-marketing-2025",
    title: "Content Marketing in 2025: What Every Business Needs to Know",
    excerpt: "Discover the latest trends and strategies in content marketing that will help your business thrive in 2025 and beyond.",
    date: "April 26, 2025",
    author: "Quality Marketing Team",
    authorImage: "/images/placeholder-user.jpg",
    category: "Content Marketing",
    image: "/images/Blog_Image3.webp",
  },
  {
    slug: "red-bull-marketing-strategy",
    title: "Red Bull's Marketing Strategy in India: How a Drink Became a Lifestyle",
    excerpt: "What do extreme sports, breakdancing, and viral YouTube videos have in common? If you're in India, the answer is simple—Red Bull. This isn't just a beverage; it's a brand that sells energy, attitude, and adrenaline.",
    date: "April 27, 2025",
    author: "Quality Marketing Team",
    authorImage: "/images/placeholder-user.jpg",
    category: "Marketing Strategy",
    image: "/images/Blog_Image4.webp",
  },
]
