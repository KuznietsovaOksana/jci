# Name

Input

# Description

Reusable textarea component that can be used on a Membership Application page

# Props

id;
name;
value (for controlled inputs);
onChange (for controlled inputs);

captionText (text above the input; lowercase);
innerText (placeholder; please write with a capital first letter);
helperText (text under the input in case on error; lowercase);
className (optional for your styling);

# Examples

<Textarea
        id='035'
        name='textarea'
        captionText='caption'
        helperText='helper'
        innerText='Inner'
        className='textareaTest' />

OnChange function that coud be pass as a prop to the Input component:

const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
setValue(event.target.value);
};
