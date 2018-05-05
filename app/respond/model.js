import Model from 'ember-data/model';
//import attr from 'ember-data/attr';
import {belongsTo, hasMany} from 'ember-data/relationships';
// import {set} from '@ember/object';

export const schema = {

};

export default Model.extend(schema, {
  questioner: belongsTo('questioner'),
  answer: belongsTo('answer'),
});
