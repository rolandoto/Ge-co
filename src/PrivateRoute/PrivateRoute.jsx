import React, {useContext, useEffect} from 'react'

import { Redirect, Route} from 'react-router-dom'
import  AutoProvider  from './AuthContext'

export const PrivateRoute =({component:RouteComponent,...rest}) =>{
    const {jwt} = useContext(AutoProvider)
    
      return (
        <Route {...rest}
            render={routerPros =>
            jwt ? (
                <RouteComponent {...routerPros} />
                )
                :(
                <Redirect to={'/login'} /> 
                    )
             } />
      )
}
