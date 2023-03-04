import { useEffect, useState } from "react";
import React from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

function User() {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState({});

  const { id } = useParams();

  useEffect(() => {
    axios(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => setUser(res.data))
      .finally(() => setLoading(false));
  }, [id]);

  // sadece mount olduğu anda çalışıyor

  return (
    <div>
      <h1>User Detail</h1>
      {loading && <div> Loading...</div>}
      {!loading && <code>{JSON.stringify(user)}</code>}
      <br />
      <br />
      <Link to={`/user/${parseInt(id) + 1}`}>
        Next User ({parseInt(id) + 1}){" "}
      </Link>
      {/* user id leri ardışık gittiği için böyle bir yazım şekli kullandık int
      çevirerek bir sornarki id ye geçmesini sağladık */}
    </div>
  );
}

export default User;
