import attr from 'ember-data/attr';
import Model from 'ember-data/model';
import {hasMany, belongsTo} from 'ember-data/relationships';

export const schema = {
  name: attr('string'),
  email: attr('string'),
  phone: attr('string')
};

export default Model.extend(schema, {

});
