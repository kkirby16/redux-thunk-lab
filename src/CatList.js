// write your CatList component here

import React, { Component } from "react";

class CatList extends Component {
  //   componentDidMount() {
  //     console.log("CATLISTPROPS:", this.props.catPics);
  //   }

  renderCats = () => {
    return this.props.catPics.map((catPic) => {
      return <img src={catPic.url}></img>;
    });
  };

  render() {
    console.log("CATLISTPROPS:", this.props.catPics);
    return <div>{this.renderCats()}</div>;
  }
}

export default CatList;
