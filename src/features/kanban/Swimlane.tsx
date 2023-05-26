import {useDrop} from "react-dnd";
import {useState} from "react";
import {Field, ISwimlane} from "../../types/types.ts";
import Card from "./Card.tsx";

const handleDrop = (laneId: any) => {
    console.log('dropeed into ' + laneId);
};

const handleAddTask = () => {
    console.log('add a thing')
};

const Swimlane = ({ id, title, tasks }: ISwimlane) => {
    const [name, setName] = useState(title);
    const [, drop] = useDrop(
        () => ({
            accept: 'CARD',
            drop: () => handleDrop(id)
        }),
        [id]
    );

    return <section key={id} className='kanban-column' ref={drop}>
        <header className="kanban-column__header">
            <h2 className="kanban-column__title sr-only">{name}</h2>
            <input className="kanban-column__title-input" type="text" value={name} onChange={(event) => setName(event.target.value)} />
        </header>
        <div className="kanban-column__content">
            {/*{tasks.map(card => <Card {...card} />)}*/}
            {tasks?.map(cardId => <Card key={cardId} id={cardId} title='Lorem Ipsum' created='' field={Field.low} />)}
        </div>
        <footer className="kanban-column__footer">
            <button className="button button--small" data-add-task onClick={handleAddTask}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                    <path fill="currentColor"
                          d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"/>
                </svg>
                Add Task
            </button>
        </footer>
    </section>
};

export default Swimlane;
