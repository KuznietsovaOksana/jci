import { FC } from 'react';

import { ButtonProps } from './RadioCusBtn.props';
import s from './RadioCusBtn.module.css';

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

export const RadioCusBtn: FC<ButtonProps> = ({
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
            <input 
            type="text"
            id={`${id}InputValue`}

            />
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
    )
}

RadioCusBtn.displayName = 'RadioCusBtn';