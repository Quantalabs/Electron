//functions
    var line = function (x1, y1, x2, y2, cv) {
    cv.beginPath();
    cv.moveTo(x1,y1);
    cv.lineTo(x2,y2);
    cv.stroke();
    };
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
    //example code
    //change ctx if canvas variable is different
  fillTri(100,200,200,200,200,100, ctx);
  erase(150,150,10,10, ctx);
