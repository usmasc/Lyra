// variables

var biturl = 'usmasc.github.io/Lyra';

var quotes = [{
  "quote" : "Since humans have 10 fingers, many human civilizations have a number system based on the number 10.",
  "source": "Scott",
  "sourceURL": "http://punkbass.github.io" 
},
{
  "quote" : "Some human civilizations have developed number systems based on the number 60. This system is still used for maps and time.",
  "source": "Scott",
  "sourceURL": "http://punkbass.github.io" 
},
{
  "quote" : "A human foals head is one quarter of its length, but only an eighth when it's grown.",
  "source": "Rydell. EquestriaBound",
  "sourceURL": ""
},
]

// danger zone. Only change code after this line if you know thy JavaScript and you find it necessary.

var author = "Lyra",
var twitterHandle = "#Lyra"

// functions

function randomElementOf(theArray) {
  return theArray[Math.floor(Math.random() * theArray.length)];
}

function replaceSpace20(str) {
  str2 = '';
  for (i = 0; i < str.length; i++) {
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


function newQuote() {
  var source = '';
  var quote = randomElementOf(quotes);
  document.getElementById("quote").innerHTML = '"' + quote.quote + '"';
  document.getElementById("author").innerHTML = "~ " + author;

  var tweet = '<a class="twitter-share-button" ';
  tweet += 'href="https://twitter.com/intent/tweet?text=';
  
  
quoteTweet = twitterTrunc(quote.quote, twitterHandle);
  
tweet += quoteTweet;
  tweet += '" data-size="large" target="_blank">[Tweet]</a>';
  
  document.getElementById("twitterButton").innerHTML = tweet;
  //document.getElementById("test").innerHTML = quoteTweet;
  
  if (quote.sourceURL) {
    source = 'Source: <a href="' + quote.sourceURL + '" target="_blank">[' + quote.source + ']</a>';
  } else
     source = 'Source:' + quote.source;
  }
  document.getElementById("source").innerHTML = ;
  
}

newQuote();
