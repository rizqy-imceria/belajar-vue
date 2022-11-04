import { mount } from '@vue/test-utils'
import LearnUnitTest from '../learn-unit-test.vue'

describe('learn-unit-test.vue', () => {
  it('renders default', () => {
    const wrapper = mount(LearnUnitTest)

    expect(wrapper.html().includes('hanya tampil di input 1 dan 2')).toBe(true)
  })

  it('renders with no props', () => {
    const wrapper = mount(LearnUnitTest)

    expect(wrapper.html().includes('props foo: foo')).toBe(true)
  })

  it('renders with props', () => {
    const wrapper = mount(LearnUnitTest, {
      propsData: {
        foo: 'cuy'
      }
    })

    expect(wrapper.find('p.props').text().includes('props foo: cuy')).toBe(true)
  })
})
