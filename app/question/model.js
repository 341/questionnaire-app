import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import {belongsTo} from 'ember-data/relationships';
import {computed, get} from '@ember/object';
// import QuestionType from 'questionnaire-app/mixins/question-type';

export default Model.extend({

  title: attr('string'),
  description: attr('string'),

  type: attr('string'),
  name: computed('title', function () {
    let str = get(this, 'title');

    str = str.replace(/^\s+|\s+$/g, ''); // trim
    str = str.toLowerCase();

    // remove accents, swap ñ for n, etc
    let from = "àáäâèéëêìíïîòóöôùúüûñç·/_,:;";
    let to = "aaaaeeeeiiiioooouuuunc------";
    for (let i = 0, l = from.length; i < l; i++) {
      str = str.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i));
    }

    str = str.replace(/[^a-z0-9 -]/g, '') // remove invalid chars
      .replace(/\s+/g, '-') // collapse whitespace and replace by -
      .replace(/-+/g, '-'); // collapse dashes

    return str;
  }),

  selected: attr('array'),
  values: attr('json'),
  value: attr('string'),
  loading: attr('boolean',{defaultValue: false}),

  component: computed('type', function () {
    let _type = get(this, 'type');
    return 'form/form-'+_type;
  }),

  questioner: belongsTo('questioner')
});
