import React, { Component } from 'react'

class HeaderComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 
        }
    }

    render() {
        return (
            <div>
                <header>
                    <nav className="header-component">
                    <div><a href="#" className="navbar-brand">Student Management App</a></div>
                    </nav>
                </header>
            </div>
        )
    }
}

export default HeaderComponent;
