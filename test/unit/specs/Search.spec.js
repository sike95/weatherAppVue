import { shallow } from 'avoriaz'
import Search from '@/components/Search'

describe('Search Component', () => {
  it('When button is clicked it calls the save method', () => {
    const wrapper = shallow(Search)
    const save = jest.fn()
    wrapper.vm.save = save
    wrapper.update()

    const button = wrapper.find('.btn-primary')[0]
    button.trigger('click')
    expect(save.mock.calls.length).toBe(1)
  })
})
