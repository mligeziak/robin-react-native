import React from 'react';
import PropTypes from 'prop-types';
import {
  Container,
  Header,
  Title,
  Content,
  Left,
  Right,
  Body,
} from 'native-base';

const AppLayout = ({
  pageTitle,
  children,
}) => (
  <Container>
    <Header>
      <Left />
      <Body>
        <Title>
          {pageTitle}
        </Title>
      </Body>
      <Right />
    </Header>
    <Content padder>
      {children}
    </Content>
  </Container>
);

AppLayout.propTypes = {
  children: PropTypes.node.isRequired,
  pageTitle: PropTypes.string,
};

AppLayout.defaultProps = {
  pageTitle: null,
};

export default AppLayout;
