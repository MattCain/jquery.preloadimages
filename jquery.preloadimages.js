/*!
 * Copyright (c) 2014 Matt Cain (@CainCode)
 *
 * Permission is hereby granted, free of charge, to any person obtaining
 * a copy of this software and associated documentation files (the
 * "Software"), to deal in the Software without restriction, including
 * without limitation the rights to use, copy, modify, merge, publish,
 * distribute, sublicense, and/or sell copies of the Software, and to
 * permit persons to whom the Software is furnished to do so, subject to
 * the following conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
 * MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
 * LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
 * OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
 * WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */

(function($){
    'use strict';

    $.preloadimages = function(images, options) {

        var settings = $.extend({
            each: $.noop,
            all: $.noop
        }, options),
            loaded = [],
            counter = 0;

        $.each(images, function(i, url) {

            var image = new Image();

            $(image).on('load error', function(e) {
                var $this = $(this);
                
                counter++;

                $this.data('loaded', 'error' === e.type ? false : true);

                loaded[i] = image;
                
                settings.each($this);

                if (counter === images.length) {
                    settings.all(loaded);
                }

                $(this).off('load error');
            });

            image.src = url;
        });
    };
})(jQuery);