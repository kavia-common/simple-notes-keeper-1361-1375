import React from 'react';
// PUBLIC_INTERFACE
function FloatingAddButton(props){return (<button className="fab" onClick={props.onClick} aria-label="Create new note" title="Create new note"><span className="fab__icon">+</span></button>);}
export default FloatingAddButton;
