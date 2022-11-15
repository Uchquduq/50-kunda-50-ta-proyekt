const password = document.getElementById('password')
const background = document.getElementById('background')

password.addEventListener('input', (e) => {
  const input = e.target.value
  console.log(input)
  const length = input.length
  console.log(length)
  const blurValue = 20 - length * 2
  console.log(blurValue)
  background.style.filter = `blur(${blurValue}px)`
})