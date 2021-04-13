var canvas=document.getElementById("mycanvas");
ctx=canvas.getcontext("2d");
rover_width=100;
rover_height=90;
rover_x=10;
rover_y=10;
background_image="mars.jpg";
rover_image="rover.png";
function add(){
    background_image_t=new Image();
    background_image_t.onload=uploadBackground;
    background_image_t.src=background_image;
    rover_image_t=new Image();
    rover_image_t.onload=uploadRover;
    rover_image_t.src=rover_image;
}
function uploadBackground(){
    ctx.drawImage(background_image_t,0,0,canvas.width,canvas.height);
}
function uploadRover(){
    ctx.drawImage(rover_image_t,rover_x,rover_y,rover_width,rover_height);
}
window.addEventListener("keydown",my_keydown);
function my_keydown(e){
    keyPress=e.keyCode;
    console.log(keyPress);
    if (keyPress=="38") {
        up();
        console.log("up");
    }
    if (keyPress==40) {
        down();
        console.log("down");
    }
    if (keyPress==39) {
        right();
        console.log("right");
    }
    if (keyPress==37) {
        left();
        console.log(left);
    }
       
}