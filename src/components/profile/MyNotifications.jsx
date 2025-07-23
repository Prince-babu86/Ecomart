import React from "react";
import { useData } from "../../context/DataContext";
import moment from "moment";

const MyNotifications = () => {
  let { loggeduser } = useData();
  let notifications = loggeduser.notifications;

  return (
    <div className="h-[90vh] flex-grow p-6 bg-white pb-32 overflow-y-auto">
      <h1 className="text-2xl font-semibold mb-6">Notifications</h1>
      <div className="space-y-4">
        {notifications.reverse().map((note,id) => (
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
              <h2 className="font-medium text-lg">{note.tittle}</h2>
              <p className="text-sm text-gray-500 mb-1">{note.message}</p>
              <span className="text-xs text-gray-400">
                {moment(note.createdAt).fromNow()}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyNotifications;
