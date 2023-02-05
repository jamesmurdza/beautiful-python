---
title: "Lists and sequences"
description: "Get comfortable with some elegant Python programming patterns."
---

## Conditional expressions

A conditional expression is similar to a conditional statement. Say you want to know if a `temperature` is hot or cold:

```python
feeling = "hot" if temperature > 15 else "cold"
```

would be the equivalent of:

```python
if temperature > 15:
   feeling = "hot"
else:
   feeling = "cold"
```

## Lists

Use `in` to see if a list contains an item:

```python
ingredients = ["water", "flour", "yeast", "salt"]
print("butter" in ingredients)
```

