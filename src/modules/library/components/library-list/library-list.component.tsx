import './library-list.style.css'

import { BookListItemComponent } from '../book-list-item/book-list-item.component'
import { IBookItem } from '../../hooks/useLibrary'

interface ILibraryListComponent {
  books: IBookItem[]
  onSelectItem: (id: string) => void
}


export const LibraryListComponent = (props: ILibraryListComponent) => {
  const {books, onSelectItem} = props;
  return (
    <div className='library-list-component'>
      {books.map((item: IBookItem, index: number) => (
        <BookListItemComponent key={`book-item-${index}`} onSelectItem={onSelectItem} book={item}/>
      ))}
    </div>
  )
}