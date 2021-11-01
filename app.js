"use strict"

function app(people){
  let searchType = promptFor("Do you know the name of the person you are looking for? Enter 'yes' or 'no'", yesNo).toLowerCase();
  let searchResults;
  switch(searchType){
    case 'yes':
      searchResults = searchByName(people);
      break;
    case 'no':
      promptFor("Would you like to search by a trait? Enter 'yes' or 'no' ", yesNo).toLocaleLowerCase();
    case 'yes':
      let searchOption = promptFor(
        "What traits would you like to search by? (input numbers)\n" +
        "1. Eye Color \n" +
        "2. Gender \n" +
        "3. DOB \n" +
        "4. Height \n" +
        "5. Weight \n" +
        "6. Occupation \n",
      chars
      );

      let filteredSearch = people;

      searchOption.split(' ');

      if(searchOption.includes(1)){
        filteredSearch = searchByEyeColor(filteredSearch);
      }

      if(searchOption.includes(2)){
        filteredSearch = searchByGender(filteredSearch);
      }

      if(searchOption.includes(3)){
        filteredSearch = searchByDob(filteredSearch);
      }

      if(searchOption.includes(4)){
        filteredSearch = searchByHeight(filteredSearch);
      }

      if(searchOption.includes(5)){
        filteredSearch = searchByWeight(filteredSearch);
      }

      if(searchOption.includes(6)){
        filteredSearch = searchByOccupation(filteredSearch);
      }

      displayPeople(filteredSearch);
      return
    case 'no':
      app(people);
      break;

    default:
      app(people);
      break;
  }
  
  mainMenu(searchResults, people);
}

function mainMenu(person, people){

  if(!person){
    alert("Could not find that individual.");
    return app(people);
  }

  let displayOption = prompt("Found " + person.firstName + " " + person.lastName + " . Do you want to know their 'info', 'family', or 'descendants'? Type the option you want or 'restart' or 'quit'");

  switch(displayOption){
    case "info":
    // TODO: get person's info
    break;
    case "family":
    // TODO: get person's family
    break;
    case "descendants":
    // TODO: get person's descendants
    break;
    case "restart":
    app(people); // restart
    break;
    case "quit":
    return; // stop execution
    default:
    return mainMenu(person, people); // ask again
  }
}

function searchByName(people){
  let firstName = promptFor("What is the person's first name?", chars);
  let lastName = promptFor("What is the person's last name?", chars);

  let foundPerson = people.filter(function(person){
    if(person.firstName === firstName && person.lastName === lastName){
      return true;
    }
    else{
      return false;
    }
  })
  // TODO: find the person using the name they entered
  return foundPerson;
}

// alerts a list of people
function displayPeople(people){
  alert(people.map(function(person){
    return person.firstName + " " + person.lastName;
  }).join("\n"));
}

function displayPerson(person){
  // print all of the information about a person:
  // height, weight, age, name, occupation, eye color.
  let personInfo = "First Name: " + person.firstName + "\n";
  personInfo += "Last Name: " + person.lastName + "\n";
  // TODO: finish getting the rest of the information to display
  alert(personInfo);
}

// function that prompts and validates user input
function promptFor(question, valid){
  do{
    var response = prompt(question).trim();
  } while(!response || !valid(response));
  return response;
}

// helper function to pass into promptFor to validate yes/no answers
function yesNo(input){
  return input.toLowerCase() == "yes" || input.toLowerCase() == "no";
}

// helper function to pass in as default promptFor validation
function chars(input){
  return true; // default validation only
}
