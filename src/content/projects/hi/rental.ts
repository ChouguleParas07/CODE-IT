import screenshotOne from "../../../assets/images/projects/stashly-rent-a-thing/Screenshot 2026-09-28 094507.png";
import screenshotTwo from "../../../assets/images/projects/stashly-rent-a-thing/Screenshot 2026-09-28 094528.png";
import screenshotThree from "../../../assets/images/projects/stashly-rent-a-thing/Screenshot 2026-09-28 094539.png";
import screenshotFour from "../../../assets/images/projects/stashly-rent-a-thing/Screenshot 2026-09-28 094548.png";
import screenshotFive from "../../../assets/images/projects/stashly-rent-a-thing/Screenshot 2026-09-28 094603.png";
import screenshotSix from "../../../assets/images/projects/stashly-rent-a-thing/Screenshot 2026-09-28 094636.png";

import type { ProjectContent } from "../../types";

export default {
  title: "स्टैशली — रेंट अ थिंग",
  theme: "light",
  tags: ["react", "postgresql", "redis"],
  live: "https://rent-athing-fe.vercel.app/",
  source: "https://github.com/ChouguleParas07/RentAThing",
  description:
    "ट्रस्ट, डिस्कवरी और तेज़ आइटम मैनेजमेंट पर आधारित एक आधुनिक पीयर-टू-पीयर रेंटल अनुभव। इस फ्लो में ब्राउज़िंग, बुकिंग, मैसेजिंग, प्रोफ़ाइल मैनेजमेंट और क्लीयर लिस्टिंग वर्कफ़्लो शामिल हैं।<br/><br/>इंटरफ़ेस उपयोगिता और स्पष्टता पर फोकस करता है, जिससे रोज़मर्रा की वस्तुएँ साझा करने योग्य संपत्तियाँ बनती हैं और कम्युनिटी-फर्स्ट डिज़ाइन भाषा दिखाई देती है।",
  components: [
    {
      type: "media",
      props: {
        type: "image",
        src: screenshotOne,
        alt: "स्टैशली डैशबोर्ड ओवरव्यू",
        caption: "बुकिंग सारांश के साथ डैशबोर्ड ओवरव्यू",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: screenshotTwo,
        alt: "स्टैशली प्रोडक्ट्स पेज",
        caption: "प्रोडक्ट सूची और सर्च फ्लो",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: screenshotThree,
        alt: "स्टैशली माई बुकिंग्स पेज",
        caption: "रेंटल बुकिंग स्थिति ट्रैकिंग",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: screenshotFour,
        alt: "स्टैशली प्रोफ़ाइल पेज",
        caption: "रेंटर प्रोफ़ाइल और ट्रस्ट मेट्रिक्स",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: screenshotFive,
        alt: "स्टैशली मैसेजिंग इंटरफ़ेस",
        caption: "रेंटर और ओनर के बीच लाइव चैट",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: screenshotSix,
        alt: "स्टैशली रेंट आइटम फॉर्म",
        caption: "लिस्टिंग क्रिएशन और आइटम ऑनबोर्डिंग फ्लो",
      },
    },
  ],
} as const satisfies ProjectContent;
