const NavigationBar = () => {
    return (
      <header className="w-full bg-slate-900">
        <div className="w-full text-lg leading-none text-center text-white whitespace-nowrap font-[590]">
          <div className="flex gap-5 justify-between pl-14 w-full">
            <time className="my-auto">9:41</time>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/22420df0b828164bc4d6031b2178d1a123de116e?placeholderIfAbsent=true&apiKey=b5154990b7444f75bc585cc2abad1d5e"
              alt="Status icons"
              className="object-contain shrink-0 w-36 max-w-full aspect-[2.67]"
            />
          </div>
        </div>
        <nav className="flex flex-col justify-center px-6 py-4 w-full">
          <div className="flex gap-10 justify-between items-center w-full">
            <button className="flex gap-2.5 items-center self-stretch my-auto w-16">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/aafa748cfe9a93d088dfac9580c0a52032e5fea6?placeholderIfAbsent=true&apiKey=b5154990b7444f75bc585cc2abad1d5e"
                alt="Back"
                className="object-contain self-stretch my-auto aspect-square w-[26px]"
              />
            </button>
            <h1 className="self-stretch my-auto text-xl font-medium leading-snug text-white">
              Ticket Listing
            </h1>
            <div className="flex gap-6 items-center self-stretch my-auto">
              <button className="flex gap-2.5 items-center self-stretch my-auto w-6">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/17d92453c9ab90470655097b93c535a51a79f77c?placeholderIfAbsent=true&apiKey=b5154990b7444f75bc585cc2abad1d5e"
                  alt="Search"
                  className="object-contain self-stretch my-auto w-6 aspect-square"
                />
              </button>
              <button className="flex gap-2.5 items-center self-stretch my-auto w-6">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/9680dc8b1ad4e34816734d3a9ea0eb09696316cc?placeholderIfAbsent=true&apiKey=b5154990b7444f75bc585cc2abad1d5e"
                  alt="Menu"
                  className="object-contain self-stretch my-auto w-6 aspect-square"
                />
              </button>
            </div>
          </div>
        </nav>
      </header>
    );
  };
  
  export default NavigationBar;
  