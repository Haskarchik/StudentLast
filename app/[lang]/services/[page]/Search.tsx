"use client";
import Image from "next/image";
import React, { ChangeEvent, useEffect, useState } from "react";
import "../Services.scss";
import { Offer } from "@/app/components/offers-list/OfferData";
import OffersList from "@/app/components/offers-list/OffersList";
import { Locale } from "@/i18n.config";
import PageNotFound from "@/app/components/page-not-found/PageNotFound";
import Pagination from "@/app/components/pagination/Pagination";

type Props = {
  Services: any;
  OffersData: any;
  lang: Locale;
  offersData: Offer[];
  pageNumber: number;
};

const Search = ({
  Services,
  OffersData,
  lang,
  offersData,
  pageNumber,
}: Props) => {
  const [searchText, setSearchText] = useState<string>("");
  const [data, setData] = useState<Offer[]>([]);
  function handleSearchChange(e: ChangeEvent<HTMLInputElement>) {
    setSearchText(e.target.value);
  }
  useEffect(() => {
    setData(
      offersData.filter((x) =>
        x.workName.toLocaleLowerCase().includes(searchText.toLocaleLowerCase())
      )
    );
  }, [searchText]);

  return (
    <>
      <div className="search-item">
        <span className="span-sub-article span-title">
          {Services.list_services}
        </span>
        <div className="input-item">
          <input
            type="text"
            placeholder={Services.name_services}
            className="find-input"
            onChange={handleSearchChange}
          />
          <div className={"find-loop-mark-wrapper"}>
            <Image
              src={"/review-photos/LoopMark.svg"}
              width={20}
              height={20}
              alt="find loop"
              className="find-loop-mark"
            />
          </div>
        </div>
      </div>
      {searchText === "" ? (
        <>
          <OffersList
            OffersData={OffersData}
            lang={lang}
            data={offersData.slice(pageNumber * 10 - 10, pageNumber * 10)}
          />
          <Pagination
            totalPages={3}
            showPages={3}
            currentPage={pageNumber}
            url={`/${lang}/services/`}
          />
        </>
      ) : data.length === 0 ? (
        <PageNotFound notFound={Services["not-found"]} />
      ) : (
        <OffersList OffersData={OffersData} data={data} lang={lang} />
      )}
    </>
  );
};

export default Search;
