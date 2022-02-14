const generatorContainer = document.getElementById('generatorBody')

function renderColors(colors) {
  generatorContainer.innerHTML = ''
  for (let color of colors) {
    generatorContainer.innerHTML += `
        <div class="colorElement">
          <div class="element__color" style="background-color: ${color.hex.value};">
          </div> 
          <div class="element__value">${color.hex.value}</div>
        </div>`
  }
}

// Generate new color palette when submitting form

document.getElementById('form').addEventListener('submit', event => {
  event.preventDefault()

  const colorChosen = document.getElementById('colorPicker').value.slice(1)
  const modeChosen = document.getElementById('colorScheme').value

  fetch(
    `https://www.thecolorapi.com/scheme?hex=${colorChosen}&mode=${modeChosen}`
  )
    .then(res => res.json())
    .then(data => {
      renderColors(data.colors)
    })
})

// Generate default color palette to populate website

fetch(`https://www.thecolorapi.com/scheme?hex=F55A5A&mode=analogic`)
  .then(res => res.json())
  .then(data => {
    renderColors(data.colors)
  })
