# Chapter: Integrals (Step by Step) 

***

## 1. What is an Integral?

An **integral** is the opposite of a derivative.

* Derivative = slope / rate of change.

* Integral = accumulation / total amount.

Think of an integral as **adding up infinitely many small pieces**.

Two main types:

1. **Indefinite integral**: general antiderivative, with $+C$ (constant of integration).
2. **Definite integral**: area under the curve between two $x$ values.

***

## 2. The Indefinite Integral

The indefinite integral finds the family of functions whose derivative is the given function.

$$
\int f(x)\,dx = F(x) + C
$$

* $\int$: the integral symbol (“sum up”).

* $f(x)$: the function to integrate (integrand).

* $dx$: variable of integration (“with respect to $x$”).

* $F(x)$: a function such that $F'(x) = f(x)$.

* $C$: constant of integration (because derivatives lose constants).

### Example

$$
\int 2x \, dx = x^2 + C
$$

Check: derivative of $x^2$ is $2x$.

***

## 3. The Definite Integral

A definite integral is the **area under a curve** between $x=a$ and $x=b$:

$$
\int_a^b f(x)\, dx
$$

* $a$: lower bound.

* $b$: upper bound.

* The result is a number (area).

***

## 4. The Limit Definition (Connection to Sums)

The definite integral is defined as a limit of sums:

$$
\int_a^b f(x)\, dx = \lim_{n \to \infty} \sum_{i=1}^n f(x_i) \, \Delta x
$$

* Break the interval $[a,b]$ into $n$ slices.

* $\Delta x$: width of each slice.

* $f(x_i)$: height at a sample point.

* Multiply width $\times$ height = rectangle area.

* Add them up, then let slices get infinitely thin.

This is called a **Riemann sum**.

***

## 5. Example 1: Area of a Constant Function

$$
\int_0^4 3 \, dx
$$

Graph: rectangle with height $3$, base length $4$.

Area = $3 \cdot 4 = 12$.

Check with formula:

$$
\int 3\, dx = 3x + C
$$

Now evaluate:

$$
[3x]_0^4 = 3(4) - 3(0) = 12
$$

***

## 6. Example 2: Area under a Line

$$
\int_0^2 x \, dx
$$

Graph: line from $(0,0)$ to $(2,2)$. The area under it is a triangle with base 2 and height 2.\
Area = $\tfrac{1}{2} \cdot 2 \cdot 2 = 2$.

Check with formula:

$$
\int x \, dx = \frac{x^2}{2} + C
$$

Evaluate:

$$
\left[\frac{x^2}{2}\right]_0^2 = \frac{4}{2} - 0 = 2
$$

***

## 7. Example 3: Using a Table (Numerical Approach)

Suppose $f(x)=x^2$, and we want $\int_0^2 f(x)\,dx$.

Break into 4 equal slices ($\Delta x=0.5$). Use right endpoints.

| Interval   | $x_i$ | $f(x_i)$ | Area piece $f(x_i)\Delta x$ |
| ---------- | ----- | -------- | --------------------------- |
| \[0,0.5]   | 0.5   | 0.25     | 0.125                       |
| \[0.5,1.0] | 1.0   | 1.0      | 0.5                         |
| \[1.0,1.5] | 1.5   | 2.25     | 1.125                       |
| \[1.5,2.0] | 2.0   | 4.0      | 2.0                         |

Total ≈ $3.75$.

Exact value with formula:

$$
\int_0^2 x^2\, dx = \left[\frac{x^3}{3}\right]_0^2 = \frac{8}{3} \approx 2.67
$$

Notice: approximation improves as we take more slices.

***

## 8. Fundamental Theorem of Calculus

This theorem ties **derivatives and integrals** together:

1. If $F(x)$ is an antiderivative of $f(x)$, then:

$$
\int_a^b f(x)\, dx = F(b) - F(a)
$$

1. Differentiation and integration are opposites:

$$
\frac{d}{dx} \left(\int f(x)\, dx\right) = f(x)
$$

***

## 9. Practice Problems

### Problem 1

Find $\int (4x^3)\, dx$.

***

### Problem 2

Evaluate $\int_0^3 2\, dx$.

***

### Problem 3

Find the area under $y=x$ from $x=1$ to $x=4$.

***

### Problem 4

Approximate $\int_0^1 x^2 \, dx$ using 4 rectangles of equal width ($\Delta x=0.25$) with right endpoints.

***

### Problem 5

True or False:\
(a) The indefinite integral always has a $+C$.\
(b) The definite integral between $a$ and $b$ is always positive.\
(c) Integrals and derivatives are inverse operations.

***

## 10. Solutions

### Solution 1

$$
\int 4x^3\, dx = x^4 + C
$$

***

### Solution 2

$$
\int_0^3 2\, dx = [2x]_0^3 = 6
$$

***

### Solution 3

$$
\int_1^4 x\, dx = \left[\frac{x^2}{2}\right]_1^4 = \frac{16}{2} - \frac{1}{2} = 8 - 0.5 = 7.5
$$

***

### Solution 4

Right endpoints: $x=0.25,0.5,0.75,1.0$.

| $x_i$ | $f(x_i)=x^2$ | Area piece $f(x_i)\Delta x$ |
| ----- | ------------ | --------------------------- |
| 0.25  | 0.0625       | 0.015625                    |
| 0.5   | 0.25         | 0.0625                      |
| 0.75  | 0.5625       | 0.140625                    |
| 1.0   | 1.0          | 0.25                        |

Sum = $0.46875$.

Exact answer:

$$
\int_0^1 x^2 dx = \left[\frac{x^3}{3}\right]_0^1 = \frac{1}{3} \approx 0.333
$$

Our approximation overshot a bit.

***

### Solution 5

(a) True.\
(b) False → the integral can be negative if the function is below the x-axis.\
(c) True.
