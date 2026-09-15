import thumbnailEcommerce from "../../../assets/thumbnails/ecommerce.png";
import type { ProjectContent } from "../../types";

export default {
  title: "ई-कॉमर्स प्लेटफॉर्म – ग्रेट कार्ट",
  theme: "light",
  tags: ["html", "css", "javascript"],
  source: "https://github.com/ChouguleParas07/E-COMMERCE",
  description:
    "मल्टी-यूज़र वातावरण में उत्पाद सूचियों, शॉपिंग कार्ट संचालन और ऑर्डर प्रबंधन के लिए उत्तरदायी फ्रंटएंड इंटरफेस लागू किया गया।<br/><br/>उत्पाद, कार्ट, चेकआउट और ऑर्डर जीवनचक्र कार्यप्रवाह का समर्थन करने के लिए बैकएंड बिजनेस लॉजिक विकसित किया गया और RESTful APIs को एकीकृत किया गया।<br/><br/>विश्वसनीय लेनदेन के लिए वास्तविक समय भुगतान और वेबहुक हैंडलिंग के साथ रेजरपे (Razorpay) पेमेंट गेटवे एकीकृत किया गया।",
  components: [
    {
      type: "media",
      props: {
        type: "image",
        src: thumbnailEcommerce,
        alt: "E-Commerce Visualization",
        caption: "स्वच्छ आधुनिक ई-कॉमर्स इंटरफ़ेस अवधारणा",
      },
    },
    {
      type: "text",
      props: {
        title: "सुगम खरीदारी का अनुभव",
        text: "एक सहज और उत्तरदायी डिज़ाइन पर केंद्रित जो उपयोगकर्ता को उत्पाद खोज से लेकर चेकआउट तक मार्गदर्शन करता है।",
      },
    },
    {
      type: "list",
      props: {
        title: "प्रमुख प्रौद्योगिकियां",
        items: [
          "HTML, CSS, JavaScript (फ्रंटएंड)",
          "Python & Django (बैकएंड)",
          "MySQL डेटाबेस",
          "Razorpay पेमेंट गेटवे",
        ],
      },
    },
  ],
} as const satisfies ProjectContent;
