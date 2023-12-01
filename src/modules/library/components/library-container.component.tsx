import "./library-container.style.css";

import { IBookItem, useLibrary } from "../hooks/useLibrary";

import { BookDetailModalComponent } from "./book-detail-modal/book-detail-modal.component";
import { LibraryFilterContainer } from "./library-filter/library-filter.component";
import { LibraryHeaderComponent } from "./librery-list-header/librery-list-header.component";
import { LibraryListComponent } from "./library-list/library-list.component";
import { useState } from "react";

export const LibraryContainerComponent = () => {
  const { books, search, setSearch, getBookById } = useLibrary();
  const [bookToShow, setBookToShow] = useState<undefined | IBookItem>(
    undefined
  );
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const handleBookDetail = (id: string) => {
    const book: undefined | IBookItem = getBookById(id);
    if (book) {
      setBookToShow(book);
      setIsOpen(true);
    }
  };
  const onClose = () => {
    setIsOpen(false);
  };
  return (
    <div className="library-container-component">
      <LibraryHeaderComponent />
      <LibraryFilterContainer search={search} setSearch={setSearch} />
      <LibraryListComponent onSelectItem={handleBookDetail} books={books} />
      <BookDetailModalComponent
        isOpen={isOpen}
        book={bookToShow ?? books[0]}
        onClose={onClose}
      />
    </div>
  );
};
