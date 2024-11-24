"use strict";

// №1
// Напишіть такий JavaScript, щоб після натискання на кнопку button, елемент
// <div id="text"> зникав.

// const text = document.querySelector("#text");
// const btn = document.querySelector("#btn");

// if(btn) {
//    btn.addEventListener('click', () => {
//       text.style.display = "none";
//    });
// }


// №2
// Напишіть такий код, щоб після натискання на кнопку, вона зникала.

// const btn = document.querySelector("#btn");

// if(btn) {
//    btn.addEventListener('click', () => {
//       btn.style.display = "none";
//    });
// }

// №3
// Створіть дерево, яке показує/приховує дочірні вузли при кліц

function selectItem(item) {

   if (item.classList.contains("selected")) {
      item.classList.remove('selected');
   } else {
      item.classList.add('selected');
   }    
}

const list = document.querySelector("#list");

if (list) {

   for (let li of list.querySelectorAll('li')) {
      let span = document.createElement('span');
      li.prepend(span);
      span.append(span.nextSibling); 
   }

   list.onclick = function(event) {
      if (event.target.tagName != 'SPAN') {
         return;
      }
      selectItem(event.target.parentNode);
   };

}