const player1 = document.querySelector("#player1")
const player2 = document.querySelector("#player2")
const reset = document.querySelector("#reset")
const scoreplayer1 = document.querySelector("#scoreplayer1")
const scoreplayer2 = document.querySelector("#scoreplayer2")
const selectscore =document.querySelector("#selectscore")
let score1 = 0;
let score2 = 0;
let winerscore = 5;
let gameover = false;
player1.addEventListener('click', function () {
    if (!gameover) {
        score1 += 1
        if (score1 == winerscore) {
            gameover = true
            scoreplayer1.classList.add('winer');
            scoreplayer2.classList.add('loser');
        }
        scoreplayer1.textContent=score1;
    } 
})

player2.addEventListener('click', function () {
    if (!gameover) {
        score2 += 1
        if (score2 == winerscore) {
            gameover = true
            scoreplayer1.classList.add('loser');
            scoreplayer2.classList.add('winer');            
        }
        scoreplayer2.textContent=score2
    }
})
selectscore.addEventListener('change',function(){
    winerscore = parseInt(this.value);
    reset1()
})

reset.addEventListener('click', reset1)
function reset1() {
    gameover = false
    score1=0
    score2=0
    scoreplayer1.textContent=score1
    scoreplayer2.textContent=score2
    scoreplayer1.classList.remove('loser');
    scoreplayer2.classList.remove('loser');
    scoreplayer1.classList.remove('winer');
    scoreplayer2.classList.remove('winer');    
    }
