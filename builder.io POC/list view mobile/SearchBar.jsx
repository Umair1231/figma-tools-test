const SearchFilter = () => {
    return (
      <div className="self-center mt-6 w-full max-w-[362px]">
        <div className="flex gap-2.5 w-full h-[42px]">
          <button className="flex flex-1 shrink items-center px-5 py-4 h-full text-base leading-none whitespace-nowrap bg-white rounded-xl border border-solid basis-0 border-[color:var(--Neutral-4,#F0F0F0)] min-w-60 text-zinc-700">
            <div className="flex gap-2.5 items-center self-stretch my-auto">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/8fdd49e076366dd43f273291d4c021e11a0c7bb4?placeholderIfAbsent=true&apiKey=b5154990b7444f75bc585cc2abad1d5e"
                alt="Search icon"
                className="object-contain shrink-0 self-stretch my-auto w-5 aspect-square"
              />
              <span className="self-stretch my-auto">Search</span>
            </div>
          </button>
          <button className="flex gap-2.5 items-center px-3 py-5 bg-blue-600 rounded-xl h-[42px] w-[42px]">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/deb9135100c5c836933be28b72ba99ed71179fba?placeholderIfAbsent=true&apiKey=b5154990b7444f75bc585cc2abad1d5e"
              alt="Filter"
              className="object-contain self-stretch my-auto w-5 rounded-md aspect-square"
            />
          </button>
        </div>
      </div>
    );
  };
  
  export default SearchFilter;
  