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
      className="flex flex-col mt-[15px] rounded-[10px] py-[16px]  pr-[16px] pl-[24px] w-[343px]"
      style={!notification.isRead ? { backgroundColor: "#F7FAFD" } : {}}
      onClick={() => read(notification.id)}
    >
      <div className="flex items-center">
        {" "}
        <img
          src={notification.profilePic}
          alt="Profile picture"
          className="w-[39px] h-[39px] mr-[18px]"
        />
        <span className="font-medium text-[14px] leading-[100%] text-[#5E6778] tracking-[0px]">
          <span className="text-[#1C202B] font-extrabold text-[14px]">
            {notification.username}
          </span>{" "}
          {notification.action}{" "}
          {notification.post ? (
            <span className="font-bold">{notification.post}</span>
          ) : null}
          {notification.groupName ? (
            <span>{notification.groupName}</span>
          ) : null}{" "}
          {!notification.isRead ? <div className="circle"></div> : null}
          <span>{notification.time}</span>
        </span>
      </div>

      {notification.userPicture ? <img src={notification.userPicture} /> : null}

      {notification.text ? (
        <span className="text">{notification.text}</span>
      ) : null}
    </div>
  );
}
