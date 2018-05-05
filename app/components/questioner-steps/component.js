import Component from '@ember/component';
import {computed, get, set} from '@ember/object';
import {readOnly, alias, mapBy, max} from "@ember/object/computed";
import {inject as service} from '@ember/service';

// import Icons from 'hjelpepunktet-app/mixins/icon-mixin';
//Icons,
export default Component.extend({
  step: false,
  steps: false,
  type: alias('step.type'),
  pageID: 1,

  store: service(),


  firstObject: readOnly('steps.firstObject'),
  lastObject: readOnly('steps.lastObject'),

  finalStep: computed('steps.[]', function () {
    return this.maxStep();
  }),

  completed: computed('steps.[]', 'step', function () {
    return get(this, 'step') === get(this, 'length')
  }),

  length: computed('steps.[]', function () {
    return get(this, 'steps.length');
  }),

  index: computed('step', function () {
    return parseInt(this.getCurrentStep());
  }),

  init() {
    this._super(...arguments);

    let firstStep = get(this, 'firstObject');
    this.setStep(firstStep);
  },

  setStep(step) {
    set(this, 'step', step);
  },

  firstStep: computed('steps.[]', 'step', function () {
    return this.getStepByIndex(get(this, 'firstObject')) === this.getStepByIndex(get(this, 'step'));
  }),

  getStepByIndex(index) {
    return get(this, 'steps').indexOf(index);
  },

  getStep(index) {
    return get(this, 'steps').objectAt(index);
  },

  maxStep() {
    return parseInt(this.getCurrentStep()) === get(this, 'steps.length') - 1;
  },

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
  saveForm(model) {

  },
  actions: {
    setIcon(icon) {
      let category = get(this, 'category');
      category.set('icon', icon);
    },
    prevStep() {
      this.prevStep();
    },
    nextStep() {
      this.nextStep();
    },
    save() {

    }
  }
})
