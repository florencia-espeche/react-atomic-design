import styled, { css } from 'styled-components'

interface ButtonStyleProps {
    buttonSize?: string
    disabled?: boolean
    variant?: string
}

const buttonTypes = {
    primary: css`
        background-color: ${props => props.theme.colors.primary};
        color: ${props => props.theme.colors.neutral.white};
        &:hover {
            background-color: ${props => props.theme.colors.secondary};
        }
    `,
    secondary: css`
        background-color: ${props => props.theme.colors.neutral.white};
        color: ${props => props.theme.colors.primary};
        &:hover {
            background-color: #d1e5ff;
        }
    `,
    danger: css`
        background-color: ${props => props.theme.colors.suport.error};
        color: ${props => props.theme.colors.neutral.white};
        &:hover {
            background-color: #9b1c13;
        }
    `
}

const DISABLED = css`
    background-color: #eeeeee;
    color: '#AAAAA';
    cursor: not-allowed;
    &:hover {
        background: #d4d4d4;
        color: #f5f5f5;
        box-shadow: none;
    }
`
export const StyledButton = styled.button<ButtonStyleProps>`
    padding: 10px 15px;
    cursor: pointer;
    ${props => buttonTypes[props.variant]}
    ${props =>
        props.buttonSize === 'large' &&
        css`
            width: 328px;
            height: 48px;
        `}
    ${props =>
        props.buttonSize === 'small' &&
        css`
            width: auto;
            height: 32px;
            padding: 4px 12px;
        `}
    ${props => props.disabled && DISABLED}
    border-style: none;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: ${props => props.theme.borderRadius};
    ${props => props.theme.fontTokens['200']};
    font-weight: ${props => props.theme.fontWeight.bold};
    transition: background-color 0.3s;
`
