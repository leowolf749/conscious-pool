(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
const app = angular.module ('ConsciousPool', [
    'ui.router',
]);

const components = [
    require('./components/header.component'),
    require('./components/home.component'),
];

for (let i = 0; i < components.length; i++) {
    app.component(components[i].name, components[i].object);
};

app.config(function ($stateProvider){
    $stateProvider.state({
        name: 'home',
        url: '/',
    });
});
},{"./components/header.component":2,"./components/home.component":3}],2:[function(require,module,exports){
module.exports = {
    name: 'headerSection',
    object: {
        templateUrl: 'templates/header.html',
    }
}
},{}],3:[function(require,module,exports){
module.exports = {
    name: 'home',
    object: {
        templateUrl: 'templates/home.html',
    }
}
},{}]},{},[1]);
