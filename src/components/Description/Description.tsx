import css from "./description.module.css";

export const Description = () => {
  return (
    <div className={css.container}>
      <p className={css.text}>
        Minimal boilerplate for Webpack React TypeScript with css modules and hot reload
      </p>
    </div>
  );
};
