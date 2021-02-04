import styled from 'styled-components';
import { IdynamicBackgroundColor, dynamicBackgroundColor } from 'components/utils';

export interface IMainContainerProps extends IdynamicBackgroundColor {
  centralized?: Boolean;
}
export const MainContainer = styled.main<IMainContainerProps>`
  width: 100vw;
  height: 100vh;
  display: flex;
  background-color: ${dynamicBackgroundColor};
  justify-content: ${({centralized}) => centralized ? 'center':'flex-start'};
  align-items: ${({centralized}) => centralized ? 'center':'flex-start'};
`;