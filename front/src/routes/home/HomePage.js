import React from 'react';
import { connect } from 'dva';
import styles from './HomePage.less';

@connect(({}) => ({
}))
export default class IndexPage extends React.PureComponent {
  render() {
    return (
      <div className={styles.normal}>
        <h1 className={styles.title}>test for build scripts</h1>
        <div className={styles.welcome} />
        <ul className={styles.list}>
          <li>To get started, edit <code>src/index.js</code> and save to reload.</li>
          <li><a href="https://github.com/dvajs/dva-docs/blob/master/v1/en-us/getting-started.md">Getting Started</a></li>
        </ul>
      </div>
    );
  }
}