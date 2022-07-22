import { mount } from '@vue/test-utils'
import Footer from '@/components/Footer.vue'

describe('Check e-mail in footer', () => {
  it("updated e-mail is in footer", () => {
    const wrapper = mount(Footer)
    expect(wrapper.html()).toContain('hello@lea-buende.com')
  })
})