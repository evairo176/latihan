import React, { useState } from "react";

const Pinjaman = () => {
  const [pinjaman, setPinjaman] = useState(100000);
  //   const [totalPinjaman, setTotalPinjaman] = useState("");
  const pokok = 1200000;
  const tenor = 12;
  const bunga = 1.0;

  const pinjam_bul = 100000;
  const b_perbul = 1000;
  const total_pin = 101000;
  var total_pinjaman = pinjaman;
  var hasil = [];
  for (var x = 1; x <= 12; x++) {
    var nilai_bunga = (pinjaman + tenor) * bunga;
    total_pinjaman = total_pinjaman + b_perbul;
    hasil.push(
      <tr>
        <td>{x}</td>
        <td>{pinjaman}</td>
        <td>{nilai_bunga}</td>
        <td>{b_perbul}</td>
        <td>{total_pinjaman}</td>
      </tr>
    );
  }
  return (
    <table>
      <tr>
        <th>no</th>
        <th>pinjaman</th>
        <th>bunga perbulan </th>
        <th>total pinjaman</th>
      </tr>
      {hasil}
    </table>
  );
};

export default Pinjaman;
