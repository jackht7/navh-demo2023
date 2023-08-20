import styled from 'styled-components';
import { FlexBoxCol, FlexBoxRow } from '~/components/styled/styled';
import { MetamaskButton } from '~/components/MetamaskConnect';
import Routes from './routes';
import { ThemeCustomization } from './themes';
import './App.css';

export const App = () => {
  return (
    <ThemeCustomization>
      <Routes />
    </ThemeCustomization>
  );
};
