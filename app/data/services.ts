export interface Service {
    id: string;
    title: string;
    description: string;
    icon?: string;
    slug: string;
    information: string;
    image?: string; // Added optional image property to match the data structure
}

export const services: Service[] = [
    {
        id: "1",
        title: "Web Design and Development",
        description: "Web Design and Development",
        image: "/assets/web.png",
        slug: "web-design-development",
        information:
            "Intact One Solution offers state-of-the-art web design and development services customized to meet the needs of businesses in Pakistan and the Middle East. We create SEO-optimized, visually stunning, and user-friendly websites that enhance brand visibility and drive business growth. Our expertise in responsive web design ensures that your website delivers a seamless experience across both desktop and mobile devices, helping you connect with your audience effortlessly.",
    },
    {
        id: "2",
        title: "Mobile Application Development",
        description: "Native and cross-platform mobile apps",
        slug: "mobile-development",
        image: "/assets/mobile.png",
        information:
            "Our mobile application development services offer tailored solutions for both native and cross-platform applications. Whether for iOS or Android, we build high-performance, scalable, and user-friendly apps to enhance your business presence on mobile devices.",
    },
    {
        id: "3",
        title: "SEO & Content Writing",
        description: "Optimize your online presence",
        image: "/assets/seo.png", // Added missing comma
        slug: "seo-content",
        information:
            "Boost your website's visibility with our expert SEO and content writing services. We craft keyword-optimized, high-quality content that improves search engine rankings and engages your target audience, driving organic traffic and business growth.",
    },
    {
        id: "4",
        title: "Logo & Illustration",
        description: "Creative design solutions",
        slug: "logo-illustration",
        image: "/assets/illustration.png",
        information:
            "Stand out with our unique and creative logo and illustration services. We design compelling visual identities that align with your brand's vision, ensuring a memorable impression on your audience.",
    },
    {
        id: "5",
        title: "Branding & Graphic Design",
        description: "Build your brand identity",
        slug: "branding-design",
        image: "/assets/graphics.png",
        information:
            "Our branding and graphic design services help businesses establish a strong identity. From logo creation to brand guidelines, we ensure your brand conveys professionalism, trust, and uniqueness across all platforms.",
    },
    {
        id: "6",
        title: "Animation",
        description: "Bring your ideas to life",
        image: "/assets/animation.png",
        slug: "animation",
        information:
            "Engage your audience with our animation services. We create visually stunning animations, explainer videos, and motion graphics that bring your ideas to life and enhance storytelling.",
    },
    {
        id: "7",
        title: "Social Media Marketing",
        description: "Engage with your audience",
        image: "/assets/SMM.png",
        slug: "social-media",
        information:
            "Leverage the power of social media with our marketing services. We create data-driven campaigns, engaging content, and targeted strategies to increase your brand's online reach and customer engagement.",
    },
    {
        id: "8",
        title: "SaaS",
        description: "Software as a Service solutions",
        slug: "saas",
        image: "/assets/saas.png",
        information:
            "Our SaaS solutions offer cloud-based software tailored to your business needs. We develop scalable, secure, and user-friendly applications that streamline operations and improve efficiency.",
    },
];