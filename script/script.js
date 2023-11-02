class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  getArea() {
    return this.width * this.height;
  }

  getPerimeter() {
    return 2 * (this.width + this.height);
  }
}

const myRectangle = new Rectangle(5, 7);


const area = myRectangle.getArea();
const perimeter = myRectangle.getPerimeter();

alert("Площа прямокутника: " + area);
alert("Периметр прямокутника: " + perimeter);