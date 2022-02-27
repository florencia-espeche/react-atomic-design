import React from 'react'
import { Button } from '../Button'
import { fireEvent, render } from '../../../../lib/test-utils'
import '@testing-library/jest-dom/extend-expect'

describe('Button Component', () => {
    it('Should be able pass to snapshot test', () => {
        const { container } = render(<Button text="Test" />)
        expect(container.firstChild).toMatchSnapshot()
    })

    it('Should render a small size', () => {
        const { container } = render(<Button text="Test" buttonSize="small" />)
        expect(container.firstChild).toMatchSnapshot()
    })

    it('Should render a secondary version', () => {
        const { container } = render(<Button text="Test" variant="secondary" />)
        expect(container.firstChild).toMatchSnapshot()
    })

    it('Should render a danger version', () => {
        const { container } = render(<Button text="Test" variant="danger" />)
        expect(container.firstChild).toMatchSnapshot()
    })

    it('Should render a disabled button', () => {
        const { container } = render(<Button text="Test" disabled />)
        expect(container.firstChild).toMatchSnapshot()
    })

    it('should render the button without crashing', () => {
        // render the button and get the getByRole method
        const { getByRole } = render(<Button text="test" />)
        // getByRole as its name gets a selector by its role.
        // in this case we're looking for a `button`.
        // then we make sure it's in the document
        expect(getByRole('button')).toBeInTheDocument()
    })

    it('should call the onClick method when a user clicks on the button', () => {
        // mock out our OnClick function
        const mockClick = jest.fn()
        const { getByRole } = render(<Button text="test" onClick={mockClick} />)
        // we store a variable with the button element
        const buttonElement = getByRole('button')
        // Simulate a user clicking on the button
        fireEvent.click(buttonElement)
        expect(mockClick).toHaveBeenCalledTimes(1)
    })
})
