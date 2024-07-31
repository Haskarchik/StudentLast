"use client"
import React, { ChangeEvent, useEffect, useState } from 'react';
import { Offer } from '@/app/components/offers-list/OfferData';
import OffersList from '@/app/components/offers-list/OffersList';
import { Locale } from '@/i18n.config';
import PageNotFound from '@/app/components/page-not-found/PageNotFound';
import { useSearch } from './SearchContext';
import Image from 'next/image';

type Props = {
  Services: any;
  OffersData: any;
  lang: Locale;
  offersData: Offer[];
}

const SearchWrapper = ({ Services, OffersData, lang, offersData }: Props) => {
  const { startSearch, endSearch } = useSearch();
  const [searchText, setSearchText] = useState<string>("");
  const [data, setData] = useState<Offer[]>([]);

  function handleSearchChange(e: ChangeEvent<HTMLInputElement>) {
    setSearchText(e.target.value);
  }

  useEffect(() => {
    if (searchText !== "") {
      startSearch();
    } else {
      endSearch();
    }

    const filteredData = offersData.filter(x =>
      x.workName.toLocaleLowerCase().includes(searchText.toLocaleLowerCase())
    );
    setData(filteredData);

    if (filteredData.length === 0 || searchText === "") {
      endSearch();
    }

  }, [searchText, offersData, startSearch, endSearch]);

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
            <Image src={"/review-photos/LoopMark.svg"} width={20} height={20} alt="find loop" className="find-loop-mark" />
          </div>
        </div>
      </div>
      {searchText === "" ? <></>
        : data.length === 0 ?
          <PageNotFound notFound={Services['not-found']} />
          :
          <OffersList OffersData={OffersData} data={data} lang={lang} />
      }
    </>
  )
}

export default SearchWrapper;
