# CambioClimatico
Visualizacion que prentende mostrar las variaciones mensuales en el clima mundial, no es una broma el plante ase calienta y es nuestro deber pensar en el futuro


# Como Instalar
clonar o descargar el repositorio
 ``` git clone [repo] ```
copiar y pegar el contenido en un servidor de aplicaciones
* tomcat
* IIS
* ...

ejecutar la aplicacion desde el explorador

# Tecnologias usadas
* D3 V5
* BulmaJs

# Insight:
* presentar que las anomalias en la temperatura del plantena apuntan al calentamiento de este.
* los periodos donde se presentan mas vartiacion en reduccion de temperatura es entre mayo y julio

# De donde vienen los Datos

Los datos provienen de la NASA [GISS Surface Temperature Analysis](https://data.giss.nasa.gov/gistemp/graphs/graph_data/GISTEMP_Seasonal_Cycle_since_1880/graph.txt) 

# What
Dataset Availability: Static
Data Types: Items
Data and Dataset Types: Tables (Items and Attributes)
Dataset Types: Tables

Attributes:
anio: Ordered -> Quantitative -> Sequential
anomalia: Ordered -> Quantitative -> Divergent

# Why
Tarea 1:
Presentar al publico que el planeta se esta calentando y que es un tema que involucra atodos
Analyze -> Consume -> Present
Trends (anomalia -> variacion temperatura en grados celcius)

Tarea 2
Analyze -> Produce -> Derive
Features (calcular la variacion de temperatura por mes)



# How
Encode -> Arrange -> Express
Map -> Color -> rampa color divergente
Manipulate-> Change,Select

# Marcas
paht -> Rectangulos que representan la los valores de variacion de la temperatura

# Canales
X -> Años de evaluacion de la variacion temperatura
Y -> meses de evaluacion de la temperatura
Color -> variacion de la temperatura
