import React from 'react';

const AuthorDetails = (props) => {

    const { author } = props;

    return (
        <>
            <div>
                <p className="name">Name : {author.name}</p>
                <p className="bio">Bio : {author.bio}</p>
                <p className="shop">Shop : {author.shop_name}</p>
                <p className="books">Books : {author.books.toString()}</p>
            </div>
        </>
    )
}
export default AuthorDetails;