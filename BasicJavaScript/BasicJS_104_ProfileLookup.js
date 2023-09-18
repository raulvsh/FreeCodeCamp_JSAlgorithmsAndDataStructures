// Setup
const contacts = [
    {
      firstName: "Akira",
      lastName: "Laine",
      number: "0543236543",
      likes: ["Pizza", "Coding", "Brownie Points"],
    },
    {
      firstName: "Harry",
      lastName: "Potter",
      number: "0994372684",
      likes: ["Hogwarts", "Magic", "Hagrid"],
    },
    {
      firstName: "Sherlock",
      lastName: "Holmes",
      number: "0487345643",
      likes: ["Intriguing Cases", "Violin"],
    },
    {
      firstName: "Kristian",
      lastName: "Vos",
      number: "unknown",
      likes: ["JavaScript", "Gaming", "Foxes"],
    },
  ];
  
  function lookUpProfile(name, prop) {
    // Only change code below this line
    for(let i=0;i<contacts.length;i++){
        //console.log(contacts[i].firstName)
        console.log(contacts[i][prop])
        console.log(prop)
        //console.log(contacts[i].prop)


        if(name==contacts[i].firstName&&contacts[i][prop]){
            console.log(contacts[i][prop])
            return contacts[i][prop]
        } else if(name == contacts[i].firstName&&!contacts[i][prop]){
            console.log("no existe prop" + contacts[i][prop])
            return "No such property";

        }
        //console.log(contacts[i])
    }
    return "No such contact";
    // Only change code above this line
  }
  
  lookUpProfile("Akira", "likes");