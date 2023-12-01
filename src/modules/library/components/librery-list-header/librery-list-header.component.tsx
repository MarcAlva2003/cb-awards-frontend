import './librery-list-header.style.css'

import { H2, PText } from "../../../../ui/paragraph/paragraph.component";

export const LibraryHeaderComponent = () => {
  return (
    <div className="library-header-component">
      <div className="library-header-component--title">
        <H2>Biblioteca</H2>
      </div>
      <div className="library-header-component--desc">
        <PText>
          Te invitamos a disfrutar la biblioteca de nuestra congregación para conocer cada paso guiado por el Señor desde nuestros comienzos hasta la actualidad.
        </PText>
      </div>
    </div>
  );
};
