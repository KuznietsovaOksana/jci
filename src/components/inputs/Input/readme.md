# Name

Input

# Description

Reusable input component that can be used on a Membership Application page

# Props

id;
name;
type (date, email etc);
value (for controlled inputs);
onChange (for controlled inputs);

captionText (text above the input; lowercase);
innerText (placeholder; please write with a capital first letter);
helperText (text under the input in case on error; lowercase);
className (optional for your styling);

# Examples

<Input
        id='025'
        name='input'
        type='text'
        value=''
        onChange=onInputChange
        captionText='full name *'
        helperText='helper text'
        innerText='Full name' 
        className='inputTest'/>

OnChange function that coud be pass as a prop to the Input component:

const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
setValue(event.target.value);
};
