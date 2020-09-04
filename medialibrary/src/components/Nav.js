import React from 'react';
import { withRouter } from "react-router";
import { Link } from "react-router-dom";
import styled from "styled-components";

const NavLocation = () => {

    return (

        <NavBar role="navigation">
            <Menu>
                <NavItem>
                    <NavLink className="nav-link" to="/">Home</NavLink>
                </NavItem>
                <NavItem className="nav-item">
                    <NavLink className="nav-link" to="/author/add">Add author</NavLink>
                </NavItem>
            </Menu>
        </NavBar>
    )
}

const NavBar = styled.nav`
    background: #222;
`;

const Menu = styled.ul`
    display: flex;
    flex-direction : row;
    justify-content: center;
    list-style:none;
    
`;

const NavItem = styled.li`
    padding: 5px;
`;

const NavLink = styled(Link)`
    color: white;
    text-decoration: none;
    display: block;
    padding: 15px 15px;
`;


const NavWithRouter = withRouter(NavLocation);

export default NavWithRouter;