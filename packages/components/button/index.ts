import { App } from "vue"
import { UxBaseOption, installComponent } from "@ux-web-base/utils"
import UxButton from "./src/index.vue"

// 具名导出
export { UxButton }

// 导出插件
export default {
  install(app: App, options?: UxBaseOption) {
    installComponent(app, UxButton, options)
  }
}