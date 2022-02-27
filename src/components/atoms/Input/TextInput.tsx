import React, { ChangeEventHandler, HTMLAttributes } from 'react'
import { StyledTextInput, StyledWrapper } from './TextInput.styles'
import { useTheme } from '../../../hooks/useTheme'

export interface TextInputProps
    extends HTMLAttributes<HTMLInputElement> {
    disabled?: boolean
    error?: boolean
    inputSize?: 'large' | 'medium' | 'small'
    value?: string
    width?: string
    onChange?: ChangeEventHandler<HTMLInputElement>
}

export const TextInput: React.ForwardRefRenderFunction<
    HTMLInputElement,
    TextInputProps
> = props => {
    const {
        disabled = false,
        error = false,
        inputSize = 'medium',
        value,
        onChange,
        placeholder,
        width = '100%',
        ...rest
    } = props

    const theme = useTheme()

    const styles = {
        disabled: disabled,
        error,
        width
    }

    return (
        <StyledWrapper inputSize={inputSize} width={width} theme={theme}>
            <StyledTextInput
                data-testid="input"
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                theme={theme}
                {...styles}
                {...rest}
            />
        </StyledWrapper>
    )
}
