import "./paragraph.style.css";

interface ITextComponent {
  weight?: 200 | 300 | 400 | 500 | 600 | 700 | 800;
  children: string | string[];
}

export const H1 = (props: ITextComponent) => {
  return <h1 className="h1-component">{props.children}</h1>;
};
export const H2 = (props: ITextComponent) => {
  return <h2 className="h2-component">{props.children}</h2>;
};
export const H3 = (props: ITextComponent) => {
  return <h3 className="h3-component">{props.children}</h3>;
};
export const H4 = (props: ITextComponent) => {
  return <h4 className="h4-component">{props.children}</h4>;
};
export const H5 = (props: ITextComponent) => {
  return <h5 className="h5-component">{props.children}</h5>;
};

export const PText = (props: ITextComponent) => {
  return <p className="paragraph-component">{props.children}</p>;
};
export const PTextSmall = (props: ITextComponent) => {
  return <p className="paragraph-small-component">{props.children}</p>;
};
