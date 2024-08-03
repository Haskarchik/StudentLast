import { Locale } from "@/i18n.config";
import "./AboutUs.scss";
import { getDictionary } from "@/lib/dictionary";
import AboutUsComponent from "@/app/components/about-us/AboutUsComponent";
import WhyWe from "@/app/components/why-we/WhyWe";
import WorkProcess from "@/app/components/work-process/WorkProcess";
import JoinOurTeam from "@/app/components/join-in-our-team/JoinOurTeam";
import OrderAdvance from "@/app/components/order-in-advance/OrderAdvance";
import { Metadata, ResolvingMetadata } from 'next'
import AboutUsPage from "@/app/components/about-us/about-us";
 
type Props = {
  params: { lang: Locale }
}
 
export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  return params.lang=="ua"?
      {
        title:"Про нас",
        description: 'Ми є провідним постачальником послуг з написання різних видів студентських робіт, таких як есе, реферати, курсові роботи, дипломні роботи та інші.Наша компанія пропонує послуги виключно професійних письменників, які мають великий досвід у написанні студентських робіт. Крім того, ми гарантуємо повну конфіденційність і безпеку ваших персональних даних та інформації про замовлення.',
        robots: 'index, follow',
        keywords:"student helper, допомога студентам, сервіс для допомоги написання студентам, роботи на замовлення"
      }
    :
      {
        title:"About us",
        description: 'We are a leading provider of writing services for various types of student papers such as essays, essays, term papers, theses and more.Our company offers the services of using professional writers who have extensive experience in writing student papers. In addition, we guarantee complete confidentiality and security of your personal data and order information.',
        robots: 'index, follow',
        keywords: "student hepler, service for writing help for students, work to order",
      }
}

const AboutUs =async ({params:{lang}}:{params:{lang:Locale}}) => {
    const {Home,AboutUs}=await getDictionary(lang);

    const WhyWeData = [
    {
      text: Home.professionalism,
    },
    {
      text: Home.quality,
    },
    {
      text: Home.privacy,
    },
    {
      text: Home.reliability,
    },
  ];

  return (
    <div className="wrapper-aboutUs">
      <span className="span-article span-title">{AboutUs.about_us}</span>
      <AboutUsPage article={Home.about_us_block} AboutUs={AboutUs}/>
      <div className={"why-we-wrapper"}>
      <WhyWe data={WhyWeData} AboutUs={AboutUs} />
      </div>
      <WorkProcess AboutUs={AboutUs} lang={lang} left={true} />
      <JoinOurTeam lang={lang} />
      <OrderAdvance lang={lang} />
    </div>
  );
};

export default AboutUs;
