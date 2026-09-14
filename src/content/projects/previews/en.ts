import thumbnailRental from "../../../assets/thumbnails/rental.png";
import thumbnailEcommerce from "../../../assets/thumbnails/ecommerce.png";

import type { ProjectPreview } from "../../types";

export default [
  {
    title: "Hyperlocal Rental Marketplace",
    slug: "rental",
    thumbnail: thumbnailRental,
    description: "React, Python, PostgreSQL",
  },
  {
    title: "E-Commerce Platform",
    slug: "ecommerce",
    thumbnail: thumbnailEcommerce,
    description: "Django, MySQL, Vue",
  },
] as const satisfies ProjectPreview[];
