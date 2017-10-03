var image = new ol.style.Circle({
    radius: 5,
    fill: null,
    stroke: new ol.style.Stroke({ color: 'red', width: 1 })
});
var styles = {
    'Point': new ol.style.Style({
        image: image
    }),
    'LineString': new ol.style.Style({
        stroke: new ol.style.Stroke({
            color: 'green',
            width: 1
        })
    }),
    'MultiLineString': new ol.style.Style({
        stroke: new ol.style.Stroke({
            color: 'green',
            width: 1
        })
    }),
    'MultiPoint': new ol.style.Style({
        image: image
    }),
    'MultiPolygon': new ol.style.Style({
        stroke: new ol.style.Stroke({
            color: 'yellow',
            width: 1
        }),
        fill: new ol.style.Fill({
            color: 'rgba(255, 255, 0, 0.1)'
        })
    }),
    'Polygon': new ol.style.Style({
        stroke: new ol.style.Stroke({
            color: 'blue',
            lineDash: [4],
            width: 3
        }),
        fill: new ol.style.Fill({
            color: 'rgba(0, 0, 255, 0.1)'
        })
    }),
    'GeometryCollection': new ol.style.Style({
        stroke: new ol.style.Stroke({
            color: 'magenta',
            width: 2
        }),
        fill: new ol.style.Fill({
            color: 'magenta'
        }),
        image: new ol.style.Circle({
            radius: 10,
            fill: null,
            stroke: new ol.style.Stroke({
                color: 'magenta'
            })
        })
    }),
    'Circle': new ol.style.Style({
        stroke: new ol.style.Stroke({
            color: 'red',
            width: 2
        }),
        fill: new ol.style.Fill({
            color: 'rgba(255,0,0,0.2)'
        })
    })
};

var styleFunction = function (feature) {
    return styles[feature.getGeometry().getType()];
};

var geojsonObject = {
    "type": "FeatureCollection",
    "crs":
    {
        "type": "name",
        "properties":
        {
            "name": "EPSG:3857"
        }
    },
    "features": [
        {
            "type": "Feature",
            "id": 1,
            "geometry":
            {
                "type": "Point",
                "coordinates": [
                    -9068664.5814, 5004516.9995
                ]
            },
            "properties": {
                "GAGE": 1660,
                "LOCATION": "P100 Greens Bayou @ Knobcrest Drive",
                "FID": 1
            }
        },
        {
            "type": "Feature",
            "id": 2,
            "geometry":
            {
                "type": "Point",
                "coordinates": [
                    -13650290.9577, 4714613.6602
                ]
            },
            "properties": {
                "GAGE": 100,
                "LOCATION": "A100 Clear Lake 2nd Outlet @ SH 146",
                "FID": 2
            }
        },
        {
            "type": "Feature",
            "id": 3,
            "geometry":
            {
                "type": "Point",
                "coordinates": [
                    -10616504.2147, 3472811.6094
                ]
            },
            "properties": {
                "GAGE": 1665,
                "LOCATION": "P100 Greens Bayou @ Bammel N Houston Road",
                "FID": 3
            }
        },
        {
            "type": "Feature",
            "id": 4,
            "geometry":
            {
                "type": "Point",
                "coordinates": [
                    -10599552.4827, 3445414.4225
                ]
            },
            "properties": {
                "GAGE": 105,
                "LOCATION": "Mary's Creek @ Melodywood Drive",
                "FID": 4
            }
        },
        {
            "type": "Feature",
            "id": 5,
            "geometry":
            {
                "type": "Point",
                "coordinates": [
                    -9068664.5814, 5004516.9995
                ]
            },
            "properties": {
                "GAGE": 1670,
                "LOCATION": "P100 Greens Bayou @ Cutten Road",
                "FID": 5
            }
        },
        {
            "type": "Feature",
            "id": 6,
            "geometry":
            {
                "type": "Point",
                "coordinates": [
                    -10606570.0634, 3484243.4896
                ]
            },
            "properties": {
                "GAGE": 1675,
                "LOCATION": "P118 Halls Bayou @ Tidwell Road",
                "FID": 6
            }
        },
        {
            "type": "Feature",
            "id": 7,
            "geometry":
            {
                "type": "Point",
                "coordinates": [
                    -12452407.5208, 4997022.6048
                ]
            },
            "properties": {
                "GAGE": 1680,
                "LOCATION": "P118 Halls Bayou @ Jensen Drive",
                "FID": 7
            }
        },
        {
            "type": "Feature",
            "id": 8,
            "geometry":
            {
                "type": "Point",
                "coordinates": [
                    -9055527.7683, 4567415.2355
                ]
            },
            "properties": {
                "GAGE": 110,
                "LOCATION": "A100 Clear Creek @ I-45",
                "FID": 8
            }
        },
        {
            "type": "Feature",
            "id": 9,
            "geometry":
            {
                "type": "Point",
                "coordinates": [
                    -9507852.2552, 3664341.1828
                ]
            },
            "properties": {
                "GAGE": 1685,
                "LOCATION": "P100 Greens Bayou @ Tidwell Road",
                "FID": 9
            }
        },
        {
            "type": "Feature",
            "id": 10,
            "geometry":
            {
                "type": "Point",
                "coordinates": [
                    -10600210.9413, 3441210.8612
                ]
            },
            "properties": {
                "GAGE": 115,
                "LOCATION": "Cowart Creek @ Baker Road",
                "FID": 10
            }
        },
        {
            "type": "Feature",
            "id": 11,
            "geometry":
            {
                "type": "Point",
                "coordinates": [
                    -10862402.2907, 4222245.6403
                ]
            },
            "properties": {
                "GAGE": 1690,
                "LOCATION": "P118 Halls Bayou @ Airline Drive",
                "FID": 11
            }
        },
        {
            "type": "Feature",
            "id": 12,
            "geometry":
            {
                "type": "Point",
                "coordinates": [
                    -10614355.7485, 3495733.1082
                ]
            },
            "properties": {
                "GAGE": 1695,
                "LOCATION": "P138 @ Aldine Westfield Road",
                "FID": 12
            }
        },
        {
            "type": "Feature",
            "id": 13,
            "geometry":
            {
                "type": "Point",
                "coordinates": [
                    -9055527.7683, 4567415.2355
                ]
            },
            "properties": {
                "GAGE": 120,
                "LOCATION": "A100 Clear Creek @ FM 528",
                "FID": 13
            }
        },
        {
            "type": "Feature",
            "id": 14,
            "geometry":
            {
                "type": "Point",
                "coordinates": [
                    -10568897.3213, 3474692.9169
                ]
            },
            "properties": {
                "GAGE": 1720,
                "LOCATION": "Q100 Cedar Bayou @ SH 146",
                "FID": 14
            }
        },
        {
            "type": "Feature",
            "id": 15,
            "geometry":
            {
                "type": "Point",
                "coordinates": [
                    -10650748.3165, 3484835.1816
                ]
            },
            "properties": {
                "GAGE": 125,
                "LOCATION": "Chigger Creek @ Windsong Lane",
                "FID": 15
            }
        },
        {
            "type": "Feature",
            "id": 16,
            "geometry":
            {
                "type": "Point",
                "coordinates": [
                    -10372799.1327, 3577379.5574
                ]
            },
            "properties": {
                "GAGE": 1725,
                "LOCATION": "Smith Gully @ SH 146",
                "FID": 16
            }
        },
        {
            "type": "Feature",
            "id": 17,
            "geometry":
            {
                "type": "Point",
                "coordinates": [
                    -10568897.3213, 3474692.9169
                ]
            },
            "properties": {
                "GAGE": 1730,
                "LOCATION": "Q100 Cedar Bayou @ FM 1942",
                "FID": 17
            }
        },
        {
            "type": "Feature",
            "id": 18,
            "geometry":
            {
                "type": "Point",
                "coordinates": [
                    -12450026.3969, 4965166.1605
                ]
            },
            "properties": {
                "GAGE": 130,
                "LOCATION": "A100 Clear Creek @ Bay Area Boulevard",
                "FID": 18
            }
        },
        {
            "type": "Feature",
            "id": 19,
            "geometry":
            {
                "type": "Point",
                "coordinates": [
                    -10568897.3213, 3474692.9169
                ]
            },
            "properties": {
                "GAGE": 1740,
                "LOCATION": "Q100 Cedar Bayou @ US 90",
                "FID": 19
            }
        },
        {
            "type": "Feature",
            "id": 20,
            "geometry":
            {
                "type": "Point",
                "coordinates": [
                    -9948283.3677, 3552477.8041
                ]
            },
            "properties": {
                "GAGE": 1840,
                "LOCATION": "R102 Gum Gully @ Diamond Head Boulevard",
                "FID": 20
            }
        },
        {
            "type": "Feature",
            "id": 21,
            "geometry":
            {
                "type": "Point",
                "coordinates": [
                    -9055527.7683, 4567415.2355
                ]
            },
            "properties": {
                "GAGE": 135,
                "LOCATION": "A100 Clear Creek @ FM 2351",
                "FID": 21
            }
        },
        {
            "type": "Feature",
            "id": 22,
            "geometry":
            {
                "type": "Point",
                "coordinates": [
                    -9850489.1951, 4475834.8673
                ]
            },
            "properties": {
                "GAGE": 1940,
                "LOCATION": "S100 Luce Bayou @ FM 2100",
                "FID": 22
            }
        },
        {
            "type": "Feature",
            "id": 23,
            "geometry":
            {
                "type": "Point",
                "coordinates": [
                    -10654251.5409, 3465994.0168
                ]
            },
            "properties": {
                "GAGE": 2010,
                "LOCATION": "Barker Dam",
                "FID": 23
            }
        },
        {
            "type": "Feature",
            "id": 24,
            "geometry":
            {
                "type": "Point",
                "coordinates": [
                    -9242002.3869, 4448932.5585
                ]
            },
            "properties": {
                "GAGE": 140,
                "LOCATION": "A119 Turkey Creek @ FM 1959",
                "FID": 24
            }
        },
        {
            "type": "Feature",
            "id": 25,
            "geometry":
            {
                "type": "Point",
                "coordinates": [
                    -17577780.6291, 8938616.9
                ]
            },
            "properties": {
                "GAGE": 2020,
                "LOCATION": "T101 Mason Creek @ Prince Creek Drive",
                "FID": 25
            }
        },
        {
            "type": "Feature",
            "id": 26,
            "geometry":
            {
                "type": "Point",
                "coordinates": [
                    -10584435.2958, 3473229.6539
                ]
            },
            "properties": {
                "GAGE": 2040,
                "LOCATION": "T100 Buffalo Bayou @ US 90",
                "FID": 26
            }
        },
        {
            "type": "Feature",
            "id": 27,
            "geometry":
            {
                "type": "Point",
                "coordinates": [
                    -10731761.9369, 4276744.7854
                ]
            },
            "properties": {
                "GAGE": 150,
                "LOCATION": "A100 Clear Creek @ Country Club Drive",
                "FID": 27
            }
        },
        {
            "type": "Feature",
            "id": 28,
            "geometry":
            {
                "type": "Point",
                "coordinates": [
                    -10667277.0345, 3473728.504
                ]
            },
            "properties": {
                "GAGE": 2050,
                "LOCATION": "Cane Island Branch @ Clay Road",
                "FID": 28
            }
        },
        {
            "type": "Feature",
            "id": 29,
            "geometry":
            {
                "type": "Point",
                "coordinates": [
                    -10071234.6321, 4156867.0449
                ]
            },
            "properties": {
                "GAGE": 160,
                "LOCATION": "A120 Beamer Ditch @ Hughes Road",
                "FID": 29
            }
        },
        {
            "type": "Feature",
            "id": 30,
            "geometry":
            {
                "type": "Point",
                "coordinates": [
                    -10318688.9546, 4664856.388
                ]
            },
            "properties": {
                "GAGE": 2060,
                "LOCATION": "Willow Fork Creek @ Pederson Road",
                "FID": 30
            }
        },
        {
            "type": "Feature",
            "id": 31,
            "geometry":
            {
                "type": "Point",
                "coordinates": [
                    -10678238.7728, 3489220.6534
                ]
            },
            "properties": {
                "GAGE": 2090,
                "LOCATION": "Brookshire Katy Drainage District @ Morrison Road",
                "FID": 31
            }
        },
        {
            "type": "Feature",
            "id": 32,
            "geometry":
            {
                "type": "Point",
                "coordinates": [
                    -10585449.4164, 3445950.5869
                ]
            },
            "properties": {
                "GAGE": 170,
                "LOCATION": "A100 Clear Creek @ Nassau Bay",
                "FID": 32
            }
        },
        {
            "type": "Feature",
            "id": 33,
            "geometry":
            {
                "type": "Point",
                "coordinates": [
                    -10642112.1504, 3476638.6351
                ]
            },
            "properties": {
                "GAGE": 2110,
                "LOCATION": "Addicks Dam",
                "FID": 33
            }
        },
        {
            "type": "Feature",
            "id": 34,
            "geometry":
            {
                "type": "Point",
                "coordinates": [
                    -9055527.7683, 4567415.2355
                ]
            },
            "properties": {
                "GAGE": 180,
                "LOCATION": "A100 Clear Creek @ Mykawa Road",
                "FID": 34
            }
        },
        {
            "type": "Feature",
            "id": 35,
            "geometry":
            {
                "type": "Point",
                "coordinates": [
                    -10101760.6629, 5013962.8215
                ]
            },
            "properties": {
                "GAGE": 2120,
                "LOCATION": "U100 Langham Creek @ West Little York Road",
                "FID": 35
            }
        },
        {
            "type": "Feature",
            "id": 36,
            "geometry":
            {
                "type": "Point",
                "coordinates": [
                    -11559772.1463, 4902198.3648
                ]
            },
            "properties": {
                "GAGE": 2130,
                "LOCATION": "U106 Horsepen Creek @ Trailside Drive",
                "FID": 36
            }
        },
        {
            "type": "Feature",
            "id": 37,
            "geometry":
            {
                "type": "Point",
                "coordinates": [
                    -9055527.7683, 4567415.2355
                ]
            },
            "properties": {
                "GAGE": 190,
                "LOCATION": "A100 Clear Creek @ SH 288",
                "FID": 37
            }
        },
        {
            "type": "Feature",
            "id": 38,
            "geometry":
            {
                "type": "Point",
                "coordinates": [
                    -9855615.4576, 5056532.7798
                ]
            },
            "properties": {
                "GAGE": 2140,
                "LOCATION": "U100 Langham Creek @ Longenbaugh Road",
                "FID": 38
            }
        },
        {
            "type": "Feature",
            "id": 39,
            "geometry":
            {
                "type": "Point",
                "coordinates": [
                    -10580760.5801, 3447647.9627
                ]
            },
            "properties": {
                "GAGE": 200,
                "LOCATION": "A104 Taylor Lake @ Nasa Road 1",
                "FID": 39
            }
        },
        {
            "type": "Feature",
            "id": 40,
            "geometry":
            {
                "type": "Point",
                "coordinates": [
                    -10646438.0258, 3481730.7071
                ]
            },
            "properties": {
                "GAGE": 2160,
                "LOCATION": "U102 Bear Creek @ Clay Road",
                "FID": 40
            }
        },
        {
            "type": "Feature",
            "id": 41,
            "geometry":
            {
                "type": "Point",
                "coordinates": [
                    -10597136.8497, 3463871.7882
                ]
            },
            "properties": {
                "GAGE": 210,
                "LOCATION": "B100 Armand Bayou @ Pasadena Lake (Nasa Road 1)",
                "FID": 41
            }
        },
        {
            "type": "Feature",
            "id": 42,
            "geometry":
            {
                "type": "Point",
                "coordinates": [
                    -8432864.4229, 5038763.8134
                ]
            },
            "properties": {
                "GAGE": 2180,
                "LOCATION": "U102 Bear Creek @ FM 529",
                "FID": 42
            }
        },
        {
            "type": "Feature",
            "id": 43,
            "geometry":
            {
                "type": "Point",
                "coordinates": [
                    -9615589.4848, 4491798.0228
                ]
            },
            "properties": {
                "GAGE": 2190,
                "LOCATION": "U101 South Mayde @ Peek Road",
                "FID": 43
            }
        },
        {
            "type": "Feature",
            "id": 44,
            "geometry":
            {
                "type": "Point",
                "coordinates": [
                    -12473126.3044, 5022171.5938
                ]
            },
            "properties": {
                "GAGE": 220,
                "LOCATION": "B100 Armand Bayou @ Genoa-Red Bluff Road",
                "FID": 44
            }
        },
        {
            "type": "Feature",
            "id": 45,
            "geometry":
            {
                "type": "Point",
                "coordinates": [
                    -8780710.0018, 5294550.871
                ]
            },
            "properties": {
                "GAGE": 2210,
                "LOCATION": "W100 Buffalo Bayou @ Turning Basin",
                "FID": 45
            }
        },
        {
            "type": "Feature",
            "id": 46,
            "geometry":
            {
                "type": "Point",
                "coordinates": [
                    -8921945.4925, 4790888.982
                ]
            },
            "properties": {
                "GAGE": 230,
                "LOCATION": "B106 Big Island Slough @ Fairmont Parkway",
                "FID": 46
            }
        },
        {
            "type": "Feature",
            "id": 47,
            "geometry":
            {
                "type": "Point",
                "coordinates": [
                    -8502492.538, 4817810.693
                ]
            },
            "properties": {
                "GAGE": 2220,
                "LOCATION": "W100 Buffalo Bayou @ Milam Street",
                "FID": 47
            }
        },
        {
            "type": "Feature",
            "id": 48,
            "geometry":
            {
                "type": "Point",
                "coordinates": [
                    -12057522.5481, 5771569.6328
                ]
            },
            "properties": {
                "GAGE": 2240,
                "LOCATION": "W100 Buffalo Bayou @ Shepherd Drive",
                "FID": 48
            }
        },
        {
            "type": "Feature",
            "id": 49,
            "geometry":
            {
                "type": "Point",
                "coordinates": [
                    -9850489.1951, 4475834.8673
                ]
            },
            "properties": {
                "GAGE": 240,
                "LOCATION": "B100 Armand Bayou @ Beltway 8",
                "FID": 49
            }
        },
        {
            "type": "Feature",
            "id": 50,
            "geometry":
            {
                "type": "Point",
                "coordinates": [
                    -12450026.3969, 4965166.1605
                ]
            },
            "properties": {
                "GAGE": 250,
                "LOCATION": "B104 Horsepen Creek @ Bay Area Boulevard",
                "FID": 50
            }
        },
        {
            "type": "Feature",
            "id": 51,
            "geometry":
            {
                "type": "Point",
                "coordinates": [
                    -10631099.4245, 3479557.6364
                ]
            },
            "properties": {
                "GAGE": 2250,
                "LOCATION": "W140 Spring Branch @ Bingle Road",
                "FID": 51
            }
        },
        {
            "type": "Feature",
            "id": 52,
            "geometry":
            {
                "type": "Point",
                "coordinates": [
                    -8921945.4925, 4790888.982
                ]
            },
            "properties": {
                "GAGE": 270,
                "LOCATION": "B112 Willow Spring Bayou @ Fairmont Parkway",
                "FID": 52
            }
        },
        {
            "type": "Feature",
            "id": 53,
            "geometry":
            {
                "type": "Point",
                "coordinates": [
                    -7427997.851, 2056930.323
                ]
            },
            "properties": {
                "GAGE": 2260,
                "LOCATION": "W100 Buffalo Bayou @ San Felipe Drive",
                "FID": 53
            }
        },
        {
            "type": "Feature",
            "id": 54,
            "geometry":
            {
                "type": "Point",
                "coordinates": [
                    -9253974.1654, 4985716.4438
                ]
            },
            "properties": {
                "GAGE": 310,
                "LOCATION": "C106 Berry Bayou @ Nevada Avenue",
                "FID": 54
            }
        },
        {
            "type": "Feature",
            "id": 55,
            "geometry":
            {
                "type": "Point",
                "coordinates": [
                    -8780710.0018, 5294550.871
                ]
            },
            "properties": {
                "GAGE": 2270,
                "LOCATION": "W100 Buffalo Bayou @ West Beltway 8",
                "FID": 55
            }
        },
        {
            "type": "Feature",
            "id": 56,
            "geometry":
            {
                "type": "Point",
                "coordinates": [
                    -10638762.5496, 3474580.0648
                ]
            },
            "properties": {
                "GAGE": 2280,
                "LOCATION": "W156 Rummel Creek @ Brittmoore Road",
                "FID": 56
            }
        },
        {
            "type": "Feature",
            "id": 57,
            "geometry":
            {
                "type": "Point",
                "coordinates": [
                    -8872884.7665, 4299539.9021
                ]
            },
            "properties": {
                "GAGE": 320,
                "LOCATION": "C106 Berry Bayou @ Forest Oaks Boulevard",
                "FID": 57
            }
        },
        {
            "type": "Feature",
            "id": 58,
            "geometry":
            {
                "type": "Point",
                "coordinates": [
                    -8035960.3445, 5140458.6224
                ]
            },
            "properties": {
                "GAGE": 2290,
                "LOCATION": "W100 Buffalo Bayou @ Dairy Ashford Road",
                "FID": 58
            }
        },
        {
            "type": "Feature",
            "id": 59,
            "geometry":
            {
                "type": "Point",
                "coordinates": [
                    -10688761.6962, 3999440.144
                ]
            },
            "properties": {
                "GAGE": 340,
                "LOCATION": "C100 Sims Bayou @ Telephone Road",
                "FID": 59
            }
        },
        {
            "type": "Feature",
            "id": 60,
            "geometry":
            {
                "type": "Point",
                "coordinates": [
                    -10008607.3998, 4453650.6633
                ]
            },
            "properties": {
                "GAGE": 3987,
                "LOCATION": "North Bound Metro Rail @ Fannin Advance Warn Sign",
                "FID": 60
            }
        },
        {
            "type": "Feature",
            "id": 61,
            "geometry":
            {
                "type": "Point",
                "coordinates": [
                    -10008607.3998, 4453650.6633
                ]
            },
            "properties": {
                "GAGE": 3988,
                "LOCATION": "South Bound Metro Rail @ Fannin Advance Warn Sign",
                "FID": 61
            }
        },
        {
            "type": "Feature",
            "id": 62,
            "geometry":
            {
                "type": "Point",
                "coordinates": [
                    -10475683.9457, 3514993.8147
                ]
            },
            "properties": {
                "GAGE": 360,
                "LOCATION": "C100 Sims Bayou @ Martin Luther King Road",
                "FID": 62
            }
        },
        {
            "type": "Feature",
            "id": 63,
            "geometry":
            {
                "type": "Point",
                "coordinates": [
                    -12450026.3969, 4965166.1605
                ]
            },
            "properties": {
                "GAGE": 3990,
                "LOCATION": "Metro Rail @ Fannin Underpass @ Holcombe Boulevard",
                "FID": 63
            }
        },
        {
            "type": "Feature",
            "id": 64,
            "geometry":
            {
                "type": "Point",
                "coordinates": [
                    -10429887.1072, 4117715.1191
                ]
            },
            "properties": {
                "GAGE": 370,
                "LOCATION": "C100 Sims Bayou @ SH 288",
                "FID": 64
            }
        },
        {
            "type": "Feature",
            "id": 65,
            "geometry":
            {
                "type": "Point",
                "coordinates": [
                    -9297054.3279, 4442561.3628
                ]
            },
            "properties": {
                "GAGE": 480,
                "LOCATION": "D118 Keegans Bayou @ Roark Road",
                "FID": 65
            }
        },
        {
            "type": "Feature",
            "id": 66,
            "geometry":
            {
                "type": "Point",
                "coordinates": [
                    -9749014.8001, 4017818.2003
                ]
            },
            "properties": {
                "GAGE": 380,
                "LOCATION": "C100 Sims Bayou @ Hiram-Clarke Road",
                "FID": 66
            }
        },
        {
            "type": "Feature",
            "id": 67,
            "geometry":
            {
                "type": "Point",
                "coordinates": [
                    -10606173.766, 3468493.4666
                ]
            },
            "properties": {
                "GAGE": 485,
                "LOCATION": "D100 Brays Bayou @ SH 6",
                "FID": 67
            }
        },
        {
            "type": "Feature",
            "id": 68,
            "geometry":
            {
                "type": "Point",
                "coordinates": [
                    -7564839.5615, 5972421.5099
                ]
            },
            "properties": {
                "GAGE": 490,
                "LOCATION": "D118 Keegans Bayou @ Keegan Road",
                "FID": 68
            }
        },
        {
            "type": "Feature",
            "id": 69,
            "geometry":
            {
                "type": "Point",
                "coordinates": [
                    -9300422.8556, 4308815.7029
                ]
            },
            "properties": {
                "GAGE": 495,
                "LOCATION": "D118 Keegans Bayou @ Rocky Valley",
                "FID": 69
            }
        },
        {
            "type": "Feature",
            "id": 70,
            "geometry":
            {
                "type": "Point",
                "coordinates": [
                    -9379058.9439, 3706439.9657
                ]
            },
            "properties": {
                "GAGE": 510,
                "LOCATION": "Harris County Flood Control @ Brookhollow",
                "FID": 70
            }
        },
        {
            "type": "Feature",
            "id": 71,
            "geometry":
            {
                "type": "Point",
                "coordinates": [
                    -12450026.3969, 4965166.1605
                ]
            },
            "properties": {
                "GAGE": 520,
                "LOCATION": "E100 White Oak Bayou @ Heights Boulevard",
                "FID": 71
            }
        },
        {
            "type": "Feature",
            "id": 72,
            "geometry":
            {
                "type": "Point",
                "coordinates": [
                    -9040050.7128, 4071276.5104
                ]
            },
            "properties": {
                "GAGE": 530,
                "LOCATION": "E100 White Oak Bayou @ Ella Boulevard",
                "FID": 72
            }
        },
        {
            "type": "Feature",
            "id": 73,
            "geometry":
            {
                "type": "Point",
                "coordinates": [
                    -8674445.529, 4217144.2535
                ]
            },
            "properties": {
                "GAGE": 535,
                "LOCATION": "E100 White Oak Bayou @ Pinemont Drive",
                "FID": 73
            }
        },
        {
            "type": "Feature",
            "id": 74,
            "geometry":
            {
                "type": "Point",
                "coordinates": [
                    -8570820.4415, 4728543.7612
                ]
            },
            "properties": {
                "GAGE": 540,
                "LOCATION": "E100 White Oak Bayou @ Alabonson Road",
                "FID": 74
            }
        },
        {
            "type": "Feature",
            "id": 75,
            "geometry":
            {
                "type": "Point",
                "coordinates": [
                    -10632700.0874, 3493951.4643
                ]
            },
            "properties": {
                "GAGE": 545,
                "LOCATION": "E100 White Oak Bayou @ Fairbanks North Houston Road",
                "FID": 75
            }
        },
        {
            "type": "Feature",
            "id": 76,
            "geometry":
            {
                "type": "Point",
                "coordinates": [
                    -10577923.6075, 4370014.956
                ]
            },
            "properties": {
                "GAGE": 550,
                "LOCATION": "E100 White Oak Bayou @ Lakeview Drive",
                "FID": 76
            }
        },
        {
            "type": "Feature",
            "id": 77,
            "geometry":
            {
                "type": "Point",
                "coordinates": [
                    -8570820.4415, 4728543.7612
                ]
            },
            "properties": {
                "GAGE": 555,
                "LOCATION": "E100 White Oak Bayou @ Jones Road",
                "FID": 77
            }
        },
        {
            "type": "Feature",
            "id": 78,
            "geometry":
            {
                "type": "Point",
                "coordinates": [
                    -9339365.7531, 4573283.9548
                ]
            },
            "properties": {
                "GAGE": 560,
                "LOCATION": "E101 Little White Oak Bayou @ Trimble Street",
                "FID": 78
            }
        },
        {
            "type": "Feature",
            "id": 79,
            "geometry":
            {
                "type": "Point",
                "coordinates": [
                    -10056212.0669, 4115681.2129
                ]
            },
            "properties": {
                "GAGE": 570,
                "LOCATION": "E101 Little White Oak Bayou @ Tidwell Road",
                "FID": 79
            }
        },
        {
            "type": "Feature",
            "id": 80,
            "geometry":
            {
                "type": "Point",
                "coordinates": [
                    -9507852.2552, 3664341.1828
                ]
            },
            "properties": {
                "GAGE": 575,
                "LOCATION": "E100 White Oak Bayou @ Tidwell Road",
                "FID": 80
            }
        },
        {
            "type": "Feature",
            "id": 81,
            "geometry":
            {
                "type": "Point",
                "coordinates": [
                    -9218444.9562, 3998647.2979
                ]
            },
            "properties": {
                "GAGE": 580,
                "LOCATION": "E115 Brickhouse Gully @ Costa Rica Road",
                "FID": 81
            }
        },
        {
            "type": "Feature",
            "id": 82,
            "geometry":
            {
                "type": "Point",
                "coordinates": [
                    -10527351.7741, 3868547.5952
                ]
            },
            "properties": {
                "GAGE": 585,
                "LOCATION": "E121 Vogel Creek @ Victory Drive",
                "FID": 82
            }
        },
        {
            "type": "Feature",
            "id": 83,
            "geometry":
            {
                "type": "Point",
                "coordinates": [
                    -9007848.5172, 4175585.2339
                ]
            },
            "properties": {
                "GAGE": 590,
                "LOCATION": "E117 Cole Creek @ Deihl Road",
                "FID": 83
            }
        },
        {
            "type": "Feature",
            "id": 84,
            "geometry":
            {
                "type": "Point",
                "coordinates": [
                    -8693018.0729, 4343888.8835
                ]
            },
            "properties": {
                "GAGE": 595,
                "LOCATION": "E121 Vogel Creek @ Gulf Bank Road",
                "FID": 84
            }
        },
        {
            "type": "Feature",
            "id": 85,
            "geometry":
            {
                "type": "Point",
                "coordinates": [
                    -10577203.9817, 3454808.8348
                ]
            },
            "properties": {
                "GAGE": 610,
                "LOCATION": "A104 Taylor's Bayou @ Shoreacres Boulevard",
                "FID": 85
            }
        },
        {
            "type": "Feature",
            "id": 86,
            "geometry":
            {
                "type": "Point",
                "coordinates": [
                    -10576890.0607, 3457814.5954
                ]
            },
            "properties": {
                "GAGE": 620,
                "LOCATION": "F216 Little Cedar Bayou @ 8th Street",
                "FID": 86
            }
        },
        {
            "type": "Feature",
            "id": 87,
            "geometry":
            {
                "type": "Point",
                "coordinates": [
                    -13019614.8354, 3999819.1759
                ]
            },
            "properties": {
                "GAGE": 710,
                "LOCATION": "G103 San Jacinto River @ Rio Villa",
                "FID": 87
            }
        },
        {
            "type": "Feature",
            "id": 88,
            "geometry":
            {
                "type": "Point",
                "coordinates": [
                    -10584389.6548, 3479880.4437
                ]
            },
            "properties": {
                "GAGE": 720,
                "LOCATION": "G103 San Jacinto River @ US 90",
                "FID": 88
            }
        },
        {
            "type": "Feature",
            "id": 89,
            "geometry":
            {
                "type": "Point",
                "coordinates": [
                    -10590032.4398, 3493298.9849
                ]
            },
            "properties": {
                "GAGE": 739,
                "LOCATION": "G103 Lake Houston Dam Spillway",
                "FID": 89
            }
        },
        {
            "type": "Feature",
            "id": 90,
            "geometry":
            {
                "type": "Point",
                "coordinates": [
                    -10590032.4398, 3493298.9849
                ]
            },
            "properties": {
                "GAGE": 750,
                "LOCATION": "G103 Lake Houston Dam Spillway",
                "FID": 90
            }
        },
        {
            "type": "Feature",
            "id": 91,
            "geometry":
            {
                "type": "Point",
                "coordinates": [
                    -8940662.7517, 2992613.4711
                ]
            },
            "properties": {
                "GAGE": 755,
                "LOCATION": "G103 San Jacinto River @ Kingwood Country Club",
                "FID": 91
            }
        },
        {
            "type": "Feature",
            "id": 92,
            "geometry":
            {
                "type": "Point",
                "coordinates": [
                    -10584389.6548, 3479880.4437
                ]
            },
            "properties": {
                "GAGE": 760,
                "LOCATION": "G103 San Jacinto River @ US 59",
                "FID": 92
            }
        },
        {
            "type": "Feature",
            "id": 93,
            "geometry":
            {
                "type": "Point",
                "coordinates": [
                    -10589289.9388, 3509434.508
                ]
            },
            "properties": {
                "GAGE": 790,
                "LOCATION": "G103 East Fork San Jacinto @ FM 1485",
                "FID": 93
            }
        },
        {
            "type": "Feature",
            "id": 94,
            "geometry":
            {
                "type": "Point",
                "coordinates": [
                    -10598350.2322, 3470272.8581
                ]
            },
            "properties": {
                "GAGE": 820,
                "LOCATION": "H100 Hunting Bayou @ I-10",
                "FID": 94
            }
        },
        {
            "type": "Feature",
            "id": 95,
            "geometry":
            {
                "type": "Point",
                "coordinates": [
                    -9904294.3578, 5571806.8515
                ]
            },
            "properties": {
                "GAGE": 830,
                "LOCATION": "H100 Hunting Bayou @ Loop 610 East",
                "FID": 95
            }
        },
        {
            "type": "Feature",
            "id": 96,
            "geometry":
            {
                "type": "Point",
                "coordinates": [
                    -12072283.7424, 5748093.3426
                ]
            },
            "properties": {
                "GAGE": 840,
                "LOCATION": "H100 Hunting Bayou @ Lockwood Drive",
                "FID": 96
            }
        },
        {
            "type": "Feature",
            "id": 97,
            "geometry":
            {
                "type": "Point",
                "coordinates": [
                    -10808227.5473, 3737413.5123
                ]
            },
            "properties": {
                "GAGE": 920,
                "LOCATION": "I100 Vince Bayou @ West Ellaine Down Stream",
                "FID": 97
            }
        },
        {
            "type": "Feature",
            "id": 98,
            "geometry":
            {
                "type": "Point",
                "coordinates": [
                    -10038846.2263, 3802582.5084
                ]
            },
            "properties": {
                "GAGE": 940,
                "LOCATION": "I101 Little Vince Bayou @ Jackson Avenue",
                "FID": 98
            }
        },
        {
            "type": "Feature",
            "id": 99,
            "geometry":
            {
                "type": "Point",
                "coordinates": [
                    -10624453.5384, 3475568.9098
                ]
            },
            "properties": {
                "GAGE": 1000,
                "LOCATION": "Houston Transtar",
                "FID": 99
            }
        },
        {
            "type": "Feature",
            "id": 100,
            "geometry":
            {
                "type": "Point",
                "coordinates": [
                    -10621166.275, 3463450.2036
                ]
            },
            "properties": {
                "GAGE": 1020,
                "LOCATION": "NRG Park",
                "FID": 100
            }
        },
        {
            "type": "Feature",
            "id": 101,
            "geometry":
            {
                "type": "Point",
                "coordinates": [
                    -10641793.7822, 3521456.5645
                ]
            },
            "properties": {
                "GAGE": 1040,
                "LOCATION": "J100 Spring Creek @ FM 2978",
                "FID": 101
            }
        },
        {
            "type": "Feature",
            "id": 102,
            "geometry":
            {
                "type": "Point",
                "coordinates": [
                    -9118727.1828, 3068680.9681
                ]
            },
            "properties": {
                "GAGE": 400,
                "LOCATION": "D109 Harris Gully @ South McGregor Way",
                "FID": 102
            }
        },
        {
            "type": "Feature",
            "id": 103,
            "geometry":
            {
                "type": "Point",
                "coordinates": [
                    -13175090.3154, 4015197.2789
                ]
            },
            "properties": {
                "GAGE": 410,
                "LOCATION": "D100 Brays Bayou @ Lawndale Street",
                "FID": 103
            }
        },
        {
            "type": "Feature",
            "id": 104,
            "geometry":
            {
                "type": "Point",
                "coordinates": [
                    -10621172.9542, 3461325.8318
                ]
            },
            "properties": {
                "GAGE": 420,
                "LOCATION": "D100 Brays Bayou @ South Main Street",
                "FID": 104
            }
        },
        {
            "type": "Feature",
            "id": 105,
            "geometry":
            {
                "type": "Point",
                "coordinates": [
                    -8802528.622, 4293373.7292
                ]
            },
            "properties": {
                "GAGE": 430,
                "LOCATION": "D100 Brays Bayou @ Stella Link Road",
                "FID": 105
            }
        },
        {
            "type": "Feature",
            "id": 106,
            "geometry":
            {
                "type": "Point",
                "coordinates": [
                    -9317001.6674, 5090304.3068
                ]
            },
            "properties": {
                "GAGE": 435,
                "LOCATION": "D100 Willow Water Hole @ Willowbend Boulevard",
                "FID": 106
            }
        },
        {
            "type": "Feature",
            "id": 107,
            "geometry":
            {
                "type": "Point",
                "coordinates": [
                    -8545521.974, 4616288.5332
                ]
            },
            "properties": {
                "GAGE": 440,
                "LOCATION": "D100 Brays Bayou @ Rice Avenue",
                "FID": 107
            }
        },
        {
            "type": "Feature",
            "id": 108,
            "geometry":
            {
                "type": "Point",
                "coordinates": [
                    -8900374.0016, 3858661.7833
                ]
            },
            "properties": {
                "GAGE": 445,
                "LOCATION": "D112 Willow Water Hole @ Landsdowne Drive",
                "FID": 108
            }
        },
        {
            "type": "Feature",
            "id": 109,
            "geometry":
            {
                "type": "Point",
                "coordinates": [
                    -8557496.6116, 4564700.7699
                ]
            },
            "properties": {
                "GAGE": 465,
                "LOCATION": "D100 Brays Bayou @ Beltway 8",
                "FID": 109
            }
        },
        {
            "type": "Feature",
            "id": 110,
            "geometry":
            {
                "type": "Point",
                "coordinates": [
                    -8759856.5215, 4005239.4975
                ]
            },
            "properties": {
                "GAGE": 470,
                "LOCATION": "D100 Brays Bayou @ Belle Park Drive",
                "FID": 110
            }
        },
        {
            "type": "Feature",
            "id": 111,
            "geometry":
            {
                "type": "Point",
                "coordinates": [
                    -12450026.3969, 4965166.1605
                ]
            },
            "properties": {
                "GAGE": 475,
                "LOCATION": "D100 Brays Bayou @ Bellaire Boulevard",
                "FID": 111
            }
        },
        {
            "type": "Feature",
            "id": 112,
            "geometry":
            {
                "type": "Point",
                "coordinates": [
                    -12873650.4927, 4979166.5477
                ]
            },
            "properties": {
                "GAGE": 1050,
                "LOCATION": "J100 Spring Creek @ I-45",
                "FID": 112
            }
        },
        {
            "type": "Feature",
            "id": 113,
            "geometry":
            {
                "type": "Point",
                "coordinates": [
                    -10634971.9455, 3515782.0806
                ]
            },
            "properties": {
                "GAGE": 1060,
                "LOCATION": "J100 Spring Creek @ Kuykendahl Road",
                "FID": 113
            }
        },
        {
            "type": "Feature",
            "id": 114,
            "geometry":
            {
                "type": "Point",
                "coordinates": [
                    -12873650.4927, 4979166.5477
                ]
            },
            "properties": {
                "GAGE": 1070,
                "LOCATION": "J100 Spring Creek @ SH 249",
                "FID": 114
            }
        },
        {
            "type": "Feature",
            "id": 115,
            "geometry":
            {
                "type": "Point",
                "coordinates": [
                    -13587837.3838, 4565475.2514
                ]
            },
            "properties": {
                "GAGE": 1074,
                "LOCATION": "Walnut Creek @ Joseph Road",
                "FID": 115
            }
        },
        {
            "type": "Feature",
            "id": 116,
            "geometry":
            {
                "type": "Point",
                "coordinates": [
                    -12755173.4741, 3976889.1051
                ]
            },
            "properties": {
                "GAGE": 1076,
                "LOCATION": "Birch Creek @ Riley Road",
                "FID": 116
            }
        },
        {
            "type": "Feature",
            "id": 117,
            "geometry":
            {
                "type": "Point",
                "coordinates": [
                    -14805245.1462, 7464705.2781
                ]
            },
            "properties": {
                "GAGE": 1084,
                "LOCATION": "Threemile Creek @ Joseph Road",
                "FID": 117
            }
        },
        {
            "type": "Feature",
            "id": 118,
            "geometry":
            {
                "type": "Point",
                "coordinates": [
                    -14805245.1462, 7464705.2781
                ]
            },
            "properties": {
                "GAGE": 1086,
                "LOCATION": "Threemile Creek @ FM 362",
                "FID": 118
            }
        },
        {
            "type": "Feature",
            "id": 119,
            "geometry":
            {
                "type": "Point",
                "coordinates": [
                    -12873650.4927, 4979166.5477
                ]
            },
            "properties": {
                "GAGE": 1090,
                "LOCATION": "J100 Spring Creek @ Hegar Road",
                "FID": 119
            }
        },
        {
            "type": "Feature",
            "id": 120,
            "geometry":
            {
                "type": "Point",
                "coordinates": [
                    -13139844.3382, 4005239.4975
                ]
            },
            "properties": {
                "GAGE": 1100,
                "LOCATION": "K128 Cypress Lateral @ FM1960 MUD233",
                "FID": 120
            }
        },
        {
            "type": "Feature",
            "id": 121,
            "geometry":
            {
                "type": "Point",
                "coordinates": [
                    -10660893.4148, 3503879.3387
                ]
            },
            "properties": {
                "GAGE": 1110,
                "LOCATION": "K100 Cypress Creek @ Cypresswood Drive",
                "FID": 121
            }
        },
        {
            "type": "Feature",
            "id": 122,
            "geometry":
            {
                "type": "Point",
                "coordinates": [
                    -13144796.8389, 4000612.9193
                ]
            },
            "properties": {
                "GAGE": 1115,
                "LOCATION": "K600 Cypress Creek @ Inverness Forest",
                "FID": 122
            }
        },
        {
            "type": "Feature",
            "id": 123,
            "geometry":
            {
                "type": "Point",
                "coordinates": [
                    -8519060.2178, 4732077.6753
                ]
            },
            "properties": {
                "GAGE": 1120,
                "LOCATION": "K100 Cypress Creek @ I-45",
                "FID": 123
            }
        },
        {
            "type": "Feature",
            "id": 124,
            "geometry":
            {
                "type": "Point",
                "coordinates": [
                    -8519060.2178, 4732077.6753
                ]
            },
            "properties": {
                "GAGE": 1130,
                "LOCATION": "K100 Cypress Creek @ Kuykendahl Road",
                "FID": 124
            }
        },
        {
            "type": "Feature",
            "id": 125,
            "geometry":
            {
                "type": "Point",
                "coordinates": [
                    -8519060.2178, 4732077.6753
                ]
            },
            "properties": {
                "GAGE": 1140,
                "LOCATION": "K100 Cypress Creek @ Stuebner-Airline Road",
                "FID": 125
            }
        },
        {
            "type": "Feature",
            "id": 126,
            "geometry":
            {
                "type": "Point",
                "coordinates": [
                    -8519060.2178, 4732077.6753
                ]
            },
            "properties": {
                "GAGE": 1150,
                "LOCATION": "K100 Cypress Creek @ SH 249",
                "FID": 126
            }
        },
        {
            "type": "Feature",
            "id": 127,
            "geometry":
            {
                "type": "Point",
                "coordinates": [
                    -10638280.5427, 3499270.1483
                ]
            },
            "properties": {
                "GAGE": 1160,
                "LOCATION": "K100 Cypress Creek @ Grant Road",
                "FID": 127
            }
        },
        {
            "type": "Feature",
            "id": 128,
            "geometry":
            {
                "type": "Point",
                "coordinates": [
                    -10654167.105, 3503193.1481
                ]
            },
            "properties": {
                "GAGE": 1170,
                "LOCATION": "K100 Cypress Creek @ Huffmeister Road",
                "FID": 128
            }
        },
        {
            "type": "Feature",
            "id": 129,
            "geometry":
            {
                "type": "Point",
                "coordinates": [
                    -8519060.2178, 4732077.6753
                ]
            },
            "properties": {
                "GAGE": 1175,
                "LOCATION": "K100 Cypress Creek @ US 290",
                "FID": 129
            }
        },
        {
            "type": "Feature",
            "id": 130,
            "geometry":
            {
                "type": "Point",
                "coordinates": [
                    -10665306.0535, 3495263.3919
                ]
            },
            "properties": {
                "GAGE": 1180,
                "LOCATION": "K100 Cypress Creek @ Katy-Hockley Road",
                "FID": 130
            }
        },
        {
            "type": "Feature",
            "id": 131,
            "geometry":
            {
                "type": "Point",
                "coordinates": [
                    -10946448.5063, 3297881.6715
                ]
            },
            "properties": {
                "GAGE": 1186,
                "LOCATION": "Live Oak Creek @ Penick Road",
                "FID": 131
            }
        },
        {
            "type": "Feature",
            "id": 132,
            "geometry":
            {
                "type": "Point",
                "coordinates": [
                    -10675627.1095, 3504042.1638
                ]
            },
            "properties": {
                "GAGE": 1190,
                "LOCATION": "K166 Little Mound Creek @ Mathis Road",
                "FID": 132
            }
        },
        {
            "type": "Feature",
            "id": 133,
            "geometry":
            {
                "type": "Point",
                "coordinates": [
                    -10646196.6351, 3499992.6487
                ]
            },
            "properties": {
                "GAGE": 1210,
                "LOCATION": "L100 Little Cypress Creek @ Kluge Road",
                "FID": 133
            }
        },
        {
            "type": "Feature",
            "id": 134,
            "geometry":
            {
                "type": "Point",
                "coordinates": [
                    -10652996.7646, 3508292.7903
                ]
            },
            "properties": {
                "GAGE": 1220,
                "LOCATION": "L100 Little Cypress Creek @ Cypress Rosehill Road",
                "FID": 134
            }
        },
        {
            "type": "Feature",
            "id": 135,
            "geometry":
            {
                "type": "Point",
                "coordinates": [
                    -10650371.3985, 5931405.336
                ]
            },
            "properties": {
                "GAGE": 1230,
                "LOCATION": "L100 Little Cypress @ Becker Road",
                "FID": 135
            }
        },
        {
            "type": "Feature",
            "id": 136,
            "geometry":
            {
                "type": "Point",
                "coordinates": [
                    -13762497.6649, 5003371.9152
                ]
            },
            "properties": {
                "GAGE": 1320,
                "LOCATION": "M100 Willow Creek @ Kuykendahl Road",
                "FID": 136
            }
        },
        {
            "type": "Feature",
            "id": 137,
            "geometry":
            {
                "type": "Point",
                "coordinates": [
                    -13762497.6649, 5003371.9152
                ]
            },
            "properties": {
                "GAGE": 1340,
                "LOCATION": "M100 Willow Creek @ SH 249",
                "FID": 137
            }
        },
        {
            "type": "Feature",
            "id": 138,
            "geometry":
            {
                "type": "Point",
                "coordinates": [
                    -10585857.9589, 3472232.0119
                ]
            },
            "properties": {
                "GAGE": 1420,
                "LOCATION": "N100 Carpenters Bayou @ I-10",
                "FID": 138
            }
        },
        {
            "type": "Feature",
            "id": 139,
            "geometry":
            {
                "type": "Point",
                "coordinates": [
                    -10546615.612, 3482422.379
                ]
            },
            "properties": {
                "GAGE": 1440,
                "LOCATION": "N100 Carpenters Bayou @ Wallisville Road",
                "FID": 139
            }
        },
        {
            "type": "Feature",
            "id": 140,
            "geometry":
            {
                "type": "Point",
                "coordinates": [
                    -10585857.9589, 3472232.0119
                ]
            },
            "properties": {
                "GAGE": 1460,
                "LOCATION": "N100 Carpenters Bayou @ US 90",
                "FID": 140
            }
        },
        {
            "type": "Feature",
            "id": 141,
            "geometry":
            {
                "type": "Point",
                "coordinates": [
                    -10570543.3067, 3469354.041
                ]
            },
            "properties": {
                "GAGE": 1520,
                "LOCATION": "O100 Goose Creek @ SH 146",
                "FID": 141
            }
        },
        {
            "type": "Feature",
            "id": 142,
            "geometry":
            {
                "type": "Point",
                "coordinates": [
                    -8909968.6285, 3894982.7533
                ]
            },
            "properties": {
                "GAGE": 1540,
                "LOCATION": "O100 Goose Creek @ Baker Road",
                "FID": 142
            }
        },
        {
            "type": "Feature",
            "id": 143,
            "geometry":
            {
                "type": "Point",
                "coordinates": [
                    -10598176.8202, 3474541.5139
                ]
            },
            "properties": {
                "GAGE": 1600,
                "LOCATION": "P100 Greens Bayou @ Mount Houston Parkway",
                "FID": 143
            }
        },
        {
            "type": "Feature",
            "id": 144,
            "geometry":
            {
                "type": "Point",
                "coordinates": [
                    -10052665.4279, 4679755.5056
                ]
            },
            "properties": {
                "GAGE": 1610,
                "LOCATION": "P100 Greens Bayou @ Normandy Street",
                "FID": 144
            }
        },
        {
            "type": "Feature",
            "id": 145,
            "geometry":
            {
                "type": "Point",
                "coordinates": [
                    -9068664.5814, 5004516.9995
                ]
            },
            "properties": {
                "GAGE": 1620,
                "LOCATION": "P100 Greens Bayou @ Ley Road",
                "FID": 145
            }
        },
        {
            "type": "Feature",
            "id": 146,
            "geometry":
            {
                "type": "Point",
                "coordinates": [
                    -10598264.5162, 3473461.7643
                ]
            },
            "properties": {
                "GAGE": 1640,
                "LOCATION": "P100 Greens Bayou @ US 59",
                "FID": 146
            }
        },
        {
            "type": "Feature",
            "id": 147,
            "geometry":
            {
                "type": "Point",
                "coordinates": [
                    -9068664.5814, 5004516.9995
                ]
            },
            "properties": {
                "GAGE": 1645,
                "LOCATION": "P100 Greens Bayou @ Beltway 8",
                "FID": 147
            }
        },
        {
            "type": "Feature",
            "id": 148,
            "geometry":
            {
                "type": "Point",
                "coordinates": [
                    -8892279.9614, 4926122.0668
                ]
            },
            "properties": {
                "GAGE": 1650,
                "LOCATION": "P130 Garners Bayou @ Rankin Road",
                "FID": 148
            }
        }
    ]
}

var vectorSource = new ol.source.Vector({
    features: (new ol.format.GeoJSON()).readFeatures(geojsonObject)
});

vectorSource.addFeature(new ol.Feature(new ol.geom.Circle([5e6, 7e6], 1e6)));

var vectorLayer = new ol.layer.Vector({
    source: vectorSource,
    style: styleFunction
});

var map = new ol.Map({
    target: 'map',
    layers: [
        new ol.layer.Tile({
            source: new ol.source.OSM()
        }),
        vectorLayer
        // new ol.layer.Tile({
        //   source: new ol.source.TileArcGISRest({
        //     url: 'http://mycity.houstontx.gov/COHGIS/rest/services/PD/Flood_Hazard_wm/MapServer/4'
        //   })
        // })
    ],
    view: new ol.View({
        // center: ol.proj.fromLonLat([37.41, 8.82]),
        center: ol.proj.fromLonLat([-95.383056, 29.762778]),
        zoom: 9
    })
});
