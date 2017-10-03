# Houston’s floodwaters
Análisis de inundaciones en Houston durante agosto de 2017.

## Motivación
Con base en la visualización presentada en por [The Washington Post](https://www.washingtonpost.com) en su artículo [Houston’s floodwaters are receding, but they remain dangerously high in many areas](https://www.washingtonpost.com/graphics/2017/national/harvey-houston-flooding/?utm_term=.46e84a2762c8), se plantea una visualización alternativa con fines académicos.

## Fuente de datos
Los datos se han obtenido de [The Flood Warning System](https://www.harriscountyfws.org/) quienes en su página hacen la siguiente aclaración:

> ### Disclaimer
> The Flood Warning System interactive map and website are for general information and educational purposes only. Their purpose is to provide information collected at gage stations, which monitor rainfall and water levels of streams and bayous as well as other weather information in the Harris County region. Use and interpretation of this data and information is the responsibility of the user. Neither the Harris County Flood Control District nor Harris County represents the data as 100 percent accurate. You should follow directions provided by emergency management officials when making decisions during flooding or other weather-related events.

La georreferenciación de los medidores (_gage_), se realizó obteniendo los datos del [Monthly Rainfall Report QAQC](https://www.harriscountyfws.org/Document_Library) para agosto de 2017 y posteriormente se utilizó [google maps]() que ubicó los puntos en el mapa. El mapa puede ser consultado [aquí](https://goo.gl/BUkryX).

<iframe src="https://www.google.com/maps/d/embed?mid=1sVTD1qKoASlHOlEC8sJDUne8a1M" width="640" height="480"></iframe>

[Ejemplo con openlayers](test-ol.html)
[Ejemplo con ESRI API for JavaScript](test-esri.html)

