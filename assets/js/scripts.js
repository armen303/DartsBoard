// mask
let maskNumber = document.querySelectorAll('[data-mask]')
maskNumber.forEach(function (item) {
   item.addEventListener('keypress', function (e) {
      let numValLength = item.value.length
      if (numValLength == 0) {
         item.value += "+7 ("
      }
      if (numValLength == 7) {
         item.value += ") "
      }
      if (numValLength == 8) {
         item.value += " "
      }
      if (numValLength == 12 || numValLength == 15) {
         item.value += "-"
      }
      item.setAttribute("maxlength", "18")
      keys = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
      return keys.indexOf(e.key) > -1
   })
})

// opening and closing for blocks
let hiddenResult = document.querySelectorAll('[data-result-hidden]')
hiddenResult.forEach(item => {
   hiddenAttrResult = item.getAttribute('data-result-hidden')
   if (hiddenAttrResult === 'close') {
      item.style.display = 'none'
   } else if (hiddenAttrResult === 'open') {
      item.style.display = ''
   }
})
// opening and closing for blocks
let visibleBtn = document.querySelectorAll('[data-visible]')
visibleBtn.forEach(buttons => {
   buttons.onclick = () => {
      let getAttrBtn = buttons.getAttribute('data-button')
      let blockResult = document.querySelectorAll('[data-result]')
      blockResult.forEach(item => {
         getAttrResulte = item.getAttribute('data-content')
         if (getAttrResulte == getAttrBtn) {
            if (item.getAttribute('data-result-hidden') === 'close') {
               item.setAttribute('data-result-hidden', 'open')
               item.style.display = ''
               buttons.classList.add('active')
            } else if (item.getAttribute('data-result-hidden') === 'open') {
               item.setAttribute('data-result-hidden', 'close')
               item.style.display = 'none'
               buttons.classList.remove('active')
            }
         }
      });
   }
});



// animation
AOS.init();