# AP Calculus AB &mdash; Unit 6 Jeopardy (Web Version)

A Jeopardy-style review game focused on **AP Calculus AB Unit 6: Integration & Accumulation of Change**, designed to be hosted on **GitHub Pages** and played directly in the browser.

- No backend required
- Pure **HTML / CSS / JavaScript**
- Math is rendered with [KaTeX](https://katex.org/) for clean, textbook-quality notation
- Works on desktop, Chromebook, Mac, Windows, and tablets

## Files

- `index.html` – main page and layout (also loads KaTeX from a CDN)
- `style.css` – Jeopardy-style theming and responsive layout
- `script.js` – game logic, questions, scoring, math-aware answer checking
- `README.md` – this file

## How to Run Locally

1. Download or clone the project.
2. Open `index.html` in any modern browser (Chrome, Edge, Firefox, Safari).

No build steps, no dependencies — everything is static. KaTeX is loaded from a CDN at runtime, so an internet connection is needed the first time you load the page.

## How to Access on GitHub Pages

```text
[https://byeSystem32.github.io/jeopardy_judicial-branch/](https://byesystem32.github.io/jeopardy_ap-calc-ab-unit-6/)
```

## Game Content Overview

Categories (Unit 6 topics):

- **Antiderivatives & Indefinite Integrals**
- **Riemann Sums**
- **Definite Integrals & FTC** (Fundamental Theorem of Calculus, Parts 1 & 2)
- **Net Change Theorem**
- **u-Substitution**

Each category has five clues (values $100–$500) covering:

- Basic antiderivatives of power, trig, exponential, and logarithmic functions
- Left, right, and trapezoidal Riemann sums; the limit definition of the definite integral
- Both parts of the Fundamental Theorem of Calculus (including chain-rule applications)
- Net change applied to position, velocity, displacement, and total distance
- Indefinite and definite integrals evaluated via $u$-substitution

## Typing Math Answers

The game accepts plain-text math. You don't need to type LaTeX:

- Use `^` for exponents — e.g., `x^2`
- Use `/` for fractions — e.g., `x^3/3` or `(1/3)x^3` (both work)
- Function names — `sin(x)`, `cos(x)`, `tan(x)`, `ln(x)`, `e^x`
- The constant of integration `+ C` is optional for indefinite integrals
- Multiple equivalent forms are accepted

The answer checker:

- Ignores capitalization and whitespace
- Treats `+ C` and the LaTeX-rendered answer as equivalent to plain text
- Accepts common variants such as `(1/3)x^3 + C`, `x^3/3 + C`, and `(x^3)/3 + C`
- Falls back to forgiving word matching for verbal answers (e.g., "Displacement", "Total distance traveled")
