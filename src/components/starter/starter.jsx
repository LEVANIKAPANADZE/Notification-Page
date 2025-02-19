import React from "react";

export default function starter({ notifications, setNotifications }) {
  const counter = notifications.filter(
    (notification) => !notification.isRead
  ).length;

  function markAllAsRead() {
    const newNotifications = notifications.map((notification) => {
      return { ...notification, isRead: true };
    });
    setNotifications(newNotifications);
  }

  return (
    <header>
      {" "}
      <section>
        <h2>Notifications {counter}</h2>
        <p onClick={markAllAsRead}>Mark all as read</p>
      </section>
    </header>
  );
}
