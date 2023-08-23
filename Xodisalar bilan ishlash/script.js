

const btn = document.querySelector('#btn')
const overlay = document.querySelector('.overlay')

           // Xodisala bilan ishlavotganda eng noto'g'ri varyant

// btn.onclick = function () {
//     alert('Click')
// }

// btn.onclick = function () {
//     alert('Click 2')
// }


            // Xodisala bilan ishlavotganda eng to'g'ri varyant

            // btn.addEventListener('click', () => {
//     alert('Click')
// })

// btn.addEventListener('click', () => {
//     alert('Click 2')
// })

// btn.addEventListener('mouseenter', (event) => {
//     // console.log(event.target)
//     event.target.remove()
//     // alert('hover')
// })

// let i = 0

//  const addElement = (event) =>  {
//      i++
//      if (i === 3) {
//          btn.removeEventListener('click', addElement)
//      }
//      console,log(i)
//  }
 

 const cb = (event) => {
    console.log(e.currentTarget)
}

 btn.addEventListener('click', cb);
 overlay.addEventListener('click', cb)