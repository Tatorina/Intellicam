const upBtn = document.querySelector('._next')
const downBtn = document.querySelector('._prev')
const sidebar = document.querySelector('.slider__list')
const container = document.querySelector('.slider__column')
const slidesCount = sidebar.querySelectorAll('div').length

let activeSlideIndex = 0


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
		activeSlideIndex++
		if (activeSlideIndex === slidesCount) {
			activeSlideIndex = 0
 		}
		
	} else if (direction === 'left') {
		activeSlideIndex--
		if (activeSlideIndex < 0) {
			activeSlideIndex = slidesCount - 1
		}
			
}
	
	const width = container.clientWidth
  console.log(width)
	
  sidebar.style.transform = `translateX(-${activeSlideIndex * width}px)`
	

}