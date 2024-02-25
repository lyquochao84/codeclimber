"use client";
import { useState, useEffect } from "react";

import SolutionGrid from "@/components/solution-grid/page";

import Form from "@/components/form/page";

import Modal from "@/components/modal/page";

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
  const [solutionData, setSolutionData] = useState();
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    getData()
      .then((data) => {
        setSolutionData(data);
      })
      .catch((error) => {
        console.error("Error in Home component:", error);
      });
  }, []);

  // handle open modal
  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <div>
      <button onClick={handleOpenModal}>Open Form</button>
      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        <Form />
      </Modal>
      <h1>Home Page</h1>
      {solutionData ? (
        <SolutionGrid solutionData={solutionData} />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
