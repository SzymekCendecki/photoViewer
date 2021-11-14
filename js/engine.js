const galleryOne = document.querySelector("#galleryOne");
const galleryTwo = document.querySelector("#galleryTwo");
const galleryThree = document.querySelector("#galleryThree");

const tab = [
    '<img src="./images/image1.jpg" alt="image1" />', 
    '<img src="./images/image2.jpg" alt="image2" />', 
    '<img src="./images/image3.jpg" alt="image3" />', 
    '<img src="./images/image4.jpg" alt="image4" />', 
    '<img src="./images/image5.jpg" alt="image5" />', 
    '<img src="./images/image6.jpg" alt="image6" />', 
    '<img src="./images/image7.jpg" alt="image7" />'
];

const tab2 = [
    '<img src="./images2/image1.jpg" alt="image1" />', 
    '<img src="./images2/image2.jpg" alt="image2" />',
    '<img src="./images2/image3.jpg" alt="image3" />', 
    '<img src="./images2/image4.jpg" alt="image4" />', 
    '<img src="./images2/image5.jpg" alt="image5" />',
    '<img src="./images2/image6.jpg" alt="image6" />',
    '<img src="./images2/image7.jpg" alt="image7" />'
];

const tab3 = [
    '<img src="./images3/image1.jpg" alt="image1" />', 
    '<img src="./images3/image2.jpg" alt="image2" />', 
    '<img src="./images3/image3.jpg" alt="image3" />', 
    '<img src="./images3/image4.jpg" alt="image4" />', 
    '<img src="./images3/image5.jpg" alt="image5" />',
    '<img src="./images3/image6.jpg" alt="image6" />',
    '<img src="./images3/image7.jpg" alt="image7" />'
];
              
gallery = (array) =>{

    let i = 0;
    let z = array.length-1;
    let y = i+1;

    document.querySelector("#before").innerHTML = array[array.length-1];
    document.querySelector("#now").innerHTML = array[i];
    document.querySelector("#after").innerHTML = array[y];

    document.querySelector("#plus").addEventListener("click", ()=>{
        i++;
     
        if(i>=array.length){
            i = 0;
        }
        z++;
        y++;

        if(y>=array.length){
            y = 0;
 
        }else if(z>=array.length){
            z = 0;
        }                
     
        document.querySelector("#before").innerHTML = array[z];
        document.querySelector("#now").innerHTML = array[i];
        document.querySelector("#after").innerHTML = array[y];
        
    })

    document.querySelector("#minus").addEventListener("click", ()=>{
        i--;

        if(i<0){
            i = array.length-1;
        }

        z--;
        y--;

        if(z<0){
            z = array.length-1;
        }else if(y<0){
            y = array.length-1;
        }

        document.querySelector("#before").innerHTML = array[z];
        document.querySelector("#now").innerHTML = array[i];
        document.querySelector("#after").innerHTML = array[y];
    
    })
}

if(galleryOne.checked === true){
    gallery(tab);
}

galleryOne.addEventListener("click", ()=>{
    gallery(tab);
})

galleryTwo.addEventListener("click", ()=>{
    gallery(tab2);
})

galleryThree.addEventListener("click", ()=>{
    gallery(tab3);
})