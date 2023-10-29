import { FC } from 'react';

import { ButtonProps } from './RadioDefBtn.props';
import s from './RadioDefBtn.module.css';

// const RadioDefBtn = ({ id, name, value, checked, onChange, label }) => {
//   return (
//     <label>
//       <input
//         type="radio"
//         id={id}
//         name={name}
//         value={value}
//         checked={checked}
//         onChange={onChange}
//       />
//       {label}
//     </label>
//   );
// };

// export default RadioDefBtn;

export const RadioDefBtn: FC<ButtonProps> = ({
  id,
  name,
  value,
  checked,
  onChange,
  label,
}) => {
  return (
    <label className={`${s.radioLabel}`}>
      <input
        type='radio'
        id={id}
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
        className={`${s.radioInput} ${s.input}`}
      />
      <span className={`${s.checkmark}`}></span>
      {/* {label} */}
      <p className={`${s.inputName}`}>{label}</p>
    </label>

    // <>
    //     <input
    //         type="radio"
    //         id={id}
    //         name={name}
    //         value={value}
    //         checked={checked}
    //         onChange={onChange}
    //         className={`${s.rradioInput} ${s.input}`}
    //     />
    //     <label htmlFor={id} className={`${s.llabel}`}>{label}</label>
    // </>
  );
};

RadioDefBtn.displayName = 'RadioDefBtn';
