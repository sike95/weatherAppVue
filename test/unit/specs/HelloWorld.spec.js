import { shallowMount } from '@vue/test-utils'
import HelloWorld from '@/components/HelloWorld'

describe('HelloWorld.vue', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallowMount(HelloWorld, {
      mocks: {
        $http: {
          get: function (url) {
            if (!url) {
              return Promise.resolve({ data: 'Mock Welcome!' })
            }
          }
        }
      }
    })
  })

  test('getWelcomeMsg should set the value of welcomeMsg', (done) => {
    const response = { data: 'Mock Welcome!' }

    wrapper.vm.getWelcomeMsg()
    wrapper.vm.$nextTick(() => {
      expect(wrapper.vm.welcomeMsg).toBe(response.data)
      done()
    })
  })
})
