import { useEffect, useState } from "react";
import axios from "axios";

const GetUserData = ({ url }) => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    axios.get(url).then((response) => setUserData(response.data));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      {userData ? (
        <>
          <h2>プロフィール</h2>
          <ul>
            <li>ID: {userData.id}</li>
            <li>Name: {userData.name}</li>
          </ul>
        </>
      ) : (
        <h1>通信中です！</h1>
      )}
    </div>
  );
};

export default GetUserData;
