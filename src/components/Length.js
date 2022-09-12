import React from "react";

class Length extends React.Component {
  bagianA = () => {
    var n = 5;
    var nilai = "1";
    console.log(nilai.length);
    if (nilai.length <= 1) {
      return "00" + nilai + "00";
    } else {
      return "error";
    }
  };

  render() {
    return (
      <div>
        bagian a <hr />
        {this.bagianA()}
      </div>
    );
  }
}

export default Length;
