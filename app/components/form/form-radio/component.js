import Form from '../form';
import {set, get} from '@ember/object';
import {alias} from '@ember/object/computed';

export default Form.extend({

  name: alias('model.name'),
  values: alias('model.values'),
  type: alias('model.type'),
  actions:{
    setValue(value){
        get(this,'values').setEach('checked',false);

        value.checked = true;

        set(this,'model.selected', value);
    }
  }
});
