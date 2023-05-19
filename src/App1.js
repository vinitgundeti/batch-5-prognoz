import "./App.css";
import Header from "./components/header";
import Banner from "./components/banner";
import FoodCard from "./components/foodCards";
import { homePageJson } from "./config/constants";
import Counter from "./components/counter";
import { useState } from "react";

function App() {
  const [value, setValue] = useState(0);

  const increment = () => {
    setValue(value + 1);
  };

  const decrement = () => {
    setValue(value - 1);
  };

  return (
    <div>
      <Header />
      <div>
        <Counter
          value={value}
          onMinus={() => decrement()}
          onPlus={() => increment()}
        />
        <Banner img={homePageJson.bannerImage} />
        <div className="foodCardList">
          {homePageJson.foodItems.map((foodItem) => (
            <FoodCard title={foodItem.title} image={foodItem.img} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
