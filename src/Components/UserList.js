import axios from "axios";
import React, { useEffect, useState } from "react";
import UserCards from "./UserCards";

const UserList = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => setUsers(res.data).catch((err) => console.log(err)));
  }, []);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "wrap",
        margin: "1rem",
        gap: "2rem",
      }}
    >
      {users.map((user) => (
        <UserCards user={user} />
      ))}
    </div>
  );
};

export default UserList;
