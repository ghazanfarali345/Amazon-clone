import React, { useEffect } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import Home from '../Components/Home/Home'
import Checkout from '../Components/Checkout/Chekout'
import { Header } from '../Components/Header/Header'
import Login from '../Components/Login/Login'
import { auth } from "../firbase";
import { ContextValue } from "../StateProvider/BsaketState";
import Payment from '../Components/Payment/Payment';
import { loadStripe } from '@stripe/stripe-js'
import { Elements } from '@stripe/react-stripe-js'

const promise = loadStripe('pk_test_51IADDAHqbn1QlJyQeSrqEPbEiGEcKgykUtSOi5YASIv6LtJT0Sk1HdeTcpf0fKCRrHTOLm2leGGI5n029eAnUmp300uDi0L8yO')

function RouterComponent() {
    const [, dispatch] = ContextValue();
    useEffect(() => {
        auth.onAuthStateChanged((authUser) => {
            console.log('current user >>>', auth)
            if (authUser) {
                console.log('success')
                dispatch({
                    type: 'CURRENT_USER',
                    user: authUser
                })

            } else {
                console.log('fail')
                dispatch({
                    type: 'CURRENT_USER',
                    user: null
                })
            }
        })
    }, [])

    return (
        <Router>
            <Switch>
                <Route path="/login" exact>
                    <Login />
                </Route>
                <Route path="/" exact>
                    <Header />
                    <Home />
                </Route>
                <Route path="/checkout">
                    <Header />
                    <Checkout />
                </Route>
                <Route path="/payment">
                    <Header />
                    <Elements stripe={promise}>
                        <Payment />
                    </Elements>
                </Route>
            </Switch>
        </Router>
    )
}

export default RouterComponent
