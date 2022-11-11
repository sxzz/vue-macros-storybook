import { StorybookViteConfig } from '@storybook/builder-vite'

const VueMacros = require('unplugin-vue-macros/vite')

const config: StorybookViteConfig = {
  core: {
    builder: '@storybook/builder-vite',
    disableTelemetry: true,
  },
  stories: ['../src/**/*.stories.@(js|jsx|ts|tsx|mdx)'],
  features: {
    interactionsDebugger: true,
    buildStoriesJson: true,
  },
  framework: '@storybook/vue3',
  addons: ['@storybook/addon-essentials'],

  viteFinal(config, { configType }) {
    config.plugins = config.plugins ?? []
    config.plugins.unshift(VueMacros())
    config.resolve!.dedupe = ['@storybook/client-api', '@emotion/react', 'vue']

    if (configType !== 'PRODUCTION') {
      config.optimizeDeps!.include = [
        ...(config?.optimizeDeps?.include ?? []),
        '@storybook/vue3/dist/esm/client/preview/config',
        '@storybook/vue3/dist/esm/client/docs/config',
        '@storybook/addon-docs/preview.js',
      ]
    }

    // return the customized config
    return config
  },
}

export default config
