const minusBtn = document.getElementById('minus')
const plusBtn = document.getElementById('plus')
const inputValue= document.getElementById('input-value')
const mathResult = document.getElementById('math-result')

plusBtn.addEventListener('click', ()=> {
  mathResult.innerHTML = parseInt(inputValue.value) + parseInt(mathResult.innerHTML)
})
minusBtn.addEventListener('click', ()=> {
  mathResult.innerHTML = parseInt(mathResult.innerHTML) - parseInt(inputValue.value)
})


