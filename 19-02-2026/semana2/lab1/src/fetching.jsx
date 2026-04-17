import React, { useEffect, useState } from "react";

export default function Fetching() {
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    setUsers(data);
    console.log(data);
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div>
      <h1>Fetch API</h1>

      <div>
        {users.map((user) => (
          <div key={user.id}>
            <h3>{user.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}