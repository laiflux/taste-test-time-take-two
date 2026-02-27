let tttEl = document.getElementById('ttt');
let bg = document.querySelector(".haiku")
let p1 = document.getElementById('one');
let p2 = document.getElementById('two');
let p3 = document.getElementById('three');
let clickCount = 0;

tttEl.addEventListener("click", (e) => {
   if (tttEl.style.color === "mediumpurple") {
    tttEl.style.color = "whitesmoke";
    tttEl.style.backgroundColor = "#453457";
   } else {
    tttEl.style.backgroundColor = "#352a3d";
    tttEl.style.color = "mediumpurple";
   }
});

bg.addEventListener('click', () => {
    clickCount++

   
   p1.className = "";
   p2.className = "";
   p3.className = "";

   if (clickCount === 1) {
    p1.classList.add('large'); 
   } else if (clickCount === 2) {
    p2.classList.add('large');
    p1.classList.remove('large');
   } else if (clickCount === 3) {
    p3.classList.add('large');
    p2.classList.remove('large');
   } else if (clickCount === 4) {
    p3.classList.remove('large')
    
    clickCount = 0
   }
});