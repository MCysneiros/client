import styled, { css } from "styled-components"
import media ,{DefaultBreakpoints}from 'styled-media-query'


type breakpoints = keyof DefaultBreakpoints
export type MediaMatchProps={
  lessThan?: breakpoints
  greaterThan?: breakpoints
}

export default styled.div<MediaMatchProps>`

${({lessThan,greaterThan})=>css`


`}`