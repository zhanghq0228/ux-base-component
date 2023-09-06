import { defineComponent as c, resolveComponent as a, openBlock as n, createBlock as r, normalizeProps as i, guardReactiveProps as u, withCtx as _, renderSlot as f, createElementBlock as p } from "vue";
const m = "u", s = "_Vue3UI", d = (e, o, t) => {
  P(e, t), e.component(o.name, o);
}, P = (e, o = { classPrefix: m }) => {
  e.config.globalProperties[s] = {
    ...e.config.globalProperties[s] ?? {},
    classPrefix: o.classPrefix
  };
}, b = { key: 1 }, g = 123, C = /* @__PURE__ */ c({
  __name: "index",
  setup(e) {
    return console.log("output->abc", g), (o, t) => {
      const l = a("el-button");
      return n(), r(l, i(u(o.$attrs)), {
        default: _(() => [
          o.$slots.default ? f(o.$slots, "default", { key: 0 }) : (n(), p("span", b, "按钮"))
        ]),
        _: 3
      }, 16);
    };
  }
}), x = [C], k = {
  install(e, o) {
    x.forEach((t) => {
      d(e, t, o);
    });
  }
};
export {
  C as UxButton,
  k as default
};
