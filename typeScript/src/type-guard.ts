interface UserInterface{
    type: "user",
    username: string;
    age: number;
    id: number;
}

interface PersonInterface{
    type: "person",
    username: string;
    age: number;
    id: number;
}

function createUser(value: UserInterface | PersonInterface){
    if(value.type === "user"){
        console.log("user", value.username)
    }else if(value.type === "person"){
        console.log("person", value.username)
    }else{
        console.log("Other")
    }
}
createUser({
    type:"user",
    username:"john",
    age: 20,
    id:1
})

createUser({
    type: "person",
    username: "Rose",
    age: 20,
    id: 1
})