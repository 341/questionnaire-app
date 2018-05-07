import attr from 'ember-data/attr';
import Model from 'ember-data/model';

export const schema = {
  name: attr('string'),
  email: attr('string'),
  phone: attr('string')
};

export default Model.extend(schema, {

});
