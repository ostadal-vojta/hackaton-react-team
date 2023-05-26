import {useDrag} from "react-dnd";

const Card = ({ text }: { text: string }) => {
    const [{ opacity }, dragRef] = useDrag(
        () => ({
            type: 'CARD',
            item: { text },
            collect: (monitor) => ({
                opacity: monitor.isDragging() ? 0.5 : 1
            })
        }),
        []
    )
    return (
        <div className='card' ref={dragRef} style={{ opacity }}>
            {text}
        </div>
    )
};

export default Card;
