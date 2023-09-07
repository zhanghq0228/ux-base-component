import { defineComponent as r, resolveComponent as a, openBlock as s, createBlock as _, normalizeProps as i, guardReactiveProps as d, withCtx as u, renderSlot as p, createElementBlock as f } from "vue";
const m = "u", c = "_Vue3UI", b = (t, e, o) => {
  g(t, o), t.component(e.name, e);
}, g = (t, e = { classPrefix: m }) => {
  t.config.globalProperties[c] = {
    ...t.config.globalProperties[c] ?? {},
    classPrefix: e.classPrefix
  };
}, x = {
  key: 1,
  class: "ddd-test"
}, v = 123, P = /* @__PURE__ */ r({
  __name: "index",
  setup(t) {
    return console.log("output->abc", v), (e, o) => {
      const n = a("el-button");
      return s(), _(n, i(d(e.$attrs)), {
        default: u(() => [
          e.$slots.default ? p(e.$slots, "default", { key: 0 }, void 0, !0) : (s(), f("span", x, "按钮"))
        ]),
        _: 3
      }, 16);
    };
  }
});
const C = (t, e) => {
  const o = t.__vccOpts || t;
  for (const [n, l] of e)
    o[n] = l;
  return o;
}, k = /* @__PURE__ */ C(P, [["__scopeId", "data-v-e850628b"]]), B = {
  install(t, e) {
    b(t, k, e);
  }
};
export {
  k as UxButton,
  B as default
};
