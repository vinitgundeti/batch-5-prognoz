import React from "react";

class Banner extends React.Component {
  constructor(props) {
    super(props);
    // console.log(this.props)
    this.state = {
      image: this.props.img,
    };
  }

  componentDidMount() {
    this.timer = setInterval(() => {
      console.log("Banner Timer");
    }, 1000);
  }

  componentWillUnmount() {
    console.log("COMPONENT WILL UNMOUNT")
    clearInterval(this.timer);
  }

  render() {
    return (
      <div>
        <img src={this.state.image} alt="banner" width={"100%"} />
      </div>
    );
  }
}

// function Banner({img}){
//     return (
//         <div>
//           <img src={img} alt='banner' width={'100%'}/>
//         </div>
//     )
// }

export default Banner;
