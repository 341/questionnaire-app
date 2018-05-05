export default function(server) {

  /*
    Seed your development database using your factories.
    This data will not be loaded in your tests.
  */

  //server.createList('questioner', 2);


  let questioner = server.create('questioner',2);

  // let questions = server.createList('question', 4, { questioner });

  // console.log(questions[0].id);

  // questions.questions = [ questions[0].id] ;

  // questioner.get('questions').pushObjects(questions)

  // console.log(questions);

  // console.log(questioner);

}
