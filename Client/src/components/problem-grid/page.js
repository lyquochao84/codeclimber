import { Fragment, useState } from "react";

import { IoMdArrowDropright, IoMdArrowDropdown } from "react-icons/io";

import HashTagGrid from "../hashtag-grid/page";


export default function ProblemGrid({ solutionData }) {
  const { problem_number, problem_name, difficulty, progress } = solutionData;
  const [openHashTag, setOpenHashTag] = useState(false);

  function openHashHandler() {
    setOpenHashTag(!openHashTag);
  }

  return (
    <Fragment>
      <div className="flex" onClick={openHashHandler}>
        {openHashTag ? <IoMdArrowDropright /> : <IoMdArrowDropdown />}
        <ul>
          <li>{problem_number}</li>
          <li>{problem_name}</li>
          <li>{difficulty}</li>
          <li>{progress}</li>
        </ul>
      </div>
      {!openHashTag && <HashTagGrid solutionData={solutionData} />}
    </Fragment>
  );
}
