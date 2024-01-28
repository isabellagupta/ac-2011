var wms_layers = [];


        var lyr_GoogleRoad_0 = new ol.layer.Tile({
            'title': 'Google Road',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });
var format_arunachalpradesh_1 = new ol.format.GeoJSON();
var features_arunachalpradesh_1 = format_arunachalpradesh_1.readFeatures(json_arunachalpradesh_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_arunachalpradesh_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_arunachalpradesh_1.addFeatures(features_arunachalpradesh_1);
var lyr_arunachalpradesh_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_arunachalpradesh_1, 
                style: style_arunachalpradesh_1,
                interactive: true,
                title: '<img src="styles/legend/arunachalpradesh_1.png" /> arunachalpradesh'
            });
var format_dadranagarhaveli_2 = new ol.format.GeoJSON();
var features_dadranagarhaveli_2 = format_dadranagarhaveli_2.readFeatures(json_dadranagarhaveli_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_dadranagarhaveli_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_dadranagarhaveli_2.addFeatures(features_dadranagarhaveli_2);
var lyr_dadranagarhaveli_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_dadranagarhaveli_2, 
                style: style_dadranagarhaveli_2,
                interactive: true,
                title: '<img src="styles/legend/dadranagarhaveli_2.png" /> dadranagarhaveli'
            });
var format_damandiu_3 = new ol.format.GeoJSON();
var features_damandiu_3 = format_damandiu_3.readFeatures(json_damandiu_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_damandiu_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_damandiu_3.addFeatures(features_damandiu_3);
var lyr_damandiu_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_damandiu_3, 
                style: style_damandiu_3,
                interactive: true,
                title: '<img src="styles/legend/damandiu_3.png" /> damandiu'
            });
var format_andamannicobarislands_4 = new ol.format.GeoJSON();
var features_andamannicobarislands_4 = format_andamannicobarislands_4.readFeatures(json_andamannicobarislands_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_andamannicobarislands_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_andamannicobarislands_4.addFeatures(features_andamannicobarislands_4);
var lyr_andamannicobarislands_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_andamannicobarislands_4, 
                style: style_andamannicobarislands_4,
                interactive: true,
                title: '<img src="styles/legend/andamannicobarislands_4.png" /> andamannicobarislands'
            });
var format_madhyapradesh_5 = new ol.format.GeoJSON();
var features_madhyapradesh_5 = format_madhyapradesh_5.readFeatures(json_madhyapradesh_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_madhyapradesh_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_madhyapradesh_5.addFeatures(features_madhyapradesh_5);
var lyr_madhyapradesh_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_madhyapradesh_5, 
                style: style_madhyapradesh_5,
                interactive: true,
                title: '<img src="styles/legend/madhyapradesh_5.png" /> madhyapradesh'
            });
var format_lakshadweep_6 = new ol.format.GeoJSON();
var features_lakshadweep_6 = format_lakshadweep_6.readFeatures(json_lakshadweep_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_lakshadweep_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_lakshadweep_6.addFeatures(features_lakshadweep_6);
var lyr_lakshadweep_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_lakshadweep_6, 
                style: style_lakshadweep_6,
                interactive: true,
                title: '<img src="styles/legend/lakshadweep_6.png" /> lakshadweep'
            });
var format_jammukashmir_7 = new ol.format.GeoJSON();
var features_jammukashmir_7 = format_jammukashmir_7.readFeatures(json_jammukashmir_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_jammukashmir_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_jammukashmir_7.addFeatures(features_jammukashmir_7);
var lyr_jammukashmir_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_jammukashmir_7, 
                style: style_jammukashmir_7,
                interactive: true,
                title: '<img src="styles/legend/jammukashmir_7.png" /> jammukashmir'
            });
var format_andhrapradesh_8 = new ol.format.GeoJSON();
var features_andhrapradesh_8 = format_andhrapradesh_8.readFeatures(json_andhrapradesh_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_andhrapradesh_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_andhrapradesh_8.addFeatures(features_andhrapradesh_8);
var lyr_andhrapradesh_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_andhrapradesh_8, 
                style: style_andhrapradesh_8,
                interactive: true,
                title: '<img src="styles/legend/andhrapradesh_8.png" /> andhrapradesh'
            });
var format_tamilnadu_9 = new ol.format.GeoJSON();
var features_tamilnadu_9 = format_tamilnadu_9.readFeatures(json_tamilnadu_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_tamilnadu_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_tamilnadu_9.addFeatures(features_tamilnadu_9);
var lyr_tamilnadu_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_tamilnadu_9, 
                style: style_tamilnadu_9,
                interactive: true,
                title: '<img src="styles/legend/tamilnadu_9.png" /> tamilnadu'
            });
var format_manipur_10 = new ol.format.GeoJSON();
var features_manipur_10 = format_manipur_10.readFeatures(json_manipur_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_manipur_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_manipur_10.addFeatures(features_manipur_10);
var lyr_manipur_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_manipur_10, 
                style: style_manipur_10,
                interactive: true,
                title: '<img src="styles/legend/manipur_10.png" /> manipur'
            });
var format_haryana_11 = new ol.format.GeoJSON();
var features_haryana_11 = format_haryana_11.readFeatures(json_haryana_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_haryana_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_haryana_11.addFeatures(features_haryana_11);
var lyr_haryana_11 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_haryana_11, 
                style: style_haryana_11,
                interactive: true,
                title: '<img src="styles/legend/haryana_11.png" /> haryana'
            });
var format_himachalpradesh_12 = new ol.format.GeoJSON();
var features_himachalpradesh_12 = format_himachalpradesh_12.readFeatures(json_himachalpradesh_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_himachalpradesh_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_himachalpradesh_12.addFeatures(features_himachalpradesh_12);
var lyr_himachalpradesh_12 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_himachalpradesh_12, 
                style: style_himachalpradesh_12,
                interactive: true,
                title: '<img src="styles/legend/himachalpradesh_12.png" /> himachalpradesh'
            });
var format_gujarat_13 = new ol.format.GeoJSON();
var features_gujarat_13 = format_gujarat_13.readFeatures(json_gujarat_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_gujarat_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_gujarat_13.addFeatures(features_gujarat_13);
var lyr_gujarat_13 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_gujarat_13, 
                style: style_gujarat_13,
                interactive: true,
                title: '<img src="styles/legend/gujarat_13.png" /> gujarat'
            });
var format_sikkim_14 = new ol.format.GeoJSON();
var features_sikkim_14 = format_sikkim_14.readFeatures(json_sikkim_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_sikkim_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_sikkim_14.addFeatures(features_sikkim_14);
var lyr_sikkim_14 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_sikkim_14, 
                style: style_sikkim_14,
                interactive: true,
                title: '<img src="styles/legend/sikkim_14.png" /> sikkim'
            });
var format_uttarpradesh_15 = new ol.format.GeoJSON();
var features_uttarpradesh_15 = format_uttarpradesh_15.readFeatures(json_uttarpradesh_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_uttarpradesh_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_uttarpradesh_15.addFeatures(features_uttarpradesh_15);
var lyr_uttarpradesh_15 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_uttarpradesh_15, 
                style: style_uttarpradesh_15,
                interactive: true,
                title: '<img src="styles/legend/uttarpradesh_15.png" /> uttarpradesh'
            });
var format_delhi_16 = new ol.format.GeoJSON();
var features_delhi_16 = format_delhi_16.readFeatures(json_delhi_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_delhi_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_delhi_16.addFeatures(features_delhi_16);
var lyr_delhi_16 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_delhi_16, 
                style: style_delhi_16,
                interactive: true,
                title: '<img src="styles/legend/delhi_16.png" /> delhi'
            });
var format_goa_17 = new ol.format.GeoJSON();
var features_goa_17 = format_goa_17.readFeatures(json_goa_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_goa_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_goa_17.addFeatures(features_goa_17);
var lyr_goa_17 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_goa_17, 
                style: style_goa_17,
                interactive: true,
                title: '<img src="styles/legend/goa_17.png" /> goa'
            });
var format_punjab_18 = new ol.format.GeoJSON();
var features_punjab_18 = format_punjab_18.readFeatures(json_punjab_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_punjab_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_punjab_18.addFeatures(features_punjab_18);
var lyr_punjab_18 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_punjab_18, 
                style: style_punjab_18,
                interactive: true,
                title: '<img src="styles/legend/punjab_18.png" /> punjab'
            });
var format_karnataka_19 = new ol.format.GeoJSON();
var features_karnataka_19 = format_karnataka_19.readFeatures(json_karnataka_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_karnataka_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_karnataka_19.addFeatures(features_karnataka_19);
var lyr_karnataka_19 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_karnataka_19, 
                style: style_karnataka_19,
                interactive: true,
                title: '<img src="styles/legend/karnataka_19.png" /> karnataka'
            });
var format_maharashtra_20 = new ol.format.GeoJSON();
var features_maharashtra_20 = format_maharashtra_20.readFeatures(json_maharashtra_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_maharashtra_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_maharashtra_20.addFeatures(features_maharashtra_20);
var lyr_maharashtra_20 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_maharashtra_20, 
                style: style_maharashtra_20,
                interactive: true,
                title: '<img src="styles/legend/maharashtra_20.png" /> maharashtra'
            });
var format_westbengal_21 = new ol.format.GeoJSON();
var features_westbengal_21 = format_westbengal_21.readFeatures(json_westbengal_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_westbengal_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_westbengal_21.addFeatures(features_westbengal_21);
var lyr_westbengal_21 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_westbengal_21, 
                style: style_westbengal_21,
                interactive: true,
                title: '<img src="styles/legend/westbengal_21.png" /> westbengal'
            });
var format_orissa_22 = new ol.format.GeoJSON();
var features_orissa_22 = format_orissa_22.readFeatures(json_orissa_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_orissa_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_orissa_22.addFeatures(features_orissa_22);
var lyr_orissa_22 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_orissa_22, 
                style: style_orissa_22,
                interactive: true,
                title: '<img src="styles/legend/orissa_22.png" /> orissa'
            });
var format_rajasthan_23 = new ol.format.GeoJSON();
var features_rajasthan_23 = format_rajasthan_23.readFeatures(json_rajasthan_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_rajasthan_23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_rajasthan_23.addFeatures(features_rajasthan_23);
var lyr_rajasthan_23 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_rajasthan_23, 
                style: style_rajasthan_23,
                interactive: true,
                title: '<img src="styles/legend/rajasthan_23.png" /> rajasthan'
            });
var format_chandigarh_24 = new ol.format.GeoJSON();
var features_chandigarh_24 = format_chandigarh_24.readFeatures(json_chandigarh_24, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_chandigarh_24 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_chandigarh_24.addFeatures(features_chandigarh_24);
var lyr_chandigarh_24 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_chandigarh_24, 
                style: style_chandigarh_24,
                interactive: true,
                title: '<img src="styles/legend/chandigarh_24.png" /> chandigarh'
            });
var format_kerala_25 = new ol.format.GeoJSON();
var features_kerala_25 = format_kerala_25.readFeatures(json_kerala_25, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_kerala_25 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_kerala_25.addFeatures(features_kerala_25);
var lyr_kerala_25 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_kerala_25, 
                style: style_kerala_25,
                interactive: true,
                title: '<img src="styles/legend/kerala_25.png" /> kerala'
            });
var format_chhattisgarh_26 = new ol.format.GeoJSON();
var features_chhattisgarh_26 = format_chhattisgarh_26.readFeatures(json_chhattisgarh_26, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_chhattisgarh_26 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_chhattisgarh_26.addFeatures(features_chhattisgarh_26);
var lyr_chhattisgarh_26 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_chhattisgarh_26, 
                style: style_chhattisgarh_26,
                interactive: true,
                title: '<img src="styles/legend/chhattisgarh_26.png" /> chhattisgarh'
            });
var format_tripura_27 = new ol.format.GeoJSON();
var features_tripura_27 = format_tripura_27.readFeatures(json_tripura_27, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_tripura_27 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_tripura_27.addFeatures(features_tripura_27);
var lyr_tripura_27 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_tripura_27, 
                style: style_tripura_27,
                interactive: true,
                title: '<img src="styles/legend/tripura_27.png" /> tripura'
            });
var format_mizoram_28 = new ol.format.GeoJSON();
var features_mizoram_28 = format_mizoram_28.readFeatures(json_mizoram_28, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_mizoram_28 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_mizoram_28.addFeatures(features_mizoram_28);
var lyr_mizoram_28 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_mizoram_28, 
                style: style_mizoram_28,
                interactive: true,
                title: '<img src="styles/legend/mizoram_28.png" /> mizoram'
            });
var format_assam_29 = new ol.format.GeoJSON();
var features_assam_29 = format_assam_29.readFeatures(json_assam_29, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_assam_29 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_assam_29.addFeatures(features_assam_29);
var lyr_assam_29 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_assam_29, 
                style: style_assam_29,
                interactive: true,
                title: '<img src="styles/legend/assam_29.png" /> assam'
            });
var format_meghalaya_30 = new ol.format.GeoJSON();
var features_meghalaya_30 = format_meghalaya_30.readFeatures(json_meghalaya_30, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_meghalaya_30 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_meghalaya_30.addFeatures(features_meghalaya_30);
var lyr_meghalaya_30 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_meghalaya_30, 
                style: style_meghalaya_30,
                interactive: true,
                title: '<img src="styles/legend/meghalaya_30.png" /> meghalaya'
            });
var format_uttarakhand_31 = new ol.format.GeoJSON();
var features_uttarakhand_31 = format_uttarakhand_31.readFeatures(json_uttarakhand_31, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_uttarakhand_31 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_uttarakhand_31.addFeatures(features_uttarakhand_31);
var lyr_uttarakhand_31 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_uttarakhand_31, 
                style: style_uttarakhand_31,
                interactive: true,
                title: '<img src="styles/legend/uttarakhand_31.png" /> uttarakhand'
            });
var format_puducherry_32 = new ol.format.GeoJSON();
var features_puducherry_32 = format_puducherry_32.readFeatures(json_puducherry_32, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_puducherry_32 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_puducherry_32.addFeatures(features_puducherry_32);
var lyr_puducherry_32 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_puducherry_32, 
                style: style_puducherry_32,
                interactive: true,
                title: '<img src="styles/legend/puducherry_32.png" /> puducherry'
            });
var format_bihar_33 = new ol.format.GeoJSON();
var features_bihar_33 = format_bihar_33.readFeatures(json_bihar_33, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_bihar_33 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_bihar_33.addFeatures(features_bihar_33);
var lyr_bihar_33 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_bihar_33, 
                style: style_bihar_33,
                interactive: true,
                title: '<img src="styles/legend/bihar_33.png" /> bihar'
            });
var format_jharkhand_34 = new ol.format.GeoJSON();
var features_jharkhand_34 = format_jharkhand_34.readFeatures(json_jharkhand_34, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_jharkhand_34 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_jharkhand_34.addFeatures(features_jharkhand_34);
var lyr_jharkhand_34 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_jharkhand_34, 
                style: style_jharkhand_34,
                interactive: true,
                title: '<img src="styles/legend/jharkhand_34.png" /> jharkhand'
            });
var format_nagaland_35 = new ol.format.GeoJSON();
var features_nagaland_35 = format_nagaland_35.readFeatures(json_nagaland_35, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_nagaland_35 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_nagaland_35.addFeatures(features_nagaland_35);
var lyr_nagaland_35 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_nagaland_35, 
                style: style_nagaland_35,
                interactive: true,
                title: '<img src="styles/legend/nagaland_35.png" /> nagaland'
            });

lyr_GoogleRoad_0.setVisible(true);lyr_arunachalpradesh_1.setVisible(true);lyr_dadranagarhaveli_2.setVisible(true);lyr_damandiu_3.setVisible(true);lyr_andamannicobarislands_4.setVisible(true);lyr_madhyapradesh_5.setVisible(true);lyr_lakshadweep_6.setVisible(true);lyr_jammukashmir_7.setVisible(true);lyr_andhrapradesh_8.setVisible(true);lyr_tamilnadu_9.setVisible(true);lyr_manipur_10.setVisible(true);lyr_haryana_11.setVisible(true);lyr_himachalpradesh_12.setVisible(true);lyr_gujarat_13.setVisible(true);lyr_sikkim_14.setVisible(true);lyr_uttarpradesh_15.setVisible(true);lyr_delhi_16.setVisible(true);lyr_goa_17.setVisible(true);lyr_punjab_18.setVisible(true);lyr_karnataka_19.setVisible(true);lyr_maharashtra_20.setVisible(true);lyr_westbengal_21.setVisible(true);lyr_orissa_22.setVisible(true);lyr_rajasthan_23.setVisible(true);lyr_chandigarh_24.setVisible(true);lyr_kerala_25.setVisible(true);lyr_chhattisgarh_26.setVisible(true);lyr_tripura_27.setVisible(true);lyr_mizoram_28.setVisible(true);lyr_assam_29.setVisible(true);lyr_meghalaya_30.setVisible(true);lyr_uttarakhand_31.setVisible(true);lyr_puducherry_32.setVisible(true);lyr_bihar_33.setVisible(true);lyr_jharkhand_34.setVisible(true);lyr_nagaland_35.setVisible(true);
var layersList = [lyr_GoogleRoad_0,lyr_arunachalpradesh_1,lyr_dadranagarhaveli_2,lyr_damandiu_3,lyr_andamannicobarislands_4,lyr_madhyapradesh_5,lyr_lakshadweep_6,lyr_jammukashmir_7,lyr_andhrapradesh_8,lyr_tamilnadu_9,lyr_manipur_10,lyr_haryana_11,lyr_himachalpradesh_12,lyr_gujarat_13,lyr_sikkim_14,lyr_uttarpradesh_15,lyr_delhi_16,lyr_goa_17,lyr_punjab_18,lyr_karnataka_19,lyr_maharashtra_20,lyr_westbengal_21,lyr_orissa_22,lyr_rajasthan_23,lyr_chandigarh_24,lyr_kerala_25,lyr_chhattisgarh_26,lyr_tripura_27,lyr_mizoram_28,lyr_assam_29,lyr_meghalaya_30,lyr_uttarakhand_31,lyr_puducherry_32,lyr_bihar_33,lyr_jharkhand_34,lyr_nagaland_35];
lyr_arunachalpradesh_1.set('fieldAliases', {'state': 'State (2011 delimitation)', 'pc': 'Parliamentary constituency ID (2011 delimitation)', 'pc_name': 'Parliamentary constituency (2011 delimitation)', 'ac': 'Assembly constituency ID (2011 delimitation)', 'ac_name': 'Assembly constituency (2011 delimitation)', });
lyr_dadranagarhaveli_2.set('fieldAliases', {'state': 'State (2011 delimitation)', 'pc': 'Parliamentary constituency ID (2011 delimitation)', 'pc_name': 'Parliamentary constituency (2011 delimitation)', });
lyr_damandiu_3.set('fieldAliases', {'state': 'State (2011 delimitation)', 'pc': 'Parliamentary constituency ID (2011 delimitation)', 'pc_name': 'Parliamentary constituency (2011 delimitation)', });
lyr_andamannicobarislands_4.set('fieldAliases', {'state': 'State (2011 delimitation)', 'pc': 'Parliamentary constituency ID (2011 delimitation)', 'pc_name': 'Parliamentary constituency (2011 delimitation)', });
lyr_madhyapradesh_5.set('fieldAliases', {'state': 'State (2011 delimitation)', 'pc': 'Parliamentary constituency ID (2011 delimitation)', 'pc_name': 'Parliamentary constituency (2011 delimitation)', 'ac': 'Assembly constituency ID (2011 delimitation)', 'ac_name': 'Assembly constituency (2011 delimitation)', });
lyr_lakshadweep_6.set('fieldAliases', {'state': 'State (2011 delimitation)', 'pc': 'Parliamentary constituency ID (2011 delimitation)', 'pc_name': 'Parliamentary constituency (2011 delimitation)', });
lyr_jammukashmir_7.set('fieldAliases', {'state': 'State (2011 delimitation)', 'pc': 'Parliamentary constituency ID (2011 delimitation)', 'pc_name': 'Parliamentary constituency (2011 delimitation)', 'ac': 'Assembly constituency ID (2011 delimitation)', 'ac_name': 'Assembly constituency (2011 delimitation)', });
lyr_andhrapradesh_8.set('fieldAliases', {'state': 'State (2011 delimitation)', 'pc': 'Parliamentary constituency ID (2011 delimitation)', 'pc_name': 'Parliamentary constituency (2011 delimitation)', 'ac': 'Assembly constituency ID (2011 delimitation)', 'ac_name': 'Assembly constituency (2011 delimitation)', });
lyr_tamilnadu_9.set('fieldAliases', {'state': 'State (2011 delimitation)', 'pc': 'Parliamentary constituency ID (2011 delimitation)', 'pc_name': 'Parliamentary constituency (2011 delimitation)', 'ac': 'Assembly constituency ID (2011 delimitation)', 'ac_name': 'Assembly constituency (2011 delimitation)', });
lyr_manipur_10.set('fieldAliases', {'state': 'State (2011 delimitation)', 'pc': 'Parliamentary constituency ID (2011 delimitation)', 'pc_name': 'Parliamentary constituency (2011 delimitation)', 'ac': 'Assembly constituency ID (2011 delimitation)', 'ac_name': 'Assembly constituency (2011 delimitation)', });
lyr_haryana_11.set('fieldAliases', {'state': 'State (2011 delimitation)', 'pc': 'Parliamentary constituency ID (2011 delimitation)', 'pc_name': 'Parliamentary constituency (2011 delimitation)', 'ac': 'Assembly constituency ID (2011 delimitation)', 'ac_name': 'Assembly constituency (2011 delimitation)', });
lyr_himachalpradesh_12.set('fieldAliases', {'state': 'State (2011 delimitation)', 'pc': 'Parliamentary constituency ID (2011 delimitation)', 'pc_name': 'Parliamentary constituency (2011 delimitation)', 'ac': 'Assembly constituency ID (2011 delimitation)', 'ac_name': 'Assembly constituency (2011 delimitation)', });
lyr_gujarat_13.set('fieldAliases', {'state': 'State (2011 delimitation)', 'pc': 'Parliamentary constituency ID (2011 delimitation)', 'pc_name': 'Parliamentary constituency (2011 delimitation)', 'ac': 'Assembly constituency ID (2011 delimitation)', 'ac_name': 'Assembly constituency (2011 delimitation)', });
lyr_sikkim_14.set('fieldAliases', {'state': 'State (2011 delimitation)', 'pc': 'Parliamentary constituency ID (2011 delimitation)', 'pc_name': 'Parliamentary constituency (2011 delimitation)', 'ac': 'Assembly constituency ID (2011 delimitation)', 'ac_name': 'Assembly constituency (2011 delimitation)', });
lyr_uttarpradesh_15.set('fieldAliases', {'state': 'State (2011 delimitation)', 'pc': 'Parliamentary constituency ID (2011 delimitation)', 'pc_name': 'Parliamentary constituency (2011 delimitation)', 'ac': 'Assembly constituency ID (2011 delimitation)', 'ac_name': 'Assembly constituency (2011 delimitation)', });
lyr_delhi_16.set('fieldAliases', {'state': 'State (2011 delimitation)', 'pc': 'Parliamentary constituency ID (2011 delimitation)', 'pc_name': 'Parliamentary constituency (2011 delimitation)', 'ac': 'Assembly constituency ID (2011 delimitation)', 'ac_name': 'Assembly constituency (2011 delimitation)', });
lyr_goa_17.set('fieldAliases', {'state': 'State (2011 delimitation)', 'pc': 'Parliamentary constituency ID (2011 delimitation)', 'pc_name': 'Parliamentary constituency (2011 delimitation)', 'ac': 'Assembly constituency ID (2011 delimitation)', 'ac_name': 'Assembly constituency (2011 delimitation)', });
lyr_punjab_18.set('fieldAliases', {'state': 'State (2011 delimitation)', 'pc': 'Parliamentary constituency ID (2011 delimitation)', 'pc_name': 'Parliamentary constituency (2011 delimitation)', 'ac': 'Assembly constituency ID (2011 delimitation)', 'ac_name': 'Assembly constituency (2011 delimitation)', });
lyr_karnataka_19.set('fieldAliases', {'state': 'State (2011 delimitation)', 'pc': 'Parliamentary constituency ID (2011 delimitation)', 'pc_name': 'Parliamentary constituency (2011 delimitation)', 'ac': 'Assembly constituency ID (2011 delimitation)', 'ac_name': 'Assembly constituency (2011 delimitation)', });
lyr_maharashtra_20.set('fieldAliases', {'state': 'State (2011 delimitation)', 'pc': 'Parliamentary constituency ID (2011 delimitation)', 'pc_name': 'Parliamentary constituency (2011 delimitation)', 'ac': 'Assembly constituency ID (2011 delimitation)', 'ac_name': 'Assembly constituency (2011 delimitation)', });
lyr_westbengal_21.set('fieldAliases', {'state': 'State (2011 delimitation)', 'pc': 'Parliamentary constituency ID (2011 delimitation)', 'pc_name': 'Parliamentary constituency (2011 delimitation)', 'ac': 'Assembly constituency ID (2011 delimitation)', 'ac_name': 'Assembly constituency (2011 delimitation)', });
lyr_orissa_22.set('fieldAliases', {'state': 'State (2011 delimitation)', 'pc': 'Parliamentary constituency ID (2011 delimitation)', 'pc_name': 'Parliamentary constituency (2011 delimitation)', 'ac': 'Assembly constituency ID (2011 delimitation)', 'ac_name': 'Assembly constituency (2011 delimitation)', });
lyr_rajasthan_23.set('fieldAliases', {'state': 'State (2011 delimitation)', 'pc': 'Parliamentary constituency ID (2011 delimitation)', 'pc_name': 'Parliamentary constituency (2011 delimitation)', 'ac': 'Assembly constituency ID (2011 delimitation)', 'ac_name': 'Assembly constituency (2011 delimitation)', });
lyr_chandigarh_24.set('fieldAliases', {'state': 'State (2011 delimitation)', 'pc': 'Parliamentary constituency ID (2011 delimitation)', 'pc_name': 'Parliamentary constituency (2011 delimitation)', });
lyr_kerala_25.set('fieldAliases', {'state': 'State (2011 delimitation)', 'pc': 'Parliamentary constituency ID (2011 delimitation)', 'pc_name': 'Parliamentary constituency (2011 delimitation)', 'ac': 'Assembly constituency ID (2011 delimitation)', 'ac_name': 'Assembly constituency (2011 delimitation)', });
lyr_chhattisgarh_26.set('fieldAliases', {'state': 'State (2011 delimitation)', 'pc': 'Parliamentary constituency ID (2011 delimitation)', 'pc_name': 'Parliamentary constituency (2011 delimitation)', 'ac': 'Assembly constituency ID (2011 delimitation)', 'ac_name': 'Assembly constituency (2011 delimitation)', });
lyr_tripura_27.set('fieldAliases', {'state': 'State (2011 delimitation)', 'pc': 'Parliamentary constituency ID (2011 delimitation)', 'pc_name': 'Parliamentary constituency (2011 delimitation)', 'ac': 'Assembly constituency ID (2011 delimitation)', 'ac_name': 'Assembly constituency (2011 delimitation)', });
lyr_mizoram_28.set('fieldAliases', {'state': 'State (2011 delimitation)', 'pc': 'Parliamentary constituency ID (2011 delimitation)', 'pc_name': 'Parliamentary constituency (2011 delimitation)', 'ac': 'Assembly constituency ID (2011 delimitation)', 'ac_name': 'Assembly constituency (2011 delimitation)', });
lyr_assam_29.set('fieldAliases', {'state': 'State (2011 delimitation)', 'pc': 'Parliamentary constituency ID (2011 delimitation)', 'pc_name': 'Parliamentary constituency (2011 delimitation)', 'ac': 'Assembly constituency ID (2011 delimitation)', 'ac_name': 'Assembly constituency (2011 delimitation)', });
lyr_meghalaya_30.set('fieldAliases', {'state': 'State (2011 delimitation)', 'pc': 'Parliamentary constituency ID (2011 delimitation)', 'pc_name': 'Parliamentary constituency (2011 delimitation)', 'ac': 'Assembly constituency ID (2011 delimitation)', 'ac_name': 'Assembly constituency (2011 delimitation)', });
lyr_uttarakhand_31.set('fieldAliases', {'state': 'State (2011 delimitation)', 'pc': 'Parliamentary constituency ID (2011 delimitation)', 'pc_name': 'Parliamentary constituency (2011 delimitation)', 'ac': 'Assembly constituency ID (2011 delimitation)', 'ac_name': 'Assembly constituency (2011 delimitation)', });
lyr_puducherry_32.set('fieldAliases', {'state': 'State (2011 delimitation)', 'pc': 'Parliamentary constituency ID (2011 delimitation)', 'pc_name': 'Parliamentary constituency (2011 delimitation)', 'ac': 'Assembly constituency ID (2011 delimitation)', 'ac_name': 'Assembly constituency (2011 delimitation)', });
lyr_bihar_33.set('fieldAliases', {'state': 'State (2011 delimitation)', 'pc': 'Parliamentary constituency ID (2011 delimitation)', 'pc_name': 'Parliamentary constituency (2011 delimitation)', 'ac': 'Assembly constituency ID (2011 delimitation)', 'ac_name': 'Assembly constituency (2011 delimitation)', });
lyr_jharkhand_34.set('fieldAliases', {'state': 'State (2011 delimitation)', 'pc': 'Parliamentary constituency ID (2011 delimitation)', 'pc_name': 'Parliamentary constituency (2011 delimitation)', 'ac': 'Assembly constituency ID (2011 delimitation)', 'ac_name': 'Assembly constituency (2011 delimitation)', });
lyr_nagaland_35.set('fieldAliases', {'state': 'State (2011 delimitation)', 'pc': 'Parliamentary constituency ID (2011 delimitation)', 'pc_name': 'Parliamentary constituency (2011 delimitation)', 'ac': 'Assembly constituency ID (2011 delimitation)', 'ac_name': 'Assembly constituency (2011 delimitation)', });
lyr_arunachalpradesh_1.set('fieldImages', {'state': 'TextEdit', 'pc': 'TextEdit', 'pc_name': 'TextEdit', 'ac': 'TextEdit', 'ac_name': 'TextEdit', });
lyr_dadranagarhaveli_2.set('fieldImages', {'state': 'TextEdit', 'pc': 'TextEdit', 'pc_name': 'TextEdit', });
lyr_damandiu_3.set('fieldImages', {'state': 'TextEdit', 'pc': 'TextEdit', 'pc_name': 'TextEdit', });
lyr_andamannicobarislands_4.set('fieldImages', {'state': 'TextEdit', 'pc': 'TextEdit', 'pc_name': 'TextEdit', });
lyr_madhyapradesh_5.set('fieldImages', {'state': 'TextEdit', 'pc': 'TextEdit', 'pc_name': 'TextEdit', 'ac': 'TextEdit', 'ac_name': 'TextEdit', });
lyr_lakshadweep_6.set('fieldImages', {'state': 'TextEdit', 'pc': 'TextEdit', 'pc_name': 'TextEdit', });
lyr_jammukashmir_7.set('fieldImages', {'state': 'TextEdit', 'pc': 'TextEdit', 'pc_name': 'TextEdit', 'ac': 'TextEdit', 'ac_name': 'TextEdit', });
lyr_andhrapradesh_8.set('fieldImages', {'state': 'TextEdit', 'pc': 'TextEdit', 'pc_name': 'TextEdit', 'ac': 'TextEdit', 'ac_name': 'TextEdit', });
lyr_tamilnadu_9.set('fieldImages', {'state': 'TextEdit', 'pc': 'TextEdit', 'pc_name': 'TextEdit', 'ac': 'TextEdit', 'ac_name': 'TextEdit', });
lyr_manipur_10.set('fieldImages', {'state': 'TextEdit', 'pc': 'TextEdit', 'pc_name': 'TextEdit', 'ac': 'TextEdit', 'ac_name': 'TextEdit', });
lyr_haryana_11.set('fieldImages', {'state': 'TextEdit', 'pc': 'TextEdit', 'pc_name': 'TextEdit', 'ac': 'TextEdit', 'ac_name': 'TextEdit', });
lyr_himachalpradesh_12.set('fieldImages', {'state': 'TextEdit', 'pc': 'TextEdit', 'pc_name': 'TextEdit', 'ac': 'TextEdit', 'ac_name': 'TextEdit', });
lyr_gujarat_13.set('fieldImages', {'state': 'TextEdit', 'pc': 'TextEdit', 'pc_name': 'TextEdit', 'ac': 'TextEdit', 'ac_name': 'TextEdit', });
lyr_sikkim_14.set('fieldImages', {'state': 'TextEdit', 'pc': 'TextEdit', 'pc_name': 'TextEdit', 'ac': 'TextEdit', 'ac_name': 'TextEdit', });
lyr_uttarpradesh_15.set('fieldImages', {'state': 'TextEdit', 'pc': 'TextEdit', 'pc_name': 'TextEdit', 'ac': 'TextEdit', 'ac_name': 'TextEdit', });
lyr_delhi_16.set('fieldImages', {'state': 'TextEdit', 'pc': 'TextEdit', 'pc_name': 'TextEdit', 'ac': 'TextEdit', 'ac_name': 'TextEdit', });
lyr_goa_17.set('fieldImages', {'state': 'TextEdit', 'pc': 'TextEdit', 'pc_name': 'TextEdit', 'ac': 'TextEdit', 'ac_name': 'TextEdit', });
lyr_punjab_18.set('fieldImages', {'state': 'TextEdit', 'pc': 'TextEdit', 'pc_name': 'TextEdit', 'ac': 'TextEdit', 'ac_name': 'TextEdit', });
lyr_karnataka_19.set('fieldImages', {'state': 'TextEdit', 'pc': 'TextEdit', 'pc_name': 'TextEdit', 'ac': 'TextEdit', 'ac_name': 'TextEdit', });
lyr_maharashtra_20.set('fieldImages', {'state': 'TextEdit', 'pc': 'TextEdit', 'pc_name': 'TextEdit', 'ac': 'TextEdit', 'ac_name': 'TextEdit', });
lyr_westbengal_21.set('fieldImages', {'state': 'TextEdit', 'pc': 'TextEdit', 'pc_name': 'TextEdit', 'ac': 'TextEdit', 'ac_name': 'TextEdit', });
lyr_orissa_22.set('fieldImages', {'state': 'TextEdit', 'pc': 'TextEdit', 'pc_name': 'TextEdit', 'ac': 'TextEdit', 'ac_name': 'TextEdit', });
lyr_rajasthan_23.set('fieldImages', {'state': 'TextEdit', 'pc': 'TextEdit', 'pc_name': 'TextEdit', 'ac': 'TextEdit', 'ac_name': 'TextEdit', });
lyr_chandigarh_24.set('fieldImages', {'state': 'TextEdit', 'pc': 'TextEdit', 'pc_name': 'TextEdit', });
lyr_kerala_25.set('fieldImages', {'state': 'TextEdit', 'pc': 'TextEdit', 'pc_name': 'TextEdit', 'ac': 'TextEdit', 'ac_name': 'TextEdit', });
lyr_chhattisgarh_26.set('fieldImages', {'state': 'TextEdit', 'pc': 'TextEdit', 'pc_name': 'TextEdit', 'ac': 'TextEdit', 'ac_name': 'TextEdit', });
lyr_tripura_27.set('fieldImages', {'state': 'TextEdit', 'pc': 'TextEdit', 'pc_name': 'TextEdit', 'ac': 'TextEdit', 'ac_name': 'TextEdit', });
lyr_mizoram_28.set('fieldImages', {'state': 'TextEdit', 'pc': 'TextEdit', 'pc_name': 'TextEdit', 'ac': 'TextEdit', 'ac_name': 'TextEdit', });
lyr_assam_29.set('fieldImages', {'state': 'TextEdit', 'pc': 'TextEdit', 'pc_name': 'TextEdit', 'ac': 'TextEdit', 'ac_name': 'TextEdit', });
lyr_meghalaya_30.set('fieldImages', {'state': 'TextEdit', 'pc': 'TextEdit', 'pc_name': 'TextEdit', 'ac': 'TextEdit', 'ac_name': 'TextEdit', });
lyr_uttarakhand_31.set('fieldImages', {'state': 'TextEdit', 'pc': 'TextEdit', 'pc_name': 'TextEdit', 'ac': 'TextEdit', 'ac_name': 'TextEdit', });
lyr_puducherry_32.set('fieldImages', {'state': 'TextEdit', 'pc': 'TextEdit', 'pc_name': 'TextEdit', 'ac': 'TextEdit', 'ac_name': 'TextEdit', });
lyr_bihar_33.set('fieldImages', {'state': 'TextEdit', 'pc': 'TextEdit', 'pc_name': 'TextEdit', 'ac': 'TextEdit', 'ac_name': 'TextEdit', });
lyr_jharkhand_34.set('fieldImages', {'state': 'TextEdit', 'pc': 'TextEdit', 'pc_name': 'TextEdit', 'ac': 'TextEdit', 'ac_name': 'TextEdit', });
lyr_nagaland_35.set('fieldImages', {'state': 'TextEdit', 'pc': 'TextEdit', 'pc_name': 'TextEdit', 'ac': 'TextEdit', 'ac_name': 'TextEdit', });
lyr_arunachalpradesh_1.set('fieldLabels', {'state': 'no label', 'pc': 'no label', 'pc_name': 'header label - visible with data', 'ac': 'no label', 'ac_name': 'header label - visible with data', });
lyr_dadranagarhaveli_2.set('fieldLabels', {'state': 'no label', 'pc': 'no label', 'pc_name': 'header label - visible with data', });
lyr_damandiu_3.set('fieldLabels', {'state': 'no label', 'pc': 'no label', 'pc_name': 'header label - visible with data', });
lyr_andamannicobarislands_4.set('fieldLabels', {'state': 'no label', 'pc': 'no label', 'pc_name': 'header label - visible with data', });
lyr_madhyapradesh_5.set('fieldLabels', {'state': 'no label', 'pc': 'no label', 'pc_name': 'header label - visible with data', 'ac': 'no label', 'ac_name': 'header label - visible with data', });
lyr_lakshadweep_6.set('fieldLabels', {'state': 'no label', 'pc': 'no label', 'pc_name': 'header label - visible with data', });
lyr_jammukashmir_7.set('fieldLabels', {'state': 'no label', 'pc': 'no label', 'pc_name': 'header label - visible with data', 'ac': 'no label', 'ac_name': 'header label - visible with data', });
lyr_andhrapradesh_8.set('fieldLabels', {'state': 'no label', 'pc': 'no label', 'pc_name': 'header label - visible with data', 'ac': 'no label', 'ac_name': 'header label - visible with data', });
lyr_tamilnadu_9.set('fieldLabels', {'state': 'no label', 'pc': 'no label', 'pc_name': 'header label - visible with data', 'ac': 'no label', 'ac_name': 'header label - visible with data', });
lyr_manipur_10.set('fieldLabels', {'state': 'no label', 'pc': 'no label', 'pc_name': 'header label - visible with data', 'ac': 'no label', 'ac_name': 'header label - visible with data', });
lyr_haryana_11.set('fieldLabels', {'state': 'no label', 'pc': 'no label', 'pc_name': 'header label - visible with data', 'ac': 'no label', 'ac_name': 'header label - visible with data', });
lyr_himachalpradesh_12.set('fieldLabels', {'state': 'no label', 'pc': 'no label', 'pc_name': 'header label - visible with data', 'ac': 'no label', 'ac_name': 'header label - visible with data', });
lyr_gujarat_13.set('fieldLabels', {'state': 'no label', 'pc': 'no label', 'pc_name': 'header label - visible with data', 'ac': 'no label', 'ac_name': 'header label - visible with data', });
lyr_sikkim_14.set('fieldLabels', {'state': 'no label', 'pc': 'no label', 'pc_name': 'header label - visible with data', 'ac': 'no label', 'ac_name': 'header label - visible with data', });
lyr_uttarpradesh_15.set('fieldLabels', {'state': 'no label', 'pc': 'no label', 'pc_name': 'header label - visible with data', 'ac': 'no label', 'ac_name': 'header label - visible with data', });
lyr_delhi_16.set('fieldLabels', {'state': 'no label', 'pc': 'no label', 'pc_name': 'header label - visible with data', 'ac': 'no label', 'ac_name': 'header label - visible with data', });
lyr_goa_17.set('fieldLabels', {'state': 'no label', 'pc': 'no label', 'pc_name': 'header label - visible with data', 'ac': 'no label', 'ac_name': 'header label - visible with data', });
lyr_punjab_18.set('fieldLabels', {'state': 'no label', 'pc': 'no label', 'pc_name': 'header label - visible with data', 'ac': 'no label', 'ac_name': 'header label - visible with data', });
lyr_karnataka_19.set('fieldLabels', {'state': 'no label', 'pc': 'no label', 'pc_name': 'header label - visible with data', 'ac': 'no label', 'ac_name': 'header label - visible with data', });
lyr_maharashtra_20.set('fieldLabels', {'state': 'no label', 'pc': 'no label', 'pc_name': 'header label - visible with data', 'ac': 'no label', 'ac_name': 'header label - visible with data', });
lyr_westbengal_21.set('fieldLabels', {'state': 'no label', 'pc': 'no label', 'pc_name': 'header label - visible with data', 'ac': 'no label', 'ac_name': 'header label - visible with data', });
lyr_orissa_22.set('fieldLabels', {'state': 'no label', 'pc': 'no label', 'pc_name': 'header label - visible with data', 'ac': 'no label', 'ac_name': 'header label - visible with data', });
lyr_rajasthan_23.set('fieldLabels', {'state': 'no label', 'pc': 'no label', 'pc_name': 'header label - visible with data', 'ac': 'no label', 'ac_name': 'header label - visible with data', });
lyr_chandigarh_24.set('fieldLabels', {'state': 'no label', 'pc': 'no label', 'pc_name': 'header label - visible with data', });
lyr_kerala_25.set('fieldLabels', {'state': 'no label', 'pc': 'no label', 'pc_name': 'header label - visible with data', 'ac': 'no label', 'ac_name': 'header label - visible with data', });
lyr_chhattisgarh_26.set('fieldLabels', {'state': 'no label', 'pc': 'no label', 'pc_name': 'header label - visible with data', 'ac': 'no label', 'ac_name': 'header label - visible with data', });
lyr_tripura_27.set('fieldLabels', {'state': 'no label', 'pc': 'no label', 'pc_name': 'header label - visible with data', 'ac': 'no label', 'ac_name': 'header label - visible with data', });
lyr_mizoram_28.set('fieldLabels', {'state': 'no label', 'pc': 'no label', 'pc_name': 'header label - visible with data', 'ac': 'no label', 'ac_name': 'header label - visible with data', });
lyr_assam_29.set('fieldLabels', {'state': 'no label', 'pc': 'no label', 'pc_name': 'header label - visible with data', 'ac': 'no label', 'ac_name': 'header label - visible with data', });
lyr_meghalaya_30.set('fieldLabels', {'state': 'no label', 'pc': 'no label', 'pc_name': 'header label - visible with data', 'ac': 'no label', 'ac_name': 'header label - visible with data', });
lyr_uttarakhand_31.set('fieldLabels', {'state': 'no label', 'pc': 'no label', 'pc_name': 'header label - visible with data', 'ac': 'no label', 'ac_name': 'header label - visible with data', });
lyr_puducherry_32.set('fieldLabels', {'state': 'no label', 'pc': 'no label', 'pc_name': 'header label - visible with data', 'ac': 'no label', 'ac_name': 'header label - visible with data', });
lyr_bihar_33.set('fieldLabels', {'state': 'no label', 'pc': 'no label', 'pc_name': 'header label - visible with data', 'ac': 'no label', 'ac_name': 'header label - visible with data', });
lyr_jharkhand_34.set('fieldLabels', {'state': 'no label', 'pc': 'no label', 'pc_name': 'header label - visible with data', 'ac': 'no label', 'ac_name': 'header label - visible with data', });
lyr_nagaland_35.set('fieldLabels', {'state': 'no label', 'pc': 'no label', 'pc_name': 'header label - visible with data', 'ac': 'no label', 'ac_name': 'header label - visible with data', });
lyr_nagaland_35.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});