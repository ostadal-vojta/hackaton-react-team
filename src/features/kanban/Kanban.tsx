import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import Swimlane from "./Swimlane.tsx";
import { getSections } from "../../services/sections.ts";
import { useQuery } from "react-query";

const Kanban = () => {
    const { data: swimlanes } = useQuery('getSections', getSections);

    return (
        <div className='kanban-board'>
            <DndProvider backend={HTML5Backend}>
                {swimlanes && swimlanes.map(swimlane =>
                    <Swimlane key={swimlane.id} {...swimlane} />
                )}
            </DndProvider>


        </div>
    )
}

export default Kanban;
