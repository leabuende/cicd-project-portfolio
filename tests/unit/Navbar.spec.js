import { mount } from '@vue/test-utils'
import Navbar from '@/components/Navbar.vue'

describe('Check e-mail in footer', () => {
  it("updated e-mail is in footer", async () => {
    const wrapper = mount(Navbar, {
        stubs: ['router-link']
    })
    await wrapper.find('div.burger-menu').trigger('click')
    expect(wrapper.vm.burgerToggle).toBe(true)
  })
})