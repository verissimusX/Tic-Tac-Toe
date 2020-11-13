$(document).ready(function() {
    const x = "x";
    const o = "o";
    let turnCount = 0;
    let player1Score = 0;
    let player2Score = 0;
    const square1 = $("#one");
    const square2 = $("#two");
    const square3 = $("#three");
    const square4 = $("#four");
    const square5 = $("#five");
    const square6 = $("#six");
    const square7 = $("#seven");
    const square8 = $("#eight");
    const square9 = $("#nine");

    function tieGame(){
        alert("TIE GAME");
         $("#game li").text("+");
         $("#game li").removeClass("disable");
         $("#game li").removeClass("o");
         $("#game li").removeClass("x");
         turnCount = 0;
    }

    $("#game li").on("click" , function(){
    if (turnCount == 9){
        setTimeout(function(){
            tieGame();
        }, 200)

        } else if ($(this).hasClass("disable")){
             alert("That square has already been played")
        } else if (turnCount % 2 === 0) {
            turnCount++;
            $(this).text(o);
            $(this).addClass("disable o");
            if (square1.hasClass("o") && square2.hasClass("o") && square3.hasClass("o") ||
            square4.hasClass("o") && square5.hasClass("o") && square6.hasClass("o") ||
            square7.hasClass("o") && square8.hasClass("o") && square9.hasClass("o") ||
            square1.hasClass("o") && square4.hasClass("o") && square7.hasClass("o") ||
            square2.hasClass("o") && square5.hasClass("o") && square8.hasClass("o") ||
            square3.hasClass("o") && square6.hasClass("o") && square9.hasClass("o") ||
            square1.hasClass("o") && square5.hasClass("o") && square9.hasClass("o") ||
            square7.hasClass("o") && square5.hasClass("o") && square3.hasClass("o")) {
             setTimeout(function(){
                 alert("Player 1 WINS!")
                 $("#game li").text("+");
                 $("#game li").removeClass("disable");
                 $("#game li").removeClass("o");
                 $("#game li").removeClass("x");
                 turnCount = 0;
             } , 250);
             player1Score++;
             $("#player1Score").text(player1Score)
            }
         } else {
             turnCount++;
             $(this).text(x);
             $(this).addClass("disable x");
            } if (square1.hasClass("x") && square2.hasClass("x") && square3.hasClass("x") ||
            square4.hasClass("x") && square5.hasClass("x") && square6.hasClass("x") ||
            square7.hasClass("x") && square8.hasClass("x") && square9.hasClass("x") ||
            square1.hasClass("x") && square4.hasClass("x") && square7.hasClass("x") ||
            square2.hasClass("x") && square5.hasClass("x") && square8.hasClass("x") ||
            square3.hasClass("x") && square6.hasClass("x") && square9.hasClass("x") ||
            square1.hasClass("x") && square5.hasClass("x") && square9.hasClass("x") ||
            square7.hasClass("x") && square5.hasClass("x") && square3.hasClass("x")) {
             setTimeout(function(){
                alert("Player 2 WINS!");
                $("#game li").text("+");
                $("#game li").removeClass("disable");
                $("#game li").removeClass("o");
                $("#game li").removeClass("x");
                turnCount = 0;
             } , 250);
             player2Score++;
             $("#player2Score").text(player2Score)

            }
    });

    //start new game button
    $("#new-game").on("click" , function(){
     $("#game li").text("+");
     $("#game li").removeClass("disable");
     $("#game li").removeClass("o");
     $("#game li").removeClass("x");
     turnCount = 0
    });


 });

 //my first attempt. My thought wa to first test if the square clicked already had x or o value then it would prevent it being clicked again and alert that it couldn't be played. I got it to alert on clicked but it did so no matter the value and then still left the html change.
 // $("#game li").on("click", function(){
 //     alert(`you clicked on ${this}`)
     // if ($(this).html == "x" || $(this).text == "o") {
     //     alert("That square has already been played")
     // }
 // This was how I planned on keeping track of turns and it DOES WORK. Alternates square clicks giving x or o depending on the turnCount. The issue still being that I need to prevent a square from being clicked twice.
     //  if (turnCount % 2 !==0) {
     // $(this).html(x)
     //  turnCount++
     // } else {
     //  $(this).html(o)
     //  turnCount++
     // }
     // return turnCount
 //  });
