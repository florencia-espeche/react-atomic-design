import React from 'react'
import { TextInput } from '../TextInput'
import { fireEvent, render } from '../../../../lib/test-utils'
import 'jest-styled-components'

describe('TextInput Component', () => {
    it('Should be able to match a snapshot', () => {
        const { container } = render(<TextInput placeholder="Test" />)

        expect(container.firstChild).toMatchSnapshot()
    })

    it('Should render the component with medium size', () => {
        const { container } = render(
            <TextInput placeholder="Test" inputSize="medium" />
        )

        expect(container.firstChild).toMatchSnapshot()
    })

    it('Should be able to match a snapshot with true parameter', () => {
        const { container } = render(
            <TextInput placeholder="Test" error={false} />
        )

        expect(container.firstChild).toMatchSnapshot()
    })

    it('Should be able to change a value of input', () => {
        const { getByTestId } = render(
            <TextInput
                error={false}
                placeholder="placeholder"
                onChange={jest.fn}
            />
        )
        const input = getByTestId('input')
        const value = 'value'
        fireEvent.change(input, { target: { value } })
        expect((input as HTMLInputElement).value).toBe(value)
    })
})
