/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from "react";
import style from "./admin.module.css";
export default function Admin() {
  const [formData, setFormData] = useState({
    name: "",
    img: "",
    isVeg: true,
    price: 0,
  });

  const handleInputChange = (e) => {
    let inputName = e.target.name;
    setFormData({
      ...formData,
      [inputName]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);

    fetch("http://localhost:3002/fooddata", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) =>
        response.json().then((data) => {
          alert("Data added successfully");
          setFormData({
            name: "",
            img: "",
            isVeg: true,
            price: 0,
          });
        })
      )
      .catch((err) => console.log(err));
  };
  return (
    <div className={style.container}>
      <h1>Admin Panel</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Enter Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="img">Enter Image Url</label>
          <input
            type="text"
            name="img"
            value={formData.img}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="price">Enter Price</label>
          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Select </label>
          <a
            className={`${style.button} ${
              formData.isVeg ? style.activeBtn : ""
            }`}
            onClick={() =>
              setFormData({
                ...formData,
                isVeg: true,
              })
            }
          >
            Veg
          </a>
          <a
            className={`${style.button} ${
              !formData.isVeg ? style.activeBtn : ""
            }`}
            onClick={() =>
              setFormData({
                ...formData,
                isVeg: false,
              })
            }
          >
            Non Veg
          </a>
        </div>
        <button className={style.submitBtn} type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}
