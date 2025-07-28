window.daino = document.getElementById("daino")
const main_body = document.getElementById("main-body")
const box = document.getElementById("box")
const img = document.getElementById("b")
const reload = document.getElementById("reload")
window.list = []
window.timeList = []



const animation_keyframe = [{
  transform: "translateY(0px)"
}, {
  transform: "translateY(-300px)"
}, {
  transform: "translateY(0px)"
}]
const options = {
  duration: 1000,
  iterations: 1,
  easing: 'cubic-bezier(0.01, 0.99, 0.99, 0.01)'
}





function jump() {
  img.src = "Main/Bad_2.png"
  window.anim1 = daino.animate(animation_keyframe, options)
  setTimeout(gif, 1000)
}
main_body.addEventListener("click", jump);
function gif() {
  img.src = "Main/bad_2_new.gif"
}




window.options_obsta = {
  duration: 2500,
  iterations: 1,
  fill: "forwards"
}
const animation_keyframe_obsta = [{
  transform: "translateX(0px)"
}, {
  transform: "translateX(-3000px)"
}]
















function remove_element(element, anim) {
  box.removeChild(element)
  let index = list.indexOf(anim)
  if (index!==-1) {
    list.splice(index, 1)
  }
  list.splice(0, 1)
}



window.n = 1

function start_obsta() {
  window.new_element = document.createElement("div")
  let obnum = (Math.floor(Math.random()*(22))+1)
  new_element.innerHTML = "<img>"
  let imga = new_element.getElementsByTagName("img")
  imga[0].src = `Main/Ob/Ob${obnum}.png`
  new_element.classList.add("obsta")
  imga[0].classList.add("obimg")
  let height = (Math.floor(Math.random()*15)+7)*10
  new_element.style.height = `${height}px`
  let width = (Math.floor(Math.random()*15)+9)*5
  new_element.style.width = `${width}px`
  box.appendChild(new_element)
  let animation = new_element.animate(animation_keyframe_obsta, options_obsta)
  list.push(animation)
  window.timeid = setTimeout(remove_element, 6000, new_element, animation)
  timeList.push(timeid)
  window.n = (window.n+1)
  if (a == number) {
    clearInterval(set_id)
  } else {
    window.a = a+1
  }
  checkColl(daino, new_element)
}
window.time = 150
function set_number() {
  window.a = 1
  window.number = (Math.floor(Math.random()*5)+0)

  if (number == 0) {} else {
    window.set_id = setInterval(start_obsta, time)
  }
}
const Maininter1 = setInterval(set_number, 1800)









function checkCollision(div1, div2) {
  const rect1 = div1.getBoundingClientRect();
  const rect2 = div2.getBoundingClientRect();
  if (rect1.right >= rect2.left &&
    rect1.left <= rect2.right &&
    rect1.bottom >= rect2.top &&
    rect1.top <= rect2.bottom) {
    collision_found()
  }
}
function checkColl(div1, div2) {
  window.check = setInterval(checkCollision, 100, div1, div2);
}


function collision_found() {
  clearInterval(Maininter1)
  for (let aa = 0; aa < list.length; aa += 1) {
    list[aa].pause()
  }
  for (let aa = 0; aa < timeList.length; aa += 1) {
    clearTimeout(timeList[aa])
  }
  img.src = "Main/bad_2.png"
  main_body.removeEventListener("click", jump);
  reload.style.display = "block"
  stop_grass()
  clearInterval(scoreincrease)
}













const grass1 = document.getElementById("grass1")
const grass2 = document.getElementById("grass2")
const grass3 = document.getElementById("grass3")
const grass4 = document.getElementById("grass4")
const animation_keyframe_grass = [{
  transform: "translateX(0px)"
}, {
  transform: "translateX(-3000px)"
}]

const options_grass = {
  duration: 4000,
  iterations: 1,
  fill: "forwards"
}
let animation_grass1 = grass1.animate(animation_keyframe_grass, options_grass)
let animation_grass2 = grass2.animate(animation_keyframe_grass, options_grass)
let animation_grass3 = grass3.animate(animation_keyframe_grass, options_grass)
let animation_grass4 = grass4.animate(animation_keyframe_grass, options_grass)












const grass11 = document.getElementById("grass11")
const grass12 = document.getElementById("grass12")
const grass13 = document.getElementById("grass13")
const grass14 = document.getElementById("grass14")
const grass15 = document.getElementById("grass15")
const grass16 = document.getElementById("grass16")
const grass17 = document.getElementById("grass17")
const grass18 = document.getElementById("grass18")




const animation_keyframe_grass1 = [{
  transform: "translateX(0px)"
}, {
  transform: "translateX(-3000px)"
}]

const options_grass1 = {
  duration: 4000,
  iterations: Infinity
}


grass101()




function grass101() {
  window.animation_grass11 = grass11.animate(animation_keyframe_grass1, options_grass1)
  setTimeout(grass102, 500)
}
function grass102() {
  window.animation_grass12 = grass12.animate(animation_keyframe_grass1, options_grass1)
  setTimeout(grass103, 500)
}
function grass103() {
  window.animation_grass13 = grass13.animate(animation_keyframe_grass1, options_grass1)
  setTimeout(grass104, 500)
}
function grass104() {
  window.animation_grass14 = grass14.animate(animation_keyframe_grass1, options_grass1)
  setTimeout(grass105, 500)
}
function grass105() {
  window.animation_grass15 = grass15.animate(animation_keyframe_grass1, options_grass1)
  setTimeout(grass106, 500)
}
function grass106() {
  window.animation_grass16 = grass16.animate(animation_keyframe_grass1, options_grass1)
  setTimeout(grass107, 500)
}
function grass107() {
  window.animation_grass17 = grass17.animate(animation_keyframe_grass1, options_grass1)
  setTimeout(grass108, 500)
}
function grass108() {
  window.animation_grass18 = grass18.animate(animation_keyframe_grass1, options_grass1)
}
function stop_grass() {
  animation_grass11.playbackRate = 0
  animation_grass12.playbackRate = 0
  animation_grass13.playbackRate = 0
  animation_grass14.playbackRate = 0
  animation_grass15.playbackRate = 0
  animation_grass16.playbackRate = 0
  animation_grass17.playbackRate = 0
  animation_grass18.playbackRate = 0
}










const c1 = document.getElementById("c1")
const c2 = document.getElementById("c2")
const c3 = document.getElementById("c3")
const c4 = document.getElementById("c4")
const c5 = document.getElementById("c5")

const animation_keyframe_Cloud = [{
  transform: "translateX(0px)"
}, {
  transform: "translateX(-3500px)"
}]

const options_Cloud = {
  duration: 10000,
  iterations: Infinity
}
const animation_keyframe_Cloud1 = [{
  transform: "translateX(0px)"
}, {
  transform: "translateX(-3500px)"
}]

const options_Cloud1 = {
  duration: 20000,
  iterations: Infinity
}

Cl1()

function Cl1() {
  window.animation_c1 = c1.animate(animation_keyframe_Cloud1, options_Cloud1)
  setTimeout(Cl2, 3000)
}
function Cl2() {
  window.animation_c2 = c2.animate(animation_keyframe_Cloud, options_Cloud)
  setTimeout(Cl3, 3000)
}
function Cl3() {
  window.animation_c3 = c3.animate(animation_keyframe_Cloud1, options_Cloud1)
  setTimeout(Cl4, 3000)
}
function Cl4() {
  window.animation_c4 = c4.animate(animation_keyframe_Cloud, options_Cloud)
  setTimeout(Cl5, 3000)
}
function Cl5() {
  window.animation_c5 = c5.animate(animation_keyframe_Cloud1, options_Cloud1)
}
const score_p = document.getElementById("scr")
window.score = 0
window.duration_ob = 2500
function score_increase() {
  window.score += 1
  score_p.innerHTML = `Score: ${score}`
  if (score%50 == 0) {
    window.time -= 5
    window.duration_ob -= 100
    window.options_obsta = {
      duration: duration_ob,
      iterations: 1,
      fill: "forwards"
    }
  }
}
const scoreincrease = setInterval(score_increase, 100)