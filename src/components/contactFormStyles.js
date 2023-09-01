import styled from "@emotion/styled"

export const StyledInlineErrorMessage = styled.div`
  background-color: rgb(255, 245, 245);
  color: rgb(120, 27, 0);
  display: block;

  padding: 0.5rem 0.75rem;
  margin-top: 0.5rem;
  white-space: pre-line;
`;

export const Button = styled.button`
  width: 100%;
  margin-top: 1.5rem;

  overflow: visible;
  white-space: nowrap;
  text-transform: none;
  -webkit-appearance: none;
  border-radius: 0;
  display: inline-block;
  box-sizing: border-box;
  padding: 0.5rem 30px;
  vertical-align: middle;
  font-size: 1rem;
  line-height: 1.5rem;
  text-align: center;
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 0.005em;
  transition: .1s ease-in-out;
  transition-property: all;
  transition-property: color,background-color,border-color;

  background-color: #663399;
  color: #fff;
  border: 1px solid transparent;

  &:active,
  &:focus,
  &:hover {
    cursor: pointer;
    background-color: #552a80;
    color: #fff;
  }

  &:disabled {
    cursor: pointer;
    background-color: #fafbfc;
    color: #999 !important;
    border-color: #e5e5e5;
    box-shadow: none;
    &:hover,
    &:focus {
      cursor: not-allowed;
    }
  }
`;
