import { defineComponent as l, resolveComponent as a, openBlock as n, createBlock as r, normalizeProps as i, guardReactiveProps as u, withCtx as _, renderSlot as f, createElementBlock as p } from "vue";
const m = "u", s = "_Vue3UI", d = (o, t, e) => {
  b(o, e), o.component(t.name, t);
}, b = (o, t = { classPrefix: m }) => {
  o.config.globalProperties[s] = {
    ...o.config.globalProperties[s] ?? {},
    classPrefix: t.classPrefix
  };
}, P = { key: 1 }, g = l({
  name: "UxButton"
}), B = /* @__PURE__ */ l({
  ...g,
  setup(o) {
    return console.log("output->abc", 123), (e, x) => {
      const c = a("el-button");
      return n(), r(c, i(u(e.$attrs)), {
        default: _(() => [
          e.$slots.default ? f(e.$slots, "default", { key: 0 }) : (n(), p("span", P, "按钮"))
        ]),
        _: 3
      }, 16);
    };
  }
}), C = [B], h = {
  install(o, t) {
    C.forEach((e) => {
      d(o, e, t);
    });
  }
};
export {
  B as UxButton,
  h as default
};
