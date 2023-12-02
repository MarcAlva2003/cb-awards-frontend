import "./book-list-item.style.css";

import {
  DownloadDoneIcon,
  DownloadIcon,
  LoadingAnimatedIcon,
} from "../../../../ui/icons";
import {
  H3,
  PText,
  PTextSmall,
} from "../../../../ui/paragraph/paragraph.component";
import { useEffect, useState } from "react";

import { IBookItem } from "../../hooks/useLibrary";
import defaultImage from "../../../../public/images/logo/logo-jovenes-simple.png";
import fileDownload from "js-file-download";

interface IBookListItemComponent {
  book: IBookItem;
  onSelectItem: (id: string) => void;
}

export const BookListItemComponent = (props: IBookListItemComponent) => {
  const { book, onSelectItem } = props;
  const [downloading, setDownloading] = useState<boolean>(false);
  const [success, setSuccess] = useState<boolean>(false);
  const handleDownload = () => {
    setDownloading(true);
    fetch(book.download, {
      method: "GET",
      headers: {
        "Content-Type": "application/pdf",
      },
    })
      .then((response) => response.blob())
      .then((blob) => {
        fileDownload(blob, `${book.title}.pdf`);
        setDownloading(false);
        setSuccess(true);
      })
      .catch((err) => {
        return err;
      });
  };

  useEffect(() => {
    if (!success) {
      return;
    }
    const timeOut = setTimeout(() => {
      setSuccess(false);
    }, 2000);
    return () => {
      clearTimeout(timeOut);
    };
  }, [success]);

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
            disabled={downloading || success}
            className="book-item-info--options__button"
          >
            {success ? (
              <DownloadDoneIcon size="18px" />
            ) : downloading ? (
              <LoadingAnimatedIcon size="18px" />
            ) : (
              <DownloadIcon size="18px" />
            )}
          </button>
          <button
            onClick={() => {
              onSelectItem(book.id);
            }}
            className="book-item-info--options__button"
          >
            <PText>Detalle</PText>
          </button>
        </div>
      </div>
    </div>
  );
};
