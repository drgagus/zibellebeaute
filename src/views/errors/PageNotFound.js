import React from 'react';

function PageNotFound(props) {
    return (
        <div className="container-fluid">
            <div className="d-flex justify-content-center align-items-center vh-100 text-danger">
                <h1 className="text-danger font-weight-bold">
                    Page Not Found
                </h1>
            </div>
        </div>
    );
}

export default PageNotFound;