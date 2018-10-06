var wins = 0
var losses = 0
var val = 0
var score = 0
var crystal1 = 0
var crystal2 = 0
var crystal3 = 0
var crystal4 = 0
var random = 0

$(document).ready(function play() {
    score = 0
    var min = 19
    var max = 120
    reset()

    $("#crystal1").click(function () {
        val = parseInt($(crystal1).val())
        selection()
    })
    $("#crystal2").click(function () {
        val = parseInt($(crystal2).val())
        selection()
    })
    $("#crystal3").click(function () {
        val = parseInt($(crystal3).val())
        selection()
    })
    $("#crystal4").click(function () {
        val = parseInt($(crystal4).val())
        selection();
    })


    function selection() {
        score = score + val
        $("#score").html(score)

        if (score === random) {
            setTimeout(function () { alert("You Win"); }, 100)
            setTimeout(function () {
                wins++
                reset();
            }, 100)

        }
        else if (score > random) {
            setTimeout(function () { alert("You Lose"); }, 100)
            setTimeout(function () {
                losses++
                reset();
            }, 100)
        }
        else {
            $("#score").html(score)
        }
    }

    function reset() {
        score = 0
        random = Math.floor(Math.random() * (max - min) + min)
        crystal1 = ($("#crystal1").val(Math.floor(Math.random() * (12 - 1) + 1)))
        crystal2 = ($("#crystal2").val(Math.floor(Math.random() * (12 - 1) + 1)))
        crystal3 = ($("#crystal3").val(Math.floor(Math.random() * (12 - 1) + 1)))
        crystal4 = ($("#crystal4").val(Math.floor(Math.random() * (12 - 1) + 1)))
        $("#random").html(random)
        $("#score").html(score)
        $("#wins").html("Wins: " + wins)
        $("#losses").html("Losses: " + losses)

    }

})

