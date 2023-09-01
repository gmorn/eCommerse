import { css, styled } from 'styled-components'

type T_Active = {
  active: boolean
}

export const OrgSwitcherContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px 0;
  gap: 200px;
`

export const SwitcherButton = styled.div<T_Active>`
  padding: 5px 10px;
  font-size: 20px;
  cursor: pointer;
  transition: 400ms scale;
  ${(props) =>
		props.active && css`
    padding-bottom: 3px;
    transform: scale(1.03);
      border-bottom: 2px solid var(--color-accent);
    `}
`