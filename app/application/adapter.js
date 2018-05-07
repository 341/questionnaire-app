import DS from 'ember-data';
import { inject as service } from '@ember/service';
import { alias } from '@ember/object/computed';

export default DS.JSONAPIAdapter.extend({
  config: service(),
  host: alias('config.APP.APP_HOST'),
  namespace: alias('config.APP.API_NAMESPACE')
});
