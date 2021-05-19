import styles from "../styles/Loader.module.css";

function Loader() {
  return (
    <div className={styles.wrapperLoader}>
      <div id={styles.loading}></div>
      <div>Please wait for a movment...</div>
    </div>
  );
}

export default Loader;
