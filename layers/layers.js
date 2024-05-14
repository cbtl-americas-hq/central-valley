var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_5MinuteDriveTime_1 = new ol.format.GeoJSON();
var features_5MinuteDriveTime_1 = format_5MinuteDriveTime_1.readFeatures(json_5MinuteDriveTime_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_5MinuteDriveTime_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_5MinuteDriveTime_1.addFeatures(features_5MinuteDriveTime_1);
var lyr_5MinuteDriveTime_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_5MinuteDriveTime_1, 
                style: style_5MinuteDriveTime_1,
                interactive: true,
                title: '<img src="styles/legend/5MinuteDriveTime_1.png" /> 5-Minute Drive Time'
            });
var format_TargetTradeAreas_2 = new ol.format.GeoJSON();
var features_TargetTradeAreas_2 = format_TargetTradeAreas_2.readFeatures(json_TargetTradeAreas_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TargetTradeAreas_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TargetTradeAreas_2.addFeatures(features_TargetTradeAreas_2);
var lyr_TargetTradeAreas_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_TargetTradeAreas_2, 
                style: style_TargetTradeAreas_2,
                interactive: true,
                title: '<img src="styles/legend/TargetTradeAreas_2.png" /> Target Trade Areas'
            });
var format_IdentifiedSites_3 = new ol.format.GeoJSON();
var features_IdentifiedSites_3 = format_IdentifiedSites_3.readFeatures(json_IdentifiedSites_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_IdentifiedSites_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_IdentifiedSites_3.addFeatures(features_IdentifiedSites_3);
var lyr_IdentifiedSites_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_IdentifiedSites_3, 
                style: style_IdentifiedSites_3,
                interactive: true,
                title: '<img src="styles/legend/IdentifiedSites_3.png" /> Identified Sites'
            });
var format_Stores_4 = new ol.format.GeoJSON();
var features_Stores_4 = format_Stores_4.readFeatures(json_Stores_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Stores_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Stores_4.addFeatures(features_Stores_4);
var lyr_Stores_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Stores_4, 
                style: style_Stores_4,
                interactive: true,
                title: '<img src="styles/legend/Stores_4.png" /> Stores'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_5MinuteDriveTime_1.setVisible(true);lyr_TargetTradeAreas_2.setVisible(true);lyr_IdentifiedSites_3.setVisible(false);lyr_Stores_4.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_5MinuteDriveTime_1,lyr_TargetTradeAreas_2,lyr_IdentifiedSites_3,lyr_Stores_4];
lyr_5MinuteDriveTime_1.set('fieldAliases', {'id': 'id', 'name': 'name', });
lyr_TargetTradeAreas_2.set('fieldAliases', {'id': 'id', 'lat': 'lat', 'lon': 'lon', 'target_cat': 'target_cat', 'operator': 'operator', 'state': 'state', 'name': 'name', 'dev_type': 'dev_type', 'dma': 'dma', 'Select': 'Select', 'Seed ID': 'Seed ID', 'Optimizati': 'Optimizati', 'Address': 'Address', 'City': 'City', 'CBSA Class': 'CBSA Class', 'Density Cl': 'Density Cl', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Forecast': 'Forecast', 'layer': 'layer', 'path': 'path', 'decision': 'decision', });
lyr_IdentifiedSites_3.set('fieldAliases', {'id': 'id', 'address': 'address', 'lat': 'lat', 'lon': 'lon', });
lyr_Stores_4.set('fieldAliases', {'id': 'id', 'storeid': 'storeid', 'store_name': 'store_name', 'descriptio': 'descriptio', 'sqft': 'sqft', 'store_type': 'store_type', 'trad_nontr': 'trad_nontr', 'lat': 'lat', 'lon': 'lon', 'operations': 'operations', });
lyr_5MinuteDriveTime_1.set('fieldImages', {'id': 'TextEdit', 'name': 'TextEdit', });
lyr_TargetTradeAreas_2.set('fieldImages', {'id': 'TextEdit', 'lat': 'TextEdit', 'lon': 'TextEdit', 'target_cat': 'TextEdit', 'operator': 'TextEdit', 'state': 'TextEdit', 'name': 'TextEdit', 'dev_type': 'TextEdit', 'dma': 'TextEdit', 'Select': 'TextEdit', 'Seed ID': 'TextEdit', 'Optimizati': 'TextEdit', 'Address': 'TextEdit', 'City': 'TextEdit', 'CBSA Class': 'TextEdit', 'Density Cl': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Forecast': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', 'decision': 'TextEdit', });
lyr_IdentifiedSites_3.set('fieldImages', {'id': 'TextEdit', 'address': 'TextEdit', 'lat': 'TextEdit', 'lon': 'TextEdit', });
lyr_Stores_4.set('fieldImages', {'id': 'TextEdit', 'storeid': 'TextEdit', 'store_name': 'TextEdit', 'descriptio': 'TextEdit', 'sqft': 'TextEdit', 'store_type': 'TextEdit', 'trad_nontr': 'TextEdit', 'lat': 'TextEdit', 'lon': 'TextEdit', 'operations': 'TextEdit', });
lyr_5MinuteDriveTime_1.set('fieldLabels', {'id': 'no label', 'name': 'no label', });
lyr_TargetTradeAreas_2.set('fieldLabels', {'id': 'no label', 'lat': 'no label', 'lon': 'no label', 'target_cat': 'no label', 'operator': 'no label', 'state': 'no label', 'name': 'no label', 'dev_type': 'no label', 'dma': 'no label', 'Select': 'no label', 'Seed ID': 'no label', 'Optimizati': 'no label', 'Address': 'no label', 'City': 'no label', 'CBSA Class': 'no label', 'Density Cl': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', 'Forecast': 'no label', 'layer': 'no label', 'path': 'no label', 'decision': 'no label', });
lyr_IdentifiedSites_3.set('fieldLabels', {'id': 'no label', 'address': 'no label', 'lat': 'no label', 'lon': 'no label', });
lyr_Stores_4.set('fieldLabels', {'id': 'no label', 'storeid': 'no label', 'store_name': 'no label', 'descriptio': 'no label', 'sqft': 'no label', 'store_type': 'no label', 'trad_nontr': 'no label', 'lat': 'no label', 'lon': 'no label', 'operations': 'no label', });
lyr_Stores_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});