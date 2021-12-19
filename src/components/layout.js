import * as React from 'react'
import Footer from './footer'
import Helmet from "react-helmet"
import Header from './header'
import { withPrefix } from "gatsby"
import "./css/bootstrap-italia.min.css"
import {
  heading,
} from './layout.module.css'


const Layout = ({ pageTitle, children }) => {
  return (
    <div>
     <Header></Header>
      <main>
        {children}
      </main>
     <Footer></Footer>
     <Helmet>
        <script>window.__PUBLIC_PATH__ = '/fonts' </script>
        <script src={withPrefix('bootstrap-italia.bundle.min.js')} type="text/javascript" />
    </Helmet>
    </div>
  )
}

export default Layout