'use client';
import Image from 'next/image';
import React, { ChangeEvent } from 'react';
import "../Services.scss";
import { Offer } from '@/app/components/offers-list/OfferData';
import OffersList from '@/app/components/offers-list/OffersList';
import { Locale } from '@/i18n.config';
import PageNotFound from '@/app/components/page-not-found/PageNotFound';

type Props = {
  Services: any;
  OffersData: any;
  lang: Locale;
  offersData: Offer[];
  searchText: string;
  filteredData: Offer[];
  onSearchChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const Search = ({ Services, OffersData, lang, offersData, searchText, filteredData, onSearchChange }: Props) => {
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
            onChange={onSearchChange}
            value={searchText}
          />
          <div className={"find-loop-mark-wrapper"}>
            <Image src={"/review-photos/LoopMark.svg"} width={20} height={20} alt="find loop" className="find-loop-mark" />
          </div>
        </div>
      </div>
      {searchText === "" ? <></>
        :
        filteredData.length === 0 ?
          <PageNotFound notFound={Services['not-found']} />
          :
          <OffersList OffersData={OffersData} data={filteredData} lang={lang} />
      }
    </>
  )
}

export default Search;
