import Link from "next/link";
import "./LanguageSelect.scss";
import { Button } from "@mui/material";
import { Locale } from "@/i18n.config";
import Image from "next/image";
//import { ReactComponent as UkraineFlag } from "../../assets/flags/ukraine-flag-icon.svg";
//import { ReactComponent as EnglishFlag } from "../../assets/flags/uk-flag.svg";

export default function LanguageSelect({lang}:{lang:Locale}) {
  return (
    <div className="language-select">
      <Link href="/ua" className={lang==="ru"?"active":""}>
        <Image alt="flag England" width={50} height={50} src="/review-photos/flags/ukraine-flag-icon.svg" className="flag-icon" />
         <span className="language-item-lang">UA</span>  
      </Link>
      <hr className="vertical-divider language-divider" />
      <Link className={lang==="ua"?"active":""} href="/ru">
        <Image alt="flag Ukraine" width={50} height={50} src="/review-photos/flags/uk-flag.svg" className="flag-icon" />
          <span className="language-item-lang">EN</span>
      </Link>  
    </div>
  );
}



/*
<div className="language-select">
      <Link className={lang==="ua"?"active":""} href="/ua">
        <Image alt="flag Ukraine" width={50} height={50} src="/review-photos/flags/uk-flag.svg" className="flag-icon" />
          <span className="language-item-lang">EN</span>
      </Link>  
      <hr className="vertical-divider language-divider" />
      <Link href="/ru" className={lang!=="ua"?"active":""}>
        <Image alt="flag England" width={50} height={50} src="/review-photos/flags/ukraine-flag-icon.svg" className="flag-icon" />
         <span className="language-item-lang">UA</span>  
      </Link>
    </div>*/