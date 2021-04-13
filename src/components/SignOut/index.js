import React from 'react';

import { auth } from '../../firebase';

const SignOutButton = () => {
  return (
    <button className="u-m-reset u-d-flex u-d-flex-wp u-jc-c u-ai-c" type="button" onClick={auth.doSignOut} >
      ログアウト
    </button>
  )
}

export default SignOutButton;
