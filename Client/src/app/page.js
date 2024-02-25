"use client";
import { useState, useEffect } from "react";

import SolutionGrid from "@/components/solution-grid/page";

import Form from "@/components/form/page";

async function getData() {
  try {
    const data = await fetch("http://localhost:3001/solution/display");
    const solutionData = await data.json();
    return solutionData;
  } 
  catch (error) {
    console.log("failed to fetch", error);
    throw error;
  }
}

export default function Home() {
  const [solutionData, setSolutionData] = useState();

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
    <div>
      <Form></Form>
      <h1>Home Page</h1>
      {solutionData ? (
        <SolutionGrid solutionData={solutionData} />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
