// Define the service data structure
export interface ServiceData {
  id: number;
  icon: React.ReactNode;
  title: string;
  definition: string;
  image: React.ReactNode;
  features?: React.ReactNode;
}

//*------Illustration attribute: 
/*
<a href="https://storyset.com/web">Web illustrations by Storyset</a>
<a href="https://storyset.com/technology">Technology illustrations by Storyset</a>
<a href="https://storyset.com/business">Business illustrations by Storyset</a>
<a href="https://storyset.com/online">Online illustrations by Storyset</a>
<a href="https://storyset.com/work">Work illustrations by Storyset</a>
*/
import CodingImg from '../assets/Coding-bro.svg'
import DesignImg from '../assets/Design-bro.svg'
import MgmtImg from '../assets/Stats-bro.svg'
import SmmImg from '../assets/Social media-bro.svg'
import CameraImg from '../assets/Camera-bro.svg'

//Feature have the same structure, while children as string to add :3
type featureprop = {
  children: string;
}
export const Feature: React.FC<featureprop> = ({children}) => {
  return(
      <li className="flex items-start gap-3">
        <span className="text-green-500">&#x2713;</span>
        <p>{children}</p>
      </li>
  )
}

// Sample service data
export const services: ServiceData[] = [
  {
    id: 1,
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" fill="none">
        <path d="M5.33331 23.7033V6.66659C5.33331 5.78253 5.6845 4.93468 6.30962 4.30956C6.93474 3.68444 7.78259 3.33325 8.66664 3.33325H31.3333C32.2174 3.33325 33.0652 3.68444 33.6903 4.30956C34.3155 4.93468 34.6667 5.78253 34.6667 6.66659V23.7033M5.33331 23.7033H34.6667M5.33331 23.7033L2.86664 32.4266C2.72655 32.9222 2.70321 33.4436 2.79847 33.9498C2.89373 34.4559 3.105 34.9331 3.41568 35.3439C3.72637 35.7548 4.12802 36.088 4.58913 36.3175C5.05024 36.5469 5.55825 36.6664 6.07331 36.6666H33.9267C34.4417 36.6664 34.9497 36.5469 35.4108 36.3175C35.8719 36.088 36.2736 35.7548 36.5843 35.3439C36.895 34.9331 37.1062 34.4559 37.2015 33.9498C37.2967 33.4436 37.2734 32.9222 37.1333 32.4266L34.6667 23.7033" stroke="#00E2FF" stroke-width="2.25"/>
        <path d="M18.3333 31.6667H21.6666M23.3332 10L26.6666 13.3333L23.3332 16.6667M16.6666 10L13.3333 13.3333L16.6666 16.6667" stroke="#00E2FF" stroke-width="2.25" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    ),

    title: "Web Development",

    definition: "Nous concevons des sites Web réactifs qui non seulement captent l'utilisateur avec son interface et son expérience, mais génèrent également des résultats tangibles. Nos développeurs s'assurent que votre présence en ligne est robuste, sécurisée et évolutive.",

    image: (
    <img src={CodingImg} alt="Coding" className='h-[25rem]' />
    ),

    features: (
      <>
        <Feature>Intuitive user experience</Feature>
        <Feature>SEO integration</Feature>
        <Feature>Secure and scalable</Feature>
        <Feature>Responsive Design</Feature>
      </>
    )
  },
  {
    id: 2,
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" fill="none">
        <path d="M5.4934 34.3366L16.1001 23.73M29.4567 19.0133L26.2817 28.5383C26.2311 28.691 26.1443 28.8292 26.0288 28.9412C25.9134 29.0532 25.7726 29.1357 25.6184 29.1816L6.15506 34.9666C5.97972 35.0187 5.79344 35.0217 5.61651 34.9753C5.43959 34.9288 5.27878 34.8348 5.15161 34.7033C5.02443 34.5718 4.93575 34.408 4.89522 34.2296C4.85469 34.0512 4.86386 33.8652 4.92173 33.6916L11.2417 14.735C11.287 14.5989 11.3611 14.4741 11.4588 14.3691C11.5566 14.2642 11.6758 14.1815 11.8084 14.1266L20.7867 10.43C20.9693 10.3546 21.17 10.3349 21.3637 10.3735C21.5574 10.4121 21.7353 10.5071 21.8751 10.6466L29.2151 17.99C29.3464 18.1213 29.4386 18.2866 29.4813 18.4673C29.5239 18.6481 29.5155 18.8371 29.4567 19.0133Z" stroke="#00E2FF" stroke-width="2.25" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M29.6535 18.4267L34.3668 13.7117C34.9917 13.0866 35.3428 12.2389 35.3428 11.355C35.3428 10.4711 34.9917 9.62341 34.3668 8.99832L30.8335 5.46165C30.5239 5.15198 30.1564 4.90633 29.7519 4.73873C29.3474 4.57113 28.9138 4.48486 28.476 4.48486C28.0381 4.48486 27.6046 4.57113 27.2001 4.73873C26.7955 4.90633 26.428 5.15198 26.1185 5.46165L21.4051 10.1767M19.6351 20.1933C19.4029 19.9612 19.1273 19.7771 18.8239 19.6515C18.5205 19.526 18.1954 19.4614 17.8671 19.4614C17.5387 19.4615 17.2136 19.5263 16.9103 19.652C16.607 19.7777 16.3314 19.9619 16.0993 20.1942C15.8672 20.4264 15.6831 20.702 15.5575 21.0054C15.4319 21.3088 15.3674 21.6339 15.3674 21.9622C15.3675 22.2906 15.4323 22.6157 15.558 22.919C15.6837 23.2223 15.8679 23.4979 16.1001 23.73C16.5691 24.1988 17.2051 24.462 17.8682 24.4619C18.5313 24.4617 19.1672 24.1981 19.636 23.7292C20.1047 23.2602 20.368 22.6242 20.3679 21.9611C20.3677 21.298 20.1041 20.6621 19.6351 20.1933Z" stroke="#00E2FF" stroke-width="2.25" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    ),
    title: "Graphic & Brand Design",
    definition: "L'identité visuelle de votre marque est cruciale. Nos concepteurs garantissent des graphiques et des éléments de marque captivants qui résonnent avec votre marché cible et reflètent vos valeurs et objectifs uniques.",
    image: (
      <img src={DesignImg} alt="Design" className='h-[25rem]' />
    ),
    features: (
      <>
        <Feature>Custom identity development</Feature>
        <Feature>Cohesive Branding</Feature>
        <Feature>Digital mockup presentations</Feature>
        <Feature>asset management and organization</Feature>
      </>
    )
  },
  {
    id: 3,
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" fill="none">
        <g clip-path="url(#clip0_344_103)">
          <path d="M27.5 2.5C28.163 2.5 28.7989 2.76339 29.2678 3.23223C29.7366 3.70107 30 4.33696 30 5V35C30 35.663 29.7366 36.2989 29.2678 36.7678C28.7989 37.2366 28.163 37.5 27.5 37.5H12.5C11.837 37.5 11.2011 37.2366 10.7322 36.7678C10.2634 36.2989 10 35.663 10 35V5C10 4.33696 10.2634 3.70107 10.7322 3.23223C11.2011 2.76339 11.837 2.5 12.5 2.5H27.5ZM12.5 0C11.1739 0 9.90215 0.526784 8.96447 1.46447C8.02678 2.40215 7.5 3.67392 7.5 5V35C7.5 36.3261 8.02678 37.5979 8.96447 38.5355C9.90215 39.4732 11.1739 40 12.5 40H27.5C28.8261 40 30.0979 39.4732 31.0355 38.5355C31.9732 37.5979 32.5 36.3261 32.5 35V5C32.5 3.67392 31.9732 2.40215 31.0355 1.46447C30.0979 0.526784 28.8261 0 27.5 0L12.5 0Z" fill="#00E2FF"/>
          <path d="M20 35C20.663 35 21.2989 34.7366 21.7678 34.2678C22.2366 33.7989 22.5 33.163 22.5 32.5C22.5 31.837 22.2366 31.2011 21.7678 30.7322C21.2989 30.2634 20.663 30 20 30C19.337 30 18.7011 30.2634 18.2322 30.7322C17.7634 31.2011 17.5 31.837 17.5 32.5C17.5 33.163 17.7634 33.7989 18.2322 34.2678C18.7011 34.7366 19.337 35 20 35Z" fill="#00E2FF"/>
          <path d="M20 8C21.0609 8 22.0783 8.42143 22.8284 9.17157C23.5786 9.92172 24 10.9391 24 12C24 13.0609 23.5786 14.0783 22.8284 14.8284C22.0783 15.5786 21.0609 16 20 16C18.9391 16 17.9217 15.5786 17.1716 14.8284C16.4214 14.0783 16 13.0609 16 12C16 10.9391 16.4214 9.92172 17.1716 9.17157C17.9217 8.42143 18.9391 8 20 8ZM20 18C24.42 18 28 19.79 28 22V24H12V22C12 19.79 15.58 18 20 18Z" fill="#00E2FF"/>
        </g>
        <defs>
          <clipPath id="clip0_344_103">
            <rect width="40" height="40" fill="#00E2FF"/>
          </clipPath>
        </defs>
      </svg>
    ),
    title: "Social Media Marketing",
    definition: "Exploitez la puissance des réseaux sociaux grâce à nos stratégies sur mesure conçues pour amplifier la voix de votre marque, mobiliser votre audience et favoriser des connexions significatives. De la création de contenu à la gestion des campagnes, nous nous en occupons.",
    image: (
      <img src={SmmImg} alt="Social Media" className='h-[25rem]' />
    ),
    features: (
      <>
        <Feature>Targeted content creation</Feature>
        <Feature>community management</Feature>
        <Feature>Analytics-driven strategy</Feature>
        <Feature>paid advertising campaigns</Feature>
      </>
    )
  },
  {
    id: 4,
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 40 40" fill="none">
        <g clip-path="url(#clip0_344_107)">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M28.5629 0.628647C28.8629 0.327813 29.2455 0.122921 29.6621 0.0399993C30.0788 -0.0429229 30.5107 -0.000133131 30.9029 0.162933L36.9801 2.68293C37.5041 2.89933 37.9211 3.31462 38.1396 3.83783C38.3581 4.36104 38.3603 4.94952 38.1458 5.47436L35.6629 11.5515C35.5025 11.9439 35.2293 12.28 34.8779 12.5171C34.5265 12.7542 34.1126 12.8817 33.6887 12.8836C33.2647 12.8854 32.8498 12.7614 32.4963 12.5274C32.1428 12.2933 31.8667 11.9597 31.7029 11.5686L30.7229 9.22579L6.04293 19.7715C5.78403 19.8822 5.50588 19.9408 5.22433 19.944C4.94279 19.9472 4.66338 19.8949 4.40205 19.7901C4.14072 19.6853 3.90259 19.53 3.70125 19.3332C3.49992 19.1364 3.33933 18.9018 3.22864 18.6429C3.11796 18.384 3.05935 18.1059 3.05616 17.8243C3.05297 17.5428 3.10527 17.2634 3.21007 17.0021C3.31487 16.7407 3.47011 16.5026 3.66694 16.3013C3.86377 16.0999 4.09832 15.9393 4.35721 15.8286L29.0686 5.2715L28.1058 2.9715C27.941 2.57968 27.8965 2.14771 27.9779 1.73053C28.0593 1.31334 28.263 0.929792 28.5629 0.628647ZM36.4286 15.6572C37.1864 15.6572 37.9131 15.9582 38.4489 16.4941C38.9848 17.0299 39.2858 17.7566 39.2858 18.5144V38.5144C39.2858 38.8932 39.1353 39.2566 38.8674 39.5245C38.5995 39.7924 38.2361 39.9429 37.8572 39.9429H30.7144C30.3355 39.9429 29.9721 39.7924 29.7042 39.5245C29.4363 39.2566 29.2858 38.8932 29.2858 38.5144V18.5144C29.2858 17.7566 29.5868 17.0299 30.1226 16.4941C30.6584 15.9582 31.3852 15.6572 32.1429 15.6572H36.4286ZM24.1629 20.7772C23.6268 20.2424 22.9002 19.9423 22.1429 19.9429H17.8572C17.0995 19.9429 16.3727 20.244 15.8369 20.7798C15.3011 21.3156 15.0001 22.0423 15.0001 22.8001V38.5144C15.0001 38.8932 15.1506 39.2566 15.4185 39.5245C15.6864 39.7924 16.0498 39.9429 16.4286 39.9429H23.5715C23.9504 39.9429 24.3137 39.7924 24.5817 39.5245C24.8496 39.2566 25.0001 38.8932 25.0001 38.5144V22.8001C25.0004 22.4244 24.9266 22.0524 24.7829 21.7053C24.6393 21.3582 24.4286 21.0428 24.1629 20.7772ZM7.85721 24.2286C8.61497 24.2286 9.3417 24.5297 9.87752 25.0655C10.4133 25.6013 10.7144 26.328 10.7144 27.0858V38.5144C10.7144 38.8932 10.5638 39.2566 10.2959 39.5245C10.028 39.7924 9.66466 39.9429 9.28578 39.9429H2.14293C1.76405 39.9429 1.40068 39.7924 1.13277 39.5245C0.864865 39.2566 0.714355 38.8932 0.714355 38.5144V27.0858C0.714355 26.328 1.01538 25.6013 1.55119 25.0655C2.08701 24.5297 2.81374 24.2286 3.5715 24.2286H7.85721Z" fill="#00E2FF"/>
        </g>
        <defs>
          <clipPath id="clip0_344_107">
            <rect width="40" height="40" fill="#00E2FF"/>
          </clipPath>
        </defs>
      </svg>
    ),
    title:"Business Consulting",
    definition: "Optimisez vos opérations et favorisez la croissance avec nos solutions commerciales sur mesure. Des campagnes de marketing impactantes sont mieux soutenues par une entreprise dotée d'une solide gestion opérationnelle.",
    image: (
      <img src={MgmtImg} alt="Business Managment" className='h-[25rem]' />
    ),
    features: (
      <>
        <Feature>Strategic planning</Feature>
        <Feature>Market analysis</Feature>
        <Feature>Process improvement</Feature>
        <Feature>Growth-focused advisory</Feature>
      </>
    )
  },
  {
    id: 5,
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" fill="none">
        <path d="M15 25H10C8.67392 25 7.40215 24.4732 6.46447 23.5355C5.52678 22.5979 5 21.3261 5 20V10C5 8.67392 5.52678 7.40215 6.46447 6.46447C7.40215 5.52678 8.67392 5 10 5H20C21.3261 5 22.5979 5.52678 23.5355 6.46447C24.4732 7.40215 25 8.67392 25 10V15" stroke="#00E2FF" stroke-width="2.67" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M5 20L8.82667 16.1733C9.57992 15.4202 10.6015 14.9971 11.6667 14.9971C12.7318 14.9971 13.7534 15.4202 14.5067 16.1733L15 16.6666M15 20C15 18.6739 15.5268 17.4021 16.4645 16.4644C17.4021 15.5268 18.6739 15 20 15H30C31.3261 15 32.5979 15.5268 33.5355 16.4644C34.4732 17.4021 35 18.6739 35 20V30C35 31.3261 34.4732 32.5978 33.5355 33.5355C32.5979 34.4732 31.3261 35 30 35H20C18.6739 35 17.4021 34.4732 16.4645 33.5355C15.5268 32.5978 15 31.3261 15 30V20Z" stroke="#00E2FF" stroke-width="2.67" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M11.6667 10V10.0167M23.3334 22.5V27.5L27.5001 25L23.3334 22.5Z" stroke="#00E2FF" stroke-width="2.67" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    ),
    title: "Visual Media Production",
    definition: "Donnez vie à votre perspective avec nos capacités professionnelles de photographie, de vidéographie et de montage, donnant lieu à des contenus visuels de haute qualité qui racontent vos histoires.", 
    image: (
      <img src={CameraImg} alt="Photography" className='h-[25rem]' />
    ),
    features: (
      <>
        <Feature>Professional photography</Feature>
        <Feature>Compelling visual storytelling</Feature>
        <Feature>Tailored content per platforms</Feature>
        <Feature>Advanced post-processing</Feature>
      </>
    )
  },
];
