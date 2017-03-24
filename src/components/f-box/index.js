/**
 * Created by YOU on 2017/3/24.
 */
import Card from './src/main';

/* istanbul ignore next */
Card.install = function(Vue) {
  Vue.component(Card.name, Card);
};

export default Card;
