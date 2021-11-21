document.addEventListener('DOMContentLoaded', () => {
    const imageEl = document.querySelector('.image')
    const imageDescrTitleEl = document.querySelector('.image-descr')

    // settings inputs
    const widthRangeEl = document.querySelector('#width')
    const heightRangeEl = document.querySelector('#height')
    const borderWeightRangeEl = document.querySelector('#weight')
    const descrTextInputEl = document.querySelector('#descr')

    widthRangeEl.addEventListener('change', e => {
        imageEl.style.width = e.target.value + '%'
        console.log(e.target.value)
    })

    heightRangeEl.addEventListener('change', e => {
        imageEl.style.height = e.target.value + '%'
    })

    borderWeightRangeEl.addEventListener('change', e => {
        imageEl.style.border = `${e.target.value}px solid green`
    })

    descrTextInputEl.addEventListener('input', e => {
        imageDescrTitleEl.innerHTML = e.target.value
    })
})