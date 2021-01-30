var song_list = ["canon.mp3", "dream.mp3", "hero.mp3", "mombasa.mp3", "swan-lake.mp3"]
var repeat = false;
var track_index = 0;
for (let i = 0; i < song_list.length; i++) {
    $("ul").append(`<li>${song_list[i]}</li>`);
}

$("ul").on("click", "li", function () {
    let song_index = $(this).index();
    console.log(song_index)
    $("#track")[0].pause();
    $("#track").attr("src", song_list[song_index]);
    $("#track")[0].play();
})

$("#play").click(() => {
    $("#track")[0].play();
})

$("#repeat").click(() => {
    if (repeat == false) {
        repeat = true;
        $("#repeat").css("background-color", "darkred")
    }
    else {
        repeat = false;
        $("#repeat").css("background-color", "darkgoldenrod")
    }
})

$("#shuffle").click(() => {
    track_index = getRandomInt(0, song_list.length);
    $("#track")[0].pause();
    $("#track").attr("src", song_list[track_index]);
    $("#track")[0].play();
})

$("#track").on('ended', function () {
    if (repeat == false) {
        if (track_index < song_list.length - 1) {
            track_index++;
            $("#track").attr("src", song_list[track_index])
            $("#track")[0].play();
            console.log(song_list[++track_index])
        }
        else {
            track_index = 0;
            $("#track").attr("src", song_list[track_index]);
            $("#track")[0].play();
            console.log(song_list[++track_index])
        }
    }
    else {
        $("#track").attr("src", song_list[track_index]);
        $("#track")[0].play();
    }
})

console.log($("#track")[0])










//get random value in range of 2 values
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}
