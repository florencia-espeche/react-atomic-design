import { defaultTheme } from '../../styles/defaultTheme'
import styled, { css } from 'styled-components'
import { TagProps } from './TagComponent.types'

type TagStyleProps = Pick<TagProps, 'type'>

const tagStyles = {
    success: css`
        color: ${defaultTheme.colors.suport.success};
        background-color: ${defaultTheme.colors.suport.successLight};
    `,
    warning: css`
        color: ${defaultTheme.colors.suport.warning};
        background-color: ${defaultTheme.colors.suport.warningLight};
    `,
    danger: css`
        color: ${defaultTheme.colors.suport.error};
        background-color: ${defaultTheme.colors.suport.errorLight};
    `,
    inactive: css`
        color: ${defaultTheme.colors.neutral.soft};
        background-color: ${defaultTheme.colors.neutral.light[300]};
    `,
    default: css`
        color: ${defaultTheme.colors.primary};
        background-color: ${defaultTheme.colors.blue.light};
    `
}

export const Container = styled.div<TagStyleProps>`
    width: 120px;
    height: 24px;
    border-radius: 4px;
    display: flex;
    justify-content: center;
    align-items: center;
    ${props => props.theme.fontTokens[100]};
    ${props => tagStyles[props.type]};
`
