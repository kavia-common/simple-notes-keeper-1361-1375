"""Simple arithmetic utilities: addition.

This module is intentionally small and self-contained.
"""


# PUBLIC_INTERFACE
def add(a, b):
    """Return the sum of two values.

    Args:
        a: First addend. Typically an int or float, but any type supporting `+` works.
        b: Second addend. Typically an int or float, but any type supporting `+` works.

    Returns:
        The result of `a + b`.

    Raises:
        TypeError: If the operands do not support addition with `+`.
    """
    return a + b
