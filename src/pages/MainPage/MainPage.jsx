// rsf
import React from 'react';
import About from "../../component/about/About";
import Tittle from "../../component/Tittle/Tittle";

function MainPage() {
    return (
        <div>
            <About info={{title: "Some Title", body:"Some body"}}/>
            <Tittle text="Hello world"/>

        </div>
    );
}

export default MainPage;