import "./notificationBtn.css";

function NotificationBtn() {
  return (
    <button onClick={() => console.log("Click")} data-notification-count="5">
      Bell Icon
    </button>
  );
}

export default NotificationBtn;
