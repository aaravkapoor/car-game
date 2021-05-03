canvas=document.getElementById("myCanvas")
ctx=canvas.getContext("2d");

car1_x=300;
car1_y=480;
car1_width=100;
car1_height=120;

car2_x=420;
car2_y=480;
car2_width=100;
car2_height=120;

car1_background="car1.png";
car2_background="car2.png";
canvas_background="racing_track.jpg";

function add() {
    background_imgTag = new Image();
    background_imgTag.onload = uploadbackground;
    background_imgTag.src = canvas_background;

    car1_imgTag = new Image();
    car1_imgTag.onload = uploadcar1;
    car1_imgTag.src = car1_background;

    car2_imgTag = new Image();
    car2_imgTag.onload = uploadcar2;
    car2_imgTag.src = car2_background;
    
}

function uploadbackground() {
    ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}



function uploadcar1() {
    ctx.drawImage(car1_imgTag, car1_x, car1_y, car1_width, car1_height);
}

function uploadcar2() {
    ctx.drawImage(car2_imgTag, car2_x, car2_y, car2_width, car2_height);
}