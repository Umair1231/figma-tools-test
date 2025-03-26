const StatusBadge = ({ status, color }) => {
    const getStatusStyles = () => {
      switch (status) {
        case 'In-Process':
          return {
            container: 'bg-yellow-50',
            dot: 'bg-amber-500',
            text: 'text-amber-600'
          };
        case 'Assigned':
          return {
            container: 'bg-rose-50',
            dot: 'bg-red-500',
            text: 'text-red-500'
          };
        default:
          return {
            container: 'bg-gray-50',
            dot: 'bg-gray-500',
            text: 'text-gray-600'
          };
      }
    };
  
    const styles = getStatusStyles();
  
    return (
      <div className={`flex gap-1 items-center px-2.5 rounded-3xl ${styles.container}`}>
        <div className="flex flex-col items-center self-stretch my-auto w-1.5 h-1.5 bg-white bg-opacity-0 rounded-[100px]">
          <div className={`flex overflow-hidden items-center w-1.5 h-1.5 ${styles.dot} rounded-[100px]`}>
            <div className="flex gap-1.5 min-h-1.5 rotate-[-1.5707963267948966rad]" />
          </div>
        </div>
        <span className={`self-stretch my-auto text-sm leading-loose ${styles.text}`}>
          {status}
        </span>
      </div>
    );
  };
  
  export default StatusBadge;
  