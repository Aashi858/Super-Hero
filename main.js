var canvas = new fabric.Canvas("myCanvas");
player_width = 30;
player_height = 30;
player_x = 10;
player_y = 10;
var player_object = "";
function player_update(){
    fabric.Image.fromURL("player.png",function(Img){
        player_object = Img;
        
        player_object.scaleToWidth(player_width);
        player_object.scaleToHeight(player_height);
        player_object.set({
            top:player_y,
            left:player_x
        });
        canvas.add(player_object);
    });
}
window.addEventListener("keydown",my_keydown);
function my_keydown(e){
    keypress = e.keyCode;
    console.log(keypress);
    if(keypress == 38){
        up();
        console.log("Up")
    }
    if(keypress == 40){
        up();
        console.log("Up")
    }
    if(keypress == 37){
        up();
        console.log("Up")
    }
    if(keypress == 36){
        up();
        console.log("Up")
    }
    if(keypress == 65){
        player_update("captain_america_left_hand.png");
        console.log("A is pressed");
    }
    if(keypress == 66){
        player_update("hulk_face.jpg");
        console.log("B is pressed");
    }
    if(keypress == 67){
        player_update("hulk_left_hand.png");
        console.log("C is pressed");
    }
    if(keypress == 68){
        player_update("hulk_legs.png");
        console.log("D is pressed");
    }
    if(keypress == 69){
        player_update("hulk_right_hand.png");
        console.log("D is pressed");
    }
    if(keypress == 70){
        player_update("hulkd_body.png");
        console.log("E is pressed");
    }
    if(keypress == 71){
        player_update("ironman_body.png");
        console.log("F is pressed");
    }
    if(keypress == 72){
        player_update("ironman_face.png");
        console.log("G is pressed");
    }
    if(keypress == 73){
        player_update("ironman_left_hand.png");
        console.log("H is pressed");
    }
    if(keypress == 74){
        player_update("ironman_legs.png");
        console.log("I is pressed");
    }
    if(keypress == 75){
        player_update("ironman_right_hand.png");
        console.log("J is pressed");
    }
    if(keypress == 76){
        player_update("spiderman_body.png");
        console.log("K is pressed");
    }
    if(keypress == 77){
        player_update("spiderman_face.png");
        console.log("L is pressed");
    }
    if(keypress == 78){
        player_update("spiderman_left_hand.png");
        console.log("M is pressed");
    }
    if(keypress == 79){
        player_update("spidreman_legs");
        console.log("N is pressed");
    }
    if(keypress == 80){
        player_update("spiderman_right_hand.png");
        console.log("O is pressed");
    }
    if(keypress == 81){
        player_update("thor_face.png");
        console.log("P is pressed");
    }
    if(keypress == 82){
        player_update("thor_left_hand.png");
        console.log("Q is pressed");
    }
    if(keypress == 83){
        player_update("thor_right_hand.png");
        console.log("O is pressed");
    }
    if(keypress == "80" && e.shiftKey == true){
        console.log("P and Shift Key is pressed");
        player_width = player_width + 10;
        player_height = player_height + 10;
        document.getElementById("current_width").innerHTML = player_width;
        document.getElementById("current_height").innerHTML = player_height;
     }
     if(keypress == "77" && e.shiftKey == true){
        console.log("M and Shift Key is pressed");
        player_width = player_width - 10;
        player_height = player_height - 10;
        document.getElementById("current_width").innerHTML = player_width;
        document.getElementById("current_height").innerHTML = player_height;
     }
}    