import Controller from '@ember/controller';
import {set, get} from '@ember/object';

export default Controller.extend({
  isOnline: true,  // assume we're online until proven wrong
  isChecking: true,  // assume we're online until proven wrong
  init: function () {
    this._super(...arguments);
    this.updateNetworkStatus();
  },

  updateNetworkStatus: function () {
    set(this,'isChecking', true);
    if (!navigator.onLine) {
      this.set('isOnline', false);
    }
    set(this,'isChecking', false);
  }
});
