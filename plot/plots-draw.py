import numpy as np
import matplotlib.pyplot as plt

# Define x values
x = np.linspace(0, 100)

# Define three quadratic functions
y1 = 0.01 * x**2 + (0.32) * x + 5.63
y2 = 0.001 * x**2 + (0.04) * x + 0.60
y3 = 0.0007 * x**2 + (0.02) * x + 0.70

# Plot the functions
plt.figure(figsize=(10, 6))
plt.plot(x, y1, label="BubbleSort")
plt.plot(x, y2, label="MergeSort")
plt.plot(x, y3, label="QuickSort")

# Add labels and title
plt.xlabel("Input Size")
plt.ylabel("Response Time")
plt.title("Comparison of input size on the response time (waiting time + process time)")
plt.legend()

# Show the plot
plt.grid(True)
plt.show()
