import {useDrag} from "react-dnd";
import {ICard} from "../../types/types.ts";

const Card = ({ id, title }: ICard) => {
    const [{ opacity }, dragRef] = useDrag(
        () => ({
            type: 'CARD',
            item: { id },
            collect: (monitor) => ({
                opacity: monitor.isDragging() ? 0.5 : 1
            })
        }),
        []
    )
    return (
        <article className="kanban-item" ref={dragRef} style={{ opacity }}>
            <p className="kanban-item__text">{title}</p>
            <div className="kanban-item__footer">
                <div className="kanban-item__priority kanban-item__priority--medium">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                        <path fill="currentColor"
                              d="M32 288c-17.7 0-32 14.3-32 32s14.3 32 32 32l384 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L32 288zm0-128c-17.7 0-32 14.3-32 32s14.3 32 32 32l384 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L32 160z"/>
                    </svg>
                </div>
                <button className="kanban-item__edit">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                        <path fill="currentColor"
                              d="M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.7 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160V416c0 53 43 96 96 96H352c53 0 96-43 96-96V320c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H96z"/>
                    </svg>
                    Edit
                </button>
            </div>
        </article>
    )
};

export default Card;
