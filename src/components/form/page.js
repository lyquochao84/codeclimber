//"use client";
import React, { useState } from "react";

import styles from "./form.module.css";
import TopicList from "../topic-search-list/page";

import { TiDeleteOutline } from "react-icons/ti";

const topicOptions = [
  "Array",
  "String",
  "Hash Table",
  "Dynamic Programming",
  "Math",
  "Sorting",
  "Greedy",
  "Depth-First-Search",
  "Binary Search",
  "Database",
  "Breadth-First Search",
  "Tree",
  "Matrix",
  "Two Pointers Bit Manipulation",
  "Binary Tree",
  "Heap (Priority Queue)",
  "Stack",
  "Prefix Sum",
  "Simulation",
  "Graph",
  "Desgin",
  "Counting",
  "Sliding Window",
  "Bracktracking",
  "Union Find",
  "Enumeration",
  "Linked List",
  "Ordered Set",
  "Monotonic Stack",
  "Number Theory",
  "Trie",
  "Divide and Conquer",
  "Recursion",
  "Bitmask",
  "Queue",
  "Binaray Search Tree",
  "Segment Tree",
  "Memoriztion",
  "Geometry",
];

export async function saveData(form) {
  const response = await fetch("http://localhost:3001/solution/save", {
    method: "POST",
    body: JSON.stringify({ form }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  try {
    const data = await response.json();
    if (!response.ok) {
      throw new Error(data.message || "Something went wrong");
    }
    return data;
  } catch (error) {
    // Handle non-JSON responses
    console.error("Non-JSON response:", response.statusText);
    return { message: "Data Saved" }; // Assuming a success message
  }
}

export default function MyForm({ isOpen, onClose }) {
  const [formValues, setFormValues] = useState({
    number: "",
    name: "",
    prompt: "",
    timeComplexity: "",
    spaceComplexity: "",
    code: "",
    explanation: "",
    topic: [],
    difficulty: "easy",
    progress: "pending",
    relatedLinks: "",
  });

  const [selectedTopic, setSelectedTopic] = useState("");
  const [suggestion, setSuggestion] = useState([]);
  const [topicInput, setTopicInput] = useState("");
  const [savedTask, setSavedTask] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formValues);
  };

  const handleInputChange = (e) => {
    //setInputValue(e.target.value);

    const { name, value } = e.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  //handle Topic Set
  const handleTopicInputChange = (e) => {
    let userInput = e.target.value;
    setTopicInput(userInput);
    setSuggestion(
      topicOptions
        .filter((topic) =>
          topic.toLowerCase().includes(userInput.toLowerCase())
        )
        .splice(0, 5)
    );
  };

  const handleSelectSuggestion = (topic) => {
    if (!formValues.topic.includes(topic)) {
      setFormValues((prevValues) => ({
        ...prevValues,
        topic: [...prevValues.topic, topic],
      }));
    }
    setTopicInput("");
    setSuggestion([]);
  };

  const handleAddTopic = (e) => {
    e.preventDefault();
    // prevent adding empty or dublicate hobbies
    if (!selectedTopic && !formValues.topics.includes(selectedTopic)) {
      setFormValues((prevValues) => ({
        ...prevValues,
        topics: [...formValues.topics, topicInput],
      }));
      setTopicInput("");
    }
  };

  const saveButtonHandler = async (e) => {
    e.preventDefault();

    try {
      const result = await saveData(formValues);
      setSavedTask(true);
    } catch (error) {
      console.log(error);
      setSavedTask(false);
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.problem_input_name_number}>
        <label className={styles.label}>
          <span>Problem Number</span>
          <br />
          <input
            className={styles.input}
            type="text"
            name="number"
            value={formValues.number}
            onChange={handleInputChange}
          />
        </label>

        <label className={styles.label}>
          <span>Problem Name</span>
          <br />
          <input
            className={styles.input}
            type="text"
            name="name"
            value={formValues.name}
            onChange={handleInputChange}
          />
        </label>
      </div>

      <div className={styles.problem_input_description}>
        <label className={styles.label}>
          <span>Description</span>
          <br />
          <textarea
            className={styles.text_area}
            type="text"
            name="description"
            value={formValues.description}
            onChange={handleInputChange}
          />
        </label>
      </div>

      <div className={styles.problem_input_complexities}>
        <label className={styles.label}>
          <span>Time Complexity</span>
          <br />
          <input
            className={styles.input}
            type="text"
            name="timeComplexity"
            value={formValues.timeComplexity}
            onChange={handleInputChange}
          />
        </label>

        <label className={styles.label}>
          <span>Space Complexity</span>
          <br />
          <input
            className={styles.input}
            type="text"
            name="spaceComplexity"
            value={formValues.spaceComplexity}
            onChange={handleInputChange}
          />
        </label>
      </div>

      <div className={styles.problem_input_code}>
        <label className={styles.label}>
          <span>Code</span>
          <br />
          <textarea
            className={styles.text_area}
            type="text"
            name="code"
            value={formValues.code}
            onChange={handleInputChange}
          />
        </label>
      </div>

      <div className={styles.problem_input_explanation}>
        <label className={styles.label}>
          <span>Explanation</span>
          <br />
          <textarea
            className={styles.text_area}
            type="text"
            name="explanation"
            value={formValues.explanation}
            onChange={handleInputChange}
          />
        </label>
      </div>

      <label className={styles.label}>
        <span>Topic</span>
        <br />
        <div className={styles.selected_topics_wrap}>
          <textarea
            className={styles.text_area_topic}
            type="text"
            value={topicInput}
            onChange={handleTopicInputChange}
            autoComplete="off"
          />
          <ul className={styles.selected_topics_list}>
            {formValues.topic.map((topic, index) => (
              <li className={styles.selected_topic} key={index}>
                <TiDeleteOutline className={styles.select_topic_cancel_icon} />
                {topic}
              </li>
            ))}
          </ul>
        </div>
        {suggestion.length > 0 && (
          <ul className={styles.suggestion_list}>
            {suggestion.map((suggestion, index) => (
              <TopicList
                handleSelectSuggestion={handleSelectSuggestion}
                key={index}
                suggestion={suggestion}
                index={index}
              />
            ))}
          </ul>
        )}
      </label>

      <div className={styles.problem_input_options}>
        <label className={styles.label}>
          <span>Difficulty</span>
          <br />
          <select
            className={styles.select}
            name="difficulty"
            value={formValues.difficulty}
            onChange={handleInputChange}
          >
            <option className={styles.option_choose} value="easy">
              Easy
            </option>
            <option className={styles.option_choose} value="medium">
              Medium
            </option>
            <option className={styles.option_choose} value="Hard">
              Hard
            </option>
          </select>
        </label>

        <label className={styles.label}>
          <span>Progress</span>
          <br />
          <select
            className={styles.select}
            name="progress"
            value={formValues.progress}
            onChange={handleInputChange}
          >
            <option className={styles.option_choose} value="pending">
              Pending
            </option>
            <option className={styles.option_choose} value="done">
              Done
            </option>
          </select>
        </label>
      </div>

      <div className={styles.problem_input_related_link}>
        <label className={styles.label}>
          <span>Related Links</span>
          <br />
          <textarea
            className={styles.text_area}
            type="text"
            name="relatedLinks"
            value={formValues.relatedLinks}
            onChange={handleInputChange}
          />
        </label>
      </div>

      <div className={styles.button_container}>
        <button onClick={saveButtonHandler} className={styles.saveButton}>
          Save
        </button>
        <button onClick={onClose} className={styles.closeButton}>
          Close
        </button>
      </div>
    </form>
  );
}
