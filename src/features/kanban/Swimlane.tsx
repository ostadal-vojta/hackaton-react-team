import { useRef, useState } from "react";
import { useDrop } from "react-dnd";
import { useQuery } from "react-query";
import { createCard, getCards, updateCard } from "../../services/tasks.ts";
import { ICard, ISwimlane } from "../../types/types.ts";
import Card from "./Card.tsx";

const Swimlane = ({ id, title }: ISwimlane) => {
  const { data: cards, refetch } = useQuery("getCards", getCards);
  const dialog = useRef<any>(null);

  const [titleState, setTitleState] = useState<string>("");
  const [priority, setPriority] = useState<any>("low");
  const [description, setDescription] = useState("");

  const handleDrop = async (laneId: any, title: string, card: ICard) => {
    if (laneId === card.sectionId) {
      return;
    }

    await updateCard({
      ...card,
      sectionId: laneId,
    });
    refetch();
    console.log("dropeed into " + title + " " + laneId);
    console.log(card);
  };

  const handleAddTask = () => {
    dialog.current.showModal();
    console.log("add a thing");
  };

  const handleModalClose = () => {
    dialog.current.close();
  };

  const [, drop] = useDrop(
    () => ({
      accept: "CARD",
      drop: (card: ICard) => handleDrop(id, title, card),
    }),
    [id, title]
  );

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    await createCard({
      title: titleState,
      field: priority.toLowerCase(),
      sectionId: id,
      description,
    });
    handleModalClose();
    refetch();
    setTitleState("");
    setDescription("");
    setPriority("low");
  };

  return (
    <section key={id} className="kanban-column" ref={drop}>
      <header className="kanban-column__header">
        <h2 className="kanban-column__title sr-only">{title}</h2>
        <input
          className="kanban-column__title-input"
          type="text"
          value={title}
          readOnly
        />
      </header>
      <div className="kanban-column__content">
        {cards
          ?.filter(({ sectionId }) => id === sectionId)
          ?.map((card) => (
            <Card key={card.id} {...card} />
          ))}
      </div>
      <footer className="kanban-column__footer">
        <button
          className="button button--small"
          data-add-task
          onClick={handleAddTask}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
            <path
              fill="currentColor"
              d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"
            />
          </svg>
          Add Task
        </button>
      </footer>

      <dialog ref={dialog} className="modal-wrapper">
        <div className="modal__dialog">
          <button className="modal__close" onClick={handleModalClose}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
              <path
                fill="currentColor"
                d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"
              />
            </svg>
          </button>
          <h2 className="modal__title">Add Card</h2>
          <form className="form" onSubmit={handleSubmit}>
            <div className="form__item">
              <label htmlFor="input-title">Title</label>
              <input
                id="input-title"
                type="text"
                className="input"
                value={titleState}
                onChange={(e) => setTitleState(e.target.value)}
              />
            </div>
            <div className="form__item">
              <label htmlFor="input-priority">Priority</label>
              <select
                id="input-priority"
                className="input"
                value={priority}
                onChange={(e) => setPriority(e.target.value)}
              >
                <option>Low</option>
                <option>Medium</option>
                <option>High</option>
              </select>
            </div>
            <div className="form__item form__item--error">
              <label htmlFor="input-description">Description</label>
              <textarea
                id="input-description"
                className="input input--error input--multiline"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              ></textarea>
            </div>
            <div className="form__item">
              <button className="button" type="submit">
                Submit
              </button>
            </div>
          </form>
        </div>
      </dialog>
    </section>
  );
};

export default Swimlane;
