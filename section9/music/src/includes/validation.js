// defineRule: allows to register a rule globally = available to every validation form
import { Form as VeeForm, Field as VeeField, defineRule, ErrorMessage } from 'vee-validate'
import { required, min, max, alpha_spaces as alphaSpaces } from '@vee-validate/rules'

// install(){} can have a second argument "options"
// ...can be used in the importing component as an object
// ...in this project not necessary, hence omitted
export default {
  install(app) {
    app.component('VeeForm', VeeForm)
    app.component('VeeField', VeeField)
    app.component('ErrorMessage', ErrorMessage)

    defineRule('required', required)
    defineRule('min', min)
    defineRule('max', max)
    defineRule('alpha_spaces', alphaSpaces)
  }
}

// defineRule("name of rule", function that performs the validation)
