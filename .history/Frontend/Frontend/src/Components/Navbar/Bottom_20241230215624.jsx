import { FaPython, FaReact, FaLaravel, FaWordpress, FaAndroid, FaRobot } from "react-icons/fa";
import { SiMongodb, SiFlutter, SiShopify, SiGoogleads } from "react-icons/si";

export const coursesData = [
  {
    category: "AI PROGRAMS",
    courses: [
      { name: "Python Programming", icon: FaPython, route: "1" },
      { name: "Generative AI", icon: FaRobot, route: "/ai/generative-ai" },
      { name: "Machine Learning", icon: FaRobot, route: "/ai/machine-learning" },
      { name: "Chatbot Development", icon: FaRobot, route: "/ai/chatbot-development" },
    ],
  },
  {
    category: "DEVELOPMENT",
    courses: [
      { name: "Mern Stack Development", icon: SiMongodb, route: "/development/mern-stack" },
      { name: "Python Django Development", icon: FaPython, route: "/development/python-django" },
      { name: "PHP Laravel Development", icon: FaLaravel, route: "/development/php-laravel" },
      { name: "Frontend Development", icon: FaReact, route: "/development/frontend" },
      { name: "Backend Development", icon: FaReact, route: "/development/backend" },
      { name: "React JS Development", icon: FaReact, route: "/development/react-js" },
      { name: "WordPress Development", icon: FaWordpress, route: "/development/wordpress" },
      { name: "Shopify Development", icon: SiShopify, route: "/development/shopify" },
    ],
  },
  {
    category: "APP DEVELOPMENT",
    courses: [
      { name: "Flutter App Development", icon: SiFlutter, route: "/app/flutter" },
      { name: "React Native App Development", icon: FaReact, route: "/app/react-native" },
      { name: "FlutterFlow App Development", icon: SiFlutter, route: "/app/flutterflow" },
      { name: "Android App Development", icon: FaAndroid, route: "/app/android" },
    ],
  },
  {
    category: "MARKETING PROGRAMS",
    courses: [
      { name: "Social Media Marketing", icon: SiGoogleads, route: "/marketing/social-media" },
      { name: "Digital Marketing", icon: SiGoogleads, route: "/marketing/digital" },
      { name: "Google Ads", icon: SiGoogleads, route: "/marketing/google-ads" },
    ],
  },
  
];

