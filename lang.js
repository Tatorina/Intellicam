const listLang = document.querySelectorAll('.developers__lang-item')
const textBlock = document.querySelector('.developers__lang-item')
const text = document.querySelectorAll('.scroll--text')
const Block = document.querySelector('.developers__scroll--text')

let activText = text[0]
let activLang = listLang[0]


for (let i = 0; i < listLang.length; i++){
  listLang[i].addEventListener('click', function(event) {
  
    if (activLang == this){
      activText = text[i]
      this.classList.toggle('active')
      activText.style.display = 'block'
    } else {
      activLang.classList.remove('active')
      activText.style.display = 'none'
      this.classList.add('active')
      activLang = this
    }
  })
}


  
