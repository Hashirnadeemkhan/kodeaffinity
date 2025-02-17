import Link from 'next/link';
import Button from '../shared/Button';
import Image from 'next/image';

const ServicesSection = ({ showLearnMore = true }) => {
  const services = [
  {
    title: 'Website Development',
    description: 'Your website is your digital storefront, and we ensure it stands out. At Kode Affinity, we specialize in designing and developing responsive, user-friendly, and visually captivating websites. From eCommerce platforms to business websites, our tailored web solutions focus on performance, speed, and functionality to meet your unique business needs.',
    image: '/assets/webdev.png',
    slug: 'web-design-development',
  },
  {
    title: 'Mobile Application Development',
    description: 'In a mobile-first world, having a robust app is essential for engaging customers on the go. We create intuitive, feature-rich mobile applications for iOS and Android that boost user interaction and drive business growth. Our apps are built to scale, ensuring long-term performance for your business needs.',
    image: '/assets/mobileapp.png',
    slug: 'mobile-development',
  },
  {
    title: 'Search Engine Optimization',
    description: 'Struggling to rank on Google? Let us help you! Our SEO experts and content creators craft compelling strategies that increase your visibility and bring organic traffic to your website. From keyword research to high-quality blog posts, we help your business climb search engine rankings and establish authority in your niche.',
    image: '/assets/seo-service.png',
    slug: 'seo-content',
  },
  {
    title: 'Branding & Graphic Design',
    description: 'Your brand is more than just a logo—it’s your story. We specialize in crafting cohesive branding strategies and eye-catching graphic designs that resonate with your target audience. From packaging design to marketing collateral, we bring your vision to life.',
    image: '/assets/brand.png',
    slug: 'branding-design',
  },
  {
    title: 'Software as a Service (SaaS)',
    description: 'Looking to streamline your business processes? Our SaaS solutions are designed to help businesses operate more efficiently and scale effortlessly. From CRM platforms to cloud-based solutions, we deliver software that simplifies your workflows and empowers growth.',
    image: '/assets/ppc.png',
    slug: 'saas',
  },
  {
    title: 'Animation',
    description: 'Bring your ideas to life with professional animations that grab attention. From explainer videos to motion graphics, our animations add a dynamic flair to your brand messaging, making your content more engaging and memorable.',
    image: '/assets/animation-service.png',
    slug: 'animation',
  },
  {
    title: 'Social Media Marketing',
    description: 'Social media is where your customers are, and we help you connect with them. Our SMM experts develop data-driven campaigns that increase your online visibility and engagement. From Instagram to LinkedIn, we ensure your brand makes waves across platforms.',
    image: '/assets/social.png',
    slug: 'social-media',
  },
  {
    title: 'Logo & Illustration',
    description: "Your logo is the face of your brand. At Kode Affinity, we design unique, memorable, and impactful logos and illustrations that reflect your brand's identity. Whether it’s a modern logo or custom illustrations for your marketing, we ensure your business stands out.",
    image: '/assets/logoservice.png',
    slug: 'logo-illustration',
  },
 
];

  return (
    <div className="bg-gradient-to-r from-red-900 via-purple-800 to-blue-900 py-20 px-10 text-white">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-10">
          <h2 className="md:text-3xl text-lg font-bold mb-4">WHAT WE DO</h2>
          <h3 className="lg:text-5xl text-4xl font-bold mb-4 text-start">Our Expertise at a Glance</h3>
          <p className="text-lg mb-4">
            Partner with Kode Affinity and take your digital journey to the next level. Whether you need a website, app, or full-scale digital strategy, we’re here to help.
          </p>
          {showLearnMore && (
            <Link href={"/service"}>
              <button className="bg-white text-red-700 px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition duration-300 ease-in-out transform hover:scale-105">
                Learn More
              </button>
            </Link>
          )}
        </div>

        {/* Services Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-6 rounded-lg shadow-lg flex flex-col lg:flex-row lg:items-start items-center justify-center w-full bg-opacity-[24%] bg-white transform transition duration-500 hover:scale-105 hover:shadow-2xl"
            >
              <div className="flex-shrink-0 lg:mb-0 lg:mr-4">
                <Image src={service.image} alt={service.title} width={200} height={200} className="rounded-lg" />
              </div>
              <div>
                <h4 className="text-2xl font-bold mb-2 lg:text-start text-center">{service.title}</h4>
                <p className="text-sm mb-4 text-center lg:text-start">{service.description}</p>
                <div className="flex lg:justify-start lg:items-start justify-center items-center">
                  <Link href={`/services/${service.slug}`}>
                  <Button text="Learn more" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
