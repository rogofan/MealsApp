import React, { Fragment } from "react";
import mealsImage from "../../assets/meals.jpg";
import style from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <Fragment>
      <header className={style.header}>
        <h1>ReactMeal</h1>
        <HeaderCartButton onClick={props.onShow} />
      </header>
      <div className={style["main-image"]}>
        <img src={mealsImage} alt="Lets get meals" />
      </div>
    </Fragment>
  );
};
export default Header;
