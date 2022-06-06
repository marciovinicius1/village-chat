import { firebase } from "../services/firebase";

import { fromEvent, throttleTime, timer } from "rxjs";
import { useAuth } from "./useAuth";

export function useChangeStatusUser(roomId: string | undefined) {
  const { user } = useAuth();
  const uid = user?.id;

  function updateStatus(status: string) {
    if (!uid) return;
    const updateStatus = firebase
      .database()
      .ref(`rooms/${roomId}/${uid}`)
      .update({
        zombie: user.zombie,
        name: user.name,
        status: status,
      });
  }

  function updateOnConnect() {
    firebase
      .database()
      .ref(".info/connected")
      .on("value", function (snapshot) {
        let status = snapshot.val() ? "online" : "offline";
        updateStatus(status);
      });
  }

  function updateOnDisconnect() {
    firebase
      .database()
      .ref()
      .child(`users/${uid}`)
      .onDisconnect()
      .update({ status: "offline" });
  }

  function updateOnAway() {
    const mouseMoveOnDocument = fromEvent(document, "mousemove").pipe(
      throttleTime(2000)
    );
    const timerOn = timer(5000);

    const mouseMoveSubscription = mouseMoveOnDocument.subscribe(() => {
      updateStatus("online");
      resetTimer();
    });

    function resetTimer() {
      const subscriptionTimer = timerOn.subscribe(() => {
        updateStatus("away");
      });
      if (subscriptionTimer) {
        subscriptionTimer.unsubscribe;
      }
    }
  }

  function signOutStatusUser() {
    updateStatus("offline");
  }

  return {
    updateStatus,
    updateOnConnect,
    updateOnDisconnect,
    updateOnAway,
    signOutStatusUser,
  };
}
