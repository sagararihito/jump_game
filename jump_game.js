var canvas,g;
var charaPosX, charaPosY, charaImg;
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
    charaPosX = 50;
    charaPosY = 400;
    charaImg = new Image();
    charaImg.src = "piyo.png";
}

function keydown(e){}

function gameloop(){
    update();
    draw();
}

function update(){
    charaPosX = charaPosX + 1;
}

function draw(){
    //背景
    g.fillStyle = "rgb(3,3,3";
    g.fillRect(0,0,480,480);
    //キャラの描画
    g.drawImage(
        charaImg,
        charaPosX - charaImg.width / 2,
        charaPosY - charaImg.height / 2
    );
}