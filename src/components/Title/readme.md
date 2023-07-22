# Name

Title

# Description

The Title component is a reusable =component that allows you to create dynamic headings with customizable styles. It offers the flexibility to render different heading elements (h1, h2, or h3) and apply specific styles based on the provided props.

# Props

tag (optional)
isBlue (optional)
className (optional)
children

tag - heading. It can be one of 'h1', 'h2', or 'h3'. Defaults to 'h2'.
isBlue - use when your heading has blue color. Defaults to false.
className - additional class name (for example, if you need to add margin-bottom).
children - the content to be rendered inside the heading element.

# Examples

<Title tag="h1">Black text</Title>
<Title tag="h2" isBlue>Blue text</Title>
<Title tag="h3">If we need to add <span className={s.yourClass}>blue color here</span></Title>
