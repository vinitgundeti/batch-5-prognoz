import { useEffect, useState } from "react";

export default function Users() {
  const [userData, setUserData] = useState([]);

  const getData = () => {
    fetch("http://localhost:3002/users", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => {
      res.json().then((response) => {
        setUserData(response);
      });
    });
  };

  useEffect(() => {
    getData();
  }, []);

  console.log(userData);

  const handleEdit = (item) => {
    let request = {
      ...item,
      name: item.name + "_edit",
    };
    fetch(`http://localhost:3002/users/${item.id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(request),
    })
      .then((res) => {
        res.json().then((response) => {
          console.log(response);
          getData();
        });
      })
      .catch((err) => console.log(err));
  };

  const handleDelete = (item) => {
    fetch(`http://localhost:3002/users/${item.id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => {
      res.json().then((response) => {
        console.log(response);
        getData();
      });
    }).catch((err)=> console.log(err));
  };

  return (
    <div>
      {userData.map((item) => (
        <div key={item.id} style={{ border: "1px solid", margin: 10 }}>
          <h3>{item.name}</h3>
          <h3>{item.mobile}</h3>
          <h3>{item.email}</h3>
          <button onClick={() => handleEdit(item)}>Edit</button>
          <button onClick={() => handleDelete(item)}>Delete</button>
        </div>
      ))}
    </div>
  );
}
