---
title: "Basics"
description: "Get comfortable with some elegant Python programming patterns."
---

## Conditional expressions

A conditional expression is similar to a conditional statement. Say you want to know if a `temperature` is hot or cold:

```python
temperature = 11
feeling = "hot" if temperature > 15 else "cold"
print(feeling) # cold
```

would be the equivalent of:

```python
if temperature > 15:
   feeling = "hot"
else:
   feeling = "cold"
print(feeling) # cold
```
