import React from "react";

class Deret extends React.Component {
  deretA = () => {
    var jml_deret = 10,
      i = 1,
      nilai1 = 13,
      nilai2 = 18;

    var hasil = [];
    while (i <= jml_deret) {
      i++;
      nilai1 = nilai1 + nilai2;
      nilai2 = nilai2 + nilai1;
      hasil.push(nilai1 + " " + nilai2 + " ");
    }
    // setShasil(hasil);
    // console.log(hasil[0]);
    return hasil;
  };

  render() {
    return <div>{this.deretA()}</div>;
  }
}

export default Deret;
