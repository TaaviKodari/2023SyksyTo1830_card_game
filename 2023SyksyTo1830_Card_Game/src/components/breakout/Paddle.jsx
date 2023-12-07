export default(ctx, canvas, paddleProps) =>{
    class Paddle{
        constructor(x){
            this.x = x;
            this.y = canvas.height - 30;
            this.height = 20;
            this.width = paddleProps.width;
            this.colors = ["red", "#FFA62B"];
        }

        move(){

        }
    }
    let paddle = new Paddle(paddleProps.x);
    paddle.move();
}