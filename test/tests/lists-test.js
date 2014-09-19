'use strict';

var ListsTest = function () {
    var listTest = function () {
        assertEquals([1, 'a', 2, 'b', 3, 'c'].toString(), list(1, 'a', 2, 'b', 3, 'c').toString());
    }

    var carTest = function () {
        assertEquals('a', car(['a', 'b', 'c']));
        assertEquals(null, car([]));
        assertEquals(null, car(null));
    }

    var cdrTest = function () {
        assertEquals(['b', 'c'].toString(), cdr(['a', 'b', 'c']).toString());
        assertEquals(null, cdr([]));
        assertEquals(null, cdr(null));
    }

    var cddrTest = function () {
        assertEquals(['c', 'd'].toString(), cddr(['a', 'b', 'c', 'd']).toString());
        assertEquals(null, cddr(['a']));
        assertEquals(null, cddr([]));
        assertEquals(null, cddr(null));
    }

    var cdddrTest = function () {
        assertEquals(['d', 'e'].toString(), cdddr(['a', 'b', 'c', 'd', 'e']).toString());
        assertEquals(null, cdddr(['a', 'b']));
        assertEquals(null, cdddr([]));
        assertEquals(null, cdddr(null));
    }

    var cddddrTest = function () {
        assertEquals(['e', 'f'].toString(), cddddr(['a', 'b', 'c', 'd', 'e', 'f']).toString());
        assertEquals(null, cddddr(['a', 'b', 'c']));
        assertEquals(null, cddddr([]));
        assertEquals(null, cddddr(null));
    }

    var firstTest = function () {
        assertEquals('a', first(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k']));
        assertEquals(null, first([]));
        assertEquals(null, first(null));
    }

    var secondTest = function () {
        assertEquals(['b'].toString(), second(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k']).toString());
        assertEquals(null, second(['a']));
        assertEquals(null, second([]));
        assertEquals(null, second(null));
    }

    var thirdTest = function () {
        assertEquals(['c'].toString(), third(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k']).toString());
        assertEquals(null, third(['a', 'b']));
        assertEquals(null, third([]));
        assertEquals(null, third(null));
    }

    var fourthTest = function () {
        assertEquals(['d'].toString(), fourth(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k']).toString());
        assertEquals(null, fourth(['a', 'b', 'c']));
        assertEquals(null, fourth([]));
        assertEquals(null, fourth(null));
    }

    var fifthTest = function () {
        assertEquals(['e'].toString(), fifth(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k']).toString());
        assertEquals(null, fifth(['a', 'b', 'c', 'd']));
        assertEquals(null, fifth([]));
        assertEquals(null, fifth(null));
    }

    var sixthTest = function () {
        assertEquals(['f'].toString(), sixth(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k']).toString());
        assertEquals(null, sixth(['a', 'b', 'c', 'd', 'e']));
        assertEquals(null, sixth([]));
        assertEquals(null, sixth(null));
    }

    var seventhTest = function () {
        assertEquals(['g'].toString(), seventh(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k']).toString());
        assertEquals(null, seventh(['a', 'b', 'c', 'd', 'e', 'f']));
        assertEquals(null, seventh([]));
        assertEquals(null, seventh(null));
    }

    var eighthTest = function () {
        assertEquals(['h'].toString(), eighth(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k']).toString());
        assertEquals(null, eighth(['a', 'b', 'c', 'd', 'e', 'f', 'g']));
        assertEquals(null, eighth([]));
        assertEquals(null, eighth(null));
    }

    var ninthTest = function () {
        assertEquals(['i'].toString(), ninth(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k']).toString());
        assertEquals(null, ninth(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']));
        assertEquals(null, ninth([]));
        assertEquals(null, ninth(null));
    }

    var tenthTest = function () {
        assertEquals(['j'].toString(), tenth(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k']).toString());
        assertEquals(null, tenth(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i']));
        assertEquals(null, tenth([]));
        assertEquals(null, tenth(null));
    }

    console.log('[ Lists: Start ]');
    console.time('Total');

    tests({
        'list': listTest,
        'car': carTest,
        'cdr': cdrTest,
        'cddr': cddrTest,
        'cdddr': cdddrTest,
        'cddddr': cddddrTest,
        'first': firstTest,
        'second': secondTest,
        'third': thirdTest,
        'fourth': fourthTest,
        'fifth': fifthTest,
        'sixth': sixthTest,
        'seventh': seventhTest,
        'eighth': eighthTest,
        'ninth': ninthTest,
        'tenth': tenthTest
    });

    console.timeEnd('Total');
    console.log('[ Lists: Complete ]');
}