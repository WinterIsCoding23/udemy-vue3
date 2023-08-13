import { Form as VeeForm, Field as VeeField } from 'vee-validate'

// install(){} can have a second argument "options"
// ...can be used in the importing component as an object
// ...in this project not necessary, hence omitted
export default {
  install(app) {
    app.component('VeeForm', VeeForm)
    app.component('VeeField', VeeField)
  }
}
