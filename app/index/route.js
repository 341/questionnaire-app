import Route from '@ember/routing/route';

export default Route.extend({
  model(){
    let model = this.get('store').findRecord('questioner', 1);
    console.log(model.get('model'));
    return model;
  }
});
