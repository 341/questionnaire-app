import EmberObject from '@ember/object';
import QuestionTypeMixin from 'questionnaire-app/mixins/question-type';
import { module, test } from 'qunit';

module('Unit | Mixin | question type');

// Replace this with your real tests.
test('it works', function(assert) {
  let QuestionTypeObject = EmberObject.extend(QuestionTypeMixin);
  let subject = QuestionTypeObject.create();
  assert.ok(subject);
});
