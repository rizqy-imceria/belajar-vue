import { mount } from '@vue/test-utils'
import Admin from '@/components/Admin.vue'

describe('Test Component Admin.vue', () => {
  it('display not authorized', () => {
    const wrapper = mount(Admin)

    console.log(wrapper.text())

    expect(wrapper.text()).toBe('Not Authorized')
  })

  it('display authorized', () => {
    const wrapper = mount(Admin, {
      propsData: {
        isAdmin: true
      }
    })

    // mount(Admin, { props: {}})

    console.log(wrapper.text())

    expect(wrapper.text()).toBe('Admin Privileges')
  })
})
