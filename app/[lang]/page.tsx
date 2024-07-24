import { Locale } from '@/i18n.config'
import { getDictionary } from '@/lib/dictionary'
import HeaderSample from '../components/article-sample/HeaderSample';
import PriceCalculating from "../components/price-calculating/PriceCalculating"
import WorkTypeList from '../components/work-type-list/WorkTypeList';
import AboutUsComponent from '../components/about-us/AboutUsComponent';
import WhyWe from '../components/why-we/WhyWe';
import WorkProcess from '../components/work-process/WorkProcess';
import ReviewsCard from '../components/reviews/ReviewsCard';
import JoinOurTeam from '../components/join-in-our-team/JoinOurTeam';
import OrderAdvance from '../components/order-in-advance/OrderAdvance';
import { Metadata, ResolvingMetadata } from 'next'
 
type Props = {
  params: { lang: Locale }
}
 
export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  return params.lang=="ua"?
      {
        title:"Головна",
        description: 'Студентські роботи на замовлення від кращих авторів компанії «Student Helper!» Сайт професійної допомоги студентам щодо вирішення студентських завдань.',
        robots: 'index, follow',
        keywords:"купити, замовити, курсову, дипломну, контрольну, лабораторну, математику, англійську"
      }
    :
      {
        title:"Main",
        description: 'Student works to order from the best authors of the company "Student Helper!" A site for professional assistance to students in solving student tasks.',
        robots: 'index, follow',
        keywords: "buy, order, course, diploma, control, laboratory, mathematics, English",
      }
}



export default async function Home({
  params: { lang }
}: {
  params: { lang: Locale }
}) {
  const { Home, OffersData, AboutUs } = await getDictionary(lang)

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
  const hArticle = Home.student_work_for_order;
  const pText = Home.student_work_for_order_description;
  const defaultWorkType = Home.order_work;
  const from = OffersData.from;
  const days = OffersData.days;
  const hour = OffersData.hour;
  const to = OffersData.to;
  const day = OffersData.day;
  const offersData = [
    {
      id: 5,
      workName: OffersData.coursework,
      price: 750,
      time: `${from} 2 ${days}`,
      processingTime: `${from} 7 ${days}`,
      experience: 10,
    },
    {
      id: 6,
      workName: OffersData.graduate_work,
      price: 4000,
      time: `${from} 7 ${days}`,
      processingTime: `${from} 14 ${days}`,
      experience: 8,
    },
    {
      id: 3,
      workName: OffersData.practice_report,
      price: 750,
      time: `${from} 2 ${days}`,
      processingTime: `${from} 3 ${days}`,
      experience: 9,
    },
    {
      id: 19,
      workName: OffersData.business_plan,
      price: 800,
      time: `${from} 2 ${days}`,
      processingTime: `${from} 1 ${day}`,
      experience: 7,
    },
  ];

  return (
    <div className="wrapper-main">
      <HeaderSample
        text={pText}
        article={hArticle}
        buttonText={defaultWorkType}
      />
      <PriceCalculating lang={lang} />
      <WorkTypeList lang={lang} workTypes={offersData} title={Home.our_services} />
      <AboutUsComponent lang={lang} article={Home.about_us} />
      <WhyWe lang={lang} data={WhyWeData} />
      <WorkProcess lang={lang} />
      <ReviewsCard lang={lang} type={Home.coursework} />
      <JoinOurTeam lang={lang} />
      <OrderAdvance lang={lang}/>
    </div>
  )
}
