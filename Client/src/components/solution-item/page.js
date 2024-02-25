import { Fragment, useState } from "react";
import styles from "./solution-item.module.css";
import { IoMdArrowDropright, IoMdArrowDropdown } from "react-icons/io";
import ProblemGrid from "../problem-grid/page";

export default function SolutionItem({ solutionData }) {
  const [openSubCategories, setOpenSubCategories] = useState(false);
  let { topic } = solutionData;

  // Ensuring topic is treated as an array and then processed
  if (!Array.isArray(topic)) {
    // If topic is not an array, make it an array for consistency
    topic = [topic];
  }

  // If topic is an array, decide what to display
  const displayTopic = topic.length > 1 ? topic[0] : topic.join('');

  function openSubHandler() {
    setOpenSubCategories(!openSubCategories);
  }

  return (
    <Fragment>
      <div className={styles.topic_wrapper} onClick={openSubHandler}>
        {openSubCategories ? (
          <IoMdArrowDropright className={styles.topic_icon} />
        ) : (
          <IoMdArrowDropdown className={styles.topic_icon} />
        )}
        <h2 className={styles.topic_title}>{displayTopic}</h2>
      </div>
      {!openSubCategories && <ProblemGrid solutionData={solutionData} />}
    </Fragment>
  );
}