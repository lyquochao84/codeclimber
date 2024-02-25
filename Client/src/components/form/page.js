//"use client";

import React, { useState } from "react";

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

export default function MyForm() {
  const [formValues, setFormValues] = useState({
    number: "",
    name: "",
    prompt: "",
    timpeComplexity: "",
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
const [topicInput , setTopicInput] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formValues);
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);

    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  //handle Topic Set
  const handleTopicInputChange = (e) => {
    let userInput = e.target.value;
    setTopicInput(userInput);
    setSuggestion(topicOptions.filter(topic =>topic.toLowerCase().includes(userInput.toLowerCase())).splice(0,5))
  };

  const handleSelectSuggestion = (topic) =>{
    if (!formValues.topic.includes(topic)) {
      setFormValues(prevValues =>({
        ...prevValues,
        topic: [...prevValues.topic, topic]
      }))
    }
    setTopicInput('')
    setSuggestion([])
  }

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
}

