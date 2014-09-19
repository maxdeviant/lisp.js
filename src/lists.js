'use strict';

function list () {
    return Array.prototype.slice.call(arguments);
}

function car (l) {
    if (l === null) {
        return null;
    }

    return l[0] || null;
}

function cdr (l) {
    if (l === null) {
        return null;
    }

    var rest = l.slice(1, l.length);

    return rest.length > 0 ? rest : null;
}

function cddr (l) {
    if (l === null) {
        return null;
    }

    var rest = l.slice(2, l.length);

    return rest.length > 0 ? rest : null;
}

function cdddr (l) {
    if (l === null) {
        return null;
    }

    var rest = l.slice(3, l.length);

    return rest.length > 0 ? rest : null;
}

function cddddr (l) {
    if (l === null) {
        return null;
    }
    
    var rest = l.slice(4, l.length);

    return rest.length > 0 ? rest : null;
}

function first (l) {
    return car(l);
}

function second (l) {
    return car(cdr(l));
}

function third (l) {
    return car(cddr(l));
}

function fourth (l) {
    return car(cdddr(l));
}

function fifth (l) {
    return car(cddddr(l));
}

function sixth (l) {
    return car(cdr(cddddr(l)));
}

function seventh (l) {
    return car(cddr(cddddr(l)));
}

function eighth (l) {
    return car(cdddr(cddddr(l)));
}

function ninth (l) {
    return car(cddddr(cddddr(l)));
}

function tenth (l) {
    return car(cdr(cddddr(cddddr(l))));
}