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
      className="flex items-center justify-center"
      style={!notification.isRead ? { backgroundColor: "#F7FAFD" } : {}}
      onClick={() => read(notification.id)}
    >
      <img src={notification.profilePic} alt="Profile picture" />
      <span>
        {notification.username} {notification.action}
      </span>
      {notification.post ? <span>{notification.post}</span> : null}
      {notification.groupName ? <span>{notification.groupName}</span> : null}
      {notification.userPicture ? <img src={notification.userPicture} /> : null}
      {notification.text ? (
        <span className="text">{notification.text}</span>
      ) : null}
      {!notification.isRead ? <div className="circle"></div> : null}
    </div>
  );
}
