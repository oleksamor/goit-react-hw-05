import React from "react";
import s from "./Loader.module.css";
import { BallTriangle } from "react-loader-spinner";

const Loader = () => (
  <div className={s.Loader}>
    <BallTriangle
      height={100}
      width={100}
      radius={5}
      color="#4fa94d"
      ariaLabel="ball-triangle-loading"
      wrapperStyle={{}}
      wrapperClass=""
      visible={true}
    />
  </div>
);

export default Loader;
