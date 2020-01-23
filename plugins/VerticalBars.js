import Vue from 'vue'
import upperFirst from 'lodash/upperFirst'
import camelCase from 'lodash/camelCase'

const requireComponent = require.context(
  '~/components',
  false,
  /[A-Z]\w+\.(vue|js)$/
)

requireComponent.keys().forEach((filename) => {
  const componentConfig = requireComponent(filename)

  const componentName = upperFirst(
    camelCase(filename.replace(/^\.\/(.*)\.\w+$/, '$1'))
  )

  Vue.component(componentName, componentConfig.default || componentConfig)
})
