let viewer = document.querySelector('.viewer')
let button = document.querySelectorAll('button')

button.forEach((btn) => {
    btn.addEventListener('click', view)
})

let num = ''
let equation = ''
let oneChk = false

function view (event) {
    const target = event.target.innerText
    if(target === 'AC'){
        //Esli my ichistili pole
        num = ''
        equation = ''
        viewer.innerText = '0'
    }else if(['+', '-','*', '/'].includes(target)){
        //Kogda operator najat
        if(oneChk === false){
            equation = equation + target
            num = ''
            oneChk = true
        } else{
            viewer.innerText = eval(equation)
            equation = equation + target
            num = ''
        }
    }else if (target === '='){
        //Pri najatii
        viewer.innerText = eval(equation)
        equation = eval(equation)
    } else{
        //Kogda najata sifra
        equation = equation + target
        console.log(equation)
            num = num + target
            viewer.innerText = num
        }
}
