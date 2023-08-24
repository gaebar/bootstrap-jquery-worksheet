$(document).ready(function() {

    // Change Box 1
    $("#changeBox1").click(function() {
        $(".bg-danger").css({
            "background-color": "cyan",
            "border-color": "orange"
        });
    });

    // Change Box 2
    $("#changeBox2").click(function() {
        $(".bg-primary").css({
            "background-color": "magenta",
            "border-color": "orange"
        });
    });

    // Change Box 3
    $("#changeBox3").click(function() {
        $(".bg-success").css({
            "background-color": "lime",
            "border-color": "orange"
        });
    });

    // Change All Boxes
    $("#changeAll").click(function() {
        $(".bg-danger, .bg-primary, .bg-success").css({
            "background-color": "gray",
            "border-color": "orange"
        });
    });

    // Hide Box 1 (Using 'visibility' to keep space)
    $('#hideBox1').click(function() {
        $('.bg-danger').css("visibility", "hidden");
    });

    // Hide Box 2 (Using 'visibility' to keep space)
    $('#hideBox2').click(function() {
        $('.bg-primary').css("visibility", "hidden");
    });

    // Hide Box 3 (Using 'visibility' to keep space)
    $('#hideBox3').click(function() {
        $('.bg-success').css("visibility", "hidden");
    });

    // Hide All Boxes (Using 'visibility' to keep space)
    $('#hideAllBoxes').click(function() {
        $('.bg-danger, .bg-primary, .bg-success').css("visibility", "hidden");
    });

    // Reset Colors of All Boxes
    $("#resetColor").click(function() {
        $(".bg-danger").css({
            "background-color": "red",
            "border-color": "#000"
        });
        $(".bg-primary").css({
            "background-color": "blue",
            "border-color": "#fafa00"
        });
        $(".bg-success").css({
            "background-color": "green",
            "border-color": "#ed05ed"
        });
    });

    // Show All Boxes
    $("#showAllBoxes").click(function() {
        $(".bg-danger, .bg-primary, .bg-success").css("visibility", "visible");
    });
});
