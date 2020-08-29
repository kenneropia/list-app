// const hasClass = (htmlobj, className) => htmlobj.classList.contains(className);

const section = document.getElementById('listSection');
const createNote = document.querySelector('.createNote');
// section.addEventListener('click', (event) => {
//   const closestDiv = event.target.closest('.preview-list-item');
//   if (closestDiv !== null) {
//     if (closestDiv.closest('article') !== null) {
//       if (closestDiv.style.animationName == '') {
//         closestDiv.style.animationName = 'animate-item';
//         closestDiv.firstElementChild.classList.add('current-item');
//         closestDiv.firstElementChild.contentEditable = true;
//       }
//     }
//   }

//   if (event.target.classList.contains('preview-list-item') &&
//    event.target.querySelector('.current-item')) {
//     event.target.style.animationName = '';
//     closestDiv.firstElementChild.contentEditable = false;
//     event.target.firstElementChild.classList.remove('current-item');
//   }
// });

section.addEventListener('keydown', (event) => {
  if (event.target.classList.contains('current-item')) {
    console.log('key:', event.key, 'keycode:', event.keyCode, 'which:', event.which);
    if (event.key == 'Enter' || event.keyCode == 13 || event.which == 13) {
      document.execCommand('insertLineBreak');
      event.preventDefault();
    }

    // if (event.key == 'Backspace' || event.keyCode == 13 || event.which == 13) {
    //   let samp = event.target.innerHTML;
    //   let sampPos = samp.charAt(samp.length - 1);
    //   console.log(sampPos);
    //   console.log(event.target.className);
    //   if (sampPos == '>') {
    //     if (samp.slice(-4) == '<br>') {
    //       samp = samp.slice(0, 'abcd<br>'.length - 4);
    //       event.preventDefault();
    //       console.log(samp);
    //     }
    //   }
    // }
  }
}
);




createNote.addEventListener('focusin', (event) => {
  if (createNote.children[0].classList.contains("not-focus")) {
    const searchbar_infocus = `<div contenteditable="true" class="Note-child in-focus">
      </div><ul><li>A</li><li>B</li>
       <li>C</li> </ul>`;

      var fragment = new DocumentFragment();
    fragment.innerHTML = searchbar_infocus;
    console.log("Frag:", fragment.innerHTML);
    console.log(createNote.children[0].innerHTML);
    createNote.innerHTML = fragment.innerHTML;

  } else {
    console.log('lol')
  }
  
});

createNote.addEventListener("focusout", () => {
  console.log("blur");
});


const searchbar_notfocus = `
	<div contenteditable="true" class="Note-child not-focus">
            Take a note...
   </div>
`;
