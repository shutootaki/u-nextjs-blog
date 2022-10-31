/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import styles from "./layout.module.css";
import utilStyles from "../styles/utils.module.css";

const Layout = ({ children, home }: any) => {
  const name: string = "shutootaki";

  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className={styles.header}>
        <img
          src="/images/IMG_3469.jpg"
          alt="profile"
          className={styles.Image}
        />
        <h1 className={utilStyles.heading2Xl}>{name}</h1>
      </header>
      <main>{children}</main>
    </div>
  );
};

export default Layout;
