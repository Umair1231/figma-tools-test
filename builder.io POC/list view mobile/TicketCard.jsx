const TicketCard = ({
    title,
    status,
    description,
    assignee,
    dueDate,
    avatarUrl,
  }) => {
    return (
      <article className="flex overflow-hidden flex-col justify-center p-4 w-full bg-white rounded-xl border border-solid shadow-2xl border-[color:var(--Neutral-4,#F0F0F0)]">
        <div className="w-full">
          <div className="w-full">
            <div className="flex gap-10 justify-between items-start w-full">
              <h3 className="text-base font-medium text-black">{title}</h3>
              <StatusBadge status={status} />
            </div>
            <p className="mt-1 text-xs leading-loose text-black text-ellipsis">
              {description}
            </p>
          </div>
          <hr className="mt-3 w-full border border-solid border-zinc-100 min-h-px" />
          <div className="flex gap-10 justify-between items-center mt-3 w-full text-black">
            <AssigneeInfo name={assignee} avatarUrl={avatarUrl} />
            <div className="flex flex-col justify-center self-stretch">
              <span className="text-xs leading-loose">Due date</span>
              <time className="text-sm font-medium leading-loose">{dueDate}</time>
            </div>
            <button className="self-stretch py-0.5 my-auto text-lg leading-none text-center whitespace-nowrap rounded-[100px] text-zinc-900 w-[5px]">
              <span className="sr-only">More options</span>⋮
            </button>
          </div>
        </div>
      </article>
    );
  };
  
  export default TicketCard;
  