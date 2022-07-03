import { Point } from "./Point";

export class Box {
  point1: number;
  point2: number;
  point3: number;
  point4: number;
  fill: string;

  constructor(point1: number, point2: number, point3: number, point4: number, fill: string) {
    this.point1 = point1;
    this.point2 = point2;
    this.point3 = point3;
    this.point4 = point4;
    this.fill = fill;
  }

  shading = (origins: Point[]) => {
    const xDistance = (origins[this.point2].offsetX() - origins[this.point1].offsetX()) * (origins[this.point2].x - origins[this.point1].x);
    const yDistance = (origins[this.point2].offsetY() - origins[this.point1].offsetY()) * (origins[this.point2].y - origins[this.point1].y);

    return 1 - xDistance*0.5 - yDistance*0.5;
  }

  draw = (c: CanvasRenderingContext2D, origins: Point[]) => {
    c.fillStyle = this.fill;
    c.globalAlpha = -1 * this.shading(origins) / 1000;
    c.beginPath();
    c.moveTo(origins[this.point1].offsetX(),origins[this.point1].offsetY());
    c.lineTo(origins[this.point2].offsetX(),origins[this.point2].offsetY());
    c.lineTo(origins[this.point3].offsetX(),origins[this.point3].offsetY());
    c.lineTo(origins[this.point4].offsetX(),origins[this.point4].offsetY());
    c.lineTo(origins[this.point1].offsetX(),origins[this.point1].offsetY());
    c.closePath();
    c.fill();
  }
}
