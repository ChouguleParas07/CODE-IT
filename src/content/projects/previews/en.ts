import thumbnailRental from "../../../assets/images/projects/stashly-rent-a-thing/Screenshot 2026-09-28 094507.png";
import thumbnailEcommerce from "../../../assets/thumbnails/ecommerce.png";

import type { ProjectPreview } from "../../types";

export default [
  {
    title: "Stashly — Rent a Thing",
    slug: "rental",
    thumbnail: thumbnailRental,
    description: "Vue, TypeScript, UI design",
  },
  {
    title: "E-Commerce Platform",
    slug: "ecommerce",
    thumbnail: thumbnailEcommerce,
    description: "Django, MySQL, Vue",
  },
] as const satisfies ProjectPreview[];
