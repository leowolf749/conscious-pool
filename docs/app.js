(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
const app = angular.module ('ConsciousPool', [
    'ui.router',
]);

const components = [
    require('./components/header.component'),
    require('./components/home.component'),
    require('./components/artists.component'),
    require('./components/media.component'),
    require('./components/about.component'),
    require('./components/contact.component'),
];

for (let i = 0; i < components.length; i++) {
    app.component(components[i].name, components[i].object);
};

const controllers = [
    require('./controllers/artists.controller'),
];

for (let i = 0; i < controllers.length; i++) {
    app.controller(controllers[i].name, controllers[i].func);
};

app.config(function ($stateProvider){
    $stateProvider.state({
        name: 'home',
        url: '/',
    });
    $stateProvider.state({
        name: 'artists',
        url: '/artists',
        component: 'artists',
    });
    $stateProvider.state({
        name: 'media',
        url: '/media',
        component: 'media',
    });
    $stateProvider.state({
        name: 'about',
        url: '/about',
        component: 'about',
    });
    $stateProvider.state({
        name: 'contact',
        url: '/contact',
        component: 'contact',
    });
});
},{"./components/about.component":2,"./components/artists.component":3,"./components/contact.component":4,"./components/header.component":5,"./components/home.component":6,"./components/media.component":7,"./controllers/artists.controller":8}],2:[function(require,module,exports){
module.exports = {
    name: 'about',
    object: {
        templateUrl: 'templates/about.html',
    }
}
},{}],3:[function(require,module,exports){
module.exports = {
    name: 'artists',
    object: {
        controller: 'ArtistsController',
        templateUrl: 'templates/artists.html',
    }
}
},{}],4:[function(require,module,exports){
module.exports = {
    name: 'contact',
    object: {
        templateUrl: 'templates/contact.html',
    }
}
},{}],5:[function(require,module,exports){
module.exports = {
    name: 'headerSection',
    object: {
        templateUrl: 'templates/header.html',
    }
}
},{}],6:[function(require,module,exports){
module.exports = {
    name: 'home',
    object: {
        templateUrl: 'templates/home.html',
    }
}
},{}],7:[function(require,module,exports){
module.exports = {
    name: 'media',
    object: {
        templateUrl: 'templates/media.html',
    }
}
},{}],8:[function(require,module,exports){
module.exports = {
    name: 'ArtistsController',
    func: function ($scope) {
        $scope.load = () => {
            const artists = [
                {
                    name: 'snoom',
                    image: 'guangzhou set.jpg',
                },
            ];

            const parent = document.querySelector('#artists-list');
                for (let i = 0; i < artists.length; i++) {
                    let artist = document.createElement('li');
                    artist.innerHTML = Mustache.render (
                        document.querySelector('#artist-template').innerHTML,
                        {
                            artistName: artists[i].name,
                            artistImage: artists[i].image,
                        }
                    );
                    parent.appendChild(artist);
                }
        };
    }
}
},{}]},{},[1]);
