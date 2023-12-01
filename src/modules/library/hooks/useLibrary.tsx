import { useMemo, useState } from "react";

import anhelandoSuVenida from '../../../public/images/books/anhelando-su-venida.jpg'
import anhelandoSuVenidaPDF from '../../../public/books-files/Anhelando su venida - Daniel García.pdf'
import cincoPuntosFundamentalesPDF from '../../../public/books-files/Los Cinco Puntos Fundamentales de la Iglesia - Jorge Pradas.pdf'
import congregadosParaDarleGloria from '../../../public/images/books/congregados-para-darle-gloria.jpg'
import congregadosParaDarleGloriaPDF from '../../../public/books-files/Congregados para darle gloria - Jorge Pradas.pdf'
import correctoFuncionamientoMinisterios from '../../../public/images/books/el-correcto-funcionamiento-de-los-ministerios.jpg'
import correctoFuncionamientoMinisteriosPDF from '../../../public/books-files/El correcto funcionamiento de los ministerios - Jorge Pradas, Rubén Naranjo y Daniel García.pdf'
import feObTem from '../../../public/images/books/fe-obediencia-y-temor-de-Dios.jpg'
import feObTemPDF from '../../../public/books-files/Fe Obediencia y Temor de Dios - Jorge Pradas.pdf'
import ministerioApostolicoHoy from '../../../public/images/books/el-ministerio-apostolico-hoy.jpg'
import ministerioApostolicoHoyPDF from '../../../public/books-files/El Ministerio Apostólico Hoy - Jorge Pradas, Rubén Naranjo y Daniel García.pdf'
import orientacionPastoral from '../../../public/images/books/orientacion-pastoral.jpg'
import orientacionPastoralPDF from '../../../public/books-files/Orientacion Pastoral - Jorge Pradas.pdf'
import verdadError from '../../../public/images/books/verdad-o-error.jpg'
import verdadErrorPDF from '../../../public/books-files/Verdad o Error - Eliana Gilmartin.pdf'

export interface IBookItem {
  id: string;
  title: string;
  desc: string;
  authots: string;
  coverUrl: string | null;
  driveUrl: string;
  download: string;
}

export const useLibrary = () => {
  const [search, setSearch] = useState<string>("");
  const booksMock: IBookItem[] = [
    {
      id: "add6e1b6-906c-11ee-b9d1-0242ac120002",
      title: "Fé Obediencia y Temor de Dios",
      coverUrl: feObTem,
      desc: "Hechos, guías y rumbos que marcó Dios en los comienzos de la visión",
      authots: "Jorge Pradas",
      driveUrl: "https://drive.google.com/file/d/1_pVXib4uYbZfR5L67KHNe_k3QscfEYw8/view?usp=sharing",
      download: feObTemPDF
    },
    {
      id: "add6e4a4-906c-11ee-b9d1-0242ac120002",
      title: "Congregados para darle gloria",
      coverUrl: congregadosParaDarleGloria,
      desc: "El mensaje está centrado en la necesidad de que la gente se convierta para dar a Dios un culto de mayor gloria",
      authots: "Jorge Pradas",
      driveUrl: "https://drive.google.com/file/d/1jnyoN2NMrr1gxfpRY1iZUe8uh_JZ15fC/view?usp=sharing",
      download: congregadosParaDarleGloriaPDF
    },
    {
      id: "add6e5e4-906c-11ee-b9d1-0242ac120002",
      title: "El correcto funcionamiento de los ministerios",
      coverUrl: correctoFuncionamientoMinisterios,
      desc: "Los Ministerios no son otra cosa que servicios, los cuales están a cargo de los ministros; y los ministros no son sino servidores o siervos",
      authots: "Jorge Pradas, Rubén Naranjo, Daniel García",
      driveUrl: "https://drive.google.com/file/d/1jnyoN2NMrr1gxfpRY1iZUe8uh_JZ15fC/view?usp=sharing",
      download: correctoFuncionamientoMinisteriosPDF
    },
    {
      id: "add6eb70-906c-11ee-b9d1-0242ac120002",
      title: "El Ministerio Apostólico HOY",
      coverUrl: ministerioApostolicoHoy,
      desc: "El ministerio apostólico hoy aborda sin excusas la permanencia en el tiempo de un ministerio peculiar vital, espiritual e irremplazable dentro de la Iglesia del Señor.",
      authots: "Jorge Pradas, Rubén Naranjo, Daniel García",
      driveUrl: "https://drive.google.com/file/d/17BGT9BQVI2lQC8vi3fg4_PHb7S8vYx79/view?usp=drive_link",
      download: ministerioApostolicoHoyPDF
    },
    {
      id: "add6ec9c-906c-11ee-b9d1-0242ac120002",
      title: "Orientacion Pastoral",
      coverUrl: orientacionPastoral,
      desc: "Tal como en la antigüedad Dios llamó a diversos hombres para representarle en alguna función específica, en estos tiempos modernos, busca hombres y mujeres de corazón conforme a Él",
      authots: "Jorge Pradas",
      driveUrl: "https://drive.google.com/file/d/1T9lKrzpiB52H9nW2waSZ6uA8ogTNd8o5/view?usp=drive_link",
      download: orientacionPastoralPDF
    },
    {
      id: "add6edaa-906c-11ee-b9d1-0242ac120002",
      title: "Anhelando su venida",
      coverUrl: anhelandoSuVenida,
      desc: "Los asuntos escatológicos merecen un estudio muy profundo, para no caer en lo que han caído algunos investigadores de los eventos futuros, incautamente, o a conciencia: en el error de dogmatizar la interpretación propia de estos acontecimientos, deviniendo, en algunos casos, en la fundación de determinadas sectas.",
      authots: "Daniel García",
      driveUrl: "https://drive.google.com/file/d/12U29cbBZqKSbtI52LJ2zYmKFPMtayBrq/view?usp=drive_link",
      download: anhelandoSuVenidaPDF
    },
    {
      id: "add6ee}b8-906c-11ee-b9d1-0242ac120002",
      title: "Verdad o Error",
      coverUrl: verdadError,
      desc: "La VERDAD y el ERROR. Transitar entre ellas evoca el vértigo de un desfiladero. Tan pronto nuestro pie resbala a derecha o izquierda, corremos serios riesgos de caer al precipicio...",
      authots: "Eliana Gilmartin",
      driveUrl: "https://drive.google.com/file/d/1VkxSKSo9pVMK76jiw0tpxxMrLcJgXSdW/view?usp=drive_link",
      download: verdadErrorPDF
    },
    {
      id: "add6efb2-906c-11ee-b9d1-0242ac120002",
      title: "Los Cinco Puntos Fundamentales de la Iglesia",
      coverUrl: null,
      desc: "Revelación de Dios para nuestra visión. ¿Es necesario saber esto? ¿Cuál es la función de la iglesia como amada de Cristo?",
      authots: "Jorge Pradas",
      driveUrl: "https://drive.google.com/file/d/10ha16743v_jVvju-FWdfE1CWgKRp-Cx8/view?usp=drive_link",
      download: cincoPuntosFundamentalesPDF
    },
  ];

  const filteredBooks = useMemo(() => {
    const val = search
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "");
    return booksMock.filter((item: IBookItem) =>
      item.title
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .includes(val)
    );
  }, [search]);

  const getBookById = (id: string): IBookItem | undefined => {
    return booksMock.find((item) => item.id === id);
  }

  return {
    books: filteredBooks,
    search,
    setSearch,
    getBookById
  };
};
