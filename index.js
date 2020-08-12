var line = function (x, y, x2, y2, cv) {
  cv.beginPath();
  cv.moveTo(x,y);
  cv.lineTo(x2,y2);
  cv.stroke();
}
var fillTri = function (x1, y1, x2, y2, x3, y3, cv) {
  cv.beginPath();
  cv.moveTo(x1,y1);
  cv.lineTo(x2,y2);
  cv.lineTo(x3,y3);
  cv.lineTo(x1,y1);
  cv.fill();
};
var strokeTri = function (x1, y1, x2, y2, x3, y3, cv) {
  cv.beginPath();
  cv.moveTo(x1,y1);
  cv.lineTo(x2,y2);
  cv.lineTo(x3,y3);
  cv.lineTo(x1,y1);
  cv.stroke();
};
var erase = function (x,y,width,hieght,cv) {
  cv.clearRect(x,y,width,hieght);
}
var pyramid = function (x, y, height, width, cv) {
  cv.beginPath();
  cv.moveTo(x,y);
  cv.lineTo(x-(width/2),y+height);
  cv.lineTo(x+(width/2),y+height);
  cv.lineTo(x,y);
  cv.fill();
  cv.beginPath();
  cv.moveTo(x-(width/2),y+height);
  cv.lineTo(x-(width/2)-20,y+height-5);
  cv.lineTo(x,y);
  cv.fill();
  cv.beginPath();
  cv.moveTo(x+width/2,y+height);
  cv.lineTo(x+width/2+20,y+height-5);
  cv.lineTo(x,y);
  cv.fill();

}
var gradient = function (color1,color2,x,y,width,hieght,cv) {
    var grd = ctx.createLinearGradient(x,y,x+width,y+hieght);
    grd.addColorStop(0, color1);
    grd.addColorStop(1, color2);
    cv.fillStyle = grd;
}
var shadow = function (color,blur,offsetX,offsetY,cv) {
    cv.shadowColor = color;
    cv.shadowBlur = blur;
    cv.shadowOffsetX = offsetX;
    cv.shadowOffsetY = offsetY;
}
var fillText = function (x,y, text,size,font,cv) {
    cv.font = size font;
    cv.strokeText(text, x, y); 
}
var fillEllipse = function (x,y,r,cv) {
  cv.beginPath();
  cv.arc(x,y,r,0,2*Math.PI);
  cv.fill();
}
var strokeEllipse = function (x,y,r,cv) {
  cv.beginPath();
  cv.arc(x,y,r,0,2);
  cv.stroke();
}
