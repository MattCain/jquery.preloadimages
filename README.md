jQuery.preloadimages
====================

A lightweight jQuery plugin for preloading an array of image paths.

Similar to [jquery.imgpreload](https://github.com/farinspace/jquery.imgpreload) but lighter weight and only preloads arrays of image paths.

## Usage

    var myImages = ['image1.png', 'image2.png', 'image3.png'];

    $.preloadimages(myImages, {
        each: function(image) {
            // image is an image object, you can turn it into a jQuery object like this:
            var $image = $(image);

            // Check if it loaded or failed
            var success = $image.data('loaded');
        },
        all: function(images) {
            // images is an array of images objects. The images are in the same order as the corresponding URL's you passed in.
            for (var i = 0; i < images.length; i++) {
                console.log( images[i].src.indexOf(myImages[i]) !== -1 ); // always true

                // You can then turn the image objects into jQuery objects:
                var $image = $(images[i]);
            }
        }
    });

MIT Licensed.

See any simple improvements that can be made? Pull requests very welcome!