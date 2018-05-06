import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import {belongsTo} from 'ember-data/relationships';
import {computed, get} from '@ember/object';
// import QuestionType from 'questionnaire-app/mixins/question-type';

export default Model.extend({

  title: attr('string'),
  description: attr('string'),

  type: attr('string'),
  name: attr('string'),
  selected: attr('array'),
  values: attr('json'),
  value: attr('string'),

  component: computed('type', function () {
    let _type = get(this, 'type');
    return 'form/form-'+_type;
  }),

  respond: belongsTo('respond'),

  setAnswer(item){

    this.set('title', item.get('title'));
    this.set('description', item.get('description'));
    this.set('type', item.get('type'));
    this.set('name', item.get('name'));
    this.set('selected', item.get('selected'));
    this.set('values', item.get('values'));
    this.set('value', item.get('value'));

  }
});
