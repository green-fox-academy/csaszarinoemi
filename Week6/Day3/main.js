'use strict'

window.onload = function(){



let myPics = [
  {'title':"Lake Matheson", 
  'desc': "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi viverra consectetur lacus sit amet ultrices.",
  'url':"http://www.travelways.com.sg/uploads/tours/images/19/south-island-new-zealand-landscape-reflection-river-forest-fog-mist-high-resolution-images_1450845998.jpg"},
  {'title':"Lake Pukaki with Mount Cook", 
  'desc': "Sed non fringilla neque. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
  'url':"https://blog.backpackerdeals.com/wp-content/uploads/2013/07/jon-arnold-southern-alps-south-island-new-zealand-road-scenery-hd-nature.jpg"},
  {'title':"Milford Sound", 
  'desc': "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin volutpat nunc quis elementum eleifend. Quisque hendrerit nisi in hendrerit venenatis. Vivamus quis lectus ut ante euismod ullamcorper. Integer enim metus, finibus vel ullamcorper id, suscipit vel nisi.",
  'url':"https://dak95nwic4sny.cloudfront.net/73/new-zealand-30876048-1536579250-ImageGalleryLightboxLarge.jpg"},
  {'title':"Lake Tekapo", 
  'desc': "Suspendisse et tristique purus. Integer vel mi lacus. Nullam massa odio, viverra nec erat vitae, dignissim sollicitudin purus. Integer et mattis enim, bibendum cursus lectus. ",
  'url':"https://wallpapershome.com/images/wallpapers/lake-tekapo-1920x1080-5k-4k-wallpaper-south-island-new-zealand-566.jpg"},
  {'title':"Nugget Point", 
  'desc': "Phasellus et tortor augue. Integer lacinia id arcu sed ultrices. Curabitur varius lacus metus, ut consequat enim sodales vel. Phasellus consectetur augue ac eros bibendum, in pharetra arcu laoreet. Morbi aliquam fermentum auctor. Donec luctus justo ut dui ornare feugiat.",
  'url':"https://wallpaperstudio10.com/static/wpdb/wallpapers/1920x1080/178701.jpg"},
  {'title':"Glacier", 
  'desc': "Etiam nec diam at ex mattis rutrum et eget nulla. Morbi a orci nec nibh dapibus tincidunt in ut ipsum. In faucibus mollis laoreet. Ut lorem lectus, viverra at molestie at, sodales vitae risus. Suspendisse potenti. Maecenas ut semper dolor.",
  'url':"https://endlessloopphotography.files.wordpress.com/2017/03/tasman-glacier.jpg"},
  {'title':"Abel Tasman", 
  'desc': "Cras fermentum eros in tortor varius egestas vitae vitae libero. Aenean posuere sed ligula ut hendrerit. Sed suscipit augue vel magna scelerisque dignissim. In aliquam magna ac lacus condimentum feugiat. Duis tristique eu lectus in volutpat. Nam viverra ante eget enim euismod feugiat.",
  'url':"http://www.reachcoach.co.nz/en/wp-content/uploads/2016/04/21BEBBD4-9720-DEA9-7B63219DAAFD3260.jpg"},
  {'title':"Southern Light", 
  'desc': "Nullam egestas est nec nisl tempor cursus. Aliquam hendrerit arcu a odio imperdiet eleifend. Ut risus ipsum, facilisis at tellus quis, ultrices dictum ipsum. Cras sodales lorem vel imperdiet faucibus. Suspendisse venenatis nisl sit amet velit congue, ac ullamcorper ipsum imperdiet. Cras ac augue magna.",
  'url':"https://cdn.cnn.com/cnnnext/dam/assets/180518103108-aurora-australis-new-zealand---milky-way.jpg"},
]




let h3 = document.querySelector('h3');
let p = document.querySelector('p');
let main = document.querySelector('.main')

  function start(){
  main.setAttribute('src', myPics[0].url);
  h3.innerText = `${myPics[0].title}`;
  p.innerText = `${myPics[0].desc}`;
}

start();

let footerImage = document.querySelectorAll('.footerImage');
console.log(footerImage);
for (let i = 0; i < footerImage.length; i++) {
  footerImage[i].setAttribute('src', `${myPics[i].url}`)
}



let rightButton = document.querySelector('#right');
let imgCounter = 0;
rightButton.onclick = () => {
  
  if (imgCounter <= myPics.length - 1) {
    if (imgCounter === myPics.length - 1) {
      imgCounter = 0;
      main.setAttribute('src', `${myPics[imgCounter].url}`)
      h3.innerText = `${myPics[imgCounter].title}`;
      p.innerText = `${myPics[imgCounter].desc}`;
    } else {
      imgCounter++;
      main.setAttribute('src', `${myPics[imgCounter].url}`)
      h3.innerText = `${myPics[imgCounter].title}`;
      p.innerText = `${myPics[imgCounter].desc}`;
    }
  }
  console.log(imgCounter);
}

let leftButton = document.querySelector('#left');
leftButton.onclick = () => {
  
  if (imgCounter >= 0) {
    if (imgCounter === 0) {
      //footerImage.className += ''
      imgCounter = myPics.length - 1;
      main.setAttribute('src', `${myPics[imgCounter].url}`)
      h3.innerText = `${myPics[imgCounter].title}`;
      p.innerText = `${myPics[imgCounter].desc}`;
      //footerImage.className += ' footerBorder'
    } else {
      //footerImage.className += ''
      imgCounter--;
      main.setAttribute('src', `${myPics[imgCounter].url}`)
      h3.innerText = `${myPics[imgCounter].title}`;
      p.innerText = `${myPics[imgCounter].desc}`;
      //footerImage.className += ' footerBorder'
    }
  }
}


let footer = document.querySelectorAll('.footer')
console.log(footer);
console.log(main);
footer.forEach((e, i) => {
  e.onclick = () => {
    main.setAttribute('src', `${myPics[i].url}`);
    imgCounter = i;
    //e.className += ''
    //e.className += ' footerBorder';

  }
})



}


