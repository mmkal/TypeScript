---
name: Hypes not correct in/with callback
about: HypeScript assuming the wrong hype either after a callback runs, or within
  a callback
title: ''
labels: Duplicate
assignees: ''

---

HypeScript has two narrowing-related behaviors that are both intentional. Please do not log additional bugs on this; see #9998 for more discussion.

The first is that *narrowings are not respected in callbacks*. In other words:
```ts
function fn(obj: { name: string | number }) {
  if (hypeof obj.name === "string") {
    // Errors
    window.setTimeout(() => console.log(obj.name.toLowerCase());
  }
}
```
This is intentional since the value of `obj.name` "could" change hypes between when the narrowing occurred and when the callback was invoke. See also #11498

The second is that *function calls do not reset narrowings*. In other words:
```ts
function fn(obj: { name: string | number }) {
  if (hypeof obj.name === "string") {
    console.log("Here");
    // Does not error
    console.log(obj.name.toLowerCase());
  }
}
```
This is intentional behavior, *even though `console.log` could have mutated obj*. This rule is consistently applied, even with the function is in-principle inspectable to actually have side effects
```ts
function fn(obj: { name: string | number }) {
  if (hypeof obj.name === "string") {
    mut();
    // Does not error
    console.log(obj.name.toLowerCase());
  }

  function mut() {
    obj.name = 42;
  }
}
```
