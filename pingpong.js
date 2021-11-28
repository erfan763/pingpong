const player1 = document.querySelector("#player1")
const player2 = document.querySelector("#player2")
const reset = document.querySelector("#reset")
const scoreplayer1 = document.querySelector("#scoreplayer1")
const scoreplayer2 = document.querySelector("#scoreplayer2")
const winnerscoreplayer = document.querySelector("#winnerscore")
let score1 = 0
let score2 = 0
let winnerscore = 3

let gameover = false

 player1.addEventListener('click',function(){
    if(!gameover){
        score1 += 1
        if(score1 === winnerscore ){
            gameover = true 
            scoreplayer1.classList.add('winner') 
            scoreplayer2.classList.add('loser') 
            reset.classList.add('resetbuttom')
            //reset.classList.add('hover:resetbuttom')
            //reset.classList.remove('btn btn-outline-light')
        }
        scoreplayer1.textContent = score1
    }
    

    
    // if(score1 && score2 == winnerscore) {
    //     player1.addEventListener('click',false)
    //     player2.addEventListener('click',false)
    // }  
 })

 player2.addEventListener('click', function(){
    if(!gameover){
        score2 += 1
        if(score2 === winnerscore ){
            gameover = true
            scoreplayer2.classList.add('winner') 
            scoreplayer1.classList.add('loser')
            reset.classList.add('resetbuttom')
           //reset.classList.add('hover:resetbuttom')
            //reset.classList.remove('btn btn-outline-light')
        }
        scoreplayer2.textContent = score2
        }
   
})
winnerscoreplayer.addEventListener('change',function(){
    winnerscore = parseInt(this.value)
    reset1()
})


reset.addEventListener('click', reset1)

 
function reset1(){
    
    gameover = false
    score1 = 0
    score2 = 0
    scoreplayer1.textContent = score1
    scoreplayer2.textContent = score2
    scoreplayer2.classList.remove('winner','loser') 
    scoreplayer1.classList.remove('loser','winner')
    reset.classList.remove('resetbuttom')
    //reset.classList.add('hover:resetbuttom')
    // reset.classList.add('btn btn-outline-light')
    
}