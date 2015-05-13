/*
 * Custom Scripts
 */

(function() {
    var page = document.body.classList;
    if (page.contains('page--home')) {

    } else if (page.contains('page--about')) {
        /* Trianglify */
        var pattern = Trianglify({
            width: document.body.clientWidth,
            height: document.body.clientHeight,
            x_colors: ['#13001C', '#B33A45', '#0A000F']
        });

        // Skills Chart
        var ctx = document.getElementById("myChart").getContext("2d");
        var data = {
            labels: ["HTML5", "CSS3", "Less/Scss", "Javascript", "Ajax/API", "Bootstrap", "WordPress", "Photoshop"],
            datasets: [{
                label: "My First dataset",
                fillColor: "rgba(220,220,220,.6)",
                strokeColor: "rgba(220,220,220,.6)",
                pointColor: "#000",
                pointStrokeColor: "#fff",
                pointHighlightFill: "rgba(220,220,220,.8)",
                pointHighlightStroke: "rgba(220,220,220,.6)",
                data: [90, 100, 75, 90, 95, 75, 85, 60]
            }]
        };
        var myNewChart = new Chart(ctx).Radar(data, {
            scaleLineColor: "#404040",
            pointLabelFontSize: 13,
            responsive: true
        });
    } else if (page.contains('page--portfolio')) {
        /* Trianglify */
        var pattern = Trianglify({
            width: document.body.clientWidth,
            height: document.body.clientHeight,
            x_colors: ['#13001C', '#DE4A00', '#0A000F']
        });
    } else if (page.contains('page--contact')) {
        var pattern = Trianglify({
            width: document.body.clientWidth,
            height: document.body.clientHeight,
            x_colors: ['#022E17', '#17033B', '#3D9970', '#17033B', '#022E17'],
            y_colors: ['#3D9970', '#17033B'],
            variance: 1
        });
    }

    if (!page.contains('page--home')) {
        var css = '.main .header {background-image: url(' + pattern.png() + ');}',
            head = document.head || document.getElementsByTagName('head')[0],
            style = document.createElement('style');
        style.type = 'text/css';
        if (style.styleSheet) {
            style.styleSheet.cssText = css;
        } else {
            style.appendChild(document.createTextNode(css));
        }
        head.appendChild(style);
    }
})();

(function() {
    var el = document.getElementById("loading");

    function fadeOut(el) {
        el.style.opacity = 1;
        var tick = function() {
            el.style.opacity = el.style.opacity - 0.01;
            if (el.style.opacity > 0.01) {
                (window.requestAnimationFrame && requestAnimationFrame(tick)) || setTimeout(tick, 16);
            } else {
                el.parentNode.removeChild(el);
            }
        };

        tick();
    }
    window.onload = fadeOut(el);
})();

// first add raf shim
// http://www.paulirish.com/2011/requestanimationframe-for-smart-animating/
window.requestAnimFrame = (function() {
    return window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        function(callback) {
            window.setTimeout(callback, 1000 / 60);
        };
})();

// main function
function scrollToY(scrollTargetY, speed, easing) {
    // scrollTargetY: the target scrollY property of the window
    // speed: time in pixels per second
    // easing: easing equation to use

    var scrollY = window.scrollY,
        scrollTargetY = scrollTargetY || 0,
        speed = speed || 2000,
        easing = easing || 'easeOutSine',
        currentTime = 0;

    // min time .1, max time .8 seconds
    var time = Math.max(.1, Math.min(Math.abs(scrollY - scrollTargetY) / speed, .8));

    // easing equations from https://github.com/danro/easing-js/blob/master/easing.js
    var PI_D2 = Math.PI / 2,
        easingEquations = {
            easeOutSine: function(pos) {
                return Math.sin(pos * (Math.PI / 2));
            },
            easeInOutSine: function(pos) {
                return (-0.5 * (Math.cos(Math.PI * pos) - 1));
            },
            easeInOutQuint: function(pos) {
                if ((pos /= 0.5) < 1) {
                    return 0.5 * Math.pow(pos, 5);
                }
                return 0.5 * (Math.pow((pos - 2), 5) + 2);
            }
        };

    // add animation loop
    function tick() {
        currentTime += 1 / 60;

        var p = currentTime / time;
        var t = easingEquations[easing](p);

        if (p < 1) {
            requestAnimFrame(tick);

            window.scrollTo(0, scrollY + ((scrollTargetY - scrollY) * t));
        } else {
            window.scrollTo(0, scrollTargetY);
        }
    }

    // call it once to get started
    tick();
}

var scroller = document.getElementsByClassName("scroller")[0];
if (scroller) {
    scroller.addEventListener('click', function() {
        var height = "innerHeight" in window ? window.innerHeight : document.documentElement.offsetHeight;
        scrollToY(height, 500, 'easeInOutQuint');
    }, false);
}

/*!
 * classie - class helper functions
 * from bonzo https://github.com/ded/bonzo
 *
 * classie.has( elem, 'my-class' ) -> true/false
 * classie.add( elem, 'my-new-class' )
 * classie.remove( elem, 'my-unwanted-class' )
 * classie.toggle( elem, 'my-class' )
 */

/*jshint browser: true, strict: true, undef: true */
/*global define: false */

(function(window) {

    'use strict';

    // class helper functions from bonzo https://github.com/ded/bonzo

    function classReg(className) {
        return new RegExp("(^|\\s+)" + className + "(\\s+|$)");
    }

    // classList support for class management
    // altho to be fair, the api sucks because it won't accept multiple classes at once
    var hasClass, addClass, removeClass;

    if ('classList' in document.documentElement) {
        hasClass = function(elem, c) {
            return elem.classList.contains(c);
        };
        addClass = function(elem, c) {
            elem.classList.add(c);
        };
        removeClass = function(elem, c) {
            elem.classList.remove(c);
        };
    } else {
        hasClass = function(elem, c) {
            return classReg(c).test(elem.className);
        };
        addClass = function(elem, c) {
            if (!hasClass(elem, c)) {
                elem.className = elem.className + ' ' + c;
            }
        };
        removeClass = function(elem, c) {
            elem.className = elem.className.replace(classReg(c), ' ');
        };
    }

    function toggleClass(elem, c) {
        var fn = hasClass(elem, c) ? removeClass : addClass;
        fn(elem, c);
    }

    var classie = {
        // full names
        hasClass: hasClass,
        addClass: addClass,
        removeClass: removeClass,
        toggleClass: toggleClass,
        // short names
        has: hasClass,
        add: addClass,
        remove: removeClass,
        toggle: toggleClass
    };

    // transport
    if (typeof define === 'function' && define.amd) {
        // AMD
        define(classie);
    } else {
        // browser global
        window.classie = classie;
    }

})(window);


(function() {

    if (typeof Snap === 'undefined') {
        return;
    }

    var bodyEl = document.body,
        openbtn = document.getElementsByClassName('menu__button--open')[0],
        closebtn = document.getElementsByClassName('menu__button--close')[0],
        isOpen = false,

        morphEl = document.getElementById('morph-shape'),
        s = Snap(morphEl.querySelector('svg'));
    path = s.select('path');
    initialPath = this.path.attr('d'),
        pathOpen = morphEl.getAttribute('data-morph-open'),
        isAnimating = false;

    function init() {
        initEvents();
    }

    function initEvents() {
        openbtn.addEventListener('click', toggleMenu);
        if (closebtn) {
            closebtn.addEventListener('click', toggleMenu);
        }

        // close the menu element if the target it´s not the menu element or one of its descendants..
        bodyEl.addEventListener('click', function(ev) {
            var target = ev.target;
            if (isOpen && target !== openbtn) {
                toggleMenu();
            }
        });
    }

    function toggleMenu() {
        if (isAnimating) return false;
        isAnimating = true;
        if (isOpen) {
            classie.remove(bodyEl, 'show-menu');
            // animate path
            setTimeout(function() {
                // reset path
                path.attr('d', initialPath);
                isAnimating = false;
            }, 300);
        } else {
            classie.add(bodyEl, 'show-menu');
            // animate path
            path.animate({
                'path': pathOpen
            }, 400, mina.easeinout, function() {
                isAnimating = false;
            });
        }
        isOpen = !isOpen;
    }

    init();

})();
