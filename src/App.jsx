import { useState } from "react";
import data from "./data.json";
import Notification from "./components/notification";
import Starter from "./components/starter";

function App() {
  const [notifications, setNotifications] = useState(data);

  return (
    <>
      <div>
        {" "}
        <Starter
          notifications={notifications}
          setNotifications={setNotifications}
        />
        <main className="mt-6">
          {" "}
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
      </div>
    </>
  );
}

export default App;
