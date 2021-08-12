
let todaysDate = moment().format('dddd, MMM Do YYYY');
$("#currentDate").html(todaysDate);



$(document).ready(function () {
    $(".saveBtn").on("click", function () {
        let text = $(this).siblings(".description").val();
        let time = $(this).parent().attr("id");

        localStorage.setItem(time,text);
    })
    function timer() {
        let currentTime = moment().hour();

        $(".time-block").each(function() {
            let timeBlock = parseInt($(this).attr("id").split("hour")[1]);

            if (timeBlock < currentTime) {
                $(this).removeClass("future");
                $(this).removeClass("present");
                $(this).addClass("past");
            } else if (timeBlock === currentTime) {
                $(this).removeClass("past");
                $(this).removeClass("future");
                $(this).addClass("present");
            } else {
                $(this).removeClass("past");
                $(this).removeClass("future");
                $(this).addClass("present");
            }
        })
    }

    //localstorage code
    $("#hr9am .description").val(localStorage.getItem("hr9am"));
    $("#hr10am .description").val(localStorage.getItem("hr10am"));
    $("#hr11am .description").val(localStorage.getItem("hr11am"));
    $("#hr12pm .description").val(localStorage.getItem("hr12pm"));
    $("#hr1pm .description").val(localStorage.getItem("hr1pm"));
    $("#hr2pm .description").val(localStorage.getItem("hr2pm"));
    $("#hr3pm .description").val(localStorage.getItem("hr3pm"));
    $("#hr4pm .description").val(localStorage.getItem("hr4pm"));
    $("#hr5pm .description").val(localStorage.getItem("hr5pm"));

    timer();
});