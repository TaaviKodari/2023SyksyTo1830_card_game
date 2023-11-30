export function BallMovement(){

}

class Ball{
    constructor(x,y, rad){
        this.x = x;
        this.y = y;
        this.rad = rad;
    }
    draw(ctx){
        ctx.beginPath();
        ctx.fillStyle = "red";
        ctx.arc(this.x,75, 50,0, 2*Math.PI);
        ctx.strokeStyle = "black";
        ctx.strokeWidth = 4;
        ctx.fill();
        ctx.stroke();
    }
}