const AssigneeInfo = ({ name, avatarUrl }) => {
    return (
      <div className="self-stretch my-auto">
        <h4 className="text-xs leading-loose">Assign to</h4>
        <div className="flex gap-2 items-center text-sm font-medium leading-loose">
          <img
            src={avatarUrl}
            alt={`${name}'s avatar`}
            className="object-contain shrink-0 self-stretch my-auto aspect-square rounded-[80px] w-[26px]"
          />
          <span className="self-stretch my-auto">{name}</span>
        </div>
      </div>
    );
  };
  
  export default AssigneeInfo;
  