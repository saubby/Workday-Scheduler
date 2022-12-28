$(document).ready(function () {


    var tf = moment().format("MMMM Do YYYY");
    let cd = document.getElementById("today");
    cd.innerHTML = tf;
    var a = moment().format("HH");

    $(".div").each(function () {
        var currenttime = moment().hour();
        var blocktime = parseInt($(this).attr("id").split("hour")[1]);

        if (blocktime > currenttime) {

            $(this).addClass("future");
            $(this).removeClass("present");
            $(this).removeClass("past");
        }

        else if (blocktime === currenttime) {

            $(this).addClass("present");
            $(this).removeClass("past");
            $(this).removeClass("future");
        }

        else {

            $(this).addClass("past");
            $(this).removeClass("present");
            $(this).removeClass("future");
        }
    }),

        $(".saveBtn").click(function (t) {
            tf.preventDefault();
            var cd = $(this).siblings(".timedesc").val();
            var tf = $(this).parent().attr("id").split("_")[1];
            localStorage.setItem(tf, cd)
        }),


        $("#hour=08.timedesc").val(localStorage.getItem("08")),
        $("#hour=08.timedesc").val(localStorage.getItem("09")),
        $("#hour=08.timedesc").val(localStorage.getItem("10")),
        $("#hour=08.timedesc").val(localStorage.getItem("11")),
        $("#hour=08.timedesc").val(localStorage.getItem("12")),
        $("#hour=08.timedesc").val(localStorage.getItem("01")),
        $("#hour=08.timedesc").val(localStorage.getItem("02")),
        $("#hour=08.timedesc").val(localStorage.getItem("03")),
        $("#hour=08.timedesc").val(localStorage.getItem("04"))

});