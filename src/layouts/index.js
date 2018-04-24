import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

import './index.css';

const Layout = ({ children, data }) => (
  <div>
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
        { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
      ]}
      link={[
        { href: 'https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta/css/bootstrap.min.css', rel: 'stylesheet' },
        { href: 'https://fonts.googleapis.com/css?family=Open+Sans:400,700,300,600', rel: 'stylesheet', type: 'text/css' },
        { href: 'https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.cs', rel: 'stylesheet' },
      ]}
      script={[
        { href: 'https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css', rel: 'stylesheet' },
        { src: 'https://code.jquery.com/jquery-3.2.1.slim.min.js' },
        { src: 'https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.3/umd/popper.min.js' },
        { src: 'https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/js/bootstrap.min.js' },
      ]}
    />
    <Navbar />
    {children()}
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
