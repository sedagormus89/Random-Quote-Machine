$(document).ready(function(){
  
  function getQuote(){
    
    var quote = ['"Remember, great power comes with great responsibility"','"Life is 10% what happens to me and 90% how I react to it"', '"Cash is the king"', '"The truth is, everyone is going to hurt you. You just got to find the ones worth suffering for"', '"Don\'t gain the world and lose your soul, wisdom is better than silver or gold"','"This is the strangest life I\'ve ever known"', '"I\'m gonna live till I die"', '"Give a girl the right shoes, and she can conquer the world"','"Love all, trust a few, do wrong to none"', '"What you do today can improve all your tomorrows"', '"Where there is love there is life"'];

    var author= ['- Uncle Ben','- Charles R. Swindoll','- UCLA Marketing Lecturer', ' - Bob Marley', ' - Bob Marley', ' - Jim Morrison', ' - Frank Sinatra', ' - Marilyn Monroe', ' - William Shakespeare', ' - William Shakespeare', ' - Ralph Marston', ' - Mahatma Ghandi'];



    var num = Math.floor((Math.random()*quote.length));
    
    var quoteChosen = quote[num];
    var authorChosen = author[num];
    
    $('.quote').text(quoteChosen);
    $('.author').text(authorChosen);
 
  }
    
    $(".buton").click(function(){
           getQuote();         
    });
});