import { describe, it, expect } from "vitest"
import Welcome from "../TheWelcome.vue"
import { mount } from "@vue/test-utils"
describe("Welcome", () => {
    it('should render properly', () => {
        const wrapper = mount(Welcome)
        expect(wrapper.html()).toMatchSnapshot()
    })
})
