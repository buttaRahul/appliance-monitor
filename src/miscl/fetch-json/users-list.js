function UsersList(){
    fetchUsers();
    return <h1> hi js</h1>
};

const fetchUsers = () => {
   fetch("https://jsonplaceholder.typicode.com/users")
   .then((res) => res.json())
   .then((data) =>console.log(data) )

};

export default UsersList;
