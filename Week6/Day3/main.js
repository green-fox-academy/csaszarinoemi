'use strict'

let myPics = [
  "http://www.travelways.com.sg/uploads/tours/images/19/south-island-new-zealand-landscape-reflection-river-forest-fog-mist-high-resolution-images_1450845998.jpg",
  "https://blog.backpackerdeals.com/wp-content/uploads/2013/07/jon-arnold-southern-alps-south-island-new-zealand-road-scenery-hd-nature.jpg",
  "https://dak95nwic4sny.cloudfront.net/73/new-zealand-30876048-1536579250-ImageGalleryLightboxLarge.jpg",
  "https://wallpapershome.com/images/wallpapers/lake-tekapo-1920x1080-5k-4k-wallpaper-south-island-new-zealand-566.jpg",
  "https://www.arohatours.co.nz/media/1431/rainforest.jpg",
  "https://endlessloopphotography.files.wordpress.com/2017/03/tasman-glacier.jpg",
  "http://www.reachcoach.co.nz/en/wp-content/uploads/2016/04/21BEBBD4-9720-DEA9-7B63219DAAFD3260.jpg",
  "https://cdn.cnn.com/cnnnext/dam/assets/180518103108-aurora-australis-new-zealand---milky-way.jpg",
]

let footerImage = document.querySelectorAll('.footerImage');
console.log(footerImage);
for (let i= 0; i < footerImage.length; i++){
footerImage[i].setAttribute('src', `${myPics[i]}`)
} 

let rightButton = document.querySelector('#right');
let imgCounter = 0;
rightButton.onclick = () => {

  if (imgCounter <= myPics.length-1){
    if ( imgCounter === myPics.length-1){
      imgCounter = 0;
      main.setAttribute('src', `${myPics[imgCounter]}`)
    } else {
      imgCounter++;
      main.setAttribute('src', `${myPics[imgCounter]}`)
    }
  }
  console.log(imgCounter);
}

let leftButton = document.querySelector('#left');
leftButton.onclick = () => {

  if (imgCounter >= 0){
    if ( imgCounter === 0){
      imgCounter = myPics.length-1;
      main.setAttribute('src', `${myPics[imgCounter]}`)
    } else {
      imgCounter--;
      main.setAttribute('src', `${myPics[imgCounter]}`)
    }
  }
}



let footer = document.querySelectorAll('.footer')
let main = document.querySelector('.main')
console.log(footer);
for (let i= 0; i < footer.length-1; i++){
  footer[i].onclik = () => {
    main.setAttribute('src', `${myPics[i]}`)
  }
}

