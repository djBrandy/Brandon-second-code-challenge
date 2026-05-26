### Brandon Second Code Challenge
#### Problem Statement
Create a function to determine the maximum value in a list of integers.

#### Solution
```python
def find_max_value(lst):
    """
    This function finds the maximum value in a list of integers.

    Args:
        lst (list): A list of integers.

    Returns:
        int: The maximum value in the list.

    Raises:
        ValueError: If the list is empty.
    """
    if not lst:
        raise ValueError("List is empty")
    return max(lst)

# Example usage:
numbers = [12, 45, 7, 23, 56, 89, 34]
print(find_max_value(numbers))  # Output: 89
```

#### Explanation
* The function `find_max_value` takes a list of integers as input and returns the maximum value.
* It first checks if the list is empty and raises a `ValueError` if it is.
* If the list is not empty, it uses the built-in `max` function to find the maximum value.
* The example usage demonstrates how to use the function with a list of numbers.