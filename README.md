> This project fully works, but will no longer be worked on. The package can still be installed through npm but no new releases will be published.

![lamp logo](https://docs.google.com/drawings/d/e/2PACX-1vSGG9fMgwuYuQgja9d7B_9sghmC_LUdifg_aC_5SPQn5Ry7Rx5fV9P0sl3UNJ0ak2zUmJKR9AhgVv54/pub?w=960&h=720)
[![downloads](https://img.shields.io/npm/dt/@qlabs/lamp.svg)](https://npmjs.com/package/@qlabs/lamp)
[![Total alerts](https://img.shields.io/lgtm/alerts/g/Quantalabs/Lamp.svg?logo=lgtm&logoWidth=18)](https://lgtm.com/projects/g/Quantalabs/Lamp/alerts/)
[![Language grade: JavaScript](https://img.shields.io/lgtm/grade/javascript/g/Quantalabs/Lamp.svg?logo=lgtm&logoWidth=18)](https://lgtm.com/projects/g/Quantalabs/Lamp/context:javascript)
[![Node.js CI](https://github.com/Quantalabs/Lamp/workflows/Node.js%20CI/badge.svg)](https://github.com/Quantalabs/Lamp/actions?query=workflow%3A%22Node.js+CI%22)
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

## Importing Lamp

Create a `<script>` tag like this:

	<script src="https://cdn.jsdelivr.net/gh/quantalabs/lamp@v1.1.2/index.js"></script>

## 2d Shapes

### Lines

Use the `line()` function to create lines.

	line(x, y, x2,y2)

### Triangles

#### Stroke Triangles

To make a triangle with no fill, use the `strokeTri()` function.

	strokeTri(x1, y1, x2, y2, x3, y3)
	
#### Fill Triangles

To make a triangle with a fill, use the `fillTri()` function.

	fillTri(x1, y1, x2, y2, x3, y3)

### Circles/Ovals

#### Fill Ellipses

To create a filled ellipse, use `fillEllipse()`.

	fillEllipse(x, y, r)
	
`x` and `y` are the center of the circle and `r` is the raidius.

#### Stroke Ellipses

To create a ellipse with no fill, use `strokeEllipse()`.

	strokeEllipse(x, y, r)
	
### Text

To create text, use `text()`.

	text(x, y, text)

Make sure `text` is a string.

## 3d Graphics
	
### Pyramids

To create a pyramid, use `pyramid()`.

	pyramid(x, y, height, width)
	
## Other

### Gradients

For gradients, use `gradients()`.

	graidents(color1, color2, x, y, width, height)

`color1` and `color2` are both string values.

### Shadows

For shadows, use `shadow()`.

	shadow(color, blue, offsetX, offsetY)

`color` is a string value.

### Erasing

To erase, use `erase()`.

	erase(x, y, width, height)

You can also use `clear()` to clear the whole canvas.

	clear()

## That's IT!

You now know *lamp*.

# Credits

 - [@q9i](https://github.com/quantum9innovation)
