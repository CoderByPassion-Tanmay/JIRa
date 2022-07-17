

let body = document.querySelector("body");
let Allcolors = document.querySelectorAll(".color");
let main = document.querySelector(".main");
const colors = ["green", "aqua","blue","yellow"];
let lock =document.querySelector(".lock");
let unlock =document.querySelector(".unlock");

isLocked = false;


// console.log(Allcolors);
let addbtn =document.querySelector(".fa-plus");
// console.log(addbtn);


addbtn.addEventListener("click",function ()
{
       if(isLocked == true)
       {
        alert("Please Unlock First");
        return;
       }
    // create a ticket
      creatTicket();
})

lock.addEventListener("click",lockHelper);
unlock.addEventListener("click",unlockHelper);


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
 // if isLocked == =tre we not want to edit our text so 



//Concept Of Filtering
let colorBox = document.querySelectorAll(".color-boxes");

for(let i =0 ;i<colorBox.length ; i++)
{
    
    colorBox[i].addEventListener("click" , colorFilter);

}
//touch waka color main ke  kid div se same h
// if nhi h to you disply block kr de

function colorFilter(e)
{

    if(isLocked == false)
    {
        alert("please Lock it ");
        return ;
    }
  
          // main ->div me se jo color match ho rhe ho unko sirf bahar rehrn do
   
          
          checkTextArea();
  
    


    let elem = e.currentTarget;
    console.log(elem);
    let childElemArr = elem.children;
    let cColor =  childElemArr[0].classList[1];


     let secondClass = elem.classList[1]; 
     console.log("kdfgjdklfg   "+secondClass);


     if(secondClass == "clicked")
     {
        // if our class is clicked then smoply remove clicked class property from parent (color-boxes)
        // remove click
        elem.classList.remove("clicked");

        // show all ticket
         showAll();
             }
    else{
        // add clicked class property to color  elem color box
                // console.log("dsjk")

                // when the color-box clicked then if we 
                // clicked another color box so we want to remove lciked 
                // class proverty to another color-box

                // checks for not any

                //    colorBox[i].addEventListener("click" , colorFilter)
              for(let i = 0 ; i <colorBox.length ; i++)
              {
                
                // "clicked"
               if(colorBox[i].classList[1] = "clicked");
               {
                colorBox[i].classList.remove("clicked");
               }


              }

            elem.classList.add("clicked");
        //   filter that color in main --> div
        showClickedColor(cColor);
    }


    } 
 

    function showClickedColor(cColor)
    {
        // main ->div me se jo color match ho rhe ho unko sirf bahar rehrn do

        let Allticket = document.querySelectorAll(".ticketbox");
        // check for each ticked heading the the cColor matched or not

        console.log(Allticket);

        for(let i =0 ; i<Allticket.length;i++)
        {
        let tickedHeader =    Allticket[i].querySelector(".ticket_header");
        console.log(tickedHeader);

        
        console.log(tickedHeader.classList[1]);
        if(tickedHeader.classList[1]  == cColor)
        {
            Allticket[i].style.display="block";
        }
        else
        {
            Allticket[i].style.display="none";

        }
        }
    }


    function showAll()
    {
        let Allticket = document.querySelectorAll(".ticketbox");
        for(let i =0 ; i<Allticket.length;i++)
        {
            Allticket[i].style.display="block"
        }

        for (let i = 0; i < colorBox.length; i++) {
            // if -> elem has class -> remove
            // doesnot -> leave 
            colorBox[i].classList.remove("clicked");
        }
    }

    function lockHelper(e){
       
        
        isLocked = true;


    }
    function unlockHelper() {
        isLocked =false;
        showAll();
        checkTextArea();

    }


    function checkTextArea()
    {
        
        let Allticket = document.querySelectorAll(".ticketbox");
        // check for each ticked heading the the cColor matched or not
              // Allticket.querySelector()
      //   console.log(Allticket);
 
        for(let i =0 ; i<Allticket.length;i++)
        {
        let tickedContent =    Allticket[i].querySelector(".ticketContent");
        let textarea =tickedContent.querySelector("textarea");
        if(isLocked == true)
        {
        textarea.setAttribute("readOnly","true");
      }
       else{
          textarea.removeAttribute("readOnly");
       }
              
        }
    }