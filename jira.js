

let body = document.querySelector("body");
let Allcolors = document.querySelectorAll(".color");
let main = document.querySelector(".main");
const colors = ["green", "aqua","blue","yellow"];
// let allDivs = document.querySelectorAll(".ticketbox");

// console.log(ticketHeader);


console.log(Allcolors);
let addbtn =document.querySelector(".fa-plus");
console.log(addbtn);


addbtn.addEventListener("click",function ()
{

    // create a ticket
      creatTicket();
})




// let uid = 458;
function creatTicket()
{
     //make a div dynamically.
     var uuid = (Math.floor(Math.random() * 10000) + 10000).toString().substring(1);
console.log(uuid);
      let ticket = document.createElement("div");
        ticket.setAttribute("class","ticketbox");
        ticket.innerHTML = `
        <div class="ticket_header bisqu"></div>
        <div class="ticketContent">
            <div class="uid">
            #${uuid}
            </div>
       <textarea name=""></textarea>  
        </div>`
    
        main.appendChild(ticket);


        let ticketHeader =ticket.querySelector(".ticket_header");
        ticketHeader.addEventListener("click",changeColor)
    //     console.log(ticketHeader.length);



    //    for(let i=0 ;i<ticketHeader.length;i++)
    //    {
    //     ticketHeader[i].addEventListener("click" ,changeColor );
    //    }

        function changeColor(e)
        {
  
    let header = e.currentTarget;
    //    i have html element and classes can be used to identify that
    //  element and set another class to modify it's behaviour 
    // list of all the classes on an element 
    let classes = header.classList;
    console.log("sdklvj"+classes+"of")
    let cColor = classes[1];
    // alert(cColor);
    // check idx -> next element uspe put 
    let cIdx = 0;
    for (let i = 0; i < colors.length; i++) {
        if (cColor == colors[i]) {
            cIdx = i;
            break;
        }
    }
    let nextIdx = (cIdx + 1) % colors.length;
    let nextColor = colors[nextIdx];
    // classes[1]=nextColor;
        classes.remove(cColor);
    classes.add(nextColor);      
  }
      // console.log(tickerHeader);



}



//Concept Of Filtering

// for(let i =0 ;i<Allcolors.length ; i++)
// {
//     Allcolors[i].addEventListener("click" , colorFilter)
// }
//touch waka color main ke  kid div se same h
// if nhi h to you disply block kr de

// function colorFilter(e)
// {
//     let elem = e.currentTarget;
//     let clickedColor = elem.classList[1];
//     // console.log(clickedColor);
//     let ticketbox =document.querySelectorAll(".ticketbox");

//           console.log(ticketbox.length);
//     for(let i=0 ; i<ticketbox.length ; i++)
//     {
//           let ticketheader = ticketbox[i].querySelector(".ticket_header");
//             let pColor = ticketheader.classList[1];
//         //   console.log(pColor+"fgdh")
//           if(pColor ==clickedColor )
//           {
//             ticketbox[i].style.display="none";
//           }

// // 'cd;b'CDATASection;BaseAudioContext;b.'b'
//           // if first time lcick h to disply none kro and second click h to disply 
//     } 
// }
