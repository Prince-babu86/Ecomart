import React from "react";
import { useData } from "../../context/DataContext";
import moment from "moment";
import { BellOff } from "lucide-react";

const MyNotifications = () => {
  let { loggeduser } = useData();
  let notifications = loggeduser?.notifications;

  return (
    <div className="mynotifications_page min-h-[90vh] flex-grow p-6 bg-[#f8f9fb] text-[#222] pb-32">
      <h1 className="text-2xl font-semibold mb-6">Notifications</h1>
      <div className="space-y-4">
        {notifications?.length > 0 ? <div className="flex flex-col gap-3">{notifications.reverse().map((note,id) => (
          <div
            key={id}
            className="my_profile_notificstions flex items-start gap-4 bg-white p-4 rounded-xl shadow-2xl"
          >
            {note.images && (
              <img
                src={note.images}
                alt="Notification"
                className="w-20 h-20 rounded-md object-cover"
              />
            )}
            <div>
              <h2 className="notif_tittle font-medium text-lg">{note.tittle}</h2>
              <p className="text-sm text-gray-500 mb-1">{note.message}</p>
              <span className="text-xs text-gray-400">
                {moment(note.createdAt).fromNow()}
              </span>
            </div>
          </div>
        ))}</div> :  <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-6 bg-white rounded-xl shadow-sm border border-gray-100">
      <div className="bg-gray-100 p-5 rounded-full mb-4">
        <BellOff className="w-10 h-10 text-gray-400" />
      </div>
      <h2 className="text-xl font-semibold text-gray-800">No Notifications</h2>
      <p className="text-gray-500 text-sm mt-1">
        You're all caught up. We'll let you know when something arrives!
      </p>

      <img
        src="https://illustrations.popsy.co/gray/bell.svg"
        alt="No notifications"
        className="mt-8 w-52"
      />
    </div>}
      </div>
    </div>
  );
};

export default MyNotifications;
