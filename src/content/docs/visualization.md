---
title: "Visualization"

---


Python has three famous libraries for plotting:


-   Matplotlib: The go-to standard

-   Seaborne: Extra features, based on Matplotlib

-   Plotly: Interactive charts, based on D3.js

## Matplotlib

``` python
import matplotlib.pyplot as plt
```

### Line, bar, scatter plot

``` python
# Data
x = [1, 2, 3, 4, 5]
y = [1, 4, 9, 16, 25]
s = [10, 3, 7, 20, 110]
colors = ["red", "blue", "red", "green", "yellow"]

# Plot the chart
# plt.plot(x, y)
# lt.bar(x, y)
plt.scatter(x, y, s=s, color=colors)

# Add title and axis labels
plt.title("Chart title")
plt.xlabel("X-axis")
plt.ylabel("Y-axis")

# Save the plot
# plt.savefig("Plot.png")
# plt.savefig("Plot.svg")

# Show the plot
plt.show()
```

![](visualization/f81aff71867d37b735b66677453e65d643fec24d.png)


### Pie chart

``` python
# Data
labels = ['Apple', 'Banana', 'Orange', 'Mango']
sizes = [20, 30, 40, 10]

# Create the pie chart
plt.pie(sizes, labels=labels)

# Add title
plt.title("Pie chart")

# Show the plot
plt.show()
```

![](visualization/944a4216e7cac255df236450f0161ac171a115fe.png)


### Histogram

``` python
# Data
data = [1.1, 1.2, 1.4, 3.2, 3.3, 6.5, 7, 8.4, 9]

# Create the histogram
plt.hist(data, bins=10)

# Add title and axis labels
plt.title("Histogram")
plt.xlabel("X-axis")
plt.ylabel("Y-axis")

# Show the plot
plt.show()
```

![](visualization/f09b68d7eb211bb5226850b7e0251effe49bdadf.png)


## Seaborne

``` python
import seaborn as sns
import matplotlib.pyplot as plt
```

### Regression plot

``` python
x = [-2, -1, 1, 2, 3, 4, 5, 6, 7]
y = [4, 1, 1, 4, 9, 16, 25, 36, 49]

fig = sns.regplot(x=x, y=y, order=2)

fig.set(
    xlabel='X-axis',
    ylabel='Y-axis',
    title='Chart title'
    )

plt.show()
```

![](visualization/31187977c04736255515e0e0bc9a04e1354ea7bd.png)


### Heatmap

``` python
import seaborn as sns

data = [[y*x for y in range(0, 15)] for x in range(0, 5)]

fig = sns.heatmap(data, annot=True)

plt.show()
```

![](visualization/374f86c845599bbea383288026ef43c8bf28506a.png)


### Density chart

``` python
# Data
data = [1.1, 1.1, 1.2, 1.4, 3.2, 3.3, 6.5, 7, 8.4, 9]

# Create the histogram
sns.kdeplot(data, bw_adjust=0.2)

# Add title and axis labels
plt.title("Density chart")
plt.xlabel("X-axis")
plt.ylabel("Y-axis")

# Show the plot
plt.show()
```

![](visualization/ef53c673d4feb8e4ccac13b04d6ea93d4fdd8579.png)


## Plotly

``` python
import plotly.express as px
```

### Line, bar, scatter plot

``` python
x = [-2, -1, 1, 2, 3, 4, 5, 6, 7]
y = [4, 1, 1, 4, 9, 16, 25, 36, 49]

# fig = px.line(x=x, y=y, markers=True)
# fig = px.scatter(x=x, y=y)
fig = px.bar(x=x, y=y)

fig.update_layout(
    title='Chart title',
    xaxis_title='X-axis',
    yaxis_title='Y-axis')

fig.show()
```

### Pie chart

``` python
labels = ['Apple', 'Banana', 'Orange', 'Mango']
sizes = [20, 30, 40, 10]

fig = px.pie(values=sizes, names=labels)

fig.update_layout(
    title='Chart title',
    xaxis_title='X-axis',
    yaxis_title='Y-axis')

fig.show()
```

### Maps

``` python
import plotly.express as px

# Define a list of latitude and longitude coordinates
coords = [[45.5236, -122.6750],
          [37.7749, -122.4194],
          [34.0522, -118.2437],
          [40.7128, -74.0060],
          [47.6062, -122.3321]]

# Extract the latitude and longitude values into separate lists
lats, lons = zip(*coords)

# Create the map
# fig = px.scatter_mapbox(
#     lat=lats, lon=lons,
#     mapbox_style="stamen-terrain",
#     center={"lat":40, "lon":-100},
#     zoom=2,
#     )

fig = px.density_mapbox(
    lat=lats, lon=lons,
    mapbox_style="stamen-terrain",
    center={"lat":40, "lon":-100},
    zoom=1,
    radius=20
    )

fig.update_layout(title='Chart title')

fig.show()
```

### Exporting charts

``` python
from IPython.display import Image, SVG

plotly_img = fig.to_image(format="png", width=1000, height=500)
Image(plotly_img)

# plotly_img = fig.to_image(format="svg", width=1000, height=1000)
# SVG(plotly_img)
```

![](visualization/6ad57b531f2e9166a4f227e3c022d61951ee3d8c.png)

Save image to a file:


``` python
plotly_img = fig.write_image("Plot.svg", format="svg")
```

## More charts

Check out: <https://www.python-graph-gallery.com/>
