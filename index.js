var cd = document.createElement("canvas")
cd.id = "c"
cd.width = 1000
cd.height = 1000
document.body.appendChild(cd)
var c = c.getContext("2d")

var line = function (x, y, x2, y2) {
  c.beginPath();
  c.moveTo(x,y);
  c.lineTo(x2,y2);
  c.stroke();
}
var fillTri = function (x1, y1, x2, y2, x3, y3) {
  c.beginPath();
  c.moveTo(x1,y1);
  c.lineTo(x2,y2);
  c.lineTo(x3,y3);
  c.lineTo(x1,y1);
  c.fill();
};
var strokeTri = function (x1, y1, x2, y2, x3, y3) {
  c.beginPath();
  c.moveTo(x1,y1);
  c.lineTo(x2,y2);
  c.lineTo(x3,y3);
  c.lineTo(x1,y1);
  c.stroke();
};
var erase = function (x,y,width,hieght) {
  c.clearRect(x,y,width,hieght);
}
var pyramid = function (x, y, height, width) {
  c.beginPath();
  c.moveTo(x,y);
  c.lineTo(x-(width/2),y+height);
  c.lineTo(x+(width/2),y+height);
  c.lineTo(x,y);
  c.fill();
  c.beginPath();
  c.moveTo(x-(width/2),y+height);
  c.lineTo(x-(width/2)-20,y+height-5);
  c.lineTo(x,y);
  c.fill();
  c.beginPath();
  c.moveTo(x+width/2,y+height);
  c.lineTo(x+width/2+20,y+height-5);
  c.lineTo(x,y);
  c.fill();

}
var gradient = function (color1,color2,x,y,width,hieght) {
    var grd = ctx.createLinearGradient(x,y,x+width,y+hieght);
    grd.addColorStop(0, color1);
    grd.addColorStop(1, color2);
    c.fillStyle = grd;
}
var shadow = function (color,blur,offsetX,offsetY) {
    c.shadowColor = color;
    c.shadowBlur = blur;
    c.shadowOffsetX = offsetX;
    c.shadowOffsetY = offsetY;
}
var text = function (x, y, text) {
  c.strokeText(text, x, y);
}
var fillEllipse = function (x,y,r) {
  c.beginPath();
  c.arc(x,y,r,0,2*Math.PI);
  c.fill();
}
var strokeEllipse = function (x,y,r) {
  c.beginPath();
  c.arc(x,y,r,0,2);
  c.stroke();
}
var clear = function () {
  c.clearRect(0, 0, cd.width, cd.height)
}
