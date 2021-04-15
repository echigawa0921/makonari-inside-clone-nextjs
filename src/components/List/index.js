import React from 'react';
import Link from 'next/link';
import { connect } from 'react-redux';

import * as routes from "../../../src/constants/routes";
import autoprefixer from 'autoprefixer';

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
        <a style={{ width: '100%', border: '1px solid #e7e8ea', padding: '48px', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)', textAlign: 'center' }}>【趣味】ランニング〜足が早くなる4ステップ〜</a>
      </Link>
      <Link href="/logincontents">
        <a style={{ width: '100%', border: '1px solid #e7e8ea', padding: '48px', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)', textAlign: 'center' }}>【勉強】プログラミング〜学習中の言語6選〜</a>
      </Link>
      <Link href="/logincontents">
        <a style={{ width: '100%', border: '1px solid #e7e8ea', padding: '48px', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)', textAlign: 'center' }}>【食事】チキンナゲット〜おいしいナゲット3選〜</a>
      </Link>
      <Link href="/logincontents">
        <a style={{ width: '100%', border: '1px solid #e7e8ea', padding: '48px', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)', textAlign: 'center' }}>【読書】アドラー心理学〜本を読んでみての感想〜</a>
      </Link>
      <Link href="/logincontents">
        <a style={{ width: '100%', border: '1px solid #e7e8ea', padding: '48px', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)', textAlign: 'center' }}>【趣味】岩盤浴〜関東おすすめ3選〜</a>
      </Link>
    </article>
  )
}

const ListNonAuth = () => {
  return (
    <article style={{ alignItems:'center', margin:'auto', textAlign:'left'}}>
      <img style={{ maxWidth: '300px', marginBottom: '24px' }} src="/images/logos/nextjs.svg" alt="" />
      <p>React学習のためフロントはNext.jsで作成しています。</p>
      <p style={{color: 'red'}}>アカウントを作成し、ログインしてくださいブログ一覧に飛びます！！！</p>
      <p></p>
      <p>認証はFirebaseを使用しました。</p>
      <hr />
      <img style={{ maxWidth: '300px', maxHeight: '400px',marginBottom: '24px' }} src="/images/logos/越川です。.jpg" alt="" />
      <p>越川 雄貴</p>
      <p>React.Rubyを業務後日々3時間学習をして個人開発しています！！</p>
      <p>平日・土日問わずPC触ってます。</p>
      <br></br>
      <p>【学習スキル】</p>
      <p>&nbsp;React.js.Javascript,Ruby,Rails,</p>
      <p>&nbsp;AWS,Docker,Git,GitHub等</p>
      <p>＊一度GitHubの草数を見に来てください。</p>
      <p>「ポートフォリオ」</p>
      <p>https://echigawa0921.github.io/portforio_0316/</p>
      <br></br>
      <p>【経歴】</p>
      <p>私の経歴を一言で表すなら、「目の前のことに全力で、後は偶発的に任せる」です。</p>
      <p>8年間続けた陸上競技を大学で辞め、在学中に通信業界に参入。</p>
      <p>＊100m10秒台で走れます。</p>
      <p>在職中に、通信・Payment事業・インフラ事業にてBtoB・BtoC営業を行い、2019年にSVを経験。</p>
      <p>その人の背景や考え方を考えながらコミュニケーションを取るのが好きです！</p>
      <p>その後、株式会社divにて企業様のエンジニア採用のご支援をしています。</p>
      <p>入社後、「テックキャンプ」を受講し、プログラミングの楽しさに気づき個人開発・業務改善等を行う。</p>
      <p>【やったこと】</p>
      <p>・Slackとスプレッドシートを連携し、「営業報告自動化」</p>
      <p>・PythonのBeautiful Soupを使い広告媒体から営業リストの作成</p>
      <br></br>
      <p>【エンジニアを目指す動機】</p>
      <p>動機は「モノづくりというプロセス自体が好き」だからです。</p>
      <p>学生から現在に至るまで「モノづくり」が好きです。</p>
      <p>私の作ったモノで他者が喜んでくれる。本当にいいものを作るには、他者と密にキャッチボールをする必要がある。そのプロセスと結果が私の幸せにつながります。</p>
      <p>学生の頃、打ち込んだ陸上競技でいうと当時キャプテンをしていたので、自分の考えたメニューでチームメイトがその瞬間楽しく練習してくれたり、また結果を出したてくれることに非常に楽しさを見出していました。</p>
      <br></br>
      <p>この出来事が私の価値観の基盤となり形成しています。</p>
      <p>そしてプログラミングはその創意工夫で価値を作り出すプロセスに似ています。</p>
      <p>プログラムを書く事で自分の考案した機能を実現しそれをユーザーに使ってもらう。そのユーザーが喜んでいただければ私もまた幸せなのです。</p>
      <p>そういった価値提供をしたいと考えています。</p>
      <br></br>
      <p>【趣味】</p>
      <p>・岩盤浴</p>
      <p>漫画や本を持ち込めるタイプの岩盤浴が大好きで1日中います。</p>
      <p>東京の「スパジャポ」真剣におすすめです！！</p>
      <p>関東最大級で雰囲気から本も3万冊ありぜひ調べてみてください！</p>
      <br></br>
      <p>・サイクリング</p>
      <p>休日ロングランとかでかけます。</p>
      <p>高校生の夏休み中、兵庫（実家）ー京都（高校）を毎日通学してました。</p>

      <hr />
      <img style={{ maxWidth: '300px',maxHeight: '400px', marginBottom: '24px' }} src="/images/logos/走れます.jpg" alt="" />
      <p>【キャリアプラン】</p>
      <p>〜1年後〜</p>
      <p>後輩が入ってきた際に教える担当に任せて頂けるようになりたいです。未経験で入ったからこそ後輩に添い遂げれることもあると考えているためです。</p>
      <br></br>
      <p>〜3年後〜</p>
      <p>「0→1」でプロダクトを作るプロジェクトにアサインしたいです。私の考案したプロダクト・仕組みを作るために最低でも大きなプロジェクトを複数回任されるようになっておかないといけないと考えています。そのため、例えば社内の他部署のプロダクトでも状況等を逐一確認して、プラスアルファの提案などをして自分のアピールをしていきたいと考えてます。</p>
      <br></br>
      <p>〜5年後〜</p>
      <p>5年後は自社のプロダクトが大好きなPMとして上流工程として携わっていたいです。エンジニアを志した理由でもあるコミュニケーションを取りながら一つのものを作りたいからっていうのもありますが、
         前職の、自分の上長が凄く営業とか業務を楽しそうにする方でした。その姿を見て周りが影響されて営業トーク練習したりする輪が広がっていたので、そういったことを出来る人になりたいと考えています。</p>
    </article>
  )
}

const mapStateToProps = (state) => ({
  authUser: state.sessionState.authUser,
});

export default connect(mapStateToProps)(List);
