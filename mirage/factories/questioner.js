import {Factory, faker} from 'ember-cli-mirage';

export default Factory.extend({
  title: faker.name.jobTitle,
  description: faker.lorem.paragraph,
  afterCreate(questioner, server) {
    server.create('question', {
      type: 'checkbox', values: [
        {value: 1, checked: false, description: 'Value 1'},
        {value: 2, checked: false, description: 'Value 2'},
        {value: 3, checked: false, description: 'Value 3'}
      ], questioner
    });
    server.create('question', {
      type: 'radio', values: [
        {value: 1, description: 'Value 1'},
        {value: 2, description: 'Value 2'},
        {value: 3, description: 'Value 3'}
      ], questioner
    });
    server.create('question', {
      type: 'text-area', values: [
        {value: 1, description: 'Value 1'}
      ], questioner
    });
    // server.createList('question', 3 ,{questioner});
  }
});
