//"use client";

import React, { useState } from "react";

export default function MyForm() {
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

  const [selectedTopic, setSelectedTopic] = useState("");
  const [suggestion, setSuggestion] = useState([]);
  const [topicInput, setTopicInput] = useState("");

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

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Problem Number
        <input
          type="text"
          name="number"
          value={formValues.number}
          onChange={handleInputChange}
        />
      </label>

      <label>
        Problem Name
        <input
          type="text"
          name="name"
          value={formValues.name}
          onChange={handleInputChange}
        />
      </label>
      <label>
        Description
        <input
          type="text"
          name="description"
          value={formValues.description}
          onChange={handleInputChange}
        />
      </label>
      <label>
        Time Complexity
        <input
          type="text"
          name="timeComplexity"
          value={formValues.timpeComplexity}
          onChange={handleInputChange}
        />
      </label>
      <label>
        Space Complexity
        <input
          type="text"
          name="spaceComplexity"
          value={formValues.spaceComplexity}
          onChange={handleInputChange}
        />
      </label>
      <label>
        Code
        <input
          type="text"
          name="code"
          value={formValues.code}
          onChange={handleInputChange}
        />
      </label>
      <label>
        Explanation
        <input
          type="text"
          name="explanation"
          value={formValues.explanation}
          onChange={handleInputChange}
        />
      </label>
      <label>
        Topic:
        <input
          type="text"
          value={topicInput}
          onChange={handleTopicInputChange}
          autoComplete="off"
        />
        {suggestion.length > 0 && (
          <ul>
            {suggestion.map((suggestion, index) => (
              <li
                key={index}
                onClick={() => handleSelectSuggestion(suggestion)}
              >
                {suggestion}
              </li>
            ))}
          </ul>
        )}
      </label>
      <ul>
        {formValues.topic.map((topic, index) => (
          <li key={index}>{topic}</li>
        ))}
      </ul>

      <label>
        Difficulty:
        <select
          name="difficulty"
          value={formValues.difficulty}
          onChange={handleInputChange}
        >
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="Hard">Hard</option>
        </select>
      </label>

      <label>
        Related Links
        <input
          type="text"
          name="relatedLinks"
          value={formValues.relatedLinks}
          onChange={handleInputChange}
        />
      </label>
    </form>
  );
}
