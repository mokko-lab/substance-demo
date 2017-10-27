import styled from 'styled-components';



const CodeBlock = styled.div`
  position: absolute;
  left:0;
  top:0;
  width:100%;
  height: 100%;
  overflow: auto;
  display: ${props => props.visible ? 'block' : 'none' };
  border-radius: 6px;

  &>pre {
    position: absolute;
    left:0;
    top:0;
    margin:0;
    width:100%;
    height:100%;
  }
`;

const IconButton = styled.div`
  position: absolute;
  right:15px;
  top:15px;
  opacity: 0.6;
  cursor: pointer;

  &:hover {
    opacity: 0.9;
  }
`;

const Close = styled.div`
  position: absolute;
  right: 10px;
  top: 10px;
  width: 50px;
  height: 50px;
  cursor: pointer;
  background: rgba(255, 255, 255, 0.1);
  display: block;
  z-index: 1;
  border-radius: 3px;

  span {
    display: block;
    position: relative;
    width:100%;
    height:100%;
  }
  span:after {
    height:2px;
    background:white;
    content: '';
    display:block;
    width:90%;
    top:50%;
    left:5%;
    position: absolute;
    transform: rotate(-45deg);
  }
  span:before {
    height:2px;
    background:white;
    content: '';
    display:block;
    top:50%;
    left:5%;
    width:90%;
    position: absolute;
    transform: rotate(45deg);
  }
`;

export {
  CodeBlock,
  Close,
  IconButton
}
