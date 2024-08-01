"use client";
import React from "react";
import WhiteButton from "../button/WhiteButton";
import Link from "next/link";
import { Locale } from "@/i18n.config";

type Props = {
  order_work: string;
  lang:Locale
};

const ButtonOrderAdvance = (props: Props) => {
  return (
    <div className={"button-wrapper"}>
      <Link href={`/${props.lang}/contact`}>
        <WhiteButton text={props.order_work}  />
      </Link>
    </div>
  );
};

export default ButtonOrderAdvance;
