 import  LetsWorkTogether  from '../../components/LetsWorkTogether/index';
import { LocationMap } from '@/app/components/LocationMap/index';
import { Locale } from "@/i18n.config";

export default function Page({params:{lang}}:{params:{lang:Locale}}) {
  return (
    <>
      <LetsWorkTogether lang={lang} />
      <LocationMap  lang={lang}/>
    </>
  );
}
 