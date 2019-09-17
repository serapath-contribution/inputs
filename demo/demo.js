const bel = require('bel') 
const csjs = require('csjs-inject')
const input = require('..')

function app() {
    const textInput = input({
        id: 'xjweur',
        name: 'custom-text',
        type: 'text',
        val: 'Hello world',
        data: {name: 'ani', value: '222'},
        disable: true,
        change: function(e) {
            console.log(e.target.value)
        },
        focus: function(e) {
            console.log('focus on ' + e.target.name)
        },
        blur: function(e) {
            console.log('blur on ' + e.target.name)
        },
        click: function(e) {
            console.log('clicke on ' + e.target.name)
        }
    })

    const rangeInput = input({
        id: 'rtetryre',
        name: 'custom-range',
        type: 'range',
        val: 0,
        change: function(e) {
            console.log(e.target.value)
        },
        focus: function(e) {
            console.log('focus on ' + e.target.name)
        },
        blur: function(e) {
            console.log(e.target.name)
        },
        click: function(e) {
            numberInput.value = rangeInput.value
            console.log('click on ' + e.target.name )
        }
    })

    const numberInput = input({
        id: 'tirymn',
        name: 'custom-number',
        val: 0,
        change: function(e) {
            console.log(e.target.value)
        },
        focus: function(e) {
            console.log('focus on ' + e.target.name)
        },
        blur: function(e) {
            console.log('blur on ' + e.target.name + ' ' + e.target.value)
        },
        click: function(e) {
            console.log('click on ' + e.target.name)
        }
    })

    

    const lists = ['javascript', 'react', 'vue', 'python', 'angular']
    return bel`
    <div class=${css.wrap}>
        <h1>Hello world</h1>
        <div>
            ${numberInput}
            ${rangeInput}
        </div>
        <div>
            ${textInput}
        </div>
        <div>
            ${lists.map( list => {
                const checkbox = input({
                    name: `check-${list}`,
                    type: 'checkbox',
                    change: function(e) {
                        console.log('changed ' + e.target.checked)
                    },
                    focus: function(e) {
                        console.log('focus on ' + e.target.name)
                    },
                    click: function(e) {
                        console.log('click on ' + e.target.name)
                    }
                })
                return bel`<div>${checkbox} ${list}</div>`
            })}
        </div>
    </div>
    `
}

const css = csjs`
html {
    font-size: 62.5%;
}
body {
    margin: 0;
    font-size: 1.6rem;
}
.wrap {
    
}
.inputControl {
    background: transparent;
    border: 1px solid #d2d2d2;
    border-radius: 4px;
    padding: 6px;
    font-size: 1.6rem;
}
.typeString {
    
}
`
document.body.appendChild(app())