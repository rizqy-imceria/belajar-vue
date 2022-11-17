import { shallowMount } from '@vue/test-utils'
import HelloWorld from '@/components/HelloWorld'

describe('Hello World', () => {
  it('it is rendered correctly', () => {
    const msg = 'hello coy'
    const wrapper = shallowMount(HelloWorld, { propsData: { msg } })

    expect(wrapper.text()).toMatch(msg)
  })
})
