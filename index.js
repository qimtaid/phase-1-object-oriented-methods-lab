// Constructor function for BoardMember
function BoardMember(name, homeState, training) {
    this.name = name;
    this.homeState = homeState;
    this.training = training;
  
    // Method to veto
    this.veto = function() {
      return "No, I must disagree";
    };
  
    // Method to approve
    this.approve = function() {
      return "You can do that!";
    };
  
    // Method to do charity
    this.doCharity = function() {
      return "I like to help people.";
    };
  
    // Method to release press statement
    this.releasePressStatement = function() {
      return "You will see great things from Scuber.";
    };
  
    // Method to say hi
    this.sayHi = function() {
      return `Hi, my name is ${this.name}. I am from ${this.homeState}, and I was trained in ${this.training}.`;
    };
  }

  
const boardMember = new BoardMember("Alice", "New York", "Harvard");
console.log(boardMember.sayHi());
console.log(boardMember.veto());
console.log(boardMember.approve());
console.log(boardMember.doCharity());
console.log(boardMember.releasePressStatement());
