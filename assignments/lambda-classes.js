// CODE here for your Lambda Classes
class Person {
    constructor(personalDetails) {
        this.name = personalDetails.name;
        this.age = personalDetails.age;
        this.location = personalDetails.location;
    }
    speak() {
        console.log(`Hello, my name is ${this.name}, I am from ${this.location}.`);
    }
};

class Instructor extends Person {
    constructor(instructorDetails) {
        super(instructorDetails);
        this.specialty = instructorDetails.specialty;
        this.favLanguage = instructorDetails.favLanguage;
        this.catchPhrase = instructorDetails.catchPhrase;
    }
    demo(subject) {
        console.log(`Today, we are learning about ${subject}.`);
    }
    grade(student, subject) {
        console.log(`${student.name} receives a perfect score on ${subject}!`);
    }
};

class Student extends Person {
    constructor(studentDetails) {
        super(studentDetails);
        this.previousBackground = studentDetails.previousBackground;
        this.className = studentDetails.className;
        this.favSubjects = studentDetails.favSubjects;
    }
    listsSubjects() {
        return `${this.name}'s favorite subjects are ${this.favSubjects[0]}, ${this.favSubjects[1]}, and ${this.favSubjects[2]}.`;
    }

    PRAssignment(subject) {
        console.log(`${this.name} has submitted a PR for ${subject}`)
    }

    sprintChallenge(subject) {
        console.log(`${this.name} has begun sprint challenge on ${subject}`);
    }
};

class ProjectManager extends Instructor {
    constructor(projectManagerDetails) {
        super(projectManagerDetails);
        this.gradClassName = projectManagerDetails.gradClassName;
        this.favInstructor = projectManagerDetails.favInstructor;
    }
    standUp(channel) {
        console.log(`${this.name} announces to ${channel}, @channel standy times!`);
    }
    debugsCode(student, subject) {
        console.log(`${this.name} debugs ${student.name}'s code on ${subject}`);
    }
};

const fred = new Instructor({
    name: 'Fred',
    location: 'Bedrock',
    age: 37,
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Don't forget the homies`
  });

  console.log(fred);
  fred.demo('variables');

  const tony = new Instructor({
    name: 'Tony',
    location: 'NYC',
    age: 40,
    favLanguage: 'Python',
    specialty: 'Full-stack',
    catchPhrase: `I am Iron Man.`
  });

  tony.speak();
  console.log(tony.catchPhrase);

  const peter = new Student({
    name: 'Peter',
    location: 'Queens',
    age: 20,
    previousBackground: 'photographer',
    className: 'WebPT9',
    favSubjects: ['Blockchain', 'Database', 'Statistics']
  });

  tony.grade(peter, 'Blockchain');

  peter.speak();
  console.log(peter.listsSubjects());
  peter.PRAssignment('arrays');
  peter.sprintChallenge('JavaScript');

  const steve = new ProjectManager ({
    name: 'Steve',
    location: 'Brooklyn',
    age: 100,
    favLanguage: 'Python',
    specialty: 'Security / Authentication',
    catchPhrase: `Avengers, assemble.`,
    gradClassName: 'iOS9',
    favInstructor: 'Bucky'
  });

  const miles = new Student({
    name: 'Miles',
    location: 'Queens',
    age: 20,
    previousBackground: 'painter',
    className: 'iOS12',
    favSubjects: ['Blockchain', 'Database', 'Statistics']
  });

  steve.standUp('iOS12');
  steve.debugsCode(miles, 'authentication');
