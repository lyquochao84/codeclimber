"use client";
import { useState, useEffect, Fragment } from "react";
import { useModal } from "@/context/ModalContext";

import SolutionGrid from "@/components/solution-grid/page";

import Form from "@/components/form/page";
import Modal from "@/components/modal/page";

import SideBar from "@/components/sidebar/page"

async function getData() {
  try {
    const data = await fetch("http://localhost:3001/solution/display");
    const solutionData = await data.json();
    return solutionData;
  } catch (error) {
    console.log("failed to fetch", error);
    throw error;
  }
}


export default function Home() {
  const { isModalOpen, closeModal } = useModal();
  const [solutionData, setSolutionData] = useState();
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);

  useEffect(() => {
    getData()
      .then((data) => {
        setSolutionData(data);
      })
      .catch((error) => {
        console.error("Error in Home component:", error);
      });
  }, []);

  return (
    <Fragment>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <Form isOpen={isModalOpen} onClose={closeModal} />
      </Modal>

      {solutionData ? (
        <SolutionGrid solutionData={solutionData} />
      ) : (
        <p>Loading...</p>
      )}
    </Fragment>
  );
}
