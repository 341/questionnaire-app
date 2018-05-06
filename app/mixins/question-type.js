import Mixin from '@ember/object/mixin';
import {get, computed} from '@ember/object';

export default Mixin.create({
  types: [
    {
      type: 'text-area',
      template: {
        form: 'form/form-text-area',
        placeholder: 'Free Text'
      }
    },
    {
      type: 'checkbox',
      template: {
        form: 'form/form-checkbox',
        placeholder: 'Multiple Choice'
      }
    },
    {
      type: 'radio',
      template: {
        form: 'form/form-radio',
        placeholder: 'Single Choice'
      }
    }
  ],
  getType(type) {
    let types = get(this, 'types');
    return types.findBy('type', type);
  }
});
