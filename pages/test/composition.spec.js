import { mount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import storeConfig from './__mocks__/store/counter'
import Composition from '@/pages/Composition'

const localVue = createLocalVue()
localVue.use(Vuex)

const store = new Vuex.Store({
  state: storeConfig().modules.counter.state
})

describe('Composition Page Test', () => {
  it('is render correctly', () => {
    const wrapper = mount(Composition, {
      localVue,
      store
    })

    expect(wrapper.html()).toBeTruthy()
  })
})
