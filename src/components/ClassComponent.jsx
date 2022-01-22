import React, { Component } from 'react';
import { Translation } from 'react-i18next';

class ClassComponent extends Component {
  render() {
    return (
      // Class Component 透過 Translation 的 render prop 來達成多語系切換的功能
      <Translation>
        {t => (
          <div>
            <h2>{t('class_component.class_title')}</h2>
            <p>{t('class_component.translation_render_props')}</p>
          </div>
        )}
      </Translation>
    );
  }
}

export default ClassComponent;