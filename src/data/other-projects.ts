export type OtherProject = {
  name: string;
  year: string;
  blurb: string;
  detail: string;
  tags: string[];
  image?: string;
  href?: { label: string; url: string };
  column: 0 | 1;
};

// Content sourced from other_projects/content/data.js. Years are approximate
// (uni / personal projects) — edit freely.
export const otherProjects: OtherProject[] = [
  {
    name: "Wolfpack",
    year: "2024",
    blurb: "E-commerce platform for tech products.",
    detail:
      "Wolfpack is an e-commerce platform offering a wide range of tech products — laptops, smartphones, accessories and peripherals — with a clean, modern design and intuitive navigation. Customers can browse categories, filter by price or brand, read detailed descriptions and reviews, and check out securely with multiple payment options and order tracking. Personalized recommendations, exclusive deals and a loyalty program drive engagement, and the storefront is fully responsive across desktop and mobile.",
    tags: ["Web", "E-Commerce", "Dashboard"],
    image: "/projects/wolfpack.png",
    href: { label: "GitHub", url: "https://github.com/Schwifty101/MultiCommerce-Admin-Dashboard" },
    column: 0,
  },
  {
    name: "Pixel Panda NFT",
    year: "2024",
    blurb: "Display site for a pixel-art panda NFT collection.",
    detail:
      "The Pixel Panda NFT website showcases a collection of pixel-art pandas, each with distinct traits and rarity levels. An interactive gallery offers smooth scrolling and filtering by attribute, rarity or availability, with a dedicated page per panda displaying artwork, metadata and ownership history. A dark theme with neon highlights complements the retro pixel aesthetic. Beyond display, it integrates wallet connection for ownership verification and trading, a live sales feed, and a rarity calculator — plus community links and a blog.",
    tags: ["Web3", "Frontend"],
    image: "/projects/nft-website.png",
    href: { label: "Live site", url: "https://sprightly-trifle-4c71c3.netlify.app/home.html" },
    column: 1,
  },
  {
    name: "Garbage Classifier",
    year: "2025",
    blurb: "Trained a model to classify waste into disposal categories.",
    detail:
      "Garbage Classifier helps users identify and categorize waste using a machine-learning image classifier. A user photographs an item and the model classifies it as recyclable, compostable or non-recyclable, returning instant disposal guidance. It pairs a trained vision model with a comprehensive database of common waste items and disposal guidelines, plus a community forum for tips — making responsible waste management accessible and educational.",
    tags: ["ML", "Computer Vision", "Python"],
    image: "/projects/garbage-classifier.gif",
    href: { label: "GitHub", url: "https://github.com/moeiz2701/Garbage_Classifier" },
    column: 0,
  },
  {
    name: "Shugf Clothing Brand",
    year: "2025",
    blurb: "E-commerce site for one-of-a-kind handcrafted sweatshirts.",
    detail:
      "Shugf is a platform for handcrafted, one-of-a-kind (1/1) sweatshirts, built around exclusivity and craftsmanship. Visitors browse a curated collection, learn the brand story on the About page, and find the store via a Location page. Verified users can add new products — restricting uploads to verified accounts preserves authenticity and the integrity of the exclusive lineup. The experience is seamless and secure for both shoppers and contributors.",
    tags: ["Web", "E-Commerce"],
    image: "/projects/shugf.png",
    href: {
      label: "Watch demo",
      url: "https://res.cloudinary.com/df4tjjqmc/video/upload/v1739987418/lsiohl1kqlbah2kvubja.mp4",
    },
    column: 1,
  },
  {
    name: "Chess AI",
    year: "2023",
    blurb: "CLI chess engine with alpha–beta pruning.",
    detail:
      "Chess AI is a command-line chess game powered by an alpha–beta pruning search. An intuitive board interface lets players move and play against the AI, while alpha–beta pruning lets the engine evaluate moves and counter-moves efficiently for strategic, competitive play. Multiple difficulty levels suit beginners through experienced players, with move history, undo, and customizable board settings — a fun way to also sharpen strategic thinking.",
    tags: ["AI", "Alpha-Beta", "CLI"],
    image: "/projects/chess.png",
    href: { label: "GitHub", url: "https://github.com/moeiz2701/ChessAI" },
    column: 0,
  },
  {
    name: "Service Provider",
    year: "2024",
    blurb: "JavaFX app for service requests and appointments.",
    detail:
      "Service Provider streamlines service requests, appointment management and customer feedback for businesses. Providers create profiles, list services and set availability; customers browse providers, view ratings and reviews, and book appointments. A built-in messaging system enables real-time provider–customer communication, while providers track appointments and receive new-request notifications and customers leave feedback and recommendations — backed by secure data management.",
    tags: ["JavaFX", "Desktop", "OOP"],
    image: "/projects/service-provider.png",
    href: { label: "GitHub", url: "https://github.com/moeiz2701/Service_Provider" },
    column: 1,
  },
  {
    name: "Weather App",
    year: "2025",
    blurb: "Weather forecasts with a built-in AI chatbot.",
    detail:
      "Weather App provides accurate forecasts and real-time updates worldwide through a clean, intuitive interface. Users check temperature, humidity, wind speed and precipitation for any location, and a built-in AI chatbot answers questions, surfaces weather alerts, and offers personalized recommendations. Whether planning a trip or a run, the app keeps users informed and prepared with reliable data and interactive features.",
    tags: ["Web", "API", "Chatbot"],
    image: undefined,
    href: { label: "GitHub", url: "https://github.com/moeiz2701/weatherapp" },
    column: 0,
  },
  {
    name: "Cafe Database",
    year: "2024",
    blurb: "Database management system for a cafe.",
    detail:
      "Cafe Database is a management system that streamlines cafe operations — inventory, sales tracking, order processing and reporting. Staff update menu items, track ingredient quantities and monitor sales trends in real time; customers get faster service, accurate orders and personalized recommendations, plus a loyalty program with discounts and perks. By centralizing data and automating routine tasks, it helps owners optimize operations, cut costs and improve the customer experience.",
    tags: ["SQL", "DBMS"],
    image: "/projects/cafe-db.png",
    href: { label: "GitHub", url: "https://github.com/moeiz2701/Cafe_Database_Management" },
    column: 1,
  },
];
