import thumbnailRental from "../../../assets/thumbnails/rental.png";
import type { ProjectContent } from "../../types";

export default {
  title: "हाइपरलोकल रेंटल मार्केटप्लेस",
  theme: "dark",
  tags: ["react", "postgresql", "redis"],
  source: "https://github.com/ChouguleParas07/RentAThing",
  description:
    "प्रतिदिन 10K+ अनुरोधों का समर्थन करने वाले REST APIs का निर्माण और एकीकरण किया, जिससे कुशल अनुरोध हैंडलिंग और सुगम फ्रंटएंड-बैकएंड संचार सुनिश्चित हुआ।<br/><br/>Redis-आधारित टोकन प्रबंधन के साथ सुरक्षित JWT ऑथेंटिकेशन लागू किया, जिससे सेशन सुरक्षा में सुधार हुआ और अनधिकृत पहुंच प्रयासों में 45% की कमी आई।<br/><br/>PostgreSQL डेटाबेस स्कीमा और इंडेक्स को डिजाइन और ऑप्टिमाइज़ किया, जिससे क्वेरी लेटेंसी में 35% की कमी आई और एप्लिकेशन प्रदर्शन में सुधार हुआ।",
  components: [
    {
      type: "media",
      props: {
        type: "image",
        src: thumbnailRental,
        alt: "Rental Marketplace Concept",
        caption: "डेटा और मार्केटप्लेस कनेक्शन का विज़ुअलाइज़ेशन",
      },
    },
    {
      type: "text",
      props: {
        title: "मुख्य विशेषताएं",
        text: "प्लेटफॉर्म उच्च समवर्ती अनुरोधों को संसाधित करता है और सुरक्षित टोकन-आधारित पहुंच सुनिश्चित करता है। Redis यह सुनिश्चित करता है कि सेशन स्थिति बेहद तेज़ हो।",
      },
    },
    {
      type: "list",
      props: {
        title: "प्रौद्योगिकियां",
        items: [
          "डायनेमिक फ्रंटएंड इंटरफेस के लिए React",
          "Python & FastAPI बैकएंड",
          "PostgreSQL & Redis",
          "Docker कंटेनराइजेशन",
        ],
      },
    },
  ],
} as const satisfies ProjectContent;
