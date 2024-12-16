window.addEventListener("keydown",function(e){
const key = document.querySelector(`.key[data-key="${e.keyCode}"]`)
console.log(key)
key.classList.add("playing")
this.setTimeout(function(){key.classList.remove("playing")},500)
})