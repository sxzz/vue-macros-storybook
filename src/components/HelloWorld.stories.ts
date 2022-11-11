import { Meta, StoryFn } from '@storybook/vue3'
import HelloWorldCMP from './HelloWorld.vue'

export default {
  title: 'HelloWorld',
  component: HelloWorldCMP,
} as Meta<typeof HelloWorldCMP>

const HelloWorldTemplate: StoryFn<typeof HelloWorldCMP> = (args) => ({
  components: {
    HelloWorld: HelloWorldCMP,
  },
  setup() {
    return { args }
  },
  template: '<HelloWorld v-bind="args" />',
})

export const HelloWorldStory: StoryFn<typeof HelloWorldCMP> =
  HelloWorldTemplate.bind({})
HelloWorldStory.args = {
  categoriesTeaser: [
    {
      name: 'Test Hello World',
    },
  ],
}
HelloWorldStory.decorators = [
  () => ({ template: '<div class="max-w-[577px]"><story/></div>' }),
]
