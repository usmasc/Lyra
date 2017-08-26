// variables

var biturl = 'bit.ly/2sc88Rm';

var quotes = [{
  "quote" : "Don’t be afraid to be what you were meant to be. Don’t be afraid to be different, because being different is the only way we can make a difference.",
  "author": "Roger Lee Wrights",
  "twitterHandle": "#RLeeWrights"
},
{
  "quote" : "Libertarianism is the simple morality we learned as children: Don’t strike first, don’t steal or cheat, keep your promises. If you inadvertently fail to live up to these standards, make it up to the person you’ve harmed. If someone harms you, you may defend yourself as needed to stop the aggressor and obtain reparations. This simple morality works group-to-group just as it works one-to-one to bring about a peaceful and prosperous world.",
  "author" : "Dr. Mary J. Ruwart",
  "twitterHandle" : "@MaryRuwart"
},
{
  "quote" : "Maybe we ought to consider a Golden Rule in foreign policy: Don't do to other nations what we don't want happening to us. We endlessly bomb these countries and then we wonder why they get upset with us?",
  "author" : "Ron Paul",
  "twitterHandle" : "@RonPaul"
},
{
  "quote": "The most dangerous man to any government is the man who is able to think things out... without regard to the prevailing superstitions and taboos. Almost inevitably he comes to the conclusion that the government he lives under is dishonest, insane, intolerable.",
 "author" : "H. L. Mencken",
  "twitterHandle" : "#HLMencken"
},
{"quote":"The whole aim of practical politics is to keep the populace alarmed (and hence clamorous to be led to safety) by menacing it with an endless series of hobgoblins, all of them imaginary.",
 "author":"H. L. Mencken",
 "twitterHandle" : "#HLMencken"}
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
