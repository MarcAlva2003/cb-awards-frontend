import './input.style.css'

interface IInput {
  rightIcon?: JSX.Element;
  placeholder?: string;
  value: string;
  onChange: (ev: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Input = (props: IInput) => {
  const {placeholder, rightIcon, onChange, value} = props;
  return (
    <div className="input-component">
      <input type="text" placeholder={placeholder} onChange={onChange} value={value} />
      {rightIcon && (
        <div className='input-component-right'>
          {rightIcon}
        </div>
      )}
    </div>
  )
}