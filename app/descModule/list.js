"use strict";

angular.module('desc-service', [])
    .factory('descService', function ($http) {
        var service = {};

        service.getAccessories = function(){
          
            return [
                {
                    name: "Vernis",
                    list: [
                        {
                            name: "True Black",
                            desc: "(lien : http://www.lien.com)"
                        },
                        {
                            name: "True White",
                            desc: "(lien : http://www.lien.com)"
                        }
                    ]
                },
                {
                    name: "Accessoires",
                    list: [
                        {
                            name: "Dotting Tool",
                            desc: "(lien : http://www.lien.com)"
                        },
                        {
                            name: "Fan Brush",
                            desc: "(lien : http://www.lien.com)"
                        },
                        {
                            name: "Pinceau fin",
                            desc: "(lien : http://www.lien.com)"
                        }
                    ]
                }
            ]

        };

        return service;
    });