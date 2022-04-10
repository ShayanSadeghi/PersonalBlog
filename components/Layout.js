import Nav from "./Nav";
import { Fragment } from "react";
import styles from "../styles/Layout.module.css";

function Layout({ children }) {
  return (
    <Fragment>
      <Nav />
      <div className={styles.container}>
        <main className={styles.main}>{children}</main>
      </div>
    </Fragment>
  );
}

export default Layout;
