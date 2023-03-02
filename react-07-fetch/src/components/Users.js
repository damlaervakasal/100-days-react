import React from "react";
import { useEffect, useState } from "react";

import axios from "axios";

function Users() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios("https://jsonplaceholder.typicode.com/users")
      // .then((res) => res.json()) axios kullandığımız için bu işleme ihtiyacımız kalmadı.
      //  fetch kullansaydık bunu da kullanmamız gerekecekti. fetch i kullandığımız zaman bize body
      //  json olarak değil de string ifade olarak veriyor. Axios ta ise direk bize obje olarak dönüyor.
      .then((res) => setUsers(res.data))
      .catch((e) => console.log(e))
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <div>
      <h3>Users</h3>

      {isLoading && <div>Loading...</div>}

      {users.map((user) => (
        <div key={user.id}>{user.name}</div>
      ))}
    </div>
  );
}

export default Users;
