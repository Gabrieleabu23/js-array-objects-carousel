const imagesContainer= document.getElementById("container_img");


const images = [ 
        { image: 'img/01.webp', title: 'Marvel\'s Spiderman Miles Morales', text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.' },
        { image: 'img/02.webp', title: 'Ratchet & Clank: Rift Apart', text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.', },
        { image: 'img/03.webp', title: 'Fortnite', text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos." },
        { image: 'img/04.webp', title: 'Stray', text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city' },
        { image: 'img/05.webp', title: "Marvel's Avengers", text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.' } 
    ];

    // MILESTONE 2
    let immagini =[];

images.forEach(element => {
    const divImg= document.createElement("div");
    divImg.classList.add("img-container");
    divImg.innerHTML= `<img src="${element.image}" alt=""> <div class="position-absolute bottom-0  text-white"><h4 class="me-4 pe-4 ">${element.title} </h4>
    <p class=" pb-3 fs-6 text-right pb-2 bg-dark me-4 pe-4 w-75">${element.text} </p>
    </div>`
    imagesContainer.append(divImg);
    if(element.image == 'img/01.webp'){
        divImg.classList.add("img-yes");
    }
    immagini.push(divImg);
});


// console.log(images);
var contatoreImg=0;



function carosello(){
    
    if( contatoreImg < images.length - 1){
        console.log(immagini[1]);
        document.getElementById("next").classList.remove("img-no");
        immagini[contatoreImg].classList.remove("img-yes");
        console.log("statore contatore",contatoreImg)
        contatoreImg++;
        immagini[contatoreImg].classList.add("img-yes");
        document.getElementById("prev").classList.remove("img-no");

    }
    // if(contatoreImg === images.length-1){
    //     images[contatoreImg-1].classList.remove("img-yes");
    //     images[contatoreImg].classList.add("img-no");
    // }

    if(contatoreImg === images.length - 1){
        document.getElementById("next").classList.add("img-no");

    }
}
function carosello2(){
    console.log("stato contatore",contatoreImg)
    immagini[contatoreImg].classList.remove("img-yes");
    contatoreImg--;
    immagini[contatoreImg].classList.add("img-yes");
    document.getElementById("next").classList.remove("img-no");
    if (contatoreImg ===0){
        document.getElementById("prev").classList.add("img-no");
    }
} 


// console.log(contatoreImg)