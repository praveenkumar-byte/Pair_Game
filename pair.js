const section=document.querySelector("section");
let playercount=document.querySelector("span");
let playerlives=6;
playercount.textContent=playerlives;


const getData=()=>[
   {imgsrc:"./images/dog6.jpg",name:"dog6"},
   {imgsrc:"./images/love7.jpg",name:"love7"},
   {imgsrc:"./images/love8.jpg",name:"love8"},
   {imgsrc:"./images/money5.jpg",name:"money5"},
   {imgsrc:"./images/smile1.jpg",name:"smile1"},
   {imgsrc:"./images/smile2.jpg",name:"smile2"},
   {imgsrc:"./images/smile3.jpg",name:"smile3"},
   {imgsrc:"./images/smile4.jpg",name:"smile4"},
   {imgsrc:"./images/dog6.jpg",name:"dog6"},
   {imgsrc:"./images/love7.jpg",name:"love7"},
   {imgsrc:"./images/love8.jpg",name:"love8"},
   {imgsrc:"./images/money5.jpg",name:"money5"},
   {imgsrc:"./images/smile1.jpg",name:"smile1"},
   {imgsrc:"./images/smile2.jpg",name:"smile2"},
   {imgsrc:"./images/smile3.jpg",name:"smile3"},
   {imgsrc:"./images/smile4.jpg",name:"smile4"}
];

const randomDAta=()=>{
    const cardData=getData();
    cardData.sort(()=>{ 
        return Math.random() - 0.5
    })
    return cardData;
}

const createCard=(()=>{
    const cardData=randomDAta();
    cardData.forEach((item)=>{
        const card=document.createElement("div");
        const face=document.createElement("img");
        const back=document.createElement("div");
        face.src=item.imgsrc;
        card.setAttribute("name",item.name);
        //createing class list
        card.classList="card";
        face.classList="face";
        back.classList="back";
       
        //apending these cards to section

        section.appendChild(card);
        card.appendChild(face);
        card.appendChild(back);

       setTimeout(()=> card.addEventListener('click',(e)=>{
        card.classList.toggle("togglecard");
        clickCard(e);
    }),1000)
    })
})
const clickCard=(e)=>{
    const cardclicked=e.target;
    cardclicked.classList.add("flipped");
    const flipped=document.querySelectorAll(".flipped");
    const togglecard=document.querySelectorAll(".togglecard");
    if(flipped.length==2){
        if(flipped[0].getAttribute("name")===flipped[1].getAttribute("name")){
         console.log("right");
         flipped.forEach(card=>{
            card.classList.remove("flipped");
            card.style.pointerEvents="none";
         })
        }
        else{
         console.log("wrong");
         flipped.forEach(card=>{
            card.classList.remove("flipped");
            setTimeout(()=>card.classList.remove("togglecard"),1000);
         })
         playerlives--;
         playercount.textContent=playerlives;
         if(playerlives==0){
            restart("Try Again");
         }
        }
    }
if(togglecard.length===16){
    restart("You Win");
}
}
const restart=(text)=>{
    let cardData=randomDAta();
    let faces=document.querySelectorAll(".face");
    let cards=document.querySelectorAll(".card");
    section.style.pointerEvents="none";
    cardData.forEach((item,index)=>{
        cards[index].classList.remove("togglecard");
       setTimeout(()=>{
        cards[index].style.pointerEvents="all";
        faces[index].src=item.imgsrc;
        cards[index].setAttribute("name",item.name);
        section.style.pointerEvents="all";
       },1000)
    })
    playerlives=6;
    playercount.textContent=playerlives;
    setTimeout(()=>window.alert(text),1000);
}
 createCard();