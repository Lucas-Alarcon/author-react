import React from 'react';
import styled from "styled-components";

const AuthorDetails = (props) => {

    const { author } = props;

    return (
        <>
            <div>
                <Detail className="name">Name : {author.name}</Detail>
                <Detail className="bio">Bio : {author.bio}</Detail>
                <Detail className="shop">Shop : {author.shop_name}</Detail>
                <Detail className="books">Books : {author.books.toString()}</Detail>
            </div>
        </>
    )
}

const Detail = styled.p`
    margin-top: 15px;
`;

export default AuthorDetails;