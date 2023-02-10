import styled from 'styled-components';

const LayoutCss = styled.div`
  padding: 1em;
  margin: 1em 1em;
`;

const Layout = (props) => {
  return <LayoutCss>{props.children}</LayoutCss>;
};

export default Layout;
