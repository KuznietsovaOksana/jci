import data from '@/data/joinUsPage.json';

import s from './FormJoinUs.module.css';
import { Input } from '@/components/inputs/Input';
import { Textarea } from '@/components/inputs/Textarea';
import { RadioDefBtn } from '@/components/buttons/radioBtns/RadioDefBtn';
import { useState } from 'react';
import { MainFuncBtn } from '@/components/buttons/MainFuncBtn';

export const FormJoinUs = () => {
  const { inputs, textarea, radio } = data;
  const [selectedOption, setSelectedOption] = useState(
    radio.radio_buttons[0].name
  );

  const handleOptionChange = (event: any) => {
    setSelectedOption(event.target.id);
    console.log(event.target.id);
  };

  return (
    <form className={s.form}>
      <ul className={s.list}>
        {inputs.map((el, ind) => (
          <li key={ind}>
            <Input
              captionText={el.captionText}
              name={el.name}
              type={el.type}
              innerText={el.innerText}
            />
          </li>
        ))}
        <Textarea
          captionText={textarea.captionText}
          name={textarea.name}
          innerText={textarea.innerText}
        />
      </ul>
      <p className={s.radio_title}>{radio.title}</p>
      <ul className={s.radio_list}>
        {radio.radio_buttons.map((el, ind) => (
          <li className={s.radio_item} key={ind}>
            <RadioDefBtn
              id={el.text}
              name={el.name}
              checked={selectedOption === el.text}
              onChange={handleOptionChange}
              label={el.text}
            />
            {ind === 4 && <input className={s.underline_input} />}
          </li>
        ))}
      </ul>
      <MainFuncBtn
        className={s.button_send}
        text='Send'
        onClick={() => console.log('Click')}
        access={true}
      />
    </form>
  );
};
