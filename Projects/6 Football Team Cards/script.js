// gets the span element inside the paragraph element that says: "team:"
const teamName = document.getElementById("team");
// Gets the span element inside the paragraph element that says: "sport:"
const typeOfSport = document.getElementById("sport");
// Gets the span element inside the paragraph element that says: "year:"
const worldCupYear = document.getElementById("year");
// Gets the span element inside the paragraph element that says: "head coach:"
const headCoach = document.getElementById("head-coach");
// Get the div element that holds the main content
const playerCards = document.getElementById("player-cards");
// Gets the select element that will be responsible for filtering specific players 
const playersDropdownList = document.getElementById("players");
// holds all the information that will be displayed on the website
const myFavoriteFootballTeam = {
  team: "Argentina",
  sport: "Football",
  year: 1986,
  isWorldCupWinner: true,
  headCoach: {
    coachName: "Carlos Bilardo",
    matches: 7,
  },
  players: [
    {
      name: "Sergio Almirón",
      position: "forward",
      number: 1,
      isCaptain: false,
      nickname: null,
    },
    {
      name: "Sergio Batista",
      position: "midfielder",
      number: 2,
      isCaptain: false,
      nickname: null,
    },
     {
      name: "Ricardo Bochini",
      position: "midfielder",
      number: 3,
      isCaptain: false,
      nickname: "El Bocha",
    },
    {
      name: "Claudio Borghi",
      position: "midfielder",
      number: 4,
      isCaptain: false,
      nickname: "Bichi",
    },
    {
      name: "José Luis Brown",
      position: "defender",
      number: 5,
      isCaptain: false,
      nickname: "Tata",
    },
    {
      name: "Daniel Passarella",
      position: "defender",
      number: 6,
      isCaptain: false,
      nickname: "El Gran Capitán",
    },
    {
      name: "Jorge Burruchaga",
      position: "forward",
      number: 7,
      isCaptain: false,
      nickname: "Burru",
    },
    {
      name: "Néstor Clausen",
      position: "defender",
      number: 8,
      isCaptain: false,
      nickname: null,
    },
    {
      name: "José Luis Cuciuffo",
      position: "defender",
      number: 9,
      isCaptain: false,
      nickname: "El Cuchu",
    },
    {
      name: "Diego Maradona",
      position: "midfielder",
      number: 10,
      isCaptain: true,
      nickname: "El Pibe de Oro",
    },
    {
      name: "Jorge Valdano",
      position: "forward",
      number: 11,
      isCaptain: false,
      nickname: "The Philosopher of Football",
    },
    {
      name: "Héctor Enrique",
      position: "midfielder",
      number: 12,
      isCaptain: false,
      nickname: null,
    },
    {
      name: "Oscar Garré",
      position: "defender",
      number: 13,
      isCaptain: false,
      nickname: null,
    },
    {
      name: "Ricardo Giusti",
      position: "midfielder",
      number: 14,
      isCaptain: false,
      nickname: null,
    },
    {
      name: "Luis Islas",
      position: "goalkeeper",
      number: 15,
      isCaptain: false,
      nickname: "El loco",
    },
    {
      name: "Julio Olarticoechea",
      position: "defender",
      number: 16,
      isCaptain: false,
      nickname: null,
    },
    {
      name: "Pedro Pasculli",
      position: "forward",
      number: 17,
      isCaptain: false,
      nickname: null,
    },
    {
      name: "Nery Pumpido",
      position: "goalkeeper",
      number: 18,
      isCaptain: false,
      nickname: null,
    },
    {
      name: "Oscar Ruggeri",
      position: "defender",
      number: 19,
      isCaptain: false,
      nickname: "El Cabezón",
    },
    {
      name: "Carlos Tapia",
      position: "midfielder",
      number: 20,
      isCaptain: false,
      nickname: null,
    },
    {
      name: "Marcelo Trobbiani",
      position: "midfielder",
      number: 21,
      isCaptain: false,
      nickname: "Calesita",
    },
    {
      name: "Héctor Zelada",
      position: "goalkeeper",
      number: 22,
      isCaptain: false,
      nickname: null,
    },
  ],
};
// freezes the object so that it cannot be modified
Object.freeze(myFavoriteFootballTeam);
// deconstructs the properties from the object myFavoriteFootballTeam and saves in into a variable of the same name
const { sport, team, year, players } = myFavoriteFootballTeam;
// deconstructs a property from a nested object
const { coachName } = myFavoriteFootballTeam.headCoach;
// the span elements now have their text 
typeOfSport.textContent = sport;
teamName.textContent = team;
worldCupYear.textContent = year;
headCoach.textContent = coachName;
// This function create a new array of objects and display the contents on the webpage when it's called
// the default parameter is a array of objects that has been deconstructed from the object myFavoriteFootballTeam
const setPlayerCards = (arr = players) => {
// The content from the array that gets passed through this function will be added to the div that holds the main content
  playerCards.innerHTML += arr
  // The .map method will return a new array that is passed through the setPlayerCards function
    .map(
      // The following properties within each object in the players array will be deconstructed from the object and used within the template literal strings
      ({ name, position, number, isCaptain, nickname }) =>
      // the new array that is passed will be the following string with the deconstructed properties interpolated within
        `
        <div class="player-card">
          <h2>${name} ${isCaptain ? "(Captain)" : ""}</h2>
          <p>Position: ${position}</p>
          <p>Number: ${number}</p>
          <p>Nickname: ${nickname !== null ? nickname : "N/A"}</p>
        </div>
      `
    )
    // the array is return joined together without any commas 
    .join("");
};
// this add event listener runs everytime the user selects a different option from the dropdown list. 
playersDropdownList.addEventListener("change", (e) => {
  // The content within the div that holds the main content is intially erased
  playerCards.innerHTML = "";
// a switch statement is used to determined which divs will be displayed
  switch (e.target.value) {
    /* if the option with the value "nickname" is chosen, the filter method will return every object within the players array that has a nickname property that does not equal null. The new 
    array of objects then gets passed to the setPlayerCards function to display the content in the div that holds the main content.*/
    case "nickname":
      setPlayerCards(players.filter((player) => player.nickname !== null));
      break;
      // if the option with the value "forward" is chosen, the filter method will return every object within the players array that has a positin property equal to the string "forward". The new
      // array of objects then gets passed to the setPlayersCards function to display the content in the div that holds the main content
    case "forward":
      setPlayerCards(players.filter((player) => player.position === "forward"));
      break;
      /*If the option with the value "midfielder" is chosen, the filter method will return every object within the players array that has a position property equal to the string "midfielder" The
      new array of objects then gets passed to the setPlayerCards function to display the content in the div that holds the main content*/ 
    case "midfielder":
      setPlayerCards(
        players.filter((player) => player.position === "midfielder")
      );
      break;
      /* If the option with the value "defender" is chosen, the filter method will return every object within the players array that has a position property equal to the string "defender" The new
      array of objects then gets passed to the setPlayerCards function to display the content in the div that holds the main content*/ 
    case "defender":
      setPlayerCards(
        players.filter((player) => player.position === "defender")
      );
      break;
      /* If the option with the value "goalKeeper" is chosen, the filter method will return every object within the players array that has a position property equal to the string "goalKeeper" The 
      new array of objects then gets passed to the setPlayerCards function to display the content in the div that holds the main content */
    case "goalkeeper":
      setPlayerCards(
        players.filter((player) => player.position === "goalkeeper")
      );
      break;
// The default case is to call the setPlayerCards(); function which will display all objects in the players array
    default:
    setPlayerCards(); 

  }
});
