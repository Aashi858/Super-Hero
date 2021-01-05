var canvas = new fabric.canvas("myCanvas");
player_width = 30;
palyer_height = 30;
player_x = 10;
player_y = 10;
var player_object = "";
function player_update(){
    fabric.Image.fromURL("player.png",function(Img){
        player_object = Img;
        
        player_object.ScaleToWidth(player_width);
        player_object.ScaleToHeight(palyer_height);
        player_object.Set({
            top:player_y,
            left:player_x
        });
        canvas.add(player_object);
    });
}