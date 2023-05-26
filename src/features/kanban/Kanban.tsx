import './App.css'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import Swimlane from "./Swimlane.tsx";
import Card from "./Card.tsx";

const Kanban = () => {

    return (
        <div className='kanban-board'>
            <DndProvider backend={HTML5Backend}>
                <Swimlane id={1}>
                    <Card text='Drag me baby' />
                </Swimlane>
                <Swimlane id={2} />
            </DndProvider>
        </div>
    )
}

export default Kanban;
