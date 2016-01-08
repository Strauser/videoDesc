"use strict";

angular.module('desc-service', [])
    .factory('descService', function ($http) {
        var service = {};

        service.getIntro = function() {
            return "Voici 5 idées de nail art pour Noël ♡\n" +
                    "↓↓ Plus d'infos ↓↓\n";
        };

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

        service.getOutro = function() {
            return "En Intro :\n" +
                "♡ Ce que je porte :\n" +
                "- \n\n" +

                "Si vous re-créez un de mes nail art, n'hésitez pas à me taguer sur la photo @yokonailart et avec le hashtag #yokonailart sur Instagram pour que j'aille liker votre photo ♡♡♡\n\n" +

                "A B O N N E Z  V O U S : http://www.youtube.com/subscription_center?add_user=1fashionail\n" +
                "S H O P : http://www.bijoux-faits-main.com\n" +
                "F A C E B O O K : https://www.facebook.com/pages/Yoko-Nail-Art/101032073271306\n" +
                "I N S T A G R A M : @yokonailart\n" +
                "T W I T T E R : @yokonailart\n" +
                "*Merci à Beauté Privée d’avoir sponsorisé ce contenu\n\n" +

                "Je filme avec un Nikon D5100 et je monte avec Final Cut Pro X\n" +
                "Musique Youtube Audio Library\n" +
                "(Source : http://incompetech.com/music/royalty-free/index.html?isrc=USUAN1400037)\n";
        };

        return service;
    });