import thumbnailRental from "../../../assets/images/projects/stashly-rent-a-thing/Screenshot 2026-09-28 094507.png";
import thumbnailEcommerce from "../../../assets/thumbnails/ecommerce.png";

import type { ProjectPreview } from "../../types";

export default [
  {
    title: "स्टैशली — रेंट अ थिंग",
    slug: "rental",
    thumbnail: thumbnailRental,
    description: "Vue, TypeScript, UI design",
  },
  {
    title: "ई-कॉमर्स प्लेटफॉर्म",
    slug: "ecommerce",
    thumbnail: thumbnailEcommerce,
    description: "Django, MySQL, Vue",
  },
] as const satisfies ProjectPreview[];
