import HowToOrder from '@/app/components/become-performer/HowToOrder';
import OrderAdvance from '@/app/components/order-in-advance/OrderAdvance';
import PriceCalculating from '@/app/components/price-calculating/PriceCalculating';
import QuestionsSection from '@/app/components/questions-section/QuestionsSection';
import ReviewsCard from '@/app/components/reviews/ReviewsCard';
import WorkProcess from '@/app/components/work-process/WorkProcess';
import WorkTypeList from '@/app/components/work-type-list/WorkTypeList';
import { Locale } from '@/i18n.config'
import { getDictionary } from '@/lib/dictionary';
import React from 'react'
import { Metadata, ResolvingMetadata } from 'next'
import { getOfferData, typeOffersData } from '../getOfferData';
import { notFound } from 'next/navigation';

type Props = {
  params:{
      id:number,
      lang:Locale
  }
}

function getNeighboring(offersData:any,countNeighboring:number,offer:any){
  let offersToShow=[];
  if(offer.id-countNeighboring/2-1>0&&offer.id+countNeighboring/2+1<offersData.length){
    offersToShow=offersData.filter((x:any)=>offer.id!=x.id&&x.id>offer.id-countNeighboring/2-1&&x.id<offer.id+countNeighboring/2+1);  
  }
  else if(offer.id+countNeighboring/2+1<offersData.length){
    offersToShow=offersData.filter((x:any)=>offer.id!=x.id&&x.id>offer.id-countNeighboring/2-1&&x.id<offer.id+countNeighboring/2+1+countNeighboring/2-offer.id+1);  
  }
  else{
    offersToShow=offersData.filter((x:any)=>offer.id!=x.id&&x.id>offer.id-countNeighboring/2-1-countNeighboring/2+offersData.length-offer.id&&x.id<offer.id+countNeighboring/2+1);  
  }
  offersToShow.sort((a:any,b:any)=>a.id-b.id);
  return offersToShow;
} 
 
export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const { OffersData, AboutUs } = await getDictionary(params.lang);
  const offersData = getOfferData(OffersData);
  const offer = offersData.find((x) => x.id == params.id);

  if (offer == undefined) {
    return params.lang == 'ua'
      ? {
          title: 'Сторінку не знайдено',
          robots: 'noindex, nofollow',
        }
      : {
          title: 'Сторінку не знайдено',
          robots: 'noindex, nofollow',
        };
  } else {
    let neighbors = getNeighboring(offersData, 10, offer);
    let keywords = `${offer.workName}, ${neighbors
      .map((x: typeOffersData) => x.workName)
      .join(', ')}`;

    let descriptionEnglish = `By ordering «${offer.workName}» from us, you get: Professional approach - our team of experts in the field will ensure high-quality and competent execution of tasks. Quality and timeliness - you can rely on high-quality execution of work and timely delivery of results. Individual approach - we understand the uniqueness of each project and offer a personalized approach to your needs. Confidentiality - we respect your confidentiality and guarantee the absolute security of your personal data. Make your choice in favor of us, and we guarantee the successful resolution of your educational task.`;

    let descriptionUA = `Замовляючи «${offer.workName}» у нас, ви отримуєте: Професійний підхід - наша команда експертів в даній галузі забезпечить вам якісне та компетентне виконання завдань. Якість та своєчасність - можете розраховувати на високу якість виконання робіт. Індивідуальний підхід - ми розуміємо унікальність кожного проекту та пропонуємо персоналізований підхід до вашої потреби. Конфіденційність - поважаємо вашу конфіденційність і гарантуємо абсолютну безпеку ваших особистих даних. Зробіть свій вибір на користь нас, і ми гарантуємо успішне вирішення вашого навчального завдання.`;

    return params.lang == 'ua'
      ? {
          title: offer.workName,
          robots: 'index, follow',
          keywords: keywords,
          description:descriptionUA
        }
      : {
          title: offer.workName,
          robots: 'index, follow',
          keywords: keywords,
          description:descriptionEnglish
        };
  }
}



export async function generateStaticParams(){
  return Array(22).fill(undefined).map((_, index) => ({ id: (index + 1).toString() }));
}


const WorkType = async({params:{id,lang}}:Props) => {
  const {OffersData,Work_type,Home}=await getDictionary(lang);
  const offersData:typeOffersData[]=getOfferData(OffersData);
  const offer=offersData.find(x=>x.id==id);
  if(offer==undefined)notFound();
  let offersToShow=getNeighboring(offersData,6,offer);

  return (
    <div className={"work-type-wrapper"}>
      <div className="main-text">
        <div className="main-article-wrapper">
          <span className="span-article span-title">{offer?.workName}</span>
        </div>
      </div>
      <div className={"work-description"}>
        <p>
          {Work_type.average_price_of_work} |{" "}
          <b>{`${
            lang == "ua" ? offer?.price : Math.floor(offer.price / 30)
          } ${OffersData.currency}`}</b>
        </p>
        <p>
          {Work_type.deadline} | <b>{offer?.time}</b>
        </p>
        <p>
          {Work_type.refinement} | <b>{offer?.processingTime}</b>
        </p>
        <p>
          {Work_type.author} | <b>{Work_type.teacher}</b>
        </p>
        <p>
          {Work_type.experience_of_the_author} |{" "}
          <b>
            {offer?.experience}+ {Work_type.years}
          </b>
        </p>
      </div>
        {//<Button text={t("Home.order_work")} onClick={scrollToOrder} />
}
      <div className="order-button">
      </div>
      <PriceCalculating lang={lang} ref1={null} />
      <HowToOrder lang={lang} />
      <WorkProcess lang={lang}/>
      <ReviewsCard lang={lang} type={offer.workName} />
      <WorkTypeList
        lang={lang}
        className="work-type-list"
        workTypes={offersToShow}
        title={offer.workName}
      />
      <QuestionsSection questions={offer.question} />
      <OrderAdvance className="order-advance" lang={lang}/>
    </div>
  )
}

export default WorkType;