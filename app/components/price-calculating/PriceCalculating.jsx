import "./PriceCalculating.scss";
import CostCalculator from "../cost-calculator/CostCalculator";
import { getDictionary } from '@/lib/dictionary'
import { Locale } from '@/i18n.config'

const PriceCalculating =async ({ ref1 = null,lang }) => {
  const {Home, subjects}=await getDictionary(lang)
  
  return ref1 === undefined ? (
    <>...loading</>
  ) : (
    <div className="wrapper-price-calculating" ref={ref1}>
      <span className="span-sub-article span-title">
        {Home.Calculation}&nbsp;
        <br className="max-425px" />
        {Home.price}
      </span>
      <CostCalculator lang={lang} subjects={subjects} Home={Home}/>
    </div>
  );
};

export default PriceCalculating;
