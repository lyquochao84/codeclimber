import SolutionItem from "../solution-item/page"

export default function SolutionGrid({ solutionData }) {
    return (
        <ul>
            {solutionData.map((task) => (
                <SolutionItem key={task.id} solutionData={task}/>
            ))}
        </ul>
    )
}