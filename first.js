// const product = {
//     fullName : "ball pen",
//     rating : 5,
//     price : 200,
// }
// console.log(product)
// let i=1; 
// do {
//     console.log("i=",i);
//     i++;
// }while(i<=5);
// let str= "reet kansal";
// let size =0 ;
// for (let i of str){
//     console.log(i);
//     size++;
// }

// console.log("size of string is : ",size);

// for (let i= 0; i<=100;i++){
//     if (i%2===0)
//         console.log(i);
// }
// let num= 7;
// let userNum= prompt("enter a number");
// while ( userNum !=num){
//     userNum = prompt(" you have entered the wrong number .enter again");

// }
// console.log("congrats!

// let str= prompt("enter your full name");
// userName = "@" + str.trim() + str.length;
// // console.log("username = " , userName)
// let sum=0;
// let marks =[ 85,97,44,37,76,60];
// for (i=0;i< marks.length; i++) {
//     sum= sum + marks[i];
// }
// let avg= sum/marks.length;
// console.log("average marks of the class : ",avg);

// let prices = [250,645,300,900,50];

// for (i=0;i<prices.length;i++){
//     let offer = prices[i] *0.1;
//     prices[i] -= offer;

// }

// console.log(prices);
// let companies= ["bloomberg","microsoft","uber","google","IBM","netflix"];
// // companies.shift();

// // console.log(companies);
// companies.splice(2,1,"ola");
// console.log(companies);
// let newCompanies2 = companies.push("amazon");
// console.log(companies)

// funtion parameters are local and they are block scoped

// function sum(a,b){
//     return a+b;
// }
// console.log(sum(4,5));

//  const arrowSum=(a,b) =>{
//     console.log(a+b);
// //  }
// // const arrowMul =(a,b) => {
// //     console.log(a*b);
// // }
// const countVowels=(str) =>{
//     let count = 0;
//     for(const char of str) {
//         if (
//             char ==="a"|| char === "e" || char ==="i"|| char ==="o"|| char ==="u"
//         ){
//             count++;
//         }
//     }

//     return count;
// }
// console.log(countVowels("reet kansal"))


// let arr=["delhi ","mumbai","pune"];

// arr.forEach((val,idx)=>{    
//     console.log(val.toUpperCase(),idx);
// }); // for each loop are called high order functions as the take another function inside them and return their value

// let num =[ 1,2,3,4,5 ];
// let newArr=num.filter((val)=>{
//     return val%2!==0;
// })
// console.log(newArr);
// let arr = [1,2,3,4,5];
// const output =arr.reduce((prev,curr)=>{
//     return prev>curr?prev:curr;
    
    
// })
// console.log(output);
// let marks = [88,97,93,99,80];
// let newMarks =marks.filter((val)=>{
//     return val>90;
    
// })
// console.log(newMarks);
// let n= prompt("enter any number:");
// let arr=[];
// for (i=1;i<=n;i++){
//     arr[i-1]=i;

// };
// console.log(arr);

// let newN=arr.reduce((prev,curr)=>{
//     return prev+curr;
// })
// console.log(newN);
// let newP=arr.reduce((prev,curr)=>{
//     return prev*curr;
// })
// console.log(newP);
// let div = document.querySelector("div");
// console.dir(div);
// let heading = document.querySelector("h3");
// let heading2 = document.querySelector("h2");
// console.dir(heading2.innerText);
// heading2.innerText ="hello JavaSCript from reet kansal";
// // console.dir(heading2)
// let divs = document.querySelectorAll(".box");

// let idx =0
// for (div of divs){
//     div.innerText =`new unique value ${idx}`;
//     idx++;

// };
// let para = document.querySelector("p");
// console.log(para.setAttribute("class","newclass"));
// let newP = document.createElement("p");
// newP.innerText = "reet"
// console.dir(newP);

// let p = document.querySelector("p");
// p.prepend(newP);

// let newBTN = document.createElement("button");
// newBTN.innerHTML="click me";
// document.querySelector("body").prepend(newBTN);
// newBTN.style.backgroundColor="red";
// newBTN.style.color="white";

// let para = document.querySelector("p");
// para.classList.add("newClass");
// let btn1 = document.querySelector("#btn1");
// // btn1.onclick =() =>{
// //     console.log("clicked");
// // }
// // let p = document.querySelector("p");
// // p.onmouseover=(evt)=>{
    
// //     console.log(evt);
// //     console.log(evt.type);

  
// // }
// btn1.addEventListener("click",()=>{
//     console.log("clicked1");
// })
// btn1.addEventListener("click",()=>{
//     console.log("clicked2");
// })
// const handler =()=>{
//     console.log("clicked3");
// }
// btn1.addEventListener("click", handler);
// btn1.addEventListener("click",()=>{
//     console.log("clicked4");
// })
// btn1.removeEventListener("click",handler)
// let mode = document.querySelector("#mode");
// let currMode ="light";
// mode.addEventListener("click",()=>{
//     if(currMode === "light"){
//         currMode="dark"
//         document.querySelector("body").style.backgroundColor="black";
//     } else{
//         currMode ="light"
//         document.querySelector("body").style.backgroundColor="white";
//     }
//      console.log(currMode)

// })
let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset");
let newGame = document.querySelector("#newGame");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let turnO = true;

const winPatterns =[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];
const resetGame =()=>{
    turnO=true;
    enableBoxes();
    msgContainer.classList.add("hide")
}
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        
        if (turnO===true){
            box.innerText = "O";
            turnO = false;
            
           
        } else {
            box.innerText="X";
            box.style.color= "#52AA5E";
            turnO = true;

        }
        box.disabled=true;
        checkWinner();
    });
});
const disableBoxes = ()=>{
    for(box of boxes){
        box.disabled = true;
    }
}
const enableBoxes = ()=>{
    for(box of boxes){
        box.enabled = true;
        box.innerText="";
    }
}

const showWinner = (winner)=>{
    msg.innerText=`Congratulation!!,Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
};

// const drawGame = (draw)=>{
//     msg.innerText=`match is draw `;
//     msgContainer.classList.remove("hide");
//     disableBoxes();
// };

const checkWinner=()=>{
    for(let pattern of winPatterns) {
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if(pos1Val !="" && pos2Val !="" && pos3Val != ""){
            if (pos1Val===pos2Val && pos2Val===pos3Val) {
                console.log("winner",pos1Val);
                showWinner(pos1Val);
            } else{
                const count=()=>{
                    let count =0
                    if(pos1Val !="" && pos2Val !="" && pos3Val != ""){
                        if (pos1Val!==pos2Val && pos2Val!==pos3Val);
                        count++;
                    }
                    if(count()===9){
                        console.log("draw");
                }
                // if(count()===9){
                //     console.log("draw");
                //     // drawGame();
            
                }
            }
            
        }

    }
};
newGame.addEventListener("click",resetGame);
reset.addEventListener("click",resetGame);
