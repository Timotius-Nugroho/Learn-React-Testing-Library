import React, { useState } from "react";
import { testApi } from "../services/dummy";

function Dummy() {
  const [data, setData] = useState([]);

  const dummFunc = async () => {
    testApi()
      .then((res) => {
        // console.log(res);
        setData(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <h3>DUMMY API</h3>
      <button onClick={dummFunc}>GET</button>
      {data.map((e, i) => (
        <p key={i}>{e.name}</p>
      ))}
    </>
  );
}

export default Dummy;
