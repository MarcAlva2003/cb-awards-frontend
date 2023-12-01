import "./book-detail-modal.style.css";

import {
  H2,
  PText,
  PTextSmall,
} from "../../../../ui/paragraph/paragraph.component";

import { IBookItem } from "../../hooks/useLibrary";

interface IBookDetailModalComponent {
  isOpen: boolean;
  book: IBookItem;
  onClose: () => void;
}

export const BookDetailModalComponent = (props: IBookDetailModalComponent) => {
  const { book, isOpen, onClose } = props;
  return (
    <div
      className={`book-modal-container book-modal-container--${
        isOpen ? "open" : ""
      }`}
    >
      <div className="book-modal-content">
        <div className="book-modal-content--close">
          <button onClick={onClose} className="book-modal-content--close__btn">
            X
          </button>
        </div>
        <div className="book-modal-content--title">
          <H2>❝{book.title as string}❞</H2>
        </div>
        <div className="book-modal-content--author">
          <PTextSmall>Autor(es): {book.authots as string}</PTextSmall>
        </div>
        <div className="book-modal-content--desc">
          <PText>{book.desc as string}</PText>
        </div>
      </div>
    </div>
  );
};
