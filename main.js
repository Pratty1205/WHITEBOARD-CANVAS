var canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
var mouseEvent = "empty";
var last_position_of_x,
var last_position_of_y;
var color = "black";
var width = 1;
canvas.addEventListener("mousedown", my_mousedown);

function my_mousedown(e) {
    var color = document.getElementById("color").value;
    var width = document.getElementById("width_of_line").value;
    var mouseEvent = "mousedown"
};

canvas.addEventListener("mouseup", my_mouseup);

function my_mouseup(e) {
    var mouseEvent = "my_mouseup";
};
canvas.addEventListener("mouseleave", my_mouseleave);

function my_mouseleave(e) {
    var mouseEvent = "my_mouseleave";
};

canvas.addEventListener("mousemove", my_mousemove);

function my_mousemove(e) {
    var current_position_of_mouse_x = e.clientX - canvas.offsetLeft;
    var current_position_of_mouse_y = e.clientY - canvas.offsetTop;
    if (mouseEvent == mousedown) {
        ctx.beginPath()
        ctx.strokeStyle = "color"
        ctx.lineWidth = "width"
        ctx.moveTo("last_position_of_x, last_position_of_y");
        ctx.lineTo("current_position_of_mouse_x, current_position_of_mouse_y");
        ctx.stroke()
        var last_position_of_x = "current_position_of_mouse_x";
        var last_position_of_y = "current_position_of_mouse_y";
    }
}
