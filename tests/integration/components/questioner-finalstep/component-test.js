import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('questioner-finalstep', 'Integration | Component | questioner finalstep', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{questioner-finalstep}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#questioner-finalstep}}
      template block text
    {{/questioner-finalstep}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
