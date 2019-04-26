import { shallowMount } from '@vue/test-utils'
import Home from '@/components/Home'

describe('Home.vue', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallowMount(Home, {
      mocks: {
        $http: {
          get: function (url) {
            return Promise.resolve({ data: 'Mock Welcome!' })
          }
        }
      }
    })
  })

  test('getWelcomeMsg should set the value of welcomeMsg', async (done) => {
    const response = { data: 'Mock Welcome!' }

    const test = wrapper.vm.fetch('jhb', 'za')
    wrapper.vm.$nextTick(() => {
      expect(wrapper.vm.weather.data).toBe(response.data)
      done()
    })
  })
})
