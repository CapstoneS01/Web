import toast, { Toaster } from "react-hot-toast";
import { useEffect } from "react";
import { useKnockFeed } from "@knocklabs/react-notification-feed";

const Notification = () => {
  const { feedClient } = useKnockFeed();

  const onNotificationsReceived = ({ items }: { items: any }) => {
    items.forEach((notification: any) => {
      toast(notification.blocks[0].rendered, { id: notification.id });
    });

    feedClient.markAsSeen(items);
  };

  useEffect(() => {
    feedClient.on("items.received.realtime", onNotificationsReceived);

    return () =>
      feedClient.off("items.received.realtime", onNotificationsReceived);
  }, [feedClient]);

  return <Toaster />;
};

export default Notification;
