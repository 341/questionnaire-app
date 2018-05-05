import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import {belongsTo, hasMany} from 'ember-data/relationships';
//import {set} from '@ember/object';

export default Model.extend({
  type: attr('string'),
  value: attr('string'),
  title: attr('string'),
  description: attr('string'),
  questioner: belongsTo('questioner')
});
