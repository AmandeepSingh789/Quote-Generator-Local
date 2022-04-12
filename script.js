const quoteContainer= document.getElementById('quote-container');

const quoteText= document.getElementById('quote');
const authorText= document.getElementById('author');
const twitterBtn= document.getElementById('twitter');
const newQuoteBtn= document.getElementById('new-quote');
const loader= document.getElementById('loader');

var buttonSound = new Audio('Audios/btn.mp3');
// Get Quotes FROM API
//let  apiQuotes=[];


function loading(){
    loader.hidden=false;
    quoteContainer.hidden=true;
}

function complete(){

    loader.hidden=true;
    quoteContainer.hidden=false;
}
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}

function newQuote(){

    buttonSound.play();
    buttonSound.volume=0.5;
    const index = getRandomInt(0,localQuotes.length);
    const quote = localQuotes[index];
    if(!quote.author){
        authorText.textContent ='Anonymous';
    }
    else{
        authorText.textContent = quote.author;
    }

    if(quote.text >120){
        quoteText.classList.add('long-quote');
    }
    else{
        quoteText.classList.remove('long-quote');
    }
    
    quoteText.textContent = quote.text;
    setTimeout( function() { complete(); }, 10);
}

// if using local array comment out getquotes and comment out getquotes being called, instead call newquote, get rid of qpiquotes, change apiqutoes to localquotes in newqutoe funnction
/*
async function getQuotes(){
    loading();
    const apiUrl='https://type.fit/api/quotes';

    try{
        const response = await fetch(apiUrl)
        apiQuotes = await response.json();
        newQuote();
    }catch(error){
        //Catch Error Here
    }
}
*/
function tweetQuote(){


    buttonSound.play();
    buttonSound.volume=0.5;
    const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`;
    window.open(twitterUrl,'_blank');
}


newQuoteBtn.addEventListener('click',newQuote);
twitterBtn.addEventListener('click',tweetQuote);
loading();
setTimeout( function() { complete();
newQuote(); }, 400);
