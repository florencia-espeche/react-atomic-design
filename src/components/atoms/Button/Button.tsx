import React, { HTMLAttributes } from 'react'
import { StyledButton } from './Button.styles'
import { useTheme } from '../../../hooks/useTheme'

export interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
    /** Which size would you like to see */
    buttonSize?: 'large' | 'small'
    /** Make the button disabled or not */
    disabled?: boolean
    /** To handle onClick functions */
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
    /** Provide a text for the button */
    text: string
    /** Which variant look would you like to see */
    variant?: 'primary' | 'secondary' | 'danger'
}

/** This is a reusable button */
export const Button = ({
    buttonSize = 'small',
    disabled,
    onClick,
    text,
    variant = 'primary',
    ...rest
}: ButtonProps) => {
    
    const theme = useTheme()

    return (
        <StyledButton
            buttonSize={buttonSize}
            disabled={ disabled}
            onClick={onClick}
            theme={theme}
            variant={variant} 
            {...rest}
        >
            {text}
        </StyledButton>
    )
}
