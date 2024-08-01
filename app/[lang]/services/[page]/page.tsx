import { Offer } from "@/app/components/offers-list/OfferData";
import OffersList from "@/app/components/offers-list/OffersList";
import PriceCalculating from "@/app/components/price-calculating/PriceCalculating";
import { Locale } from "@/i18n.config";
import { getDictionary } from "@/lib/dictionary";
import Search from "./Search";
import Pagination from "@/app/components/pagination/Pagination";
import { Metadata, ResolvingMetadata } from "next";
import { notFound } from "next/navigation";

type Props = {
  params: { lang: Locale };
};

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  return params.lang === "ua"
    ? {
        title: "Послуги для студентів - Student Help",
        description:
          "Замовляйте якісні послуги для студентів на платформі Student Help. Наш сервіс пропонує різні види допомоги у виконанні робіт, від тестів та рефератів до курсових та дипломних проектів. Отримайте професійну підтримку від експертів у вашій галузі.",
        robots: "index, follow",
        keywords:
          "послуги для студентів, допомога у навчанні, замовлення робіт, курсові, дипломні, реферати, студентські послуги, підтримка в навчанні",
      }
    : {
        title: "Student Services - Student Help",
        description:
          "Order high-quality student services on the Student Help platform. Our service offers various types of assistance in completing assignments, from tests and essays to coursework and diploma projects. Get professional support from experts in your field.",
        robots: "index, follow",
        keywords:
          "student services, academic assistance, order assignments, coursework, diploma projects, essays, student support, academic help",
      };
}

export async function generateStaticParams() {
  return [{ page: "1" }, { page: "2" }, { page: "3" }];
}

const Services = async ({
  params: { lang, page },
}: {
  params: { lang: Locale; page: string };
}) => {
  const { OffersData, Services } = await getDictionary(lang);
  const from = OffersData.from;
  const days = OffersData.days;
  const hour = OffersData.hour;
  const to = OffersData.to;
  const day = OffersData.day;
  if (page != "1" && page != "2" && page != "3") notFound();
  const pageNumber = parseInt(page);

  const offersData: Offer[] = [
    {
      id: 1,
      workName: OffersData.abstracts,
      price: 250,
      time: `${to} 3 ${hour}`,
      processingTime: `${to} 1 ${day}`,
      experience: 4,
    },
    {
      id: 2,
      workName: OffersData.dissertation,
      price: 50000,
      time: `${from} 30 ${days}`,
      processingTime: `${from} 7 ${days}`,
      experience: 15,
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
      id: 4,
      workName: OffersData.homework,
      price: 150,
      time: `${from} 2 ${days}`,
      processingTime: `${from} 3 ${days}`,
      experience: 3,
    },
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
      id: 7,
      workName: OffersData.master_thesis,
      price: 4500,
      time: `${from} 9 ${days}`,
      processingTime: `${from} 7 ${days}`,
      experience: 2,
    },
    {
      id: 8,
      workName: OffersData.control_work,
      price: 200,
      time: `${from} 1 ${day}`,
      processingTime: `${from} 1 ${day}`,
      experience: 5,
    },
    {
      id: 9,
      workName: OffersData.lab,
      price: 150,
      time: `${from} 1 ${day}`,
      processingTime: `${from} 1 ${day}`,
      experience: 3,
    },
    {
      id: 10,
      workName: OffersData.increasing_uniqueness,
      price: 100,
      time: `${from} 1 ${day}`,
      processingTime: `${from} 1 ${day}`,
      experience: 6,
    },
    {
      id: 11,
      workName: OffersData.essay,
      price: 200,
      time: `${to} 3 ${hour}`,
      processingTime: `${to} 1 ${day}`,
      experience: 5,
    },
    {
      id: 12,
      workName: OffersData.article,
      price: 250,
      time: `${to} 3 ${hour}`,
      processingTime: `${to} 1 ${day}`,
      experience: 4,
    },
    {
      id: 13,
      workName: OffersData.problem,
      price: 60,
      time: `${from} 1 ${day}`,
      processingTime: `${from} 2 ${days}`,
      experience: 4,
    },
    {
      id: 14,
      workName: OffersData.review,
      price: 150,
      time: `${from} 1 ${day}`,
      processingTime: `${from} 3 ${hour}`,
      experience: 10,
    },
    {
      id: 15,
      workName: OffersData.abstract,
      price: 250,
      time: `${to} 1 ${hour}`,
      processingTime: `${to} 7 ${days}`,
      experience: 5,
    },
    {
      id: 16,
      workName: OffersData.translation,
      price: 100,
      time: `${from} 1 ${day}`,
      processingTime: `${from} 7 ${days}`,
      experience: 10,
    },
    {
      id: 17,
      workName: OffersData.drawing,
      price: 150,
      time: `${from} 1 ${day}`,
      processingTime: `${from} 1 ${days}`,
      experience: 5,
    },
    {
      id: 18,
      workName: OffersData.presentation,
      price: 150,
      time: `${from} 3 ${hour}`,
      processingTime: `${from} 1 ${hour}`,
      experience: 2,
    },
    {
      id: 19,
      workName: OffersData.business_plan,
      price: 800,
      time: `${from} 2 ${days}`,
      processingTime: `${from} 1 ${day}`,
      experience: 7,
    },
    {
      id: 20,
      workName: OffersData.copywriting,
      price: 100,
      time: `${from} 1 ${day}`,
      processingTime: `${from} 1 ${day}`,
      experience: 5,
    },
    {
      id: 21,
      workName: OffersData.online_exam,
      processingTime: `${from} 1 ${day}`,
      price: 250,
      time: `${from} 1 ${day}`,
      experience: 12,
    },
    {
      id: 22,
      workName: OffersData.other,
      price: 100,
      time: `${from} 1 ${day}`,
      processingTime: `${from} 1 ${day}`,
      experience: 2,
    },
  ];
  return (
    <div className="wrapper-services">
      <span className="span-article span-title">{Services.services}</span>
      <Search
        offersData={offersData}
        lang={lang}
        OffersData={OffersData}
        Services={Services}
        pageNumber={pageNumber}
       
      />
    
      <PriceCalculating lang={lang} />
    </div>
  );
};

export default Services;
