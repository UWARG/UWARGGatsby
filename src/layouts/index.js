import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import Navbar from '../components/navbar.js';
import Footer from '../components/footer.js';

import './index.css';

const Layout = ({ children, data }) => (
  <div style={{position: 'relative'}}>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: '"University of Waterloo Aerial Robotics Group Official Website. WARG is a student design team who develops autonomous flying robots.' },
        { name: 'keywords', content: 'UWARG,Aerial,Robotics,University,Waterloo' },
        { property: 'og:title', content: 'University of Waterloo Aerial Robotics Group' },
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'http://uwarg.com' },
        { property: 'og:image', content: 'http://www.uwarg.com/assets/favicon.ico' },
        { charset: 'utf-8' },
      ]}
      link={[
        { rel: 'shortcut icon', type: 'image/x-icon', href: 'favicon.ico' }
      ]}
    />
    <Navbar />
    <div style={{paddingTop: "3.5em"}}>
      {children()}
    </div>
    <Footer />
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
