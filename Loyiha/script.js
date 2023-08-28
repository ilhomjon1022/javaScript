

window.addEventListener('DOMContentLoaded', () =>  {
    const tabsParent = document.querySelector('.tabheader__items'),
      tabs = document.querySelectorAll('.tabheader__item'),
      tabsContent = document.querySelectorAll('.tabsContent')
   
      function hidetabContent () {
        tabsContent.forEach(item => {
            item.classList.add('hide')
            item.classList.remove('show')
        })
        
        tabs.forEach(item => {
            item.classList.remove('tabheader__item_active')
        })
    }

    function showTabContent (i = 0) {
        tabsContent[i].classList.add('show')
        tabsContent[i].classList.remove('hide')
        tabs[i].classList.add('tabheader__item_active')
    }

    hidetabContent()
    showTabContent()

    tabsParent.addEventListener('click', (event) => {
        const target = event.target
        if(target && target.classList.contains('tabheader__item')){
            tabs.forEach((item, idx) =>{
                if(target = item){
                    hidetabContent()
                    showTabContent(idx)
                }
            })
        }
    })
})