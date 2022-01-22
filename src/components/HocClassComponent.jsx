import React, { Component } from 'react';
import { withTranslation } from 'react-i18next';

// 若是 Class components 的話，也可以使用高階組件 withTranslation 來取得對應語言內容。
class HocClassComponent extends Component {
  render() {
    const { t } = this.props;

    return <div>
      <h2>{t('hoc_component.hoc_title')}</h2>
      <p>{t('hoc_component.translation_render_props')}</p>
    </div>;
  }
}

export default withTranslation()(HocClassComponent);