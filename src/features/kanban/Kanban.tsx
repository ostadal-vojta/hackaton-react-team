import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import Swimlane from "./Swimlane.tsx";
import Card from "./Card.tsx";

const Kanban = () => {
    return (
        <div className='kanban-board'>
            <DndProvider backend={HTML5Backend}>
                <Swimlane id={1} defaultName='TO DO'>
                    <Card text='Drag me baby' />
                </Swimlane>
                <Swimlane id={2} defaultName='In progress' />
            </DndProvider>
        </div>
    )
}

export default Kanban;
