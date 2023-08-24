function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

$(document).ready(function() {

    // Change Box 1
    $("#changeBox1").click(function() {
        let randomColor = getRandomColor();
        $(".box1").css({
            "background-color": randomColor,
            "border-color": getRandomColor()
        });
    });

    // Change Box 2
    $("#changeBox2").click(function() {
        let randomColor = getRandomColor();
        $(".box2").css({
            "background-color": randomColor,
            "border-color": getRandomColor()
        });
    });

    // Change Box 3
    $("#changeBox3").click(function() {
        let randomColor = getRandomColor();
        $(".box3").css({
            "background-color": randomColor,
            "border-color": getRandomColor()
        });
    });

    // Change All Boxes
$("#changeAll").click(function() {
    $(".box1").css({
        "background-color": getRandomColor(),
        "border-color": getRandomColor()
    });
    $(".box2").css({
        "background-color": getRandomColor(),
        "border-color": getRandomColor()
    });
    $(".box3").css({
        "background-color": getRandomColor(),
        "border-color": getRandomColor()
    });
});


    // Hide Box 1 (Using 'visibility' to keep space)
    $('#hideBox1').click(function() {
        $('.box1').css("visibility", "hidden");
    });

    // Hide Box 2 (Using 'visibility' to keep space)
    $('#hideBox2').click(function() {
        $('.box2').css("visibility", "hidden");
    });

    // Hide Box 3 (Using 'visibility' to keep space)
    $('#hideBox3').click(function() {
        $('.box3').css("visibility", "hidden");
    });

    // Hide All Boxes (Using 'visibility' to keep space)
    $('#hideAllBoxes').click(function() {
        $('.box1, .box2, .box3').css("visibility", "hidden");
    });

    // Reset Colors of All Boxes
    $("#resetColor").click(function() {
        $(".box1").css({
            "background-color": "red",
            "border-color": "#000"
        });
        $(".box2").css({
            "background-color": "blue",
            "border-color": "#fafa00"
        });
        $(".box3").css({
            "background-color": "green",
            "border-color": "#ed05ed"
        });
    });

    // Show All Boxes
    $("#showAllBoxes").click(function() {
        $(".box1, .box2, .box3").css("visibility", "visible");
    });
});
