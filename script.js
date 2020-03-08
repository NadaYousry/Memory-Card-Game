var parentCard =document.getElementsByClassName('flip-card');
var card = document.getElementsByClassName('flip-card-inner');
var defaultStyle;
var firstCard;
var secondCard;
var hasFlipedClass = false;
clickedAginArr = [];
    
    
    function onStartGame(){
            for (var i = 0; i < card.length; i++) {
                card[i].style.visibility='visible';
                randomIndex= Math.floor(Math.random()*6) +1;
                parentCard[i].style.order=randomIndex
                parentCard[randomIndex];
                // console.log(card[i]);
                
            }
        setTimeout(function(){
            for (var i = 0; i < card.length; i++) {
                card[i].classList.add('flip');
            }
        },0)
        setTimeout(function(){
            for (var i = 0; i < card.length; i++) {
                card[i].classList.remove('flip');
            }
        },1000)
        
    }
   
    onStartGame();

    for (var i = 0; i < card.length; i++) {
        card[i].addEventListener('click', cardRotation);
        // save the default position for card (not being shuffled)
    }
    
    function cardRotation() {
        
        //if user click same card twice
        if (this == firstCard) {
            return;
        }
        //first click
        this.classList.add('flip');
        if (!hasFlipedClass) {
            //first time to click
            hasFlipedClass = true;
            firstCard = this;
            firstImgAttr = this.childNodes[2].nextSibling.childNodes[1].getAttribute('alt');
            console.log({ hasFlipedClass, firstCard });
            clickedAginArr.push(firstImgAttr);
        } else {
            //second clicked card
    
            //if user click in card twice it won't do any thig because class is already exist
            hasFlipedClass = false;
            secondCard = this;
            console.log({ hasFlipedClass, secondCard });
            secondImgAttr = this.childNodes[2].nextSibling.childNodes[1].getAttribute('alt');
            clickedAginArr.push(secondImgAttr);
            //call matching function
            console.log(clickedAginArr);
    
            matchingCard();
            
        }
    
    }
    
    function matchingCard() {
        //if two cards are equal to others
        if (clickedAginArr[0] == clickedAginArr[1]) {
            // disableCards();
            removeUnflipedCards();
            disableCards();
        } else {
            //if the cards are not match we gonna flip cars again
            unflipedCards();
            disableCards();
        }
    }
    
    function unflipedCards() {
        setTimeout(function () {
            firstCard.classList.remove('flip');
            secondCard.classList.remove('flip');
            enableCards();
        }, 1000)
    
        clickedAginArr = [];
    }
    function disableCards() {
        for (var i = 0; i < card.length; i++) {
            card[i].classList.add('disabled');
        }
    }
    
    
    function enableCards() {
        for (var i = 0; i < card.length; i++) {
            card[i].classList.remove('disabled');
        }
    }
    function removeUnflipedCards() {
        setTimeout(function () {
            firstCard.style.visibility = 'hidden';
            secondCard.style.visibility = 'hidden';
            enableCards();
        }, 1000)
        clickedAginArr = [];
    }


