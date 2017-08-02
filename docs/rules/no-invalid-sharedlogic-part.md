# no-invalid-sharedlogic-part

Catches logical expressions with patterns of shared expressions, such as `A \|\| (A && B)`, `(A && B) \|\| A`, `A \|\| (B && A)`, `(B && A) \|\| A`, which may be a logic error or typo. All four patterns can be simplified and may not operate how intended as some parts may never execute.

* `(A && B) || A` runs the same as just `(A && B)`.
* `(B && A) || A` runs the same as just `(B && A)`.
* `A || (A && B)` runs the same as just `A`. `B` will never be evaluated in this case.
* `A || (B && A)` runs the same as just `A`. `B` will may evaluate if A is falsy, but the result of the expression is still always `A`.

## Rule Details

Examples of **incorrect** code for this rule:

```js
(a && b) || a

(b && a) || a

a || (a && b)

a || (b && a)
```

Examples of **correct** code for this rule:

```js
(a || b) && a

(!a && b) || a

!a || (a && b)

a || (b && c)
```
