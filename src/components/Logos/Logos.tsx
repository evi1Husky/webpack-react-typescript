import css from "./logos.module.css";
import webpackLogo from "../../assets/images/webpack.svg";
import reactLogo from "../../assets/images/react.svg";
import typescriptLogo from "../../assets/images/typescript.svg";

export const Logos = () => {
  return (
    <div className={css.container}>
      <img className={css.logo} src={webpackLogo}></img>
      <img className={css.logo} src={reactLogo}></img>
      <img
        className={`${css.logo} ${css.typescriptLogo}`}
        src={typescriptLogo}
      ></img>
    </div>
  );
};
