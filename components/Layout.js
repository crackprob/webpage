import Head from "next/head";
import styles from "../styles/Layout.module.css";

function Layout({ children }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Crackprob</title>
        <meta name="description" content="Crackprob's official page" />
      </Head>
      <main className={styles.main}>
        <h1>Welcome to Crackprob</h1>
        <h4>Our website is still under construction...</h4>
      </main>
    </div>
  );
}

export default Layout;
