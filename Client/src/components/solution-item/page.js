export default function SolutionItem({ solutionData }) {
  const {
    problem_number,
    problem_name,
    problem_prompt,
    time_complexity,
    space_complexity,
    code,
    explanation,
    topic,
    progress,
    difficulty,
    related_link,
  } = solutionData;

  return (
    <div>
        <p>{problem_number}</p>
        <p>{problem_name}</p>
        <p>{problem_prompt}</p>
        <p>{time_complexity}</p>
        <p>{space_complexity}</p>
        <p>{code}</p>
        <p>{explanation}</p>
        <p>{topic}</p>
        <p>{progress}</p>
        <p>{difficulty}</p>
        <p>{related_link}</p>
    </div>
  )
}
