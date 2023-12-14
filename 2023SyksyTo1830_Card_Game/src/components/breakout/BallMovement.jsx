export function BallMovement(ctx, ballObj){
    let data = new Ball(ballObj.x,ballObj.y,ballObj.rad);
    ballObj.x += ballObj.dx;
    ballObj.y += ballObj.dy;
    data.draw(ctx);
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
        ctx.arc(this.x,this.y, this.rad,0, 2*Math.PI);
        ctx.strokeStyle = "black";
        ctx.lineWidth = 4;
        ctx.fill();
        ctx.stroke();
    }
}