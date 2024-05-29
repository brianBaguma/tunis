import { useState } from "react";
import img1 from "../assets/img/blog/blog-post-1.jpg";
import img2 from "../assets/img/blog/blog-post-2.jpg";
import img3 from "../assets/img/blog/blog-post-3.jpg";
import img4 from "../assets/img/blog/blog-post-4.jpg";
import img5 from "../assets/img/blog/blog-post-5.jpg";
import img6 from "../assets/img/blog/blog-post-6.jpg";

const AllBlogData = () => {
  const blogsData = [
    {
      id: 1,
      img: img1,
      title: "How to Own Your Audience as a Cyber security Analyst",
      commentor: "Brian Baguma ",
      date: "21 April 2022",
      tag: `wordpress, business, economy, design`,
      description1:
        "Owning your audience as a cybersecurity analyst involves effectively communicating complex concepts in an understandable manner",
      description2:
        " Building trust is essential; consistently provide accurate, timely information and demonstrate your expertise. Engaging storytelling and real-world examples can make your presentations more relatable and impactful.",
      description3:
        "Staying updated with the latest cybersecurity trends and threats ensures your audience receives relevant and actionable insights.",
      description4:
        " Finally,fostering an interactive environment by encouraging questions and discussions helps to deepen understanding and engagement",
    },
    {
      id: 2,
      img: img2,
      title: "Top 10 Toolkits for Deep Learning in 2022",
      commentor: "Brian Baguma ",
      date: "14 January 2022",
      tag: `wordpress, business, economy, design`,
      description1:
        "The top 10 toolkits for deep learning in 2022 provide powerful resources for developers and researchers to build sophisticated AI models",
      description2:
        "TensorFlow and PyTorch lead the pack with their extensive libraries and community support. Keras offers a user-friendly interface, making it ideal for beginners in deep learning.",
      description3:
        "Caffe and MXNet are renowned for their performance and scalability in large-scale deployments.",
      description4:
        "Other notable toolkits include Theano, Chainer, and Apache Mahout, each offering unique features tailored to different deep learning needs.",
    },
    {
      id: 3,
      img: img3,
      title: "Everything You Need to Know About Web Accessibility",
      commentor: "Brian Baguma ",
      date: "9 January 2020",
      tag: `wordpress, business, economy, design`,
      description1:
        "Web accessibility ensures that websites are usable by everyone, including people with disabilities. Implementing accessibility features, such as alt text for images and keyboard-friendly navigation, improves user experience for all visitors",
      description2:
        "Adhering to standards like the Web Content Accessibility Guidelines (WCAG) is crucial for compliance and inclusivity. ",
      description3:
        "Accessible design not only broadens your audience but also enhances SEO and overall site performance",
      description4:
        "By prioritizing accessibility, businesses demonstrate social responsibility and commitment to creating an inclusive digital environment.",
    },
    {
      id: 4,
      img: img4,
      title: "How to Inject Humor & Comedy Into Your Brand",
      commentor: "Brian Baguma ",
      date: "15 March 2022",
      tag: `wordpress, business, economy, design`,
      description1:
        "Injecting humor and comedy into your brand involves understanding your audience and using relatable, light-hearted content that aligns with your brand's voice",
      description2:
        "Utilizing elements like witty taglines and clever wordplay can make your messaging more engaging and memorable.  ",
      description3:
        "Incorporating visual humor through memes and funny graphics can enhance the appeal of your social media presence. Leveraging pop culture references and trending topics can make your brand feel current and approachable",
      description4:
        "Finally, using self-deprecating humor and playful interactions can humanize your brand, making it more relatable and likable.",
    },
    {
      id: 5,
      img: img5,
      title: "Women in Web Design: How To Achieve Success",
      commentor: "Brian Baguma ",
      date: "9 January 2021",
      tag: `wordpress, business, economy, design`,
      description1:
        "Achieving success as a woman in web design involves embracing creativity, continuous learning, and networking",
      description2:
        "Building a strong portfolio showcasing diverse projects can significantly enhance career opportunities. Staying updated with the latest design trends and technological advancements ensures relevance in the fast-evolving industry ",
      description3:
        "Mentorship and community support play crucial roles in overcoming challenges and fostering growth",
      description4:
        "Lastly, advocating for gender diversity and inclusion within the tech industry helps pave the way for future generations of women designers.",
    },
    {
      id: 6,
      img: img6,
      title: " Maximizing the Potential of Artificial Intelligence",
      commentor: "Brian Baguma ",
      date: "9 January 2024",
      tag: `wordpress, business, economy, design`,
      description1:
        " Effectively using Artificial Intelligence (AI) involves integrating machine learning algorithms to automate and enhance data analysis.",
      description2:
        "Leveraging AI-powered chatbots and virtual assistants can significantly improve customer service and engagement. Predictive analytics through AI helps businesses anticipate market trends and make data-driven decisions. ",
      description3:
        "Utilizing AI for personalized marketing ensures targeted and relevant customer interactions, boosting conversion rates.",
      description4:
        "  Lastly, incorporating AI in cybersecurity enhances threat detection and response, ensuring robust protection against cyber threats.",
    },
  ];

  const [singleData, setSingleData] = useState({});
  const [isOpen, setIsOpen] = useState(false);

  const handleBlogsData = (id) => {
    const find = blogsData.find((item) => item?.id === id);
    setSingleData(find);
    setIsOpen(true);
  };

  return {
    singleData,
    isOpen,
    setIsOpen,
    blogsData,
    handleBlogsData,
  };
};

export default AllBlogData;
