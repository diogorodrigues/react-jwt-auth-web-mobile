import styled, { css } from 'styled-components/native';
import FeatherIcon from 'react-native-vector-icons/Feather';

interface ContainerProps {
  isFocused: boolean;
  isErrored: boolean;
}

export const Container = styled.View<ContainerProps>`
  width: 100%;
  height: 60px;
  padding: 0 16px;
  background: #ffffff;
  border: 1px solid #dfdfdf;
  margin-bottom: 8px;

  flex-direction: row;
  align-items: center;

  ${(props) =>
    props.isErrored &&
    css`
      border-color: #c53030;
    `}

  ${(props) =>
    props.isFocused &&
    css`
      border-color: #0070ba;
    `}
`;

export const TextInput = styled.TextInput`
  flex: 1;
  color: #0e0d11;
  font-size: 16px;
  font-family: 'Roboto-Medium';
`;

export const Icon = styled(FeatherIcon)`
  margin-right: 16px;
`;
