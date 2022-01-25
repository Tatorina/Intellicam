const upBtn = document.querySelector('._next')
const downBtn = document.querySelector('._prev')
const sidebar = document.querySelector('.slider__list')
const container = document.querySelector('.slider__column')
const slidesCount = sidebar.querySelectorAll('.slider__column').length



document.addEventListener('keydown', 
												 event => {
	if (event.key === 'ArrowRight') {
		changeSlide('right')
	} else if (event.key === 'ArrowLeft') {
		changeSlide('left')
	}
})

upBtn.addEventListener('click', () => {
	changeSlide('right')
})

downBtn.addEventListener('click', () => {
	changeSlide('left')
})

function changeSlide(direction) {
	if (direction === 'right') {
    let first = document.querySelector('.slider__column')
    first.remove()
    sidebar.append(first)
	} else if (direction === 'left') {
      let el = document.querySelectorAll('.slider__column')
      let last = el[el.length-1]
      last.remove()
      sidebar.prepend(last)
}
}