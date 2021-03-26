import React from 'react';
import { Helmet } from 'react-helmet';
import App from '../components/App';
import { headData } from '../mock/data';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/main.scss';

export default () => {
  const { title, lang, description, img, author } = headData;
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{title || 'Aneta Stojanowska, a Product Designer based in Amsterdam'}</title>
        <html lang={lang || 'nl'} />
        <meta
          name="description"
          content={
            description ||
            `Professional and enthusiastic Product Designer with front-end skills en knowledge of web and mobile design and UX/UI.`
          }
        />
        <meta name="image" property="og:image" content={img} />
        <meta name="author" content={author} />
      </Helmet>
      <App />
    </>
  );
};
