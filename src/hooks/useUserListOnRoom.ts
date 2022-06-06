import { useEffect, useState } from "react";
import { firebase } from "../services/firebase";

// import { Container } from './styles';

type DataProps = Record<
  string,
  {
    name: string;
    status: string;
    zombie: boolean;
  }
>;

type User = {
  uid: string;
  name: string;
  status: string;
  zombie: boolean;
};

type dataUserProps = User[];

export function useUserListOnRoom(roomId: string | undefined) {
  const [dataUserListOnRoom, setdataUserListOnRoom] = useState<dataUserProps>();

  useEffect(() => {
    const usersOnRoomRef = firebase.database().ref(`rooms/${roomId}/`);
    usersOnRoomRef
      .get()
      .then((snapshot) => {
        if (snapshot.exists()) {
          const data: DataProps = snapshot.val();
          const parsedData = Object.entries(data).map(([key, value]) => {
            return {
              uid: key,
              name: value.name,
              status: value.status,
              zombie: value.zombie,
            };
          });
          console.log(parsedData);
          setdataUserListOnRoom(parsedData);
        } else {
          console.log("No data available");
        }
      })
      .catch((error) => {
        console.error(error);
      });
    return usersOnRoomRef.off();
  }, [roomId]);

  return { dataUserListOnRoom };
}
