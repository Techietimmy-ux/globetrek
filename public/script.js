const toggleButton =document.querySelector('.toggle')
const navContent =document.querySelector('.mobileLink')
const readMore =document.querySelectorAll('.ReadMoreText')
const hiddenSpan =document.querySelectorAll('.hiddenContent')
const hideText =document.querySelectorAll('.hideText')

toggleButton.addEventListener('click', ()=>{
  navContent.classList.toggle('hidden')
})


readMore.forEach(read =>{
  read.addEventListener('click', (e)=>{
    read.classList.add('hidden')
    const newchild =Array.from(read.parentElement.children)
    newchild[1].classList.toggle('hidden')

  })

 
})

hideText.forEach(text =>{
  text.addEventListener('click', (e)=>{
    readMore.forEach(read =>{
      read.classList.remove('hidden')
      const newchild =text
      console.log(newchild);
      
    
    })
  })
})






  