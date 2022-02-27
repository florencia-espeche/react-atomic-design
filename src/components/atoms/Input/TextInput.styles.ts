import styled, { css } from 'styled-components'

interface StyledWrapperProps {
    disabled?: boolean;
    inputSize: string;
    width: string;
}

interface StyledTextInputProps {
    error: boolean;
    width: string;
}

export const StyledWrapper = styled.div<StyledWrapperProps>`
    position: relative;
    width: ${pr => pr.width};
    ${props =>
        props.inputSize === 'large' &&
        css`
            height: 48px;
        `}
    ${props =>
        props.inputSize === 'medium' &&
        css`
            height: 32px;
        `}
    ${props =>
        props.disabled &&
        css`
            cursor: not-allowed;
        `}
`;

export const StyledTextInput = styled.input<StyledTextInputProps>`
    box-sizing: border-box;
    position: relative;
    background-color: ${ (pr) => pr.error ? '#ffe3e6' : '#EEEEEE' };
    padding: 0;
    width: ${pr => pr.width};
    border: none;
    color: #000;
    ${ pr => pr.disabled ? `
    background-color: #a6a6a6;
    color: #5e5e5e;
    cursor: not-allowed;
    
    &:hover {
        background-color: #a6a6a6 !important;
        color: #5e5e5e !important;
    }
    ` : ''}
    border-radius: 0;
    outline: none;
    transition: 0.1s ease-out;
    
    box-shadow: inset 0 0 0 2px ${pr => pr.error ? '#d93848' : 'transparent'};
    &:focus {
        box-shadow: inset 0 0 0 2px ${pr => pr.error ? '#d93848' : '#000'};
    }
`;
