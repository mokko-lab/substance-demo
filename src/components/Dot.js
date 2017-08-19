import styled from 'styled-components';

export default styled.div`
  background: ${props => props.color};
  text-align: center;
  line-height: ${props => props.size || 128}px;
  color: white;
  width: ${props => props.size || 128}px;
  height: ${props => props.size || 128}px;
  border-radius: ${props => (props.size || 128) / 2}px;

  margin: 10px;
  display: inline-block;
`
