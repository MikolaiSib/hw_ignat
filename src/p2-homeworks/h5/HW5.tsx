import React, {useState} from 'react'
import Header from './Header'
import MyRoutes from './MyRoutes'
import {HashRouter} from "react-router-dom";

function HW5() {
    
    let [accordion, setAccordion] = useState(true)
    
    return (
        <div>
            {/*в gh-pages лучше работает HashRouter*/}
            <HashRouter>
                <div>
                    <span onMouseOver={()=>setAccordion(!accordion)}>Mouse__</span>
                    {!accordion && <Header/>}
                </div>
                <MyRoutes/>
            </HashRouter>
        </div>
    )
}

export default HW5
