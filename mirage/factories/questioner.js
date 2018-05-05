import { Factory, faker } from 'ember-cli-mirage';

export default Factory.extend({
  title: faker.name.jobTitle(),
  description: faker.lorem.paragraph(),
  afterCreate(questioner, server) {
    server.createList('question', 3 ,{questioner});
  }
});
