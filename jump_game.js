var canvas,g;
var charaPosX, charaPosY, charaImg;
var speed, acceleration;
onload = function(){
    //描画コンテキストの取得
    canvas = document.getElementById("jump_canvas");
    g = canvas.getContext("2d");
    //初期化
    init();
    //入力処理の指定
    document.onkeydown = keydown;
    //ゲームループの設定 60FPS
    setInterval("gameloop()",16);
};

function init() {
    charaPosX = 20;
    charaPosY = 480;
    speed = 0;
    acceleration = 0;
    charaImg = new Image();
    charaImg.src = "piyo.png";
}

function keydown(e){
    if(charaPosY==480){
    speed = -17;
    acceleration = 0.7;
}    
}

function gameloop(){
    update();
    draw();
}

let vx = 2;
function update(){
    charaPosX = charaPosX + vx;
    if(charaPosX>480){
        vx=-vx;
    }
    if(charaPosX<20){
        vx=-vx;
    }
    speed = speed + acceleration;
    charaPosY = charaPosY + speed;
    if(charaPosY>=480){
        acceleration = 0;
        speed = 0;
        charaPosY = 480;
    }
}

const scale = 0.06
function draw(){
    //背景
    g.fillStyle = "#84d0b4ff";
    g.fillRect(0,0,500,500);
    //キャラの描画
    g.drawImage(
        charaImg,
        charaPosX - charaImg.width * scale / 2,
        charaPosY - charaImg.height * scale / 2,
        charaImg.width * scale,
        charaImg.height * scale
    );
}