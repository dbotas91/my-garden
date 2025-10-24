---
{"tags":["elearning"],"dg-publish":true,"dg-note-icon":"lackluster","noteIcon":"lackluster","permalink":"/04-resources-material-para-zettel/elearning/center-element-in-css/","dgPassFrontmatter":true,"created":"2025-10-16T09:48:32.028+01:00","updated":"2025-10-24T13:21:03.513+01:00"}
---
 

# Center element in CSS

|   |   |
|---|---|
|![](list_gray%2031.svg)Content Type|Code snippets|
|![](list_gray%2031.svg)Topic|Front end|
|![](link_gray%2018.svg)Link|[https://css-tricks.com/centering-css-complete-guide/](https://css-tricks.com/centering-css-complete-guide/)|
|![](clock_gray%208.svg)Created time|@February 7, 2022 11:44 AM|
|![](checkmark-square_gray%208.svg)Finished||

# ↔️ Horizontally

**Inline elements**

**Block level elements**

```CSS
.center {
  text-align: center;
}
```

```CSS
.center-me {
  margin: 0 auto;
}
```

---

# ↕️ Vertically

**Inline elements**

**Block level elements**

```CSS
.center {
  text-align: center;
}
```

```CSS
.center-me {
  margin: 0 auto;
}
```

---

# 🔄 Horizontally and vertically

**Fixed width and height**

**Flexbox method**

```CSS
.parent {
  position: relative;
}

.child {
  width: 300px;
  height: 100px;
  padding: 20px;

  position: absolute;
  top: 50%;
  left: 50%;

  margin: -70px 0 0 -170px;
}
```

```CSS
.parent {
  display: flex;
  justify-content: center;
  align-items: center;
}
```