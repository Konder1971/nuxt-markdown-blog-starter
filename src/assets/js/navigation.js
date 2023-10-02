/*
let i = 0
window.onload = function() {
  const dnt = document.querySelector('.navigation')
  const divnav = document.getElementsByTagName('div')
  for (i = 0; i < divnav.length; i++) {
    if (divnav[i].matches('.home')) {
      dnt.classList.toggle('home-navigation')
    }
  }
}
*/

window.onscroll = function () {
  myFunctionscroll()
}
function myFunctionscroll () {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.querySelector('.navigation').className = 'navigation fixed'
  } else {
    document.querySelector('.navigation').className = 'navigation'
  }
}
