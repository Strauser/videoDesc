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
                            name: "Base et Top Skin Food",
                            desc: "Base et Top Coat Skin food (dispo sur mon eshop http://www.bijoux-faits-main.com/category.php?id_category=88)"
                        }
                    ]
                },
                {
                    name: "Accessoires",
                    list: [
                        {
                            name: "Pinceau fin",
                            desc: "Pinceau fin (http://www.bijoux-faits-main.com/product.php?id_product=922#mignon)"
                        },
                        {
                            name: "Stripping Tape",
                            desc: "Stripping Tape (http://www.bijoux-faits-main.com/category.php?id_category=37)"
                        },
                        {
                            name: "Cure dent",
                            desc: "Cure dent"
                        },
                        {
                            name: "Peinture acrylique blanche",
                            desc: "Peinture acrylique blanche"
                        }
                    ]
                },
                {
                    name: "Contours",
                    list: [
                        {
                            name: "Contours",
                            desc: "Pinceau biseauté nettoyage de cuticules dans le kit pinceau (dispo sur mon eshop http://www.bijoux-faits-main.com/product.php?id_product=175)\n" +
                            "- Pinceau plat pour nettoyer les contours avec du dissolvant (dispo sur mon eshop http://www.bijoux-faits-main.com/category.php?id_category=69)\n" +
                            "- Pompe à dissolvant (dispo sur mon eshop http://www.bijoux-faits-main.com/product.php?id_product=1013)"

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
                "T W I T T E R : @yokonailart\n\n" +

                "Je filme avec un Nikon D5100 et je monte avec Final Cut Pro X\n" +
                "Musique Youtube Audio Library\n" +
                "(Source : http://incompetech.com/music/royalty-free/index.html?isrc=USUAN1400037)\n";
        };

        return service;
    });