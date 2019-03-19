import React from 'react';

function Navbar(props){
    console.log('navbar', props)
    return(
        <nav>
            <div className=" teal lighten-1 nav-wrapper">
                <a href="#!" className="brand-logo">Logo</a>
                <ul className="right hide-on-med-and-down">
                    <li><a href="#"><i className="material-icons left">search</i>Home</a></li>
                    <li><a href="#"><i className="material-icons right">view_module</i>New Question</a></li>
                    <li><a href='#'>Leader Board</a></li>
                    <li style={{paddingRight: '10px'}} >Hello {props.name}</li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;