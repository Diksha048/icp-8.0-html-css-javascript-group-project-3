
// slider
const imagesArr= ["./../images/contact-page/business-management.jpeg","./../images/contact-page/econimics.jpeg","./../images/contact-page/finance-image.jpeg","./../images/contact-page/information-technology.jpeg"];

let imgIndex=0;
function prev(){
    if(imgIndex==0){
        imgIndex=imagesArr.length-1;
    }
    else{
        imgIndex--;
    }
    const imgElement= document.getElementById('img');
    imgElement.src=imagesArr[imgIndex]
}

function next(){
    if(imgIndex==imagesArr.length-1){
        imgIndex=0;
    }
    else{
        imgIndex++;
    }
    const imgElement =document.getElementById('img');
    imgElement.src=imagesArr[imgIndex]
}

setInterval(next,1000)
