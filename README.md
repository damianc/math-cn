# math-cn

Math extension to work on complex numbers.

For example to perform:

$$
\begin{array}{l}
z_1 = 1+2i
\\
z_2 = 3+4i
\\
s = z_1 + z_2 = 4+6i
\end{array}
$$

write:

```
const z1 = [1,2];
const z2 = [3,4];

const s = Math.cn.add(z1,z2);
// [4,6]
```


## Methods

> A complex number is expected to be an array of form `[re,im]`.

- `mod(z)` - returns the modulus of a number
- `arg(z)` - returns the argument of a number
- `conjugate(z)` - returns the conjugate of a number
- `add(z1,z2)` - performs addition of numbers
- `sub(z1,z2)` - performs subtraction of numbers
- `mul(z1,z2)` - performs multiplication of numbers
- `div(z1,z2)` - performs division of numbers
- `pow(z,n)` - returns the _n-th_ power of a number
- `roots(z,n)` - returns the _n-th_ roots of a number
- `cis(r,phi)` - returns a complex number `[re,im]` defined by modulus (`r`) and argument (`phi`)
