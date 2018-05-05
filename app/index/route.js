import Route from '@ember/routing/route';

export default Route.extend({
  model(){
    return this.store.find.findRecord('questioner', 1);
  }
});
