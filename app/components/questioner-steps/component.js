import Component from '@ember/component';
import {computed, get, set} from '@ember/object';
import {readOnly, alias, mapBy, max} from "@ember/object/computed";
import {inject as service} from '@ember/service';

export default Component.extend({

  classNames: ['shadow', 'question-container'],
  store: service(),

  step: false, //current view
  steps: false, //array of questions
  type: alias('step.type'), // type of question


  firstObject: readOnly('steps.firstObject'),
  lastObject: readOnly('steps.lastObject'),

  //final step
  finalStep: computed('steps.[]', 'step', function () {
    return this.maxStep();
  }),

  //show thank you step
  completed: false,

  // how many steps
  length: computed('steps.[]', function () {
    return get(this, 'steps.length');
  }),

  //control the index which step to show
  index: computed('step', function () {
    return parseInt(this.getCurrentStep());
  }),

  //init set first step
  init() {
    this._super(...arguments);

    let firstStep = get(this, 'firstObject');
    this.setStep(firstStep);
  },

  //set step
  setStep(step) {
    set(this, 'step', step);
  },

  //check if is first step
  firstStep: computed('steps.[]', 'step', function () {
    return this.getStepByIndex(get(this, 'firstObject')) === this.getStepByIndex(get(this, 'step'));
  }),

  //get step by index
  getStepByIndex(index) {
    return get(this, 'steps').indexOf(index);
  },

  //get step at index
  getStep(index) {
    return get(this, 'steps').objectAt(index);
  },

  //last step in steps
  maxStep() {
    return parseInt(this.getCurrentStep()) === get(this, 'steps.length') - 1;
  },

  //get current step
  getCurrentStep() {
    return get(this, 'steps').indexOf(get(this, 'step'));
  },

  /* Next Controller*/
  next: computed('steps.[]', 'step', function () {
    return this.nextHasStep();
  }),

  nextHasStep() {
    return parseInt(this.getCurrentStep()) <= this.maxStep();
  },

  nextStep() {
    let current = this.getCurrentStep();
    let next = this.getStep(current + 1);
    this.setStep(next);
  },
  /* Next Controller*/

  /* Prev Controller*/
  prev: computed('steps.[]', 'step', function () {
    return this.prevHasStep();
  }),

  prevHasStep() {
    return parseInt(this.getCurrentStep()) > 0;
  },

  prevStep() {
    let has_prev = this.prevHasStep();

    if (has_prev) {
      let current = this.getCurrentStep();
      let next = this.getStep(current - 1);
      this.setStep(next);
    }
  },
  /* Prev Controller*/

  actions: {

    prevStep() {
      this.prevStep();
    },
    nextStep() {
      this.nextStep();
    },
    save() {
      let store = get(this, 'store'); //load store service
      let model = get(this, 'model'); //load questioner model
      let steps = get(this, 'steps'); //load questions of questioner

      let respond = store.createRecord('respond');//create respond model
      respond.set('questioner', model); //set relation of questioner and responder

      respond.save().then((_respond) => { // store responder
        steps.forEach(function (item, index) { // iterate selected options per question
          let answer = store.createRecord('answer', {'respond': _respond});
          answer.setAnswer(item);//set model
          answer.save().then(() => { //store in answer
          });
        });
        set(this,'completed',true)
      });

    }
  }
})
