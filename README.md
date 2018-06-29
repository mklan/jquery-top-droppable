# jquery.top-droppable

A small jQuery UI plugin, which allows you to drop a draggable-element only into the foremost droppable-element, if more of them are overlapping.

## Dependencies

In order to use jquery.top-droppable you have to include the libraries jQuery and jQuery UI.

## Installation

Include the script after jQuery and jQuery UI:

```html
<script src="/path/to/jquery.js"></script>
<script src="/path/to/jquery-ui.js"></script>
<script src="/path/to/jquery.top-droppable.js"></script>
```

## Usage

#### Prepare the top-droppable elements

Every drop element that want to use the top-droppable feature needs a specific `z-index` value:

```html
<div id="1" class="top-droppable" style="z-index: 1;"></div>
<div id="2" class="top-droppable" style="z-index: 2;"></div>
```


#### topDroppable method and drop event

To use this plugin simply select your top-droppable elements, call the `topDroppable` method and listen to the `drop` event. The `drop` event will trigger only once on drop and provides a reference to the foremost top-droppable element stored in `this`. You can still access `e` and `ui` and do stuff you would do with the native `drop` event of jQuery UI's `droppable` method:

```javascript
$(".top-droppable").topDroppable({
    drop: function (e, ui) {
	 alert("dropped into " + $(this).attr('id'));
    }
});
```


#### use jQuery UI's droppable options and events

You can chain the `draggable` method to setup all the native options and events provided by jQuery UI:

```javascript
$(".top-droppable").topDroppable({
    drop: function (e, ui) {
	 alert("dropped into " + $(this).attr('id'));
    }
}).droppable({
    tolerance: "pointer"
});
```

Keep in mind not to use the native `drop` event.


#### access the foremost element while dragging

You can access the currently foremost element while still dragging over the top-droppable elements with the following method:

```javascript
$.getTopElement();
```


#### access the currently hovering over top-droppable elements while dragging

You can access the top-droppable elements that you are currently hovering over with the following method:

```javascript
$.getCurrentHoveredElements();
```

## Demo

Check out the [demo](https://mklan.github.io/jquery-top-droppable-demo/) 


## Author

[Matthias Klan](https://github.com/mklan/)

contact: matthias.klan@gmail.com 


## Licence

The MIT License (MIT)

Copyright (c) 2013 Matthias Klan

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
the Software, and to permit persons to whom the Software is furnished to do so,
subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
