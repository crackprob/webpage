import Link from "next/link";
import styles from "../styles/Error.module.css";

export default function error() {
  return (
    <div className={styles.container}>
      <h1>Ooops Page not found</h1>
      <p>
        Please <Link href="/">Click Here</Link> to go back
      </p>
    </div>
  );
}
