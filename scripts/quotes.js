// variables

var biturl = 'usmasc.github.io/Lyra';

var quotes = [{
  "quote" : "Since humans have 10 fingers, many human civilizations have a number system based on the number 10.",
  "author": "Lyra",
  "twitterHandle": "#Lyra"
},
{
  "quote" : "Some human civilizations have developed number systems based on the number 60. This system is still used for maps and time.",
  "author": "Lyra",
  "twitterHandle": "#Lyra"
},
{
  "quote" : "A human foals head is one quarter of its length, but only an eighth when it's grown.",
  "author": "Lyra",
  "twitterHandle": "#Lyra"
},
];

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
  var quote = randomElementOf(quotes);
  document.getElementById("quote").innerHTML = '"' + quote.quote + '"';
  document.getElementById("author").innerHTML = "- " + quote.author;

  var tweet = '<a class="twitter-share-button" ';
  tweet += 'href="https://twitter.com/intent/tweet?text=';
  
  if(quote.twitterHandle) {
    quoteTweet = twitterTrunc(quote.quote, quote.twitterHandle);
  } else {
    handle = '-' + quote.author;
    quoteTweet = twitterTrunc(quote.quote, handle);
  }
  tweet += quoteTweet;
  tweet += '" data-size="large" target="_blank">Tweet</a>';
  
  document.getElementById("twitterButton").innerHTML = tweet;
  //document.getElementById("test").innerHTML = quoteTweet;
  
}

newQuote();
