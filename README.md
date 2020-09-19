![lamp logo](https://docs.google.com/drawings/d/e/2PACX-1vSGG9fMgwuYuQgja9d7B_9sghmC_LUdifg_aC_5SPQn5Ry7Rx5fV9P0sl3UNJ0ak2zUmJKR9AhgVv54/pub?w=960&h=720)

# What is Lamp

Creating graphics using the JS Canvas can be complicated and sometimes take long. Lamp allows you to make graphics as quick as a fox. With shadows, gradients, normal 2d (and even 3d!) 
shapes, it makes canvas graphics as easy as pie.

Lamp can do:

  - 3d
 	  - pyramids
  - 2d
      - lines
	  - triangles
	  - circles
	  - text
  - other
	  - shadows
	  - gradients
	  - erasing
	
# Documentation

## Canvas

First in `html` create the `<canvas>` tag.

	<canvas id="canvas" width="400" height="400"></canvas>
	
Now, in JS, create a variable for the canvas.

	var c = document.getElementById('canvas')
	var ctx = c.getContext('2d')
	
And you're done. Now, you can get on to drawing.

## Importing Lamp

Create a `<script>` tag like this:

	<script src="https://cdn.jsdelivr.net/gh/quantalabs/lamp/index.js"></script>

This imports the library to your code and enables you to use it.

## 2d Shapes

### Lines

Use the `line()` function to create lines.

	line(x, y, x2,y2, cv)

The `cv` parameter is the canvas variable, or `ctx`, that we created earlier. This will be used in all of the functions.

### Triangles

#### Stroke Triangles

To make a triangle with no fill, use the `strokeTri()` function.

	strokeTri(x1, y1, x2, y2, x3, y3, cv)
	
#### Fill Triangles

To make a triangle with a fill, use the `fillTri()` function.

	fillTri(x1, y1, x2, y2, x3, y3, cv)

### Circles/Ovals

#### Fill Ellipses

To create a filled ellipse, use `fillEllipse()`.

	fillEllipse(x, y, r, cv)
	
`x` and `y` are the center of the circle and `r` is the raidius.

#### Stroke Ellipses

To create a ellipse with no fill, use `strokeEllipse()`.

	strokeEllipse(x, y, r, cv)
	
### Text

To create text, use `text()`.

	text(x, y, text, cv)

Make sure `text` is a string.

## 3d Graphics
	
### Pyramids

To create a pyramid, use `pyramid()`.

	pyramid(x, y, height, width, cv)
	
## Other

### Gradients

For gradients, use `gradients()`.

	graidents(color1, color2, x, y, width, height, cv)

`color1` and `color2` are both string values.

### Shadows

For shadows, use `shadow()`.

	shadow(color, blue, offsetX, offsetY, cv)

`color` is a string value.

### Erasing

To erase, use `erase()`.

	erase(x, y, width, height, cv)
	
## That's IT!

You now know *lamp*.



# Credits

[@q9i](https://github.com/quantum9innovation)