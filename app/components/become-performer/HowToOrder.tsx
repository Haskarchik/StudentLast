import { Locale } from '@/i18n.config';
import InfoBlock from '../about-us/InfoBlock';
import { getDictionary } from '@/lib/dictionary';
import "@/app/[lang]/worktype/WorkType.scss"
import "./HowTo.scss";

export default async function HowToOrder({lang}:{lang:Locale}) {
  const {Performer}=await getDictionary(lang);
  return (
    <div className="wrapper-how-to">
      <div className="how-to-item">
        <span className="span-sub-article span-title">
          {Performer.how_order}<span className="span-br">{Performer.job}</span>
        </span>
        <div className="info-block-items-wrapper">
          <div className="info-block-items">
            <InfoBlock numberInfo="01" text={Performer.fill_form} />
            <InfoBlock numberInfo="02" text={Performer.feedback_performer} />
            <InfoBlock numberInfo="03" text={Performer.get_job} />
            <InfoBlock numberInfo="04" text={Performer.work_check} />
          </div>
        </div>
      </div>
    </div>
  );
}
