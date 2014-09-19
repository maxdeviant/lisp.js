'use strict';

var PredicatesTest = function () {
    var numberpTest = function () {
        assertEquals(true, numberp(1));
        assertEquals(true, numberp(1.2));
        assertEquals(false, numberp(null));
    };

    var zeropTest = function () {
        assertEquals(true, zerop(0));
        assertEquals(false, zerop(1));
        assertEquals(true, zerop(-0.0));
    };

    var minuspTest = function () {
        assertEquals(true, minusp(-1));
        assertEquals(false, minusp(0));
        assertEquals(false, minusp(1));
    };

    var pluspTest = function () {
        assertEquals(false, plusp(-1));
        assertEquals(false, plusp(0));
        assertEquals(true, plusp(1));
    };

    var evenpTest = function () {
        assertEquals(true, evenp(2));
        assertEquals(false, evenp(1));
        assertEquals(true, evenp(-2));
    };

    var oddpTest = function () {
        assertEquals(true, oddp(1));
        assertEquals(false, oddp(2));
        assertEquals(true, oddp(-1));
    };

    var listpTest = function () {
        assertEquals(true, listp(null));
        assertEquals(true, listp([1, 2, 3, 4]));
        assertEquals(false, listp(1));
        assertEquals(false, listp(true));
    };

    console.log('[ Predicates: Start ]');
    console.time('Total');

    tests({
        'numberp': numberpTest,
        'zerop': zeropTest,
        'minusp': minuspTest,
        'plusp': pluspTest,
        'evenp': evenpTest,
        'oddp': oddpTest,
        'listp': listpTest
    });

    console.timeEnd('Total');
    console.log('[ Predicates: Complete ]');
}