// green zone

// Add facts here

var facts = [{
  "quote" : "Since humans have 10 fingers, many human civilizations have a number system based on the number 10.",
  "source": "Numberphile",
  "sourceURL": "https://www.youtube.com/watch?v=K305Vu7hFg0",
  "USMclassCodes": ["MAT481"]
},
{
  "quote" : "Some human civilizations have developed number systems based on the number 60. This system is still used for time.",
  "source": "Numberphile",
  "sourceURL": "https://www.youtube.com/watch?v=R9m2jck1f90", 
  "USMclassCodes": ["MAT481"]
},
{
  "quote" : "A human foal's head is one quarter of its length, but only an eighth when it's grown.",
  "source": "Rydell. EquestriaBound",
  "sourceURL": "",
  "USMclassCodes": ["BSC 250"]
},
];

// yellow zone

// Add schools and class codes here

var schools = [
  {
    school : "The University of Southern Mississippi",
    schoolCode : "USM",
    classCodes: [
      { "code": "MAT",
        "name": "Mathematics",
        "classNumbers": [
          ["481", "History of Math"]
         ]
      },
      { "code": "BSC",
        "name": "Biological Sciences",
       "classNumbers": [
         ["250", "Human Anatomy"]
       ]
      }
    ]
  }
];

// red zone. Only change code after this line if you know thy JavaScript and you find it necessary.

function randomIndexOf(theArray) {
  return Math.floor(Math.random() * theArray.length);
}

var biturl = 'bit.ly/ASCLyra';

var author = "Lyra";
var twitterHandle = "#Lyra";
var quotes = facts;
var quoteNum = randomIndexOf(quotes);


// functions

function randomElementOf(theArray) {
  return theArray[Math.floor(Math.random() * theArray.length)];
}



function replaceSpace20(str) {
  str2 = '';
  for (var i = 0; i < str.length; i++) {
    if (str[i] === ' ') {
      str2 += '%20';
    } else if (str[i] === '#'){
      str2 += '%23';
    }else{
      str2 += str[i];
    }
  }
  return str2;
}

function twitterTrunc(quote, handle) {
  var ql = quote.length;
  var hl = handle.length;
  var sp = 11;
  var bl = biturl.length;
  var tweet = '';
  
  if (ql + hl + sp + bl <= 140) {
    tweet = quote + ' -' + handle + " " + biturl;
  } else {
    var qe = 140 - ql - hl - sp - bl - 1 ;
    quote = quote.slice(0,qe) + '…';
    tweet = quote + ' ' + handle + " " + biturl;
  }
  return replaceSpace20(tweet);
}

function randQuote() {
    quoteNum = randomIndexOf(quotes);
    showQuote(quotes[quoteNum]);
}

function prevQuote() {
    if (quoteNum > 0) {
      quoteNum -= 1;
      showQuote(quotes[quoteNum]);
    }  
}

function nextQuote() {
    if (quoteNum < quotes.length-1) {
    quoteNum += 1;
    showQuote(quotes[quoteNum]);
    }  
}

function firstQuote() {
  quoteNum = 0;
  showQuote(quotes[quoteNum]);
}

function lastQuote() {
  quoteNum = quotes.length-1;
  showQuote(quotes[quoteNum]);
}


function showQuote(quote) {
  var source = '';
  document.getElementById("quote").innerHTML = '"' + quote.quote + '"';
  document.getElementById("author").innerHTML = "... " + author;

  var tweet = '<a class="twitter-share-button" ';
  tweet += 'href="https://twitter.com/intent/tweet?text=';
  
  
  quoteTweet = twitterTrunc(quote.quote, twitterHandle);
  
  tweet += quoteTweet;
  tweet += '" data-size="large" target="_blank">[Tweet]</a>';
  
  document.getElementById("twitterButton").innerHTML = tweet;
  //document.getElementById("test").innerHTML = quoteTweet;
  
  if (quote.sourceURL) {
    source = '<a  class="twitter-share-button" href="' + quote.sourceURL;
    source += '" target="_blank">[Source: ' + quote.source + ']</a>';
  } else {
     source = '<div class="twitter-share-button">Source:' + quote.source + '</div>';
  }
  document.getElementById("source").innerHTML = source;
  
}

// not working yet. Abandoned until project takes off
/*
function clssFilter(clss) {
  function clssCheck(quote) {
    return quote.classCode === clss;
  }
  quotes = facts.filter(clssCheck);
}

function clssPick() {
  var clssCodes = facts.map(function(c) {return c.classCode;});
  var clssCodes2 = [];
  var buttS; // button string
   for(var i = 0; i< clssCodes.length; i++) {
    if (clssCodes2.indexOf(clssCodes[i]) == -1) {
      clssCodes2.push(clssCodes[i]);
    }
  }
  for (var i = 0; i < clssCodes2.length; i++) {
    buttS += '<button class="twitter-share-button" onclick="clssFilter("' + clssCodes2[i] + '")>[' + classCodes2[i];
    buttS += ']</button> ';
  }
  
  document.getElementById('quote').innerHTML = buttS;
}
*/

randQuote();
