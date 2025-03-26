"use client";
import NavigationBar from "./NavigationBar";
import SearchFilter from "./SearchFilter";
import TicketCard from "./TicketCard";

const ListView = () => {
  const tickets = [
    {
      id: 1,
      title: "Excavation on site 1",
      status: "In-Process",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
      assignee: "Brooklyn Simmons",
      dueDate: "Sept 24, 2023",
      avatarUrl:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/2a3f9c53318c2e6574a8be6f310b86b6fc7faa73?placeholderIfAbsent=true&apiKey=b5154990b7444f75bc585cc2abad1d5e",
    },
    {
      id: 2,
      title: "Excavation on site 2",
      status: "Assigned",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
      assignee: "Guy Hawkins",
      dueDate: "Sept 24, 2023",
      avatarUrl:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/32586dae5ed49bb7951bb445dc311bf7f263fc0e?placeholderIfAbsent=true&apiKey=b5154990b7444f75bc585cc2abad1d5e",
    },
    {
      id: 3,
      title: "Excavation on site 3",
      status: "Assigned",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
      assignee: "Guy Hawkins",
      dueDate: "Sept 24, 2023",
      avatarUrl:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/f0ec14797adbbfc8daca5631257d0782de72d4ca?placeholderIfAbsent=true&apiKey=b5154990b7444f75bc585cc2abad1d5e",
    },
    {
      id: 4,
      title: "Excavation on site 4",
      status: "In-Process",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
      assignee: "Brooklyn Simmons",
      dueDate: "Sept 24, 2023",
      avatarUrl:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/814c86ab192df0a213464a7339f6afdc9b6b78c3?placeholderIfAbsent=true&apiKey=b5154990b7444f75bc585cc2abad1d5e",
    },
  ];

  return (
    <main className="flex overflow-hidden flex-col pb-5 mx-auto w-full bg-neutral-50 max-w-[480px]">
      <NavigationBar />
      <SearchFilter />

      <section className="overflow-hidden relative px-5 w-full bg-neutral-50 h-[676px]">
        <div className="flex z-0 py-2 w-full min-h-4" />
        <div className="z-0 w-full min-h-[733px]">
          <div className="overflow-hidden w-full h-[660px]">
            {tickets.map((ticket, index) => (
              <div key={ticket.id} className={index > 0 ? "mt-4" : ""}>
                <TicketCard {...ticket} />
              </div>
            ))}
            <div className="flex py-4 mt-4 w-full min-h-0 bg-white rounded-xl border border-solid shadow-2xl border-[color:var(--Neutral-4,#F0F0F0)]" />
          </div>
        </div>

        <button className="flex overflow-hidden absolute z-0 items-center w-14 h-14 bg-blue-800 shadow-lg bottom-[34px] right-[30px] rounded-[116.667px]">
          <div className="flex overflow-hidden gap-2.5 items-center self-stretch p-3.5 my-auto w-14 rounded-[117px]">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/1ea5da25d7f9f9ed374ea5d459e9d68e58a8827e?placeholderIfAbsent=true&apiKey=b5154990b7444f75bc585cc2abad1d5e"
              alt="Add new ticket"
              className="object-contain self-stretch my-auto w-7 aspect-square"
            />
          </div>
        </button>
      </section>
    </main>
  );
};

export default ListView;
