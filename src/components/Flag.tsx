import { useEffect, useRef } from "react"
import { Box } from "../utils/Box";
import { Point } from "../utils/Point";

export const Flag = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    if (!canvasRef.current) return

    const canvas = canvasRef.current
    const c = canvas.getContext("2d") as CanvasRenderingContext2D;
    const width = 1000;
    const height = 600;
    canvas.width = width;
    canvas.height = height;

    const length = canvas.height / 20;

    const nCol = 100;

    //all origins
    var origins: Point[] = [];
    let x = length;
    let y = length;

    let angle = 0;
    let twoPi = 2 * Math.PI;

    for(let i = 0; i < nCol * 22; i++){
      origins[i] = new Point(angle, x, y, length);
      x += length;
      angle += twoPi / nCol * 2;
      if(angle > twoPi){
        angle -= twoPi;
      }
      if((i+1) % nCol == 0){
        y += length;
        x = length;
        angle += twoPi / (nCol + 5);
      }
    }

    const boxes: Box[] = [];
    const numOfBoxes = origins.length - nCol;

    for(let y = 0; y < numOfBoxes; y++){
      if((y+1) % nCol !== 0) {
        boxes[y] = (Math.floor(y/nCol) % 2 === y % 2)
          ? new Box(y, y+1, y+nCol+1, y+nCol,'#555')
          : new Box(y, y+1, y+nCol+1, y+nCol,'#aaa');
        boxes[y].draw(c, origins);
      }
    }

    const animation = () => {
      c.clearRect(0, 0, width, height);
      origins.forEach((item) => {
        if (item) item.angle += 0.05;
      });
      boxes.forEach((box) => {
        if (box) box.draw(c, origins);
      });
      window.requestAnimationFrame(animation);
    }

    animation();
  }, [])


  return <canvas ref={canvasRef} />
}
