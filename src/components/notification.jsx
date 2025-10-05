export default function Notification({
  notification,
  notifications,
  setNotifications,
}) {
  function read(id) {
    console.log(id);
    const newNotifications = notifications.map((n) => {
      if (n.id === id) {
        return { ...n, isRead: true };
      } else {
        return n;
      }
    });
    setNotifications(newNotifications);
  }

  return (
    <div
      key={notifications.id}
      className="flex flex-col mt-[15px] rounded-[10px]"
      style={!notification.isRead ? { backgroundColor: "#F7FAFD" } : {}}
      onClick={() => read(notification.id)}
    >
      <div className="flex items-center">
        {" "}
        <img
          src={notification.profilePic}
          alt="Profile picture"
          className="w-[39px] h-[39px]"
        />
        <span>
          {notification.username} {notification.action}{" "}
          {notification.post ? <span>{notification.post}</span> : null}
          {notification.groupName ? (
            <span>{notification.groupName}</span>
          ) : null}{" "}
          {!notification.isRead ? <div className="circle"></div> : null}
        </span>
      </div>

      {notification.userPicture ? <img src={notification.userPicture} /> : null}
      <span>{notification.time}</span>
      {notification.text ? (
        <span className="text">{notification.text}</span>
      ) : null}
    </div>
  );
}
