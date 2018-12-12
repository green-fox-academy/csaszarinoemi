'use strict'


const nav = document.querySelector('nav');
//const style = document.querySelector('style')
const imgInspector = document.querySelector('.img-inspector');




let zoom = 200;
let positionx = 0;
let positiony = 0;

// nav.addEventListener('click', (e) => {  // currentTarget
//   if (e.target.getAttribute('data-action') === "move") { //eventTarget
//     if (e.target.getAttribute('data-direction') === 'up') {
//       positiony += 10;
//       imgInspector.style.backgroundPosition = `${positionx}px ${positiony}px`;

//     } else if (e.target.getAttribute('data-direction') === 'down') {
//       positiony -= 10;
//       imgInspector.style.backgroundPosition = `${positionx}px ${positiony}px`;

//     } else if (e.target.getAttribute('data-direction') === 'right') {
//       positionx -= 10;
//       imgInspector.style.backgroundPosition = `${positionx}px ${positiony}px`;

//     } else if (e.target.getAttribute('data-direction') === 'left') {
//       positionx += 10;
//       imgInspector.style.backgroundPosition = `${positionx}px ${positiony}px`;
//     }
//   }
//   else if (e.target.getAttribute('data-action') === "zoom") {

//     if (e.target.getAttribute('data-direction') === 'in') {
//       zoom += 20;
//       imgInspector.style.backgroundSize = `${zoom}%`;

//     } else if (e.target.getAttribute('data-direction') === 'out') {
//       zoom -= 20;
//       imgInspector.style.backgroundSize = `${zoom}%`;
//     }
//   }

// });



nav.addEventListener('click', (e) => {
  switch (e.target.getAttribute('data-direction')) {
    case 'in': {
      zoom += 20;
      imgInspector.style.backgroundSize = `${zoom}%`;
      break;
    }

    case 'out': {
      zoom -= 20;
      imgInspector.style.backgroundSize = `${zoom}%`;
      break;
    }

    case 'up': {
      positiony += 10;
      imgInspector.style.backgroundPosition = `${positionx}px ${positiony}px`;
      break;
    }

    case 'down': {
      positiony -= 10;
      imgInspector.style.backgroundPosition = `${positionx}px ${positiony}px`;
      break;
    }

    case 'right': {
      positionx -= 10;
      imgInspector.style.backgroundPosition = `${positionx}px ${positiony}px`;
      break;
    }

    case 'left': {
      positionx += 10;
      imgInspector.style.backgroundPosition = `${positionx}px ${positiony}px`;
      break;
    }
    
    /* default: {
      ha egyik érték se teljesül
    }*/
  }
})
