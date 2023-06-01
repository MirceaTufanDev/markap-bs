import {
  BuildingOffice2Icon,
  FlagIcon,
  MapIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

import InstagramIcon from '../components/Icon/InstagramIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import TwitterIcon from '../components/Icon/TwitterIcon';
import heroImage from '../images/header-background.webp';
import profilepic from '../images/LogoImage.png';
import porfolioImage1 from '../images/portfolio/portfolio-1.jpg';
import porfolioImage2 from '../images/portfolio/portfolio-2.jpg';
import porfolioImage3 from '../images/portfolio/portfolio-3.jpg';
import porfolioImage4 from '../images/portfolio/portfolio-4.jpg';
import porfolioImage5 from '../images/portfolio/portfolio-5.jpg';
import porfolioImage6 from '../images/portfolio/portfolio-6.jpg';
import porfolioImage7 from '../images/portfolio/portfolio-7.jpg';
import porfolioImage8 from '../images/portfolio/portfolio-8.jpg';
import porfolioImage9 from '../images/portfolio/portfolio-9.jpg';
import porfolioImage10 from '../images/portfolio/portfolio-10.jpg';
import porfolioImage11 from '../images/portfolio/portfolio-11.jpg';
import testimonialImage from '../images/testimonial.webp';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'React Resume Template',
  description: "Example site built with Tim Baker's react resume template",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
} as const;

export type SectionId = typeof SectionId[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `We are Markap Business Solutions`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        We are a Bucharest-based <strong className="text-stone-100">high-quality furniture factory</strong>, currently working with
         <strong className="text-stone-100">commercial stores.</strong> We specialize in the production of modern, top-tier furniture designed to transform their business environments.
      </p>

      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
      When we're not crafting furniture, we engage in exploring the latest design trends,
      <strong className="text-stone-100">perfecting our artisan skills</strong>,
      and drawing inspiration from the diverse cultural heritage and architectural beauty of Bucharest, elements that consistently reflect in our unique furniture pieces.
       </p>
    </>
  ),
  actions: [
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `Our work reflects a deep understanding of the unique needs of each business we serve.
   We incorporate functional design, aesthetic appeal, and robust construction to create furniture pieces that elevate the
    ambiance of commercial spaces, thereby enhancing customer experiences.`,
  aboutItems: [
    {label: 'Location', text: 'Bucharest, RO', Icon: MapIcon},
    {label: 'Nationality', text: 'Romanians', Icon: FlagIcon},
    {label: 'Interests', text: 'Furniture', Icon: SparklesIcon},
    {label: 'Employment', text: 'Markap BS, inc.', Icon: BuildingOffice2Icon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Quality of the finishes',
    skills: [
      {
        name: 'Placi',
        level: 10,
      },
      {
        name: 'Gauri',
        level: 8.4,
      },
      {
        name: 'Alte alea',
        level: 3,
      },
    ],
  },
  {
    name: 'Montaje',
    skills: [
      {
        name: 'Cu Dorel',
        level: 6,
      },
      {
        name: 'Cu Cornel',
        level: 9.5,
      },
      {
        name: 'Cu Cristi',
        level: 8,
      },
    ],
  },
  {
    name: 'Proiectare',
    skills: [
      {
        name: 'Face Parsu',
        level: 8,
      },
      {
        name: 'State',
        level: 5,
      },
      {
        name: 'Nimic',
        level: 4,
      },
    ],
  },
  {
    name: 'Exemplu',
    skills: [
      {
        name: 'Exempu',
        level: 9,
      },
      {
        name: 'Spati Liber',
        level: 4,
      },
      {
        name: 'SpatiuLiber2',
        level: 3,
      },
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Project title 1',
    description: 'Give a short description of your project here.',
    url: '',
    image: porfolioImage1,
  },
  {
    title: 'Project title 2',
    description: 'Give a short description of your project here.',
    url: '',
    image: porfolioImage2,
  },
  {
    title: 'Project title 3',
    description: 'Give a short description of your project here.',
    url: '',
    image: porfolioImage3,
  },
  {
    title: 'Project title 4',
    description: 'Give a short description of your project here.',
    url: ' ',
    image: porfolioImage4,
  },
  {
    title: 'Project title 5',
    description: 'Give a short description of your project here.',
    url: ' ',
    image: porfolioImage5,
  },
  {
    title: 'Project title 6',
    description: 'Give a short description of your project here.',
    url: ' ',
    image: porfolioImage6,
  },
  {
    title: 'Project title 7',
    description: 'Give a short description of your project here.',
    url: ' ',
    image: porfolioImage7,
  },
  {
    title: 'Project title 8',
    description: 'Give a short description of your project here.',
    url: ' ',
    image: porfolioImage8,
  },
  {
    title: 'Project title 9',
    description: 'Give a short description of your project here.',
    url: ' ',
    image: porfolioImage9,
  },
  {
    title: 'Project title 10',
    description: 'Give a short description of your project here.',
    url: ' ',
    image: porfolioImage10,
  },
  {
    title: 'Project title 11',
    description: 'Give a short description of your project here.',
    url: ' ',
    image: porfolioImage11,
  },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const experience: TimelineItem[] = [
  {
    date: 'March 2010 - Present',
    location: 'La Auchan la munca',
    title: 'Facem dregem Auchan',
    content: (
      <p>
        Describe work, special projects, notable achievements, what technologies you have been working with, and
        anything else that would be useful for an employer to know.
      </p>
    ),
  },
  {
    date: 'March 2007 - February 2010',
    location: 'La Arad cu Cristi in delegatie',
    title: 'LeroyMerlin magazine',
    content: (
      <p>
        Describe work, special projects, notable achievements, what technologies you have been working with, and
        anything else that would be useful for an employer to know.
      </p>
    ),
  },
];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: 'Nicu de la gaze',
      text: 'Imi place de ei sunt baieti harnici',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/169.jpg',
    },
    {
      name: 'Gogu de la CNC',
      text: 'Super de treaba si nice!',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/14.jpg',
    },
    {
      name: 'Marius de la Auchan',
      text: 'Mi-a placut cum au uns picioarele de la stand-uri cu slanina!',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/69.jpg',
    },
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: "Are you interested in our high-quality, modern furniture for your business space? Do you have questions, or do you need further information? We're here to help",
  items: [
    {
      type: ContactType.Email,
      text: 'contact@markapbs.ro',
      href: 'mailto:contact@markapbs.ro',
    },
    {
      type: ContactType.Location,
      text: 'Bucuresti Soseaua Berceni 104',
      href: 'https://www.google.ca/maps/place/Victoria,+BC/@48.4262362,-123.376775,14z',
    },
    {
      type: ContactType.Instagram,
      text: '@markap',
      href: 'https://www.instagram.com/markap/',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/markap/'},
  {label: 'Instagram', Icon: InstagramIcon, href: 'https://www.instagram.com/markap/'},
  {label: 'Twitter', Icon: TwitterIcon, href: 'https://twitter.com/markap'},
];
