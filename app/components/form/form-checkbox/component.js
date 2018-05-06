import Component from '@ember/component';
import {computed, observer, set, get} from '@ember/object';
import {alias} from '@ember/object/computed';

export default Component.extend({
  tagName:'',
  name: alias('model.name'),
  values: alias('model.values'),
  type: alias('model.type'),
  checked: observer('values.@each.checked', function () {
    //ToDo - PushObjects
    let values = get(this, 'values');

    let selected = [];

    values.forEach(function (item, index) {
      if(item.checked){
        // console.log(item);
        selected[index] = item;
      }
    });

    set(this,'model.selected', selected);
  })
});
