import styled from 'styled-components';

import { FlexBoxCol, FlexBoxRow } from './components/styled/styled';
import { MetamaskButton } from './components/MetamaskConnect';
import './App.css';

const StyledApp = styled.div`
  min-height: 100vh;
  padding: 20px 20px;
`;

const AppContainer = styled.div`
  max-width: 900px;
  margin: 0 auto;
`;

export const App = () => {
  return (
    <StyledApp>
      <AppContainer>
        <FlexBoxCol>
          <FlexBoxRow>
            <MetamaskButton />
          </FlexBoxRow>
        </FlexBoxCol>
      </AppContainer>
    </StyledApp>
  );
};
