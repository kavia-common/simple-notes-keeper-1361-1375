"""Simple arithmetic utilities: subtraction.

This module is intentionally small and self-contained.
"""


# PUBLIC_INTERFACE
def sub(a, b):
    """Return the difference of two values (a - b).

    Args:
        a: Minuend. Typically an int or float, but any type supporting `-` works.
        b: Subtrahend. Typically an int or float, but any type supporting `-` works.

    Returns:
        The result of `a - b`.

    Raises:
        TypeError: If the operands do not support subtraction with `-`.
    """
    return a - b
