// defineRule: allows to register a rule globally = available to every validation form
import {
  Form as VeeForm,
  Field as VeeField,
  defineRule,
  ErrorMessage,
  configure
} from 'vee-validate'
import {
  required,
  min,
  max,
  alpha_spaces as alphaSpaces,
  email,
  numeric,
  min_value as minVal,
  max_value as maxVal,
  confirmed,
  not_one_of as excluded
} from '@vee-validate/rules'

// install(){} can have a second argument "options"
// ...can be used in the importing component as an object
// ...in this project not necessary, hence omitted
export default {
  install(app) {
    app.component('VeeForm', VeeForm)
    app.component('VeeField', VeeField)
    app.component('ErrorMessage', ErrorMessage)

    defineRule('required', required)
    defineRule('tos', required)
    defineRule('min', min)
    defineRule('max', max)
    defineRule('alpha_spaces', alphaSpaces)
    defineRule('email', email)
    defineRule('numeric', numeric)
    defineRule('min_value', minVal)
    defineRule('max_value', maxVal)
    // defineRule('confirmed', confirmed)
    defineRule('passords_mismatch', confirmed)
    defineRule('excluded', excluded)
    defineRule('country_excluded', excluded)

    configure({
      generateMessage: (ctx) => {
        const messages = {
          required: `The field ${ctx.name} is required.`,
          min: `The field ${ctx.name} is too short.`,
          max: `The field ${ctx.name} is too long.`,
          alpha_spaces: `The field ${ctx.name} may only contain alphabetical characters and spaces.`,
          email: `The field ${ctx.name} must be a valid email.`,
          min_value: `The field ${ctx.name} is too low.`,
          max_value: `The field ${ctx.name} is too high.`,
          excluded: `You are not allowed to use this value for the field ${ctx.field}.`,
          country_excluded: `Due to restrictions, we are not allowed to accept useres from this location.`,
          passwords_mismatch: "The passwords don't match.",
          tos: 'You must accept the Terms of Service.'
        }

        const message = messages[ctx.rule.name]
          ? messages[ctx.rule.name]
          : `The field ${ctx.field} is invalid.`

        return message
      }
    })
  }
}

// defineRule("name of rule", function that performs the validation)
