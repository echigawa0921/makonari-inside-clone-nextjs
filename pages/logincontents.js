import React, { useEffect } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { connect } from 'react-redux';

import * as routes from "../src/constants/routes";
import * as names from "../src/constants/names";

const metaOgimage = `${routes.SITE_URL}/images/ogp/main_ogp.jpg`

const LoginContents = ({ authUser }) => {
  return (
    <div>
      { authUser
          ? <LoginContentsAuth />
          : <LoginContentsNonAuth />
      }
    </div>
  )
}

const LoginContentsAuth = () => {
  return (
    <article style={{ marginTop: '64px', textAlign: 'center' }}>
      <Head>
        <title>ブログ_コンテンツ | {names.PORTFOLIO}</title>
        <meta name="description" content={names.PORTFOLIO_DESCRIPTION} />
        <meta property="og:title" content="ログイン" />
        <meta property="og:description" content={names.PORTFOLIO_DESCRIPTION} />
        <meta property="og:image" content={metaOgimage} />
        <meta name="twitter:title" content="ログイン" />
        <meta name="twitter:description" content={names.PORTFOLIO_DESCRIPTION} />
      </Head>
      <p>プログラミング  〜学習言語：6選〜</p>
      <br></br>
      <p>【学習言語】</p>
      <p>ruby on rails </p>
      <p>Ruby</p>
      <p>React</p>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <p>全部これに飛びます笑</p>
      <br></br>
      <br></br>
      <a href={routes.HOME}>ホーム</a>

    </article>
  )
}

const LoginContentsNonAuth = () => {
  const router = useRouter();
  useEffect(() => {
    router.push('/');
  });
  return <div />;
}

const mapStateToProps = (state) => ({
  authUser: state.sessionState.authUser,
});

export default connect(mapStateToProps)(LoginContents);
