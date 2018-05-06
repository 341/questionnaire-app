import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import {hasMany} from 'ember-data/relationships';

export const schema = {
  title: attr('string'),
  description: attr('string'),
};

export default Model.extend(schema, {
  questions: hasMany('question'),
});
