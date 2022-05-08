var wms_layers = [];


        var lyr_StamenTonerLite_0 = new ol.layer.Tile({
            'title': 'Stamen Toner Lite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="http://maps.stamen.com/">Map tiles by Stamen Design, under CC BY 3.0. Data by OpenStreetMap, under ODbL</a>',
                url: 'http://tile.stamen.com/toner-lite/{z}/{x}/{y}.png'
            })
        });
var lyr_savi_1 = new ol.layer.Image({
                            opacity: 1,
                            title: "savi",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/savi_1.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [11202390.000000, 1726133.144506, 11331900.000000, 1936106.556526]
                            })
                        });
var lyr_ndvi_2 = new ol.layer.Image({
                            opacity: 1,
                            title: "ndvi",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/ndvi_2.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [11202390.000000, 1726133.144506, 11331900.000000, 1936106.556526]
                            })
                        });

lyr_StamenTonerLite_0.setVisible(true);lyr_savi_1.setVisible(true);lyr_ndvi_2.setVisible(true);
var layersList = [lyr_StamenTonerLite_0,lyr_savi_1,lyr_ndvi_2];
