

function print(i){
  $("ul#list0").html("<li><img src = 'img/"+ (i) + ".png' alt = ''></li>");
  $("ul#list0").fadeIn(150);
  $("ul#list0").fadeOut(150);
}
function printA(i){
  $("ul#alist0").html("<li><img src = 'img/"+ (i) + ".png' alt = ''></li>");
  $("ul#alist0").fadeIn(150);
  $("ul#alist0").fadeOut(150);
}
function printB(i){
  $("ul#blist0").html("<li><img src = 'img/"+ (i) + ".png' alt = ''></li>");
  $("ul#blist0").fadeIn(150);
  $("ul#blist0").fadeOut(150);
}
function spin(){
  var time = 100;
  (function theLoop (i) {
    setTimeout(function () {
      var random = Math.floor(Math.random() * 4) + 1;
      time += 20;
      print(random);
      if (--i) {          // If i > 0, keep going
        theLoop(i);       // Call the loop again, and pass it the current value of i
      }
    }, time);
  })(30);
  var timeA = 100;
  (function theLoop (i) {
    setTimeout(function () {
      var random = Math.floor(Math.random() * 4) + 1;
      timeA += 15;
      printA(random);
      if (--i) {          // If i > 0, keep going
        theLoop(i);       // Call the loop again, and pass it the current value of i
      }
    }, timeA);
  })(35);
  var timeB = 100;
  (function theLoop (i) {
    setTimeout(function () {
      var random = Math.floor(Math.random() * 4) + 1;
      timeB += 10;
      printB(random);
      if (--i) {          // If i > 0, keep going
        theLoop(i);       // Call the loop again, and pass it the current value of i
      }
    }, timeB);
  })(43);

};

function freeze(){
  var col1 = Math.floor(Math.random() * 4) + 1;
  $("ul#list0").html("<li><img  src = 'img/"+ (col1) + ".png' alt = ''></li>");
  $("ul#list0").fadeIn(1000);
  return col1;
};
function freezeA(){
  var col2 = Math.floor(Math.random() * 4) + 1;
  $("ul#alist0").html("<li><img src = 'img/"+ (col2) + ".png' alt = ''></li>");
  $("ul#alist0").fadeIn(1000);
  return col2;
};
function freezeB(){
  var col3 = Math.floor(Math.random() * 4) + 1;
  $("ul#blist0").html("<li><img src = 'img/"+ (col3) + ".png' alt = ''></li>");
  $("ul#blist0").fadeIn(1000);
  return col3;
};


function checkWin(col1, col2, col3){
  if(col1 === col2 && col2 === col3 && col1 === col3){
    $("#headline").text("YOU WIN");
  }else $("#headline").text("LOSER LOSER LOSER");
};
function endCheck(){
  var col1 = 0;
  var col2 = 1;
  var col3 = 2;
  var time0 = 12300;
  var timeA = 12950;
  var timeB = 13760;


    setTimeout(function(){
      col1 = freeze();
    }, time0)
    setTimeout(function(){
      col2 = freezeA();
    }, timeA)
    setTimeout(function(){
      col3 = freezeB();
    }, timeB)
    setTimeout(function(){
      checkWin(col1, col2, col3);
    }, 15000)

    $("#instantSpin").click(function(){
      col1 = freeze();
      col2 = freezeA();
      col3 = freezeB();
      checkWin(col1, col2, col3);
    });

};

$(function() {

  var account = {
    balance: 1000
  };
  $("#spinButton").click(function() {
    $("#instantSpin").show();
    $("ul#list0").hide();
    $("ul#alist0").hide();
    $("ul#blist0").hide();
    $("#headline").empty();
    $("ul").empty();
    spin();
    endCheck();



  });
});
