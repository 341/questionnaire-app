import Model from 'ember-data/model';
import {belongsTo, hasMany} from 'ember-data/relationships';

export const schema = {

};

export default Model.extend(schema, {
  questioner: belongsTo('questioner'),
  answers: hasMany('answer'),
});
