---
title: "Lists"
description: "Get comfortable with some elegant Python programming patterns."
---

## Checking for an item

Use `in` to see if a list contains an item:

```python
ingredients = ["water", "flour", "yeast", "salt"]
print("butter" in ingredients) # True
```

For example, to check if an item exists before adding it:

```python
if not "butter" in ingredients:
    ingredients.append("butter")
```

## Slice syntax

Taking out slices of lists using subscripting is a useful feature of Python. The format is either `[index]`, `[start:end]` or `[start:end:step]`.

Taking an array like this:

```python
letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"]
```

One can take slices of the array using slice syntax.

Get the first item:

```python
print(letters[0]) # A
```

Get the fourth to fourth items:

```python
print(letters[3:5]) # ['D', 'E']
```

Get the first four items:

```python
print(letters[:4]) # ['A', 'B', 'C', 'D']
```

Get all items starting with the fourth item:

```python
print(letters[4:]) # ['E', 'F', 'G', 'H', 'I', 'J']
```

Get the last item:

```python
print(letters[-1]) # J
```

Get all items starting with the third to last item:

```python
print(letters[-3:]) # ['H', 'I', 'J']
```

Get every other item from the first to the fifth item:

```python
print(letters[0:5:2]) # ['A', 'C', 'E']
```

Note: If ever confused by the start and end indexes, it helps to visualize them e.g.: [0]A[1]B[2]C[3]D[4]E[5]F...

## Unpacking a list

Unpacking is a useful pattern in Python when working with lists:

```python
car = ["1969", "Ford", "Mustang"]
year, model, make = car
print(model) # Ford
```

The above example unpacks all three items in a list. If you don't need to unpack all the items, use the following syntax:

```python
numbers = range(1, 100)
first, second, *rest = numbers
print(first) # 1
print(rest) # [3, 4, 5...]
```

In the above example, the first two items are unpacked, and the rest go into the `rest` variable.

## List comprehensions

Comprehensions are similar to loops:

```python
numbers = [1, 1, 2, 3, 5, 8, 13]
numbers_increased = [i+10 for i in numbers]
print(numbers_increased) # [11, 11, 12, 13, 15, 18, 23]
```

would be the equivalent of:

```python
numbers_increased = []
for i in numbers:
    numbers_increased.append(i+10)
print(numbers_increased) # [11, 11, 12, 13, 15, 18, 23]
```

Another example of comprehensions:

```python
users = ["James", "Stephanie", "Alex"]
users_lowercase = [name.lower() for name in users]
print(users_lowercase) # ['james', 'stephanie', 'alex']
```

And one final example:

```python
square_numbers = [i*i for i in range(1, 100)]
print(square_numbers) # [1, 4, 9, 16...]
```

