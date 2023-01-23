import axios from "axios";
import { useEffect, useState } from "react";
const ProfileList = () => {
  const url = "https://randomuser.me/api/?nat=in&results=5&page=2";

  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get(url)
      .then((result) => {
        setUsers(result.data.results);
      })
      .catch((err) => {
        alert(err.message);
      });
  }, []);

  return <>{JSON.stringify(users)}</>;
};
export default ProfileList;