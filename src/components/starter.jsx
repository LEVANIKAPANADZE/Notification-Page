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
          <h2 className="text-[#1c202b]">Notifications {counter}</h2>
          <span onClick={markAllAsRead}>Mark all as read</span>
        </section>
      </div>
    </header>
  );
}
