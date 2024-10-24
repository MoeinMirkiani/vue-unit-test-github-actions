import { describe, it, expect } from "vitest"
import Counter from "../Counter.vue"
import { mount } from "@vue/test-utils"

describe("Counter", () => {
    it('should render properly', () => {
        const wrapper = mount(Counter)
        expect(wrapper.html()).toMatchSnapshot()
    })
})
