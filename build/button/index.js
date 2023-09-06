import { defineComponent as a, resolveComponent as c, openBlock as n, createBlock as r, normalizeProps as i, guardReactiveProps as u, withCtx as _, renderSlot as f, createElementBlock as p } from "vue";
const m = "u", s = "_Vue3UI", d = (o, e, t) => {
  P(o, t), o.component(e.name, e);
}, P = (o, e = { classPrefix: m }) => {
  o.config.globalProperties[s] = {
    ...o.config.globalProperties[s] ?? {},
    classPrefix: e.classPrefix
  };
}, b = { key: 1 }, g = 123, C = /* @__PURE__ */ a({
  __name: "index",
  setup(o) {
    return console.log("output->abc", g), (e, t) => {
      const l = c("el-button");
      return n(), r(l, i(u(e.$attrs)), {
        default: _(() => [
          e.$slots.default ? f(e.$slots, "default", { key: 0 }) : (n(), p("span", b, "按钮"))
        ]),
        _: 3
      }, 16);
    };
  }
}), k = {
  install(o, e) {
    d(o, C, e);
  }
};
export {
  C as UxButton,
  k as default
};
