export default function Starter({ notifications, setNotifications }) {
  const counter = notifications.filter(
    (notification) => !notification.isRead
  ).length;

  function markAllAsRead() {
    const newNotifications = notifications.map((notification) => ({
      ...notification,
      isRead: true,
    }));
    setNotifications(newNotifications);
  }

  return (
    <header className="w-full flex justify-center">
      <div className="w-[343px] my-[24px]">
        <section className="flex items-center justify-between">
          <h2
            className="text-[#1C202B] font-extrabold text-[20px]
          [leading-100%] flex gap-[9px]"
          >
            Notifications{" "}
            <div
              className="ml-[9px] w-[32px] rounded-[7px] bg-[#0A327B] 
            flex justify-center items-center ml-[8px]"
            >
              {" "}
              <span
                className="text-white 
                font-extrabold text-[16px] leading-[100%]"
              >
                {counter}
              </span>
            </div>
          </h2>
          <span
            onClick={markAllAsRead}
            className="font-medium text-[14px] leading-[100%] text-[#5E6778] cursor-pointer hover:text-blue-600"
          >
            Mark all as read
          </span>
        </section>
      </div>
    </header>
  );
}
