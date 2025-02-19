import { useState } from "react";
import "./App.css";
import data from "./data.json";
import Notification from "./components/notification/notification";
import Starter from "./components/starter/starter";

function App() {
  const [notifications, setNotifications] = useState(data);

  return (
    <>
      <Starter
        notifications={notifications}
        setNotifications={setNotifications}
      />
      <main>
        {notifications.map((notification) => {
          return (
            <Notification
              notification={notification}
              key={notification.id}
              notifications={notifications}
              setNotifications={setNotifications}
            />
          );
        })}
      </main>
    </>
  );
}

export default App;
