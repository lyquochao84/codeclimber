import { Fragment, useState } from "react";

import { IoMdArrowDropright, IoMdArrowDropdown } from "react-icons/io";
import ProblemGrid from "../problem-grid/page";

export default function SolutionItem({ solutionData }) {
  const [openSubCategories, setOpenSubCategories] = useState(false);
  const { topic } = solutionData;

  function openSubHandler() {
    setOpenSubCategories(!openSubCategories);
  }

  return (
    <Fragment>
      <div onClick={openSubHandler}>
        {openSubCategories ? <IoMdArrowDropright /> : <IoMdArrowDropdown />}
        {topic}
      </div>
      {!openSubCategories && <ProblemGrid solutionData={solutionData} />} 
    </Fragment>
  );
}
