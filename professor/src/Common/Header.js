import React from "react";

const Header=()=>{
    return(
        <header className="bd-header bg-dark py-3 d-flex align-items-stretch border-bottom border-dark">
            <div className="container-fluid d-flex align-items-center">
                <h1 className="d-flex align-items-center fs-4 text-white mb-0">
                {/*<img src="/docs/5.0/assets/brand/bootstrap-logo-white.svg" width={38} height={30} className="me-3" alt="Bootstrap" />*/}
                JOIN
                </h1>
                <a href="/docs/5.0/examples/cheatsheet-rtl/" className="ms-auto link-light" hrefLang="ar">RTL cheatsheet</a>
            </div>
        </header>
    );
}

export default Header;