import SolutionItem from "../solution-item/page";
import styles from './solution-grid.module.css';

export default function SolutionGrid({ solutionData }) {
    return (
        <ul className={styles.solution_list_topic}>
            {solutionData.map((task) => (
                <SolutionItem key={task.id} solutionData={task}/>
            ))}
        </ul>
    )
}