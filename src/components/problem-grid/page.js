import { Fragment, useState } from "react";

import styles from './problem-grid.module.css';
import { IoMdArrowDropright, IoMdArrowDropdown } from "react-icons/io";

import HashTagGrid from "../hashtag-grid/page";


export default function ProblemGrid({ solutionData }) {
  const { problem_number, problem_name, difficulty, progress } = solutionData;
  const [openHashTag, setOpenHashTag] = useState(false);

  function openHashHandler() {
    setOpenHashTag(!openHashTag);
  }

  let difficultyStyle;
  if (difficulty === 'Easy' || difficulty === 'easy') {
    difficultyStyle = styles.easy_style;
  }
  else if (difficulty === 'Medium' || difficulty === 'medium') {
    difficultyStyle = styles.medium_style;
  }
  else {
    
  }


  return (
    <Fragment>
      <div className={styles.problem_container} onClick={openHashHandler}>
        {openHashTag ? <IoMdArrowDropright className={styles.problem_icon}/> : <IoMdArrowDropdown className={styles.problem_icon}/>}
        <ul className={styles.problem_list}>
          <li className={styles.problem_item}>{problem_number}</li>
          <li className={styles.problem_item}>{problem_name}</li>
          <li className={styles.problem_item}>{difficulty}</li>
          <li className={styles.problem_item}>{progress}</li>
        </ul>
      </div>
      {!openHashTag && <HashTagGrid solutionData={solutionData} />}
    </Fragment>
  );
}
