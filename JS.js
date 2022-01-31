

const quoteArray=[ "Love For All, Hatred For None. – Khalifatul Masih III",
"Change the world by being yourself. – Amy Poehler",
"Every moment is a fresh beginning. – T.S Eliot",
"Never regret anything that made you smile. – Mark Twain",
"Die with memories, not dreams. – Unknown",
"Aspire to inspire before we expire. – Unknown",
"Everything you can imagine is real. – Pablo Picasso",
"Simplicity is the ultimate sophistication. – Leonardo da Vinci",
"Whatever you do, do it well. – Walt Disney",
"What we think, we become. – Buddha"

];

function newQuote(){
    var randomNumber= Math.floor(Math.random()* (quoteArray.length) );

    //returns a random number length of the array of strings in the array of quotes
   
    document.getElementById('quoteDisplay').innerHTML = quoteArray[randomNumber];
    
    // using the value or randomly generated string to retrieve a quote from array and display it in  userface
}


