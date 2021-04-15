import React from 'react';
import Link from 'next/link';
import { connect } from 'react-redux';

import * as routes from "../../../src/constants/routes";

const List = ({ authUser }) => {
  return (
    <div>
      { authUser
          ? <ListAuth />
          : <ListNonAuth />
      }
    </div>
  )
}

const ListAuth = () => {
  return (
    <article>
      <Link href="/logincontents">
        <a style={{ width: '100%', border: '1px solid #e7e8ea', padding: '48px', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)', textAlign: 'center' }}>ログイン後の記事詳細へのリンク</a>
      </Link>
    </article>
  )
}

const ListNonAuth = () => {
  return (
    <article style={{ textAlign: 'center' }}>
      <img style={{ maxWidth: '300px', marginBottom: '24px' }} src="/images/logos/nextjs.svg" alt="" />
      <p>React学習のためフロントはNext.jsで作成しています。</p>
      <p>Inside Storiesのソースコードに記載されています。</p>
      <p>レスポンシブにさせたかったので、デザインは変えています。</p>
      <hr />
      <img style={{ maxWidth: '300px', maxHeight: '400px',marginBottom: '24px' }} src="/images/logos/越川です。.jpg" alt="" />
      <p>越川 雄貴</p>
      <p className="left-text">React.Rubyを業務後日々3時間学習をして個人開発しています！！</p>
      <p className="left-text">平日・土日問わずPC触ってます。</p>
      <p className="left-text">【学習スキル】</p>
      <p>React.js.Javascript,Ruby,Rails,</p>
      <p>AWS,Docker,Git,GitHub等</p>
      <p>＊一度GitHubの草数を見に来てください。</p>
      <p>ポートフォリオ</p>
      <p>https://echigawa0921.github.io/portforio_0316/</p>
      <p></p>
      <p></p>
      <p></p>
      <p></p>
      <p></p>
      <p></p>

      <hr />
      <img style={{ maxWidth: '300px',maxHeight: '400px', marginBottom: '24px' }} src="/images/logos/走れます.jpg" alt="" />
      <p>認証はFirebaseを使用しました。</p>
    </article>
  )
}

const mapStateToProps = (state) => ({
  authUser: state.sessionState.authUser,
});

export default connect(mapStateToProps)(List);
