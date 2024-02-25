import styles from "./topic-search-list.module.css";

export default function TopicList({ handleSelectSuggestion, suggestion, index }) {
  return (
    <li className={styles.topic_list_item} key={index} onClick={() => handleSelectSuggestion(suggestion)}>
      #{suggestion}
    </li>
  );
}
