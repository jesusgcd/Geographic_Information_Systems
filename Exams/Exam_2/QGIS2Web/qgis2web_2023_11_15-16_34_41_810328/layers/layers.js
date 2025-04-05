var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_ZonasOptimasReforestacion_1 = new ol.format.GeoJSON();
var features_ZonasOptimasReforestacion_1 = format_ZonasOptimasReforestacion_1.readFeatures(json_ZonasOptimasReforestacion_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ZonasOptimasReforestacion_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ZonasOptimasReforestacion_1.addFeatures(features_ZonasOptimasReforestacion_1);
var lyr_ZonasOptimasReforestacion_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ZonasOptimasReforestacion_1, 
                style: style_ZonasOptimasReforestacion_1,
                interactive: true,
    title: 'ZonasOptimasReforestacion<br />\
    <img src="styles/legend/ZonasOptimasReforestacion_1_0.png" /> 0 - 1<br />\
    <img src="styles/legend/ZonasOptimasReforestacion_1_1.png" /> 1 - 2<br />\
    <img src="styles/legend/ZonasOptimasReforestacion_1_2.png" /> 2 - 3<br />\
    <img src="styles/legend/ZonasOptimasReforestacion_1_3.png" /> 3 - 3<br />\
    <img src="styles/legend/ZonasOptimasReforestacion_1_4.png" /> 3 - 3<br />\
    <img src="styles/legend/ZonasOptimasReforestacion_1_5.png" /> 3 - 4<br />\
    <img src="styles/legend/ZonasOptimasReforestacion_1_6.png" /> 4 - 4<br />'
        });

lyr_OSMStandard_0.setVisible(true);lyr_ZonasOptimasReforestacion_1.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_ZonasOptimasReforestacion_1];
lyr_ZonasOptimasReforestacion_1.set('fieldAliases', {'Elevacion': 'Elevacion', 'Zona': 'Zona', 'Nombre': 'Nombre', 'PPA': 'PPA', 'MesSecos': 'MesSecos', 'EspecieRe': 'EspecieRe', 'Hectareas': 'Hectareas', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_ZonasOptimasReforestacion_1.set('fieldImages', {'Elevacion': 'TextEdit', 'Zona': 'TextEdit', 'Nombre': 'TextEdit', 'PPA': 'Range', 'MesSecos': 'Range', 'EspecieRe': 'TextEdit', 'Hectareas': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_ZonasOptimasReforestacion_1.set('fieldLabels', {'Elevacion': 'header label', 'Zona': 'inline label', 'Nombre': 'inline label', 'PPA': 'inline label', 'MesSecos': 'inline label', 'EspecieRe': 'inline label', 'Hectareas': 'inline label', 'SHAPE_Leng': 'inline label', 'SHAPE_Area': 'inline label', });
lyr_ZonasOptimasReforestacion_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});