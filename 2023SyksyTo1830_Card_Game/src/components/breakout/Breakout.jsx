import React, {useEffect, useRef} from "react";
import { BallMovement } from "./BallMovement";
import data from "./data";
import WallCollision from "./WallCollision";
import Paddle from "./Paddle";
import PaddleHit from "./PaddleHit";

let {ballObj,paddleProps} = data;

export default function Breakout(){
    const canvasRef = useRef(null);
    useEffect(()=>{
        const render = ()=>{
            const canvas = canvasRef.current;
            const ctx = canvas.getContext('2d');
            ctx.clearRect(0,0,canvas.width,canvas.height);
            // ctx.fillStyle = "green";
            // ctx.fillRect(10,10,150,100);
           
            BallMovement(ctx, ballObj);
            WallCollision(ballObj,canvas);
            Paddle(ctx, canvas, paddleProps);
            PaddleHit(ballObj, paddleProps);
            requestAnimationFrame(render);
        }
        render();
    },[]);
    return(
        <canvas id="canvas" ref={canvasRef} onMouseMove={
            (event) => paddleProps.x = event.clientX - paddleProps.width /2 -10}
             height="500" width={window.innerWidth -20} />
    );
}