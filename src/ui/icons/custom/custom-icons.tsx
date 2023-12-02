import { IIconComponent } from "../icons.interface";

interface IIconContainer extends IIconComponent {
  children: JSX.Element;
}

const IconContainer = (props: IIconContainer) => {
  return (
    <div
      className="icon-component"
      style={{
        height: props.size ?? props.height ?? "16px",
        width: props.size ?? props.width ?? "16px",
        stroke: props.stroke,
        fill: props.fill,
      }}
    >
      {props.children}
    </div>
  );
};

export const MenuIcon = (props: IIconComponent) => {
  return (
    <IconContainer {...props}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <path
          fill="currentColor"
          d="M7 3h2v18H7zM4 3h2v18H4zm6 0h2v18h-2zm9.062 17.792l-6.223-16.89l1.877-.692l6.223 16.89z"
        ></path>
      </svg>
    </IconContainer>
  );
};
export const SearchIcon = (props: IIconComponent) => {
  return (
    <IconContainer {...props}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <path
          fill="currentColor"
          d="m19.485 20.154l-6.262-6.262q-.75.639-1.725.989q-.975.35-1.96.35q-2.402 0-4.066-1.663q-1.664-1.664-1.664-4.065T5.47 5.436q1.663-1.667 4.064-1.667q2.402 0 4.068 1.664q1.666 1.664 1.666 4.067q0 1.042-.369 2.017q-.37.975-.97 1.668l6.262 6.261l-.707.708ZM9.538 14.23q1.99 0 3.361-1.37q1.37-1.37 1.37-3.361q0-1.99-1.37-3.36q-1.37-1.37-3.36-1.37q-1.99 0-3.361 1.37q-1.37 1.37-1.37 3.36q0 1.99 1.37 3.36q1.37 1.37 3.36 1.37Z"
        />
      </svg>
    </IconContainer>
  );
};
export const DownloadIcon = (props: IIconComponent) => {
  return (
    <IconContainer {...props}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <path
          fill="currentColor"
          d="M16.59 9H15V4c0-.55-.45-1-1-1h-4c-.55 0-1 .45-1 1v5H7.41c-.89 0-1.34 1.08-.71 1.71l4.59 4.59c.39.39 1.02.39 1.41 0l4.59-4.59c.63-.63.19-1.71-.7-1.71zM5 19c0 .55.45 1 1 1h12c.55 0 1-.45 1-1s-.45-1-1-1H6c-.55 0-1 .45-1 1z"
        />
      </svg>
    </IconContainer>
  );
};
export const DownloadDoneIcon = (props: IIconComponent) => {
  return (
    <IconContainer {...props}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <path
          fill="currentColor"
          d="M6 18h12c.55 0 1 .45 1 1s-.45 1-1 1H6c-.55 0-1-.45-1-1s.45-1 1-1zm5.01-4.1a2 2 0 0 1-2.82-.01L6 11.7c-.55-.55-.54-1.44.03-1.97c.54-.52 1.4-.5 1.92.02L9.6 11.4l6.43-6.43c.54-.54 1.41-.54 1.95 0l.04.04c.54.54.54 1.42-.01 1.96l-7 6.93z"
        />
      </svg>
    </IconContainer>
  );
};
export const LoadingAnimatedIcon = (props: IIconComponent) => {
  return (
    <IconContainer {...props}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <path
          fill="currentColor"
          d="M12 2A10 10 0 1 0 22 12A10 10 0 0 0 12 2Zm0 18a8 8 0 1 1 8-8A8 8 0 0 1 12 20Z"
          opacity=".5"
        />
        <path
          fill="currentColor"
          d="M20 12h2A10 10 0 0 0 12 2V4A8 8 0 0 1 20 12Z"
        >
          <animateTransform
            attributeName="transform"
            dur="1s"
            from="0 12 12"
            repeatCount="indefinite"
            to="360 12 12"
            type="rotate"
          />
        </path>
      </svg>
    </IconContainer>
  );
};
