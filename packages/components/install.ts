import { App } from "vue"
import { UxBaseOption, installComponent } from "@ux-web-base/utils"
import { components } from "./components"

const UxBase = {
  install(app: App, options?: UxBaseOption) {
    components.forEach(component => {
      installComponent(app, component, options)
    })
  }
}

export default UxBase
