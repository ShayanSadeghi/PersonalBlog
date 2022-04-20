import Nav from "./Nav";
import { Fragment } from "react";
import styles from "../styles/Layout.module.css";
import Footer from "./Footer";

function Layout({ children }) {
  return (
    <Fragment>
      <Nav />
      <div className={styles.container}>
        <main className={styles.main}>{children}</main>
      </div>
      <Footer />
    </Fragment>
  );
}

export default Layout;
