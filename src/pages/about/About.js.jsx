// import React from 'react';
// import Descripshen from "../../component/Descripshen";
//
// function AboutJs() {
//     return (
//         <div>
//
//             <Descripshen/>
//
//         </div>
//     );
// }
//
// export default AboutJs;

import React from "react";
import Description from "../components/Description";

const AboutPage = () => {
    const data = { title: "Title 2", description: "description 2" };

    return (
        <div>
            <h1>About Page</h1>
            <Description data={data} />
        </div>
    );
};

export default AboutPage;