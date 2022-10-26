import { mount } from '@vue/test-utils'
import NumberRenderer from '@/components/NumberRenderer.vue'

describe('NumberRenderer', () => {
  it('render even number', () => {
    const wrapper = mount(NumberRenderer, {
      propsData: {
        even: true
      }
    })

    expect(wrapper.text()).toBe('2, 4, 6, 8')
  })

  it('render odds number', () => {
    const wrapper = mount(NumberRenderer, {
      propsData: {
        even: false
      }
    })

    expect(wrapper.text()).toBe('1, 3, 5, 7, 9')
  })
})
