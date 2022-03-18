
//  take a array to add all character
// generate a random password when user click the password button

let char = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z',
'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z',1,2,3,4,5,6,7,8,9,0
,'@','#','$','%','^','&','*','_','-','!']

let password = document.getElementById('password-id');
let passwordArray = [];

let passwordId1 = document.getElementById('password-id1');
let passwordArrayTwo = [];

let passwordId2 = document.getElementById('password-id12');
let passwordArraythree = [];

let passwordId3 = document.getElementById('password-id13');
let passwordArrayfour = [];



function randomNumber()
{
   let random = Math.floor(Math.random() * char.length);
   return char[random];

}


function passwordGenerator()
{
   let firstChar = randomNumber()
   let secondChar = randomNumber()
   let thirdChar = randomNumber()
   let fourthChar = randomNumber()
   let fiveChar = randomNumber()
   let sixChar = randomNumber()
   let sevenChar = randomNumber()
   let eightChar = randomNumber()
   let nineChar = randomNumber()
   let tenChar = randomNumber()

   passwordArray =[firstChar,secondChar,thirdChar,fourthChar,fiveChar,sixChar,sevenChar,eightChar,nineChar,tenChar];
    password.textContent = ' ';
   for (let i=0; i<passwordArray.length; i++)
   {
      password.textContent +=   passwordArray[i] + " ";


   }
   let elvenChar = randomNumber()
   let twelveChar = randomNumber();
   let thirteenChar = randomNumber();
   let fourteenChar = randomNumber();
   let fitheenChar = randomNumber();
   let sixteenChar = randomNumber();
   let seventeenChar = randomNumber();
   let eighteenChar = randomNumber();
   let nighteenChar = randomNumber();
   let twentyChar = randomNumber();

   passwordArrayTwo = [elvenChar,twelveChar,thirteenChar, fourteenChar,fitheenChar,sixteenChar,seventeenChar,
     eighteenChar,nighteenChar,twentyChar];

    passwordId1.textContent = ' ';
   for (let i =0 ; i<passwordArrayTwo.length; i++)
   {
      passwordId1.textContent += passwordArrayTwo[i] + " ";
   }

   let twentyoneChar = randomNumber()
   let twentytwoChar = randomNumber();
   let twentythreeChar = randomNumber();
   let twentyfourChar = randomNumber();
   let twentyfiveChar = randomNumber();
   let twetysixChar = randomNumber();
   let twentysevenChar = randomNumber();
   let twentyeightChar = randomNumber();
   let twentynineChar = randomNumber();
   let twentyyChar = randomNumber();

   passwordArraythree = [twentyoneChar,twentytwoChar,twentythreeChar, twentyfourChar,twentyfiveChar,twetysixChar,twentysevenChar,
      twentyeightChar,twentynineChar,twentyyChar];

   passwordId2.textContent = ' ';
   for (let i =0 ; i<passwordArraythree.length; i++)
   {
      passwordId2.textContent += passwordArraythree[i] + " ";
   }

   let thirtyoneChar = randomNumber()
   let thirtytwoChar = randomNumber();
   let thirtythreeChar = randomNumber();
   let thirtyfourChar = randomNumber();
   let thirtyfiveChar = randomNumber();
   let thirtysixChar = randomNumber();
   let thirtysevenChar = randomNumber();
   let thirtyeightChar = randomNumber();
   let thirtynineChar = randomNumber();
   let thirtytwentyyChar = randomNumber();

   passwordArrayfour = [thirtyoneChar,thirtytwoChar,thirtythreeChar, thirtyfourChar,thirtyfiveChar,thirtysixChar,thirtysevenChar,
      thirtyeightChar,thirtynineChar,thirtytwentyyChar];

   passwordId3.textContent = ' ';
   for (let i =0 ; i<passwordArrayfour.length; i++)
   {
      passwordId3.textContent += passwordArrayfour[i] + " ";
   }



}

