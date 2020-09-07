import React from 'react';
import { withRouter } from "react-router";
import { useDispatch } from 'react-redux';
import { Link } from "react-router-dom";
import styled from "styled-components";
import { cleanAuthor } from '../actions/actions-types';

const NavLocation = () => {

    const dispatch = useDispatch()

    return (

        <NavBar role="navigation">
            <Menu>
                <NavItem>
                    <NavLink to="/">Home</NavLink>
                </NavItem>
                <NavItem className="nav-item">
                    <NavLink to="/author/add" onClick={() => dispatch(cleanAuthor())}>Add author</NavLink>
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