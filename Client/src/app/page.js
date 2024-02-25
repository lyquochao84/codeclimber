"use client";
import { useState, useEffect } from "react";
import styles from "./homepage.module.css";
import SolutionGrid from "@/components/solution-grid/page";

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
  const [openSubCategories, setOpenSubCategories] = useState(false);
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
      <h1>Home Page</h1>
      {solutionData ? (
        <div>
          <SolutionGrid solutionData={solutionData} />
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
