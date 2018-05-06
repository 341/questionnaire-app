import Component from '@ember/component';

export default Component.extend({
  classNames:['question-container__options'],
  classNameBindings:['model.loading:loading', 'completed:completed']
});
