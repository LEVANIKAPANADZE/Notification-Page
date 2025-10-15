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
      className="flex flex-col mt-[15px] rounded-[10px] py-[16px]  pr-[16px] pl-[24px] w-[343px] lg:w-[730px] lg:mt-[30px] lg:py-[17px] lg:pr-[20px] lg:pl-[32px]"
      style={!notification.isRead ? { backgroundColor: "#F7FAFD" } : {}}
      onClick={() => read(notification.id)}
    >
      <div className="flex items-center">
        {" "}
        <img
          src={notification.profilePic}
          alt="Profile picture"
          className="w-[39px] h-[39px] mr-[18px] lg:w-[45px] lg:h-[45px] lg:mr-[20px]"
        />
        <span className="font-medium text-[14px] leading-[100%] text-[#5E6778] tracking-[0px] parent lg:text-[17px]">
          <span className="text-[#1C202B] cursor-pointer font-extrabold hover:text-[#0A327B]">
            {notification.username}
          </span>{" "}
          {notification.action}{" "}
          {notification.post ? (
            <span className="font-bold">{notification.post}</span>
          ) : null}
          {notification.groupName ? (
            <span className="text-[#0A327B] font-bold cursor-pointer">
              {notification.groupName}
            </span>
          ) : null}{" "}
          {!notification.isRead ? <div className="circle"></div> : null}
          <br />
          <span className="text-[#939CAD] mt-[4px] inline-block">
            {notification.time}
          </span>
        </span>
        {notification.userPicture ? (
          <img
            src={notification.userPicture}
            className="h-[39px] w-[39px] ml-auto cursor-pointer lg:h-[45px] lg:w-[45px]"
          />
        ) : null}
      </div>

      {notification.text ? (
        <div
          className="mt-[10px] py-[16px] px-[16px] border-[1px] rounded-[5px] border-[#DDE7EE] 
        w-[263px] ml-auto hover:bg-[#DDE7EE] cursor-pointer lg:w-[565px]"
        >
          {" "}
          <span className="text-[#5E6778] font-normal text-[14px] leading-[100%] tracking-[0px] lg:text-[16px]">
            {notification.text}
          </span>
        </div>
      ) : null}
    </div>
  );
}
