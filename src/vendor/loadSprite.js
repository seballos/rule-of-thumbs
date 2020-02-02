import svgIconSprite from './sprite.svg'

export default () => {
  const svg = document.createElement('div')
  svg.className = 'visuallyhidden'
  svg.innerHTML = svgIconSprite
  document.body.insertBefore(svg, document.body.children[0])
}
