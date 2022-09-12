import React from "react";
import Deret from "./components/Deret";
import Length from "./components/Length";
import Pinjaman from "./components/Pinjaman";

const App = () => {
  return (
    <div>
      <Length />
      <hr />
      <Pinjaman />
      <hr />
      <Deret />
    </div>
  );
};

export default App;
