import React from 'react';
import { Helmet } from 'react-helmet';
import App from '../components/App';
import { headData } from '../mock/data';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/main.scss';

export default () => {
  const { title, lang, description, img } = headData;
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{title || 'Aneta Stojanowska'}</title>
        <html lang={lang || 'nl'} />
        <meta name="description" content={description || 'Product Designer'} />
        <meta property="og:image" content={img} />
      </Helmet>
      <App />
    </>
  );
};
