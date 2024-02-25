import styles from "./hashtag-grid.module.css";

export default function HashTagGrid({ solutionData }) {
  const { topic } = solutionData;

  return (
    <div className={styles.hashtag_wrapper}>
      <span className={styles.hashtag_title}>#{topic}</span>
    </div>
  );
}
