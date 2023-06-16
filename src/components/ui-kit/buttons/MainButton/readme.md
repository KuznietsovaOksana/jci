Назва компонента

MainButton

Опис компонента

Компонент MainButton містить кнопку з переданим текстом. При кліку на кнопку виконується функція, передана через властивість onClick. Розмір кнопки визначається властивістю paddings (одне значення для відстані зліва і зправа). Тип кнопки (button або submit) задається властивістю type.

Властивості

type: Тип кнопки, який може бути 'button' або 'submit'. 
text: Текст, який міститься на кнопці. 
style: Стиль кнопки, який може бути 'primary' - залита синім кольором або 'secondary' - прозора з обведенням.
onClick: Функція, яка буде виконана при натисканні на кнопку. 
paddings: Розмір кнопки, який може бути {45} (padding-left: 45px та padding-right: 45px) . 
className - оприділяє користувацький клас CSS для кнопки.

Приклад використання

<MainButton className={s.custom} - задавання додаткового стилю для прикладу з вашого компонента s - назва файлу; custom- назва класу 
type="button" 
text="Натисніть мене" 
onClick={...} 
paddings={100} 
style='primary'
 />