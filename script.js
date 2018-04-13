var moles = document.querySelectorAll('.mole');
var score = 0;
var playground = document.getElementById('playground');
var notification = document.getElementById('notification');
var notification__bg = document.getElementById('notification__bg');
var notification__img = document.getElementById('notification__img');
var notification__text = document.getElementById('notification__text');
var replayButton = document.getElementById('replay-button');



var killMole = function(mole){
  // kill the mole
    mole.classList.remove('mole--is-visible');
    mole.classList.add('mole--is-dead');
    
    
    // and hide it after 2 seconds
    setTimeout(function(){
      mole.classList.remove('mole--is-dead');
    }, 500);
}



var modifyScore = function(points){
  score = score + points;
  console.log(score);  
  document.getElementById("score").innerHTML = score;
}

var checkScore = function(){
  if (score == 0) {
    document.getElementById("score").innerHTML = "You lost !";
    document.getElementById("notification__text").innerHTML = "YOU LOSE";
    
    notification.classList.add('notification--end');
    notification__bg.classList.add('notification__bg--lose');
    notification__img.classList.add('notification__img--lose');
    notification__text.classList.add('notification__text--lose');
    replayButton.classList.add('replay-button--lose');
    
  } else if (score == 100) {
    document.getElementById("score").innerHTML = "You win !";
    document.getElementById("notification__text").innerHTML = "YOU WIN";
    
    notification.classList.add('notification--end');
    notification__bg.classList.add('notification__bg--win');
    notification__img.classList.add('notification__img--win');
    notification__text.classList.add('notification__text--win');
    replayButton.classList.add('replay-button--win');
  }
}

replayButton.addEventListener('click', function(){
  document.location.reload(true);
}, false);


playground.addEventListener('click', function(event){
  
   // define clicked element
   var clickedElement;      
   if (event.target.parentNode.classList.contains('mole')){
      clickedElement = event.target.parentNode;
    } else {
      clickedElement = event.target;
    } 
    
    // logic
    if ( clickedElement.classList.contains('mole') ){
      if ( !clickedElement.classList.contains('mole--is-dead') ){
        killMole(clickedElement);
        modifyScore(10); 
        checkScore();
      }  
    } else {
      modifyScore(-10);
      checkScore();
    }
}, false);






var showHideRandomMole = function(){
  
  if (score > 0 && score < 100) {

    //show mole
    var randomNumber = Math.floor((Math.random() * moles.length-1) + 1);
    var randomMole = moles[randomNumber];

    // check if mole is dead. If true, then return
    if (randomMole.classList.contains("mole--is-dead"))  return;
    randomMole.classList.add('mole--is-visible');

    // hide mole after 1 second
    setTimeout(function(){
      randomMole.classList.remove('mole--is-visible');
    }, 1000);
  }
}


modifyScore(50);
setInterval(showHideRandomMole, 1500);

//110.5