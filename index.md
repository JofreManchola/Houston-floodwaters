# Houston’s floodwaters
Análisis de inundaciones en Houston durante agosto de 2017.

## Motivación
Con base en la visualización presentada en por [The Washington Post](https://www.washingtonpost.com) en su artículo [Houston’s floodwaters are receding, but they remain dangerously high in many areas](https://www.washingtonpost.com/graphics/2017/national/harvey-houston-flooding/?utm_term=.46e84a2762c8), se plantea una visualización alternativa con fines académicos.

## Fuente de datos
Los datos se han obtenido de [The Flood Warning System](https://www.harriscountyfws.org/) quienes en su página hacen la siguiente aclaración:

> ### Disclaimer
> The Flood Warning System interactive map and website are for general information and educational purposes only. Their purpose is to provide information collected at gage stations, which monitor rainfall and water levels of streams and bayous as well as other weather information in the Harris County region. Use and interpretation of this data and information is the responsibility of the user. Neither the Harris County Flood Control District nor Harris County represents the data as 100 percent accurate. You should follow directions provided by emergency management officials when making decisions during flooding or other weather-related events.

La georreferenciación de los medidores (_gage_), se realizó obteniendo los datos del [Monthly Rainfall Report QAQC](https://www.harriscountyfws.org/Document_Library) para agosto de 2017 y posteriormente se utilizó [google maps]() que ubicó los puntos en el mapa. El mapa puede ser consultado [aquí](https://goo.gl/BUkryX).

<style>.embed-container {position: relative; padding-bottom: 80%; height: 0; max-width: 100%;} .embed-container iframe, .embed-container object, .embed-container iframe{position: absolute; top: 0; left: 0; width: 100%; height: 100%;} small{position: absolute; z-index: 40; bottom: 0; margin-bottom: -15px;}</style><div class="embed-container"><iframe width="500" height="400" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" title="Houston-floodwaters" src="//jofremanchola.maps.arcgis.com/apps/Embed/index.html?webmap=8df19a1f6bb64b60936ac7897aee7ab4&amp;extent=-96.0579,29.4717,-94.7121,30.0606&amp;home=true&amp;zoom=true&amp;previewImage=false&amp;scale=true&amp;details=true&amp;legendlayers=true&amp;active_panel=details&amp;basemap_gallery=true&amp;disable_scroll=true&amp;theme=light"></iframe></div>



[Ejemplo con openlayers](test-ol.html)
[Ejemplo con ESRI API for JavaScript](test-esri.html)
[Ejemplo con Web AppBuilder for ArcGIS](http://jofremanchola.maps.arcgis.com/apps/webappviewer/index.html?id=dfe81bce32d44dfdaf1a588158f08107)

