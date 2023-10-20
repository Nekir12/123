var wms_layers = [];

var format_ROADLAST_0 = new ol.format.GeoJSON();
var features_ROADLAST_0 = format_ROADLAST_0.readFeatures(json_ROADLAST_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ROADLAST_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ROADLAST_0.addFeatures(features_ROADLAST_0);
var lyr_ROADLAST_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ROADLAST_0, 
                style: style_ROADLAST_0,
                interactive: true,
                title: '<img src="styles/legend/ROADLAST_0.png" /> ROAD-LAST'
            });
var format_ALL_1 = new ol.format.GeoJSON();
var features_ALL_1 = format_ALL_1.readFeatures(json_ALL_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ALL_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ALL_1.addFeatures(features_ALL_1);
var lyr_ALL_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ALL_1, 
                style: style_ALL_1,
                interactive: true,
                title: '<img src="styles/legend/ALL_1.png" /> ALL'
            });

lyr_ROADLAST_0.setVisible(true);lyr_ALL_1.setVisible(true);
var layersList = [lyr_ROADLAST_0,lyr_ALL_1];
lyr_ROADLAST_0.set('fieldAliases', {'OID_': 'OID_', 'Name': 'Name', 'FolderPath': 'FolderPath', 'SymbolID': 'SymbolID', 'AltMode': 'AltMode', 'Base': 'Base', 'Clamped': 'Clamped', 'Extruded': 'Extruded', 'Snippet': 'Snippet', 'PopupInfo': 'PopupInfo', 'Shape_Leng': 'Shape_Leng', });
lyr_ALL_1.set('fieldAliases', {'OID_': 'OID_', 'Name': 'Name', 'FolderPath': 'FolderPath', 'SymbolID': 'SymbolID', 'AltMode': 'AltMode', 'Base': 'Base', 'Clamped': 'Clamped', 'Extruded': 'Extruded', 'Snippet': 'Snippet', 'PopupInfo': 'PopupInfo', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_ROADLAST_0.set('fieldImages', {'OID_': '', 'Name': '', 'FolderPath': '', 'SymbolID': '', 'AltMode': '', 'Base': '', 'Clamped': '', 'Extruded': '', 'Snippet': '', 'PopupInfo': '', 'Shape_Leng': '', });
lyr_ALL_1.set('fieldImages', {'OID_': '', 'Name': '', 'FolderPath': '', 'SymbolID': '', 'AltMode': '', 'Base': '', 'Clamped': '', 'Extruded': '', 'Snippet': '', 'PopupInfo': '', 'Shape_Leng': '', 'Shape_Area': '', });
lyr_ROADLAST_0.set('fieldLabels', {'OID_': 'no label', 'Name': 'no label', 'FolderPath': 'no label', 'SymbolID': 'no label', 'AltMode': 'no label', 'Base': 'no label', 'Clamped': 'no label', 'Extruded': 'no label', 'Snippet': 'no label', 'PopupInfo': 'no label', 'Shape_Leng': 'no label', });
lyr_ALL_1.set('fieldLabels', {'OID_': 'no label', 'Name': 'no label', 'FolderPath': 'no label', 'SymbolID': 'no label', 'AltMode': 'no label', 'Base': 'no label', 'Clamped': 'no label', 'Extruded': 'no label', 'Snippet': 'no label', 'PopupInfo': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_ALL_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});