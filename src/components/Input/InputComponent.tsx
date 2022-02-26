import React, { useCallback, useEffect, useRef, useState } from 'react'
import {
    Container,
    AlertMessage,
    Input,
    Label,
    Svg,
    TopContainer,
    Mediumlabel
} from './InputComponent.styles'
import { InputProps } from './InputComponent.types'
import { Eye } from '@svg/Eye'
import { EyeOff } from '@svg/EyeOff'
import { AlertCircle } from '@svg/AlertCircle'
import { useTheme } from '../../hooks/useTheme'

const InputComponent = ({
    variant = 'text',
    label,
    error,
    type = 'text',
    marginTop,
    marginBottom,
    marginLeft,
    marginRight,
    width,
    inputSize = 'large',
    disabled = false,
    mask,
    value,
    ...rest
}: InputProps) => {
    const [isActive, setIsActive] = useState(false)
    const [isEyeOn, setIsEyeOn] = useState(true)
    const inputRef = useRef<HTMLInputElement>(null)
    const [filled, setFilled] = useState(false)

    const theme = useTheme()

    useEffect(() => {
        if (
            inputSize === 'large' &&
            inputRef.current?.value &&
            inputRef.current.value != ''
        ) {
            setIsActive(true)
        }
    })

    useEffect(() => {
        if (!!error && error.message) {
            setIsActive(true)
        }
    }, [error, inputRef])

    const heandleFocus = () => {
        setIsActive(true)
        inputRef.current?.focus()
    }

    const handleBlur = () => {
        if (inputSize === 'medium' || inputRef.current?.value.length === 0) {
            setIsActive(false)
        }
        if (inputRef.current?.value.length > 0) {
            setFilled(true)
        } else {
            setFilled(false)
        }
    }

    const handleEyeClick = () => {
        setIsEyeOn(!isEyeOn)
        if (isEyeOn) {
            inputRef.current?.setAttribute('type', 'text')
        } else {
            inputRef.current?.setAttribute('type', 'password')
        }
    }

    const dateMask = (
        value?: string | ReadonlyArray<string> | number | undefined
    ) => {
        if (!value) return value

        let newValue = `${value}`

        newValue = newValue.replace(/\D/g, '')

        if (newValue.length <= 3) newValue = newValue.replace(/(\d{2})/, '$1/')

        if (newValue.length === 4)
            newValue = newValue.replace(/(\d{2})(\d{2})/, '$1/$2/')

        if (newValue.length > 4)
            newValue = newValue.replace(/(\d{2})(\d{2})(\d)/, '$1/$2/$3')

        return newValue.substring(0, 10)
    }

    const timeMask = (
        value?: string | ReadonlyArray<string> | number | undefined
    ) => {
        if (!value) return value

        let newValue = `${value}`

        newValue = newValue.replace(/\D/g, '')

        if (newValue.length <= 3) newValue = newValue.replace(/(\d{2})/, '$1:')

        if (newValue.length === 4)
            newValue = newValue.replace(/(\d{2})(\d{2})/, '$1:$2:')

        if (newValue.length > 4)
            newValue = newValue.replace(/(\d{2})(\d{2})(\d)/, '$1:$2:$3')

        return newValue.substring(0, 8)
    }

    const handleMask = useCallback(
        (value: any) => {
            if (mask === 'date') {
                return dateMask(value)
            }

            if (mask === 'time') {
                return timeMask(value)
            }

            return value
        },
        [mask]
    )

    return (
        <TopContainer
            data-testid="input-top-container"
            variant={variant}
            label={label}
            inputSize={inputSize}
            error={!!(error && error?.message && error?.message !== '')}
            style={{
                marginTop,
                marginBottom,
                marginLeft,
                marginRight,
                width
            }}
        >
            <Container
                variant={variant}
                onClick={heandleFocus}
                onBlur={handleBlur}
                data-testid="input-container"
                theme={theme}
                disabled={disabled}
                inputSize={inputSize}
            >
                {inputSize === 'medium' && label && (
                    <Mediumlabel
                        isActive={isActive}
                        error={!!(error && error.message)}
                        data-testid="input-label"
                        theme={theme}
                        disabled={disabled}
                    >
                        {label}
                    </Mediumlabel>
                )}
                <Input
                    isFilled={filled}
                    isActive={isActive}
                    isEyeOn={isEyeOn && variant === 'password'}
                    error={!!(error && error.message)}
                    inputSize={inputSize}
                    theme={theme}
                    disabled={disabled}
                >
                    <input
                        data-testid="input"
                        ref={inputRef}
                        disabled={disabled}
                        type={variant === 'password' ? 'password' : 'text'}
                        value={handleMask(value)}
                        {...rest}
                    />
                    {variant === 'password' && (
                        <Svg
                            theme={theme}
                            onClick={() => handleEyeClick()}
                            data-testid="input-eye"
                        >
                            {isEyeOn ? Eye : EyeOff}
                        </Svg>
                    )}
                </Input>
                {inputSize === 'large' && (
                    <Label
                        theme={theme}
                        isActive={isActive}
                        error={!!(error && error.message)}
                        data-testid="input-label"
                        disabled={disabled}
                    >
                        {label}
                    </Label>
                )}
            </Container>
            {error && error.message && (
                <AlertMessage theme={theme} data-testid="input-errorMessage">
                    {AlertCircle}
                    {error?.message}
                </AlertMessage>
            )}
        </TopContainer>
    )
}

export default InputComponent
