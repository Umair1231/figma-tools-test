import React from 'react';
import { Input } from 'antd';
import { SearchIcon } from './icons/SearchIcon';
import { FilterIcon } from './icons/FilterIcon';

export const SearchBar = () => {
  return (
    <div className="absolute inset-x-5 top-6">
      <div className="flex gap-2.5 h-[42px]">
        <Input
          prefix={<SearchIcon />}
          placeholder="Search"
          className="flex-1 px-5 bg-white rounded-xl border border-zinc-100"
        />
        <button
          type="button"
          className="flex items-center px-3 bg-blue-600 rounded-xl"
          aria-label="Filter"
        >
          <FilterIcon />
        </button>
      </div>
    </div>
  );
};
