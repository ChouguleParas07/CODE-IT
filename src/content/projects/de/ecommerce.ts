import thumbnailEcommerce from "../../../assets/thumbnails/ecommerce.png";
import type { ProjectContent } from "../../types";

export default {
  title: "E-Commerce Platform– Great Kart",
  theme: "light",
  tags: ["html", "css", "javascript"],
  source: "https://github.com/ChouguleParas07/E-COMMERCE",
  description:
    "Implemented responsive frontend interfaces for product listings, shopping cart operations, and order management within a multi-user environment.<br/><br/>Developed backend business logic and integrated RESTful APIs to support product, cart, checkout, and order lifecycle workflows.<br/><br/>Integrated Razorpay payment gateway with real-time payment and webhook handling for reliable transactions.",
  components: [
    {
      type: "media",
      props: {
        type: "image",
        src: thumbnailEcommerce,
        alt: "E-Commerce Visualization",
        caption: "Clean Modern E-Commerce Interface Concept",
      },
    },
    {
      type: "text",
      props: {
        title: "Nahtloses Einkaufserlebnis",
        text: "Konzentriert sich auf ein intuitives und responsives Design, das den Benutzer von der Produktfindung bis zur Kasse führt."
      }
    },
    {
      type: "list",
      props: {
        title: "Kerntechnologien",
        items: [
          "HTML, CSS, JavaScript (Frontend)",
          "Python & Django (Backend)",
          "MySQL Datenbank",
          "Razorpay Zahlungsportal"
        ]
      }
    }
  ]
} as const satisfies ProjectContent;
