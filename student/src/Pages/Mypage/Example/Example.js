import React, {useEffect} from 'react'
import {Switch, Route, Redirect,useLocation, useHistory} from 'react-router-dom'

const RouteA = () => {
    return (
        <div>
            RouteA
        </div>
    )
}

const RouteB = () => {
    const history = useHistory();

    useEffect(() => {
        alert("다른 페이지로 이동합니다.")
        
        history.push("/myinfo");

    }, [])

    return (
        <div>
            RouteB
        </div>
    )
}

function Example() {

    const location = useLocation();
    const history = useHistory();

    console.log(location)
    console.log(history)

    return (

        <Switch>
            <Route path={`/example/a`} exact component={RouteA}></Route>
            <Route path={`/example/b`} exact component={RouteB}></Route>
        
            <Redirect to={`/example/a`} />
        </Switch>
    )
}

export default Example
