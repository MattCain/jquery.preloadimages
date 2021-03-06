jQuery.preloadimages
====================

A lightweight jQuery plugin for preloading images from an array of image paths.

Similar to [jquery.imgpreload](https://github.com/farinspace/jquery.imgpreload) but:
* passes JSHint
* uses `on` and `off` instead of `bind` and `unbind`
* gives you the results in the same order as the array of paths that you passed in

jQuery 1.7+ required.
Tested in Firefox 25+, Chrome 33+, Safari 7+, IE7+.

Pull requests welcome!

## Usage

```javascript
var myImages = ['image1.png', 'image2.png', 'image3.png'];

$.preloadimages(myImages, {
    // The each callback is called as soon as an image finishes loadsing, not in any enforced order.
    each: function(image) {
        // image is an image object, you can turn it into a jQuery object like this:
        var $image = $(image);

        // Check if it loaded or failed
        var success = $image.data('loaded');
    },
    all: function(images) {
        // images is an array of images objects. The images are in the same order as the URL's you passed in.
        for (var i = 0; i < images.length; i++) {
            console.log( images[i].src.indexOf(myImages[i]) !== -1 ); // always true

            // You can then turn the image objects into jQuery objects:
            var $image = $(images[i]);
        }
    }
});
```
### Installation

Bower installation is available:

    bower install jquery.preloadimages

Or download the js straight from github.

## License

MIT License
