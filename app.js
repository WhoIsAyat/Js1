
let second = document.querySelector('#sec');
let minute = document.querySelector('#min');
let hour = document.querySelector('#hour');
let btn = document.querySelector('#btn')
let stopit = document.querySelector('#Stop')
let s = 0;
let m = 0;
let h = 0;


stopit.addEventListener('click', ()=>{
  clearInterval(something)
})

btn.addEventListener('click', function st(){
  something = setInterval(start, 1000)
  btn.classList.add('active')
  stopit.classList.remove('active')
})

stopit.addEventListener('click', ()=>{
  stopit.classList.add('active');
  btn.classList.remove('active')

})
// end

function start(){
 if(s < 60){
   s++
 }
 if(s == 59){
   s = 0
   m += 1

 }
 if(m == 60){
   m = 0;
   h += 1;

 }
 second.innerHTML = s;
 minute.innerHTML = m;
 hour.innerHTML = h;
}



// btn.addEventListener('click', ()=>{
//   setInterval(start, 1000)
// })