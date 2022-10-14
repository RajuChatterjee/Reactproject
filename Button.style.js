// import styled from "styled-components";


// export const StyledButton = styled.button`
// border : 3px solid red;
// background-color: beige;
// color: brown;
// padding : 15px 30px;
// text-align: center;
// text-size-adjust : 30px
// display  inline-block;
// cursor: pointer;
// font-size: 50px;
// `
//   ;



import styled from "styled-components";

export const StyledButton = styled.button`
  border: 3px solid #ff4d4d;
  background-color: ${(props) =>
    props.varient === "outline" ? "#ffffb3" : "#cb7171"};
  color: ${(props) => (props.varient === "outline" ? "#cb7171" : "#ffffb3")};
  padding: 15px 30px;
  text-align: center;
  display: inline-block;
  cursor: pointer;
  font-size: 50px;

  &:hover {
    background-color: ${(props) =>
      props.varient !== "outline" ? "#ffffb3" : "#cb7171"};
  }
`;

export const FancyButton = styled(StyledButton)`
  background-image: linear-gradient(to left, #f6d365 0%, #fda085 100%);
  border: 10px solid blue;
`;

export const SubmitButton = styled(StyledButton).attrs({
  type: "submit",
})`
  box-shadow: 0 9px #999;

  &:active {
    background-color: ${(props) =>
      props.variant !== "outline" ? "#fff" : "#4caf50"};
    box-shadow: 0 5px #666;
  }
`
