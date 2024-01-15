import React,{Fragment} from 'react'
import MAinNav from './MAinNav'

const layout = (props) => {
  return (
    <Fragment>
        <header>
         <MAinNav/>
        </header>
        <main style={{marginTop:'13.5rem'}}>
           {props.children}
        </main>
        <footer>

        </footer>
    </Fragment>
  )
}

export default layout