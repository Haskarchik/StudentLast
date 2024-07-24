import OffersItem from "../offers-item/OffersItem";
import "./WorkTypeList.scss";
import clsx from "clsx";
import { Locale } from "@/i18n.config";
import { getDictionary } from "@/lib/dictionary";
import NavigateButton from "../navigate-button/NavigateButton";
import { Offer } from "../offers-list/OfferData";

type Props = {
  workTypes: Offer[];
  title: string;
  className?: string;
  lang:Locale
};

export default async function WorkTypeList({ workTypes, title, className, lang }: Props) {
  const {Home,OffersData}=await getDictionary(lang);
  return (
    <div className={clsx("offers", className)}>
      <span className="span-sub-article span-title">{title}</span>
      <div className="offers-item">
        {workTypes.map((offer, index) => (
          <OffersItem
            OffersData={OffersData}
            lang={lang}
            key={offer.id}
            id={offer.id}
            price={offer.price}
            time={offer.time}
            workName={offer.workName}
          />
        ))}
      </div>
      <div className={"navigate-button-wrapper"}>
        <NavigateButton
          content={Home.full_work_list}
          to={`/${lang}/services/1`}
        />
      </div>
    </div>
  );
}
