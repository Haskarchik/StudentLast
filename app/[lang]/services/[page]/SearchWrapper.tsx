'use client';
import React, { useState, ChangeEvent, useEffect } from 'react';
import Search from './Search';
import { Offer } from '@/app/components/offers-list/OfferData';
import { Locale } from '@/i18n.config';

type SearchWrapperProps = {
  Services: any;
  OffersData: any;
  lang: Locale;
  offersData: Offer[];
}

const SearchWrapper = ({ Services, OffersData, lang, offersData }: SearchWrapperProps) => {
  const [searchText, setSearchText] = useState<string>("");
  const [filteredData, setFilteredData] = useState<Offer[]>([]);

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
  };

  useEffect(() => {
    if (searchText === "") {
      setFilteredData([]);
      console.log('Search ended');
    } else {
      console.log('Search started');
      setFilteredData(offersData.filter(x => x.workName.toLocaleLowerCase().includes(searchText.toLocaleLowerCase())));
      console.log('Search ended');
    }
  }, [searchText]);

  return (
    <Search
      Services={Services}
      OffersData={OffersData}
      lang={lang}
      offersData={offersData}
      searchText={searchText}
      filteredData={filteredData}
      onSearchChange={handleSearchChange}
    />
  );
};

export default SearchWrapper;
