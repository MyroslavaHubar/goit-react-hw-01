import css from "./Container.module.css";

function Container({ children }) {
  return <container className={css.container}>{children}</container>;
}

export default Container;
