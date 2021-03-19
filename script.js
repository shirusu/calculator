// let viewer = document.querySelector('.viewer')
// let button = document.querySelectorAll('button')
//
// button.forEach((btn) => {
//     btn.addEventListener('click', view)
// })
//
// let num = ''
// let equation = ''
// let oneChk = false
//
// function view (event) {
//     const target = event.target.innerText
//     if(target === 'AC'){
//         //Esli my ochistili pole
//         num = ''
//         equation = ''
//         viewer.innerText = '0'
//     }else if(['+', '-','*', '/'].includes(target)){
//         //Kogda operator najat
//         if(oneChk === false){
//             equation = equation + target
//             num = ''
//             oneChk = true
//         } else{
//             viewer.innerText = eval(equation)
//             equation = equation + target
//             num = ''
//         }
//     }else if (target === '='){
//         //Pri najatii
//         viewer.innerText = eval(equation)
//         equation = eval(equation)
//     } else{
//         //Kogda najata sifra
//         equation = equation + target
//         console.log(equation)
//             num = num + target
//             viewer.innerText = num
//         }
// }

let output = document.querySelector('.output')
let buttons = document.querySelectorAll('.btns button')


let expression = ''
let num = ''
let checkNum = false
let operations = ['+','-','/','*']

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        let currentValue = button.textContent
        if(currentValue === 'AC'){
            expression = ''
            num = ''
            output.textContent = '0'
        }else if(currentValue === '='){
            output.textContent = eval(expression) || 0
            num = ''
        }else if(operations.includes(currentValue)){
            if(operations.includes(expression[expression.length - 1])){
                expression = expression.slice(0, expression.length - 1) + currentValue
            }else{
                if(checkNum === false){
                    expression = expression + currentValue
                    checkNum = true
                }else{
                    output.textContent = eval(expression)
                    expression = eval(expression) + currentValue
                }
            }
            num = ''
        }else{
            num = num + currentValue
            expression = expression + currentValue
            output.textContent = num
        }
    })
})