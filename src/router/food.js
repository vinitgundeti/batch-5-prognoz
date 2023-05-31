import { useState, useEffect } from "react";
import FoodCard from "../components/foodCards";

export default function Food() {
  const [foodData, setFoodData] = useState(null);
  const [action, setAction] = useState({
    loader: true,
    isError: false,
    isOkay: "",
    isNotOkay: "",
  });
  useEffect(() => {
    fetch("http://localhost:3002/fooddata", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        response
          .json()
          .then((data) => {
            console.log("from api :", data);
            setFoodData(data);
              setAction({
                ...action,
                loader: false,
              });
          })
          .catch((err) => {
            console.log(err);
            setAction({
              ...action,
              loader: false,
              isError: true,
            });
          });
      })
      .catch((err) => {
        console.log(err);
        setAction({
          ...action,
          loader: false,
          isError: true,
        });
      });
  }, []);
  console.log("action : ", action);
  if (action.loader) {
    return (
      <div className="foodCardList">
        <h1>Loading...</h1>
      </div>
    );
  }
  if (action.isError) {
    return (
      <div className="foodCardList">
        <h1>Error</h1>
      </div>
    );
  }
  return (
    <div className="foodCardList">
      {foodData.map((item) => (
        <FoodCard
          key={item.id}
          title={item.name}
          image={item.img}
          id={item.id}
        />
      ))}
    </div>
  );
}
