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
        let bgColor = getRandomColor();
        let borderColor = getRandomColor();
        $(".box1").css({
            "background-color": bgColor,
            "border-color": borderColor
        });
    });

    // Change Box 2
    $("#changeBox2").click(function() {
        let bgColor = getRandomColor();
        let borderColor = getRandomColor();
        $(".box2").css({
            "background-color": bgColor,
            "border-color": borderColor
        });
    });

    // Change Box 3
    $("#changeBox3").click(function() {
        let bgColor = getRandomColor();
        let borderColor = getRandomColor();
        $(".box3").css({
            "background-color": bgColor,
            "border-color": borderColor
        });
    });

    // Change All Boxes
    $("#changeAll").click(function() {
        let bgColor1 = getRandomColor();
        let borderColor1 = getRandomColor();
        $(".box1").css({
            "background-color": bgColor1,
            "border-color": borderColor1
        });

        let bgColor2 = getRandomColor();
        let borderColor2 = getRandomColor();
        $(".box2").css({
            "background-color": bgColor2,
            "border-color": borderColor2
        });

        let bgColor3 = getRandomColor();
        let borderColor3 = getRandomColor();
        $(".box3").css({
            "background-color": bgColor3,
            "border-color": borderColor3
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
            "background-color": "#ff0000",
            "border-color": "#000000"
        });
        $(".box2").css({
            "background-color": "#0000ff",
            "border-color": "#fafa00"
        });
        $(".box3").css({
            "background-color": "#00ff00",
            "border-color": "#ff70ff"
        });
    });

    // Show All Boxes
    $("#showAllBoxes").click(function() {
        $(".box1, .box2, .box3").css("visibility", "visible");
    });
});
