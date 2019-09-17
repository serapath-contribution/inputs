const bel = require('bel') 
const csjs = require('csjs-inject')

module.exports = input

function input({id, name, type, val, disable, data, change, focus, blur, click}) {
    const input = bel`<input type=${type}>`
    // set name
    if (name) 
        input.name = name
    // set id
    if (id)
        input.id = id
    // set class
    switch (type) {    
        case 'number':
            input.className = `${css.inputControl} ${css.typeNumber}`
            break
        case 'range':
            input.className = `${css.inputControl} ${css.typeRange}`
            break
        case 'checkbox':
            input.className = `${css.inputControl} ${css.typeCheckbox}`
            break
        default:
            input.className = `${css.inputControl} ${css.typeString}`
    } 
        
    // set value
    if (val !== '' || val !== 'undefined') 
        input.value = val 
    // set onchange function
    if (change) 
        input.onchange = (e) => change(e)
    // set onfocus function
    if (focus) 
        input.onfocus = (e) => focus(e)
    // set onfocus function
    if (blur) 
        input.onblur = (e) => blur(e)
    // set click function
    if (click) 
        input.onclick = (e) => click(e)
    // set disable
    if (disable) 
        input.disabled = true
    // set data
    if (data) 
        input.dataset[data.name] = data.value

    return input
}

const css = csjs`
.inputControl {
    background: transparent;
    border: 1px solid #d2d2d2;
    border-radius: 4px;
    padding: 6px;
    font-size: 1.6rem;
}
.typeString {
    
}
.typeNumber {
    
}
.typeRange {

}
.typeCheckbox {

}
`