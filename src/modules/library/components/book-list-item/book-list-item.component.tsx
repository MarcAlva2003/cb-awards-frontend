import "./book-list-item.style.css";

import {
  H3,
  PText,
  PTextSmall,
} from "../../../../ui/paragraph/paragraph.component";

import { DownloadIcon } from "../../../../ui/icons";
import { IBookItem } from "../../hooks/useLibrary";
import defaultImage from "../../../../public/images/logo/logo-jovenes-simple.png";
import fileDownload from "js-file-download";

interface IBookListItemComponent {
  book: IBookItem;
  onSelectItem: (id: string) => void;
}

export const BookListItemComponent = (props: IBookListItemComponent) => {
  const { book, onSelectItem } = props;
  const handleDownload = () => {
    fetch(book.download, {
      method: "GET",
      headers: {
        "Content-Type": "application/pdf",
      },
    })
      .then((response) => response.blob())
      .then((blob) => {
        fileDownload(blob, `${book.title}.pdf`);
      })
      .catch((err) => {
        console.log({ err });
      });
  };
  return (
    <div className="book-list-item-component">
      <div className="book-item-cover">
        <div className="book-item-cover--img">
          <img
            src={book.coverUrl ?? defaultImage}
            alt={`Portada ${book.title}`}
          />
        </div>
      </div>
      <div className="book-item-info">
        <div>
          <div className="book-item-info--title">
            <H3>{book.title}</H3>
          </div>
          <div className="book-item-info--author">
            <PTextSmall>{book.authots}</PTextSmall>
          </div>
        </div>
        <div className="book-item-info--options">
          <a
            href={book.driveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="book-item-info--options__button"
          >
            <PText>Leer</PText>
          </a>
          <button
            onClick={handleDownload}
            className="book-item-info--options__button"
          >
            <DownloadIcon size="22px" />
          </button>
          <button
            onClick={() => {onSelectItem(book.id)}}
            className="book-item-info--options__button"
          >
            <PText>Detalle</PText>
          </button>
        </div>
      </div>
    </div>
  );
};
