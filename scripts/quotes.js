// variables

var biturl = 'bit.ly/2sc88Rm';

var quotes = [{
  "quote" : "Humans have ...",
  "author": "Lyra",
  "twitterHandle": "#Lyra"
}
]

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
