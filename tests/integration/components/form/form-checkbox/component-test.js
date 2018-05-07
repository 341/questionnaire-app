import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('form/form-checkbox', 'Integration | Component | form/form checkbox', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{form/form-checkbox}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#form/form-checkbox}}
      template block text
    {{/form/form-checkbox}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
