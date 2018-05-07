import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('questioner-steps', 'Integration | Component | questioner steps', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{questioner-steps}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#questioner-steps}}
      template block text
    {{/questioner-steps}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
