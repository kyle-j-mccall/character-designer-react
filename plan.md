## Compnonents
<Header>
<Main>
  - background img
  <Editor>
    <Select>
      - helm options
    <Select>
      - chest armor options
    <Select>
      - leg armor options
    <input>
      - make an oath
  <Preview>
    <div>
      - head img
    <div> 
      - chest img
    <div>
      - leg img
<Main>

## Plan
# basic layour of page
- create header component and import to app.js
- create empty main component and import to app.js
- create footer component and import to app.js
- import corresponding css files to components

# Component build
# Header/Footer
- add header Text
- add footer text

# Editor
- create select dropdowns in editor.js
- create text input in editor. js
- create oath display for text in editor.js
- give editor all props in function parameters (destructured)
- give select options and text input corresponding values and onChange arrow functions

# Preview
- create div for head, chest and legs with img tag
- use template literals for img src with name of img as variable so that on change img will update
- give preview function state props but not setter functions
- set img src=corresponding state