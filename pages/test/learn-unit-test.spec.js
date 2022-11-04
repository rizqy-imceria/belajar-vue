import { mount } from '@vue/test-utils'
import LearnUnitTest from '../learn-unit-test.vue'

describe('learn-unit-test.vue', () => {
  it('renders this page', () => {
    const wrapper = mount(LearnUnitTest)

    expect(wrapper.html().includes('hanya tampil di input 1 dan 2')).toBe(true)
  })
})
