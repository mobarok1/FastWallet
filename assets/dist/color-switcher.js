"use strict";
var ColorSwitcher = (function () {
  return {
    init: function (e) {
      var t, r, n, o, c, d;
      "[object Array]" === Object.prototype.toString.call(e) &&
        ((t = document.createDocumentFragment()),
        (r = document.createElement("div")).classList.add("ColorSwitcher"),
        (n = document.createElement("button")).classList.add(
          "ColorSwitcher__control"
        ),
        (o = document.createElement("div")).classList.add(
          "ColorSwitcher__switchs"
        ),
        ((c = document.createElement("link")).rel = "stylesheet"),
        (c.id = "ColorSwitcherLinkHolder"),
        document.head.appendChild(c),
        (d = document.getElementById("ColorSwitcherLinkHolder")),
        e.forEach(function (e, t) {
          var r;
          e.color &&
            e.title &&
            e.href &&
            ((r = document.createElement("button")).classList.add(
              "ColorSwitcher__switch"
            ),
            (r.title = e.title),
            (r.dataset.index = t),
            (r.style.backgroundColor = e.color),
            o.appendChild(r));
        }),
        o.addEventListener("click", function (t) {
          var r;
          if ("BUTTON" === t.target.nodeName)
            return (r = t.target.dataset.index), (d.href = e[r].href), !1;
        }),
        n.addEventListener("click", function (e) {
          return (
            e.target.parentElement.classList.toggle("ColorSwitcher--open"), !1
          );
        }),
        r.appendChild(n),
        r.appendChild(o),
        t.appendChild(r),
        document.body.appendChild(t));
    },
  };
})();
