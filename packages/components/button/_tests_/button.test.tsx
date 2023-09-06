import { describe, expect, it ,test} from 'vitest';
import { mount } from '@vue/test-utils'

import {UxButton} from '@ux-web-base/components'



describe('Button.vue', () => {
  it('create primary', () => {
    const wrapper = mount(() => <UxButton type="primary" />)
    

    expect(wrapper.classes('el-button--primary')).toBe(true)
    // expect(wrapper.classes()).toContain('el-button')
  })

  it('disabled', async () => {
    const wrapper = mount(() => <UxButton disabled />)

    expect(wrapper.classes()).toContain('is-disabled')
    await wrapper.trigger('click')
    expect(wrapper.emitted('click')).toBeUndefined()
  })
  test('loading implies disabled', async () => {
    const wrapper = mount(() => (
      <UxButton
        v-slots={{
          default: () => AXIOM,
        }}
        loading
      />
    ))

    await wrapper.trigger('click')
    expect(wrapper.emitted('click')).toBeUndefined()
  })
})


