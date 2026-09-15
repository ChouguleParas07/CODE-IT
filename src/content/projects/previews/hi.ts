import thumbnailRental from "../../../assets/thumbnails/rental.png";
import thumbnailEcommerce from "../../../assets/thumbnails/ecommerce.png";

import type { ProjectPreview } from "../../types";

export default [
  {
    title: "हाइपरलोकल रेंटल मार्केटप्लेस",
    slug: "rental",
    thumbnail: thumbnailRental,
    description: "React, Python, PostgreSQL",
  },
  {
    title: "ई-कॉमर्स प्लेटफॉर्म",
    slug: "ecommerce",
    thumbnail: thumbnailEcommerce,
    description: "Django, MySQL, Vue",
  },
] as const satisfies ProjectPreview[];
