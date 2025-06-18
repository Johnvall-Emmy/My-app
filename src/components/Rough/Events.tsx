import React, { useState } from "react";
import img1 from "./../../assets/service-1.jpg";
import img2 from "./../../assets/service-2.jpg";
import img3 from "./../../assets/service-3.jpg";
import { DataApi } from "../../Data/Data";

const Events = () => {
  const [Info, setInfo] = useState("welcome");
  const [dataInfo, setDataInfo] = useState<any>([]);
  console.log(dataInfo);

  const fetchData = () => {
    setDataInfo([
      {
        id: 1,
        title: "Graphics",
        image: img1,
        desc: "Focus on how you can help and benefit your user. Use simple words so that you don't confuse people.",
      },

      {
        id: 2,
        title: "Photography",
        image: img2,
        desc: "Focus on how you can help and benefit your user. Use simple words so that you don't confuse people.",
      },
      {
        id: 3,
        title: "Videography",
        image: img3,
        desc: "Focus on how you can help and benefit your user. Use simple words so that you don't confuse people.",
      },
    ]);
  };
  const handleClick = () => {
    setInfo("Bye Bye");
  };
  return (
    <div>
      <button onClick={handleClick}>
        Click: <span style={{ color: "green", fontSize: "20px" }}>{Info}</span>
      </button>
      <br />
      <button onClick={fetchData} style={{ cursor: "pointer" }}>
        Display Data{" "}
      </button>

      <div style={{ display: "flex" }}>
        {dataInfo.map((Item: any) => (
          <>
            <h1>{Item.id}</h1>
            <h1>{Item.title}</h1>
            <img src={Item.image} />
            <p>{Item.desc}</p>
          </>
        ))}
      </div>
    </div>
  );
};

export default Events;
//  <Any>can allow variable either String, Boolean, Number etc without typescript interferring
// const sampleFunction = () => {
// }
