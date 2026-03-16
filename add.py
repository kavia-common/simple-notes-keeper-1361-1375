"""
add.py

Small arithmetic helper module.

This repository is primarily a React app, but this module is provided per request
as a simple, standalone Python utility.
"""

from __future__ import annotations


# PUBLIC_INTERFACE
def add(a: float, b: float) -> float:
    """Return the sum of two numbers.

    Args:
        a: First number.
        b: Second number.

    Returns:
        The sum (a + b).
    """
    return a + b


def _main() -> None:
    """CLI for quick manual testing: `python add.py 1 2` prints `3.0`."""
    import sys

    if len(sys.argv) != 3:
        print("Usage: python add.py <a> <b>")
        raise SystemExit(2)

    a = float(sys.argv[1])
    b = float(sys.argv[2])
    print(add(a, b))


if __name__ == "__main__":
    _main()
