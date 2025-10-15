import { useState } from "react";
import data from "./data.json";
import Notification from "./components/notification";
import Starter from "./components/starter";

function App() {
  const [notifications, setNotifications] = useState(data);

  return (
    <div className="bg-white lg:py-[30px] lg:px-[30px] lg:rounded-[15px]">
      <Starter
        notifications={notifications}
        setNotifications={setNotifications}
      />

      <main className="mt-4">
        {notifications.map((notification) => (
          <Notification
            key={notification.id}
            notification={notification}
            notifications={notifications}
            setNotifications={setNotifications}
          />
        ))}
      </main>
    </div>
  );
}

export default App;
