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
      displayPerson(person);
      break;
    case "family":
    // TODO: get person's family
      break;
    case "descendants":
    // TODO: get person's descendants
      break;
    case "restart":
    app(people);
      break;
    case "quit":
      return;
    default:
    return mainMenu(person, people);
  }
  window.location.reload();
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
  return foundPerson[0];
}

function searchByEyeColor(people){
  let eyeColor = promptFor("What color is this person's eyes?", chars);

  let foundPerson = people.filter(function(person){
    if (person.eyeColor === eyeColor){
      return true;
    }
    else{
      return false;
    }
  })
  return foundPerson;
}

function searchByGender(people){
  let gender = promptFor("What is this person's gender? (male or female)", chars);

  let foundPerson = people.filter(function(person){
    if (person.gender === gender){
      return true;
    }
    else{
      return false;
    }
  })
  return foundPerson;
}

function searchByDob(people){
  let dob = promptFor("What is this person's date of birth? (mm/dd/yyyy", chars);

  let foundPerson = people.filter(function(person){
    if (person.dob === dob){
      return true;
    }
    else{
      return false;
    }
  })
  return foundPerson;
}

function searchByHeight(people){
  let height = promptFor("What is this person's height in inches?", chars);

  let foundPerson = people.filter(function(person){
    if (person.height === height){
      return true;
    }
    else{
      return false;
    }
  })
  return foundPerson;
}

function searchByWeight(people){
  let weight = promptFor("What is this person's weight in lb's?", chars);

  let foundPerson = people.filter(function(person){
    if (person.weight === weight){
      return true;
    }
    else{
      return false;
    }
  })
  return foundPerson;
}

function searchByOccupation(people){
  let occupation = promptFor("What is this person's occupation?", chars);

  let foundPerson = people.filter(function(person){
    if (person.occupation === occupation){
      return true;
    }
    else{
      return false;
    }
  })
  return foundPerson;
}

function displayPeople(people){
  alert(people.map(function(person){
    return person.firstName + " " + person.lastName;
  }).join("\n"));
}

function displayPerson(person){
  let personInfo = "First Name: " + person.firstName + "\n";
  personInfo += "Last Name: " + person.lastName + "\n";
  personInfo += "Eye Color: " + person.eyeColor + "\n";
  personInfo += "Gender: " + person.gender + "\n";
  personInfo += "DOB: " + person.dob + "\n";
  personInfo += "Height: " + person.height + "\n";
  personInfo += "Weight: " + person.weight + "\n";
  personInfo += "Occupation: " + person.occupation + "\n";
  alert(personInfo);
}

function promptFor(question, valid){
  do{
    var response = prompt(question).trim();
  } while(!response || !valid(response));
  return response;
}

function yesNo(input){
  return input.toLowerCase() == "yes" || input.toLowerCase() == "no";
}

function chars(input){
  return true;
}
