import numpy as np
import matplotlib.pyplot as plt

x_points = np.array([])
y_points = np.array([])

coefficients = np.polyfit(x_points, y_points, 2)
a, b, c = coefficients

print(f"y = {a:.2f}x^2 + {b:.2f}x + {c:.2f}")

x_fit = np.linspace(min(x_points), max(x_points), 100)
y_fit = a * x_fit**2 + b * x_fit + c

plt.scatter(x_points, y_points, label="Data Points")
plt.plot(x_fit, y_fit, color="red", label="Quadratic Fit")
plt.xlabel("Inputs Size")
plt.ylabel("Gas (WEI)")
plt.legend()
plt.show()
