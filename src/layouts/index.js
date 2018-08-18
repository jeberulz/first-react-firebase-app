import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Header from '../components/header'
import './index.css'
import * as firebase from 'firebase';

var config = {
  apiKey: "AIzaSyA8A5KBHYCbIVUxV74lzI2O9encetQW57o",
  authDomain: "first-firebasereactproject.firebaseapp.com",
  databaseURL: "https://first-firebasereactproject.firebaseio.com",
  projectId: "first-firebasereactproject",
  storageBucket: "first-firebasereactproject.appspot.com",
  messagingSenderId: "567415035491"
};
firebase.initializeApp(config);



const Layout = ({ children, data }) => (
  <div>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    
      <Header/>
      {children()}
  </div>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
