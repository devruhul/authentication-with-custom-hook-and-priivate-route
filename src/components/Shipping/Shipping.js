import React from 'react';
import Page from '../Page/Page';
// import useDocumentTitle from '../../hooks/useDocumentTitle';


const Shipping = () => {

    // useDocumentTitle('Shipping')

    const user = JSON.parse(localStorage.getItem("user"))
    console.log(user)
 

    return (
        <div>
            <Page title='Shipping' />

            <h2>this is shipping</h2>
        </div>
    );
};

export default Shipping;