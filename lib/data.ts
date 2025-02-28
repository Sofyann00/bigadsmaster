import { Product } from "./types";

export const products: Product[] = [
  {
    id: 1,
    name: "SEO Audit & Strategy",
    description: "Comprehensive SEO audit and strategic planning for your website. We analyze your current SEO performance, identify opportunities, and create a detailed roadmap for improvement.",
    price: 2500000,
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
    category: "SEO Analysis"
  },
  {
    id: 2,
    name: "On-Page SEO Optimization",
    description: "Complete on-page SEO optimization including meta tags, content optimization, internal linking, and technical SEO improvements to boost your search engine rankings.",
    price: 3500000,
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
    category: "On-Page SEO"
  },
  {
    id: 3,
    name: "Content Strategy & Creation",
    description: "Strategic content planning and creation optimized for search engines. We create engaging, keyword-rich content that drives organic traffic and conversions.",
    price: 4500000,
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978",
    category: "Content SEO"
  },
  {
    id: 4,
    name: "Link Building Campaign",
    description: "High-quality backlink building service to improve your domain authority. We secure relevant, authoritative backlinks that boost your search engine rankings.",
    price: 5500000,
    image: "https://images.unsplash.com/photo-1508830524289-0adcbe822b40",
    category: "Off-Page SEO"
  },
  {
    id: 5,
    name: "Local SEO Package",
    description: "Comprehensive local SEO service to dominate local search results. Includes Google My Business optimization, local citation building, and local content strategy.",
    price: 3000000,
    image: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df",
    category: "Local SEO"
  },
  {
    id: 6,
    name: "E-commerce SEO Package",
    description: "Specialized SEO service for online stores. Includes product page optimization, category structure improvement, and e-commerce specific keyword targeting.",
    price: 6500000,
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3",
    category: "E-commerce SEO"
  },
  {
    id: 7,
    name: "Technical SEO Audit",
    description: "In-depth technical SEO analysis and optimization. We identify and fix technical issues affecting your website's search engine performance.",
    price: 4000000,
    image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3",
    category: "Technical SEO"
  },
  {
    id: 8,
    name: "SEO Monitoring & Reporting",
    description: "Ongoing SEO performance monitoring and detailed monthly reporting. Track your rankings, traffic, and ROI with comprehensive analytics and insights.",
    price: 2000000,
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
    category: "SEO Analytics"
  },
  {
    id: 9,
    name: "Competitor Analysis",
    description: "Detailed analysis of your competitors' SEO strategies. Identify opportunities and gaps to outrank your competition in search results.",
    price: 3000000,
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40",
    category: "SEO Analysis"
  },
  {
    id: 10,
    name: "Mobile SEO Optimization",
    description: "Comprehensive mobile SEO optimization to improve your mobile search rankings. Ensure your website performs perfectly on all mobile devices.",
    price: 3500000,
    image: "https://images.unsplash.com/photo-1522125670776-3c7b9771f2c1",
    category: "Technical SEO"
  }
];

// Helper function to format price in IDR
export const formatPrice = (price: number) => {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price);
};
