// rsf
// import React from 'react';
// import About from "../../component/about/About";
// import Tittle from "../../component/Tittle/Tittle";
//
// function MainPage() {
//     return (
//         <div>
//             <About info={{title: "Some Title", body:"Some body"}}/>
//             <Tittle text="Hello world"/>
//
//         </div>
//     );
// }
//
// export default MainPage;


import React from "react";
import Description from "../components/Description";

const MainPage = () => {
    const data = { title: "Title", description: "description" };

    return (
        <div>
            <h1>Main Page</h1>
            <Description data={data} />
        </div>
    );
};

export default MainPage;


