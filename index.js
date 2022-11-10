const usersList = [
    {
        id: 1,
        firstName: "Ali",
        lastName: "Karimi",
        address: "Tehran",
        phonenumber: "09120000000",

    }
];

function idGenerator() {
    const id = Math.floor(Math.random() * 100000);
    if (usersList.findIndex((user) => user.id === id) === -1)
        return id
    else
        return idGenerator()
}

function addUser(id, firstName, lastName, address, phonenumber) {
    const user = {
        id, firstName, lastName, address, phonenumber,
    }
    usersList.push(user);
    return user
}

function deleteUser(id) {
    const idNumber = usersList.findIndex(user => user.id === id)
    if (idNumber > -1) {
        const user = usersList.splice(idNumber, 1)
        return user
    }
    else{
        alert("No user found!")
        getCommand()
    }
}

function searchUsers(searchKey) {
    if (searchKey) {
        const searchedUser = usersList.filter((user) => {
            for (const key in user) {
                if (String(user[key]).search(searchKey) > -1) {
                    return true;
                }
            }
        });
        return searchedUser
    }
    else
        return usersList
}

function findUser(id) {
    if (id) {
        const user = usersList.find((user) => user.id === id);
        if (user)
            return user
        else{
            alert("No user found!")
            getCommand()
        }
            
    }
    else
        return "Invalid Id!"
}





function getCommand() {
    const command = prompt(" What do you want to do? \n Enter the number of action ... \n 1: Add a user \n 2: Delete a user \n 3: Search \n 4: Find a user \n 5: See the list of users \n 6: Exit")
    // const command = prompt("What do you want to do?", "add a user");
    switch (command) {
        case "1":  // Add a user
            const firstName = prompt("New user's first name:");
            const lastName = prompt("New user's last name:");
            const address = prompt("New user's address:");
            const phonenumber = prompt("New user's phone number:");
            if (String(phonenumber).length === 11) {
                if (firstName && lastName && address && phonenumber) {
                    const newUser = addUser(idGenerator(), firstName, lastName, address, phonenumber);
                    alert("Press Enter to see the new user!")
                    alert(JSON.stringify(newUser));
                }
                else
                    alert("Some parts are blank, try again!")
                getCommand()
                break;
            }
            else {
                alert("Invalid phone number, try again!")
                getCommand()
            }


        case "2":  // Delete a user by it's id
            const id = prompt("The user's id:");
            if (id) {
                const user = deleteUser(Number(id));
                alert("Press Enter to see the deleted user!")
                alert(JSON.stringify(user));
            }
            else
                alert("Invalid id, try again!")
            getCommand()
            break;

        case "3":
            const searchKey = prompt("search");
            const searchedUser = searchUsers(searchKey);
            console.log(searchedUser);
            alert(JSON.stringify(searchedUser));
            getCommand()
            break;

        case "4":
            const userId = prompt("The user's id:");
            const foundUser = findUser(Number(userId));
            console.log(foundUser);
            alert(JSON.stringify(foundUser));
            getCommand()
            break;

        case "5":
            // alert("Press Enter to see the list of users!")
            alert(JSON.stringify(usersList));
            getCommand()

        case "6":
            break;


        default:
            alert("Invalid command, try again!");
            getCommand()
            break;
    }
}

getCommand()
