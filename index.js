const generatorContainer = document.getElementById('generatorBody')

document.getElementById('form').addEventListener('submit', event => {
  event.preventDefault()

  const colorChosen = document.getElementById('colorPicker').value.slice(1)
  const modeChosen = document.getElementById('colorScheme').value

  fetch(
    `https://www.thecolorapi.com/scheme?hex=${colorChosen}&mode=${modeChosen}`
  )
    .then(res => res.json())
    .then(data => {
      generatorContainer.innerHTML = ''
      const colors = data.colors
      for (let color of colors) {
        generatorContainer.innerHTML += `
        <div class="colorElement">
          <div class="element__color" style="background-color: ${color.hex.value};">
          </div> 
          <div>${color.hex.value}</div>
        </div>`
      }
    })
})
