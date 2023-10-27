import css from "./headline.module.css";
import { Description } from "../Description/Description";

export const Headline = () => {
  return (
    <div className={css.container}>
      <p className={css.headline}>Webpack + React + TypeScript</p>
      <Description />
    </div>
  );
};
