import styled from 'styled-components';

const CardCss = styled.div`
  margin: 6rem;
  padding: 1rem;
  border-radius: 14px;
  /* box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26); */
  background-color: #fff;
`;

const Card = (props) => {
  return <CardCss>{props.children}</CardCss>;
};

export default Card;
