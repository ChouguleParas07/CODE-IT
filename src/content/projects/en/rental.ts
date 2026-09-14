import thumbnailRental from "../../../assets/thumbnails/rental.png";
import type { ProjectContent } from "../../types";

export default {
  title: "Hyperlocal Rental Marketplace",
  theme: "dark",
  tags: ["react", "postgresql", "redis"],
  source: "https://github.com/ChouguleParas07/RentAThing",
  description:
    "Built and integrated REST APIs supporting 10K+ requests per day, implementing efficient request handling and seamless frontend-backend communication.<br/><br/>Implemented secure JWT authentication with Redis-based token management, improving session security and reducing unauthorized access attempts by 45%.<br/><br/>Designed and optimized PostgreSQL database schemas and indexes, reducing query latency by 35% and improving application performance.",
  components: [
    {
      type: "media",
      props: {
        type: "image",
        src: thumbnailRental,
        alt: "Rental Marketplace Concept",
        caption: "Abstract Data & Marketplace Connections Visualization",
      },
    },
    {
      type: "text",
      props: {
        title: "Key Features",
        text: "The platform handles highly concurrent requests and ensures safe and secure token-based access. Redis ensures the session state is lightning fast."
      }
    },
    {
      type: "list",
      props: {
        title: "Tech Stack",
        items: [
          "React for dynamic frontend interfaces",
          "Python & FastAPI backend",
          "PostgreSQL & Redis for state and caching",
          "Docker for reliable containerization"
        ]
      }
    }
  ]
} as const satisfies ProjectContent;
