$(document).ready(function() {
    $("#changeBox1").click(function() {
        // Actions for Box 1
        console.log("Box 1 clicked!");
    });

    $("#changeBox2").click(function() {
        // Actions for Box 2
        console.log("Box 2 clicked!");
    });

    $("#changeBox3").click(function() {
        // Actions for Box 3
        console.log("Box 3 clicked!");
    });

    $("#changeAll").click(function() {
        // Actions for all boxes
        console.log("All boxes clicked!");
    });

    $('#hideBox1').click(function() {
        $('.bg-danger').toggle(); // toggle between show/hide for Box 1
    });

    $('#hideBox2').click(function() {
        $('.bg-primary').toggle(); // toggle between show/hide for Box 2
    });

    $('#hideBox3').click(function() {
        $('.bg-success').toggle(); // toggle between show/hide for Box 3
    });

    $('#hideAllBoxes').click(function() {
        $('.bg-danger, .bg-primary, .bg-success').toggle(); // toggle between show/hide for all boxes
    });

    $("#resetColor").click(function() {
    // Actions to reset the colors of the boxes
    console.log("Reset colors!");
    $(".bg-danger").css("background-color", "red");
    $(".bg-primary").css("background-color", "blue");
    $(".bg-success").css("background-color", "green");
    });

    $("#showAllBoxes").click(function() {
        // Actions to show all the boxes
        console.log("Show all boxes!");
        $(".bg-danger, .bg-primary, .bg-success").show();
    });
});
