import screenshotOne from "../../../assets/images/projects/stashly-rent-a-thing/Screenshot 2026-09-28 094507.png";
import screenshotTwo from "../../../assets/images/projects/stashly-rent-a-thing/Screenshot 2026-09-28 094528.png";
import screenshotThree from "../../../assets/images/projects/stashly-rent-a-thing/Screenshot 2026-09-28 094539.png";
import screenshotFour from "../../../assets/images/projects/stashly-rent-a-thing/Screenshot 2026-09-28 094548.png";
import screenshotFive from "../../../assets/images/projects/stashly-rent-a-thing/Screenshot 2026-09-28 094603.png";
import screenshotSix from "../../../assets/images/projects/stashly-rent-a-thing/Screenshot 2026-09-28 094636.png";

import type { ProjectContent } from "../../types";

export default {
  title: "Stashly — Rent a Thing",
  theme: "light",
  tags: ["react", "postgresql", "redis"],
  live: "https://rent-athing-fe.vercel.app/",
  source: "https://github.com/ChouguleParas07/RentAThing",
  description:
    "A polished peer-to-peer rental experience built around trust, discovery, and fast item management. The flow includes browsing, booking, messaging, profile management, and a clean listing workflow.<br/><br/>The interface focuses on usability and clarity, turning everyday objects into shareable assets with a strong community-first design language.",
  components: [
    {
      type: "media",
      props: {
        type: "image",
        src: screenshotOne,
        alt: "Stashly dashboard overview",
        caption: "Dashboard overview with booking summary",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: screenshotTwo,
        alt: "Stashly products page",
        caption: "Product listing and search flow",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: screenshotThree,
        alt: "Stashly my bookings page",
        caption: "Rental booking status tracking",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: screenshotFour,
        alt: "Stashly profile page",
        caption: "Renter profile and trust metrics",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: screenshotFive,
        alt: "Stashly messaging interface",
        caption: "Live chat communication between renter and owner",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: screenshotSix,
        alt: "Stashly list item for rent form",
        caption: "Listing creation and item onboarding flow",
      },
    },
  ],
} as const satisfies ProjectContent;
