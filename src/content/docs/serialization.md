---
title: "Serialization"
description: ""
---

## Character sets and encodings

A character set is a standardized set of characters. It is often used to define which characters are supported by a particular format or software program. These characters include printable characters and control characters. Unicode is a character set with 149,186 characters. ASCII has a character set of 128 characters.

A character encoding is a mapping between a character set and binary values.

| Text | Encoding | Binary                  |
| ---- | -------- | ----------------------- |
| A    | ASCII    | ```01000001```          |
| A    | UTF-8    | ```01000001```          |
| A    | UTF-16   | ```01000001 00000000``` |

| Text | Encoding | Binary                  |
| ---- | -------- | ----------------------- |
| Á    | ASCII    | ```11000001```          |
| Á    | UTF-8    | ```11000011 10000001``` |
| Á    | UTF-16   | ```11000001 00000000``` |

| Text | Encoding | Binary                           |
| ---- | -------- | -------------------------------- |
| 中   | ASCII    | Does not exist                   |
| 中   | UTF-8    | ```11100100 10111000 10101101``` |
| 中   | UTF-16   | ```00101101 01001110```          |


https://www.rapidtables.com/convert/number/ascii-to-binary.html

## JSON

### JSON object

JSON is a universal standard originally based on Javascript.

```json
{
  "name": "Neptune",
  "symbol": "N",
  "diameter": 49244,
  "mass": 1.02413e+26,
  "density": 1638,
  "gravity": 11.15,
  "distance_from_sun": 2793.2,
  "length_of_year": 60182,
  "inhabited": false
}
```

- The only valid string format is using **single quotes**.
- Backslash can be used to add a quote in a quoted string. 
- JSON includes the Javascript types true, false, null and undefined.

Small mistakes will cause a syntax error when parsed.

### JSON array of objects
```json
[
  {
    "name": "Mercury",
    "diameter": 4879,
    "mass": 3.285e+23,
  },
  {
    "name": "Venus",
    "diameter": 12104,
    "mass": 4.867e+24,
  },
  {
    "name": "Earth",
    "diameter": 12756,
    "mass": 5.972e+24,
  },
  {
    "name": "Mars",
    "diameter": 6792,
    "mass": 6.39e+23,
  }
]
```

### Nesting 
```json
{
   "name": "Neptune",
   "symbol": "N",
   "mass": 1.02413e+26,
   "density": 1638,
   "moons": [
      { "name":"Naiad", "diameter":58 },
      { "name":"Thalassa", "diameter":200 },
      { "name":"Despina", "diameter":300 }
   ],
   "discovered_by": {
      "name": "Johann Gottfried Galle",
      "born": "1812-06-09",
      "died": "1910-07-10"      
   }
}
```

https://jsoneditoronline.org/

## CSV

```
name,symbol,diameter,mass
Mercury,Me,4879,3.285e+23
Venus,V,12104,4.867e+24
Earth,E,12756,5.972e+24
Mars,Ma,6792,6.39e+23
```
- CSV has a delimeter character ```,``` and quotation character ```"```.
- A line defines a record, which is separated into fields.
- Quotes allow for the delimeter character to be used in fields.
- Two quotes ```""``` creates a quotation character inside of quotes.

## XML

XML is a type of markup language. The original purpose of a markup language is to add information to text documents.

```xml
<?xml version="1.0" encoding="UTF-8"?>
<planet>
  <name>Saturn</name>
  <symbol>S</symbol>
  <diameter>120536</diameter>
  <mass>5.683e+26</mass>
  <density>687</density>
  <gravity>10.44</gravity>
  <distance_from_sun>1433.5</distance_from_sun>
  <length_of_year>10759.22</length_of_year>
</planet>
```
- Any (parent) element can contain text or (child) elements.

```xml
<?xml version="1.0" encoding="UTF-8"?>
<planet>
  <name>Jupiter</name>
  <mass unit="kg">5.683e+26</mass>
  <diameter unit="km">142984</diameter>
  <density unit="kg/m^3">1326</density>
  <gravity unit="m/s^2">24.79</gravity>
  <distance_from_sun unit="AU">5.2</distance_from_sun>
  <length_of_year unit="days">4,332.82</length_of_year>
  <temperature>
    <min>-178</min>
    <max>-113</max>
  </temperature>
  <moon name="Naiad" />
  <moon name="Thalassa" />
  <moon name="Despina" />
</planet>
```
- Elements can also have attributes, which are enclosed in strings using single or double quotes.
- Quotes can be added into strings by escaping with ```\```.
- There are no rules about when to use attributes, and when to use child elements.

https://codebeautify.org/xmlviewer

## Query string

```name=Neptune&symbol=N&diameter=49244&mass=1.02413e%2B26&distance_from_sun=2793.2```
- Non-ASCII characters should be escaped using percent-encoding.
- Additional characters called reserved characters also should be escaped: ``` !#$%&'()*+,/:;=?@[]```
- An unescaped plus character is normally converted into a space.

https://www.w3schools.com/tags/ref_urlencode.ASP
