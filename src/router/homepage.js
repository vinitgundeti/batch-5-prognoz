import Banner from "../components/banner";
import Counter from "../components/counter";
import FoodCard from "../components/foodCards";
import { homePageJson } from "../config/constants";
import { useState, useEffect } from "react";

function Home() {
  const [isLoader, setIsLoader] = useState(true);
  const [data, setData] = useState(null);
  const [tab, setTab] = useState("Veg");
  const [value, setValue] = useState(0);

  useEffect(() => {
    // componentDidMount
    console.log("USEEFFECT");
    setTimeout(() => {
      setData(homePageJson.foodItems);
      setIsLoader(false);
    }, 0);
  }, []);

  useEffect(() => {
    // componentDidUpdate
    console.log("Tab updated", tab);
    let originalData = [...homePageJson.foodItems];
    let filteredData = [];
    if (tab === "Veg") {
      filteredData = originalData.filter((item) => item.isVeg);
    } else {
      filteredData = originalData.filter((item) => item.isVeg === false);
    }
    console.log("filterdata : ", filteredData);
    setData(filteredData);
  }, [tab]);

  return (
    <div className="appRoot">
      {isLoader ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          <div>
            {/* <Banner img={data.bannerImage} /> */}
            {/* {value <= 10 ? (
              <Counter
                value={value}
                onMinus={() => setValue(value - 1)}
                onPlus={() => setValue(value + 1)}
              />
            ) : null} */}
            {/* <div style={{ textAlign: "center" }}>
              <button
                style={{
                  marginRight: 10,
                  backgroundColor: tab === "Veg" ? "Yellow" : "gray",
                }}
                onClick={() => setTab("Veg")}
              >
                Veg
              </button>
              <button
                onClick={() => setTab("Non Veg")}
                style={{
                  backgroundColor: tab === "Non Veg" ? "Yellow" : "gray",
                }}
              >
                Non Veg
              </button>
            </div> */}
          </div>
        </div>
      )}
    </div>
  );
}

export default Home;
