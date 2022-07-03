export class Point {
  angle: number;
  x: number;
  y: number;
  radius: number;

  constructor(angle: number, x: number, y: number, radius: number) {
    this.angle = angle;
    this.x = x;
    this.y = y;
    this.radius = radius;
  }

  offsetX = () => this.x + Math.sin(this.angle) * this.radius;

  offsetY = () => this.y + Math.cos(this.angle) * this.radius;
}
