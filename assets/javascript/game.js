
var wins = 0
var losses = 0
var val = 0
var score 
$(document).ready(function reset(){
    score = 0
    var random = Math.floor(Math.random() * 300)
    $("#crystal1").val(Math.floor(Math.random() * 20))
    $("#crystal2").val(Math.floor(Math.random() * 20))
    $("#crystal3").val(Math.floor(Math.random() * 20))
    $("#crystal4").val(Math.floor(Math.random() * 20))
    $("#random").html(random)
    $("#score").html(score)
    $("#wins").html("Wins: " + wins)
    $("#losses").html("Losses: " + losses)

$("#crystal1").click(function(click){
    val = parseInt($(this).val())
    console.log(val)
    selection(click)
})
$("#crystal2").click(function(click){
    val = parseInt($(this).val())
    console.log(val)
    selection(click)
})
$("#crystal3").click(function(click){
    val = parseInt($(this).val())
    console.log(val)
    selection(click)
})
$("#crystal4").click(function(click){
    val = parseInt($(this).val())
    console.log(val)
    selection(click)
})
    

function selection(){
    score = score + val
    $("#score").html(score)
    if (score === random){
        alert("You Win")
        wins++
        reset()
    }
    else if (score > random){
        alert("You Lose")
        losses++
        reset()
    }
    else{
    }
}
})

// /*select random number
// display number
// select random value for all crystals
// display score
// when crystal is clicked make score go up 
// if score = random win
// else if score > random lose
// else keep playing
// */
// var random = (Math.floor(Math.random() * 100)


// })
// $("#crystal2").click(function(){
//     var val2 = parseInt($("#crystal2").val())
//     score = score + val2
//     $("#score").html(score)
//     if (score === random){
//         alert("You Win")
//         wins++
//         reset()
//     }
//     else if (score > random){
//         alert("You Lose")
//         losses++
//         reset()
//     }
//     else{
//     }
// })

    
//     function(){
//     var val3 = parseInt($("#crystal3").val())
//     score = score + val3
//     $("#score").html(score)
//     if (score === random){
//         alert("You Win")
//         wins++
//         reset()
//     }
//     else if (score > random){
//         alert("You Lose")
//         losses++
//         reset()
//     }
//     else{
//     }
// })
// $("#crystal4").click(function(){
//     var val4 = parseInt($("#crystal4").val())
//     score = score + val4
//     $("#score").html(score)
//     if (score === random){
//         alert("You Win")
//         wins++
//         reset()
//     }
//     else if (score > random){
//         alert("You Lose")
//         losses++
//         reset()
//     }
//     else{
//     }
// })
// })