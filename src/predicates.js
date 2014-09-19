'use strict';

function numberp (s) {
    return typeof s === 'number';
}

function zerop (n) {
    return n === 0;
}

function minusp (n) {
    return n < 0;
}

function plusp (n) {
    return n > 0;
}

function evenp (n) {
    return n % 2 === 0;
}

function oddp (n) {
    return Math.abs(n) % 2 === 1;
}

function listp (s) {
    return s instanceof Array || s === null;
}