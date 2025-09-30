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
    <div>
      {" "}
      <div
        key={notifications.id}
        className="notification"
        style={!notification.isRead ? { backgroundColor: "#F7FAFD" } : {}}
        onClick={() => read(notification.id)}
      >
        <img src={notification.profilePic} alt="" />
        <span>{notification.username}</span>
        <span>{notification.action}</span>
        {notification.post ? <span>{notification.post}</span> : null}
        {notification.groupName ? <span>{notification.groupName}</span> : null}
        {notification.userPicture ? (
          <img src={notification.userPicture} />
        ) : null}
        {notification.text ? (
          <span className="text">{notification.text}</span>
        ) : null}
        {!notification.isRead ? <div className="circle"></div> : null}
      </div>
    </div>
  );
}
