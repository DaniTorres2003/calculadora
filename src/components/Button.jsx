import React from 'react';
import './Button.css'

export default props => {
  let classe = 'button ';
  classe += props.operation ? 'operation' : '';
  classe += props.double ? 'double' : '';
  classe += props.triple ? 'triple' : '';

  return (
    <button className={classe} onClick={_ => props.click && props.click(props.label)}>
      { props.label }
    </button>
  )
}