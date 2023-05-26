import {useDrop} from "react-dnd";

function handleDrop(laneId: any) {
    console.log('dropeed into ' + laneId);
}

const Swimlane = ({ id, children }: { id: number; children?: any}) => {
    const [, drop] = useDrop(
        () => ({
            accept: 'CARD',
            drop: () => handleDrop(id)
        }),
        [id]
    )

    return <div key={id} className='kanban-column' ref={drop}>
        {children}
    </div>
};

export default Swimlane;
