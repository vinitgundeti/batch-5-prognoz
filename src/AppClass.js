import React from "react";
import Banner from "./components/banner";
import { homePageJson } from "./config/constants";
import Counter from "./components/counter";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "John",
      age: 25,
      education: "BE",
      salary: 30000,
      loader: true,
      value: 0,
      hideBanner: false,
    };
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {
    setTimeout(() => {
      let response = {
        userName: "Bob",
        age: 23,
        education: "BSC IT",
        salary: 30000,
      };

      this.setState({
        userName: response.userName,
        loader: false,
      });
    }, 3000);
  }

  onSubmit() {
    console.log("Your Form Submitted : ", this.state);
  }

  render() {
    return (
      <div>
        {this.state.hideBanner === false && (
          <Banner img={homePageJson.bannerImage} />
        )}
        <button onClick={() => this.setState({ hideBanner: true })}>
          Hide Banner
        </button>

        {/* <Counter
          value={this.state.value}
          onPlus={() => this.setState({ value: this.state.value + 1 })}
          onMinus={() => this.setState({ value: this.state.value - 1 })}
        /> */}
        {this.state.loader === true ? (
          <h1>Loading...</h1>
        ) : (
          <div>
            <h3>User Name : {this.state.userName}</h3>
            <h3>Age : {this.state.age}</h3>
            <h3>education : {this.state.education}</h3>
            <h3>salary : {this.state.salary}</h3>
          </div>
        )}
        <button onClick={this.onSubmit}>Submit</button>
      </div>
    );
  }
}

export default App;
