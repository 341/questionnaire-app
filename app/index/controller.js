import Controller from '@ember/controller';

export default Controller.extend({
  actions:{
    toRoute(model){
      this.transitionToRoute('questioner', model.id);
    }
  }
});
