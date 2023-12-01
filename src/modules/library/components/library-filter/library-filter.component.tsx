import "./library-filter.style.css";

import { Dispatch, SetStateAction } from "react";

import { Input } from "../../../../ui/input/input.component";
import { SearchIcon } from "../../../../ui/icons";
import { theme } from "../../../../ui/theme";

interface ILibraryFilterContainer {
  search: string;
  setSearch: Dispatch<SetStateAction<string>>;
}

export const LibraryFilterContainer = (props: ILibraryFilterContainer) => {
  const { search, setSearch } = props;
  const onChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(ev.target.value);
  };
  return (
    <div className="library-filter-component">
      <Input
        value={search}
        onChange={onChange}
        placeholder="Buscar un libro..."
        rightIcon={<SearchIcon size="22px" stroke={theme.grey.grey300} />}
      />
    </div>
  );
};
