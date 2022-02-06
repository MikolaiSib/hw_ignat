import React from 'react'
import Error404 from "./pages/Error404";
import PreJunior from "./pages/PreJunior";
import {Routes, Route} from "react-router-dom";
import Junior from "./pages/Junior";
import JuniorPlus from "./pages/JuniorPlus";


export const PATH = {
    PRE_JUNIOR: '/pre-junior',
    JUNIOR: '/junior',
    JUNIOR_PLUS: '/junior-plus',
    ERROR: '/*'
}

function MyRoutes() {
    return (
        <div>
            <div>
                <div>
                    <Routes>
                        <Route path={PATH.PRE_JUNIOR} element={<PreJunior/>}/>
                        <Route path={PATH.JUNIOR} element={<Junior/>}/>
                        <Route path={PATH.JUNIOR_PLUS} element={<JuniorPlus/>}/>
                        <Route path={PATH.ERROR} element={<Error404/>}/>
                    </Routes>
                </div>
            </div>


            {/*Switch выбирает первый подходящий роут*/}
            {/*<Switch>*/}

            {/*в начале мы попадаем на страницу '/' и переходим сразу на страницу PRE_JUNIOR*/}
            {/*exact нужен чтоб указать полное совподение (что после '/' ничего не будет)*/}
            {/*<Route path={'/'} exact render={() => <Redirect to={PATH.PRE_JUNIOR}/>}/>*/}
            {/*<Route path={'/'} exact render={() => <Redirect to={PATH.JUNIOR}/>}/>*/}
            {/*<Route path={'/'} exact render={() => <Redirect to={PATH.JUNIOR_PLUS}/>}/>*/}

            {/*<Route path={PATH.PRE_JUNIOR} render={() => <PreJunior/>}/>*/}
            {/*<Route path={PATH.JUNIOR} render={() => <PreJunior/>}/>*/}
            {/*<Route path={PATH.JUNIOR_PLUS} render={() => <PreJunior/>}/>*/}
            {/*    // add routes*/}

            {/*/!*у этого роута нет пути, он отрисуется если пользователь захочет попасть на несуществующую страницу*!/*/}
            {/*<Route render={() => <Error404/>}/>*/}

            {/*</Switch>*/}
        </div>
    )
}

export default MyRoutes


