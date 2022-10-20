// import { render, screen, fireEvent } from '@testing-library/vue'
import { shallowMount } from '@vue/test-utils'
import Counter from '@/components/Counter.vue'
import Counter2 from '@/components/Counter2.vue'

// test('increment value on click', async () => {
test('increment value on click', () => {
  const wrapper = shallowMount(Counter)
  const wrapper2 = shallowMount(Counter2)

  wrapper2.setData({ count: 3 })
  expect(wrapper.find('.time-clicked').text()).toContain('times clicked:')
  expect(wrapper2.find('.time-clicked').text()).toBe('times clicked: 3')

  // render(Counter)
  // expect(screen.queryByText('Times clicked: 0')).toBeTruthy()

  // const button = screen.getByText('increment')
  // await fireEvent.click(button)
  // await fireEvent.click(button)
  // expect(screen.queryByText('Times clicked: 2')).toBeTruthy()
})
