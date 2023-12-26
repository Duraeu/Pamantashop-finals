import {useState} from 'react';

const Home = () => {
 
const [friends, setFriends] = useState([
   {title:"RJ KUPAL", body:"gago si rj", author:"Duraemondpog", id:1},
   {title:"RJ KUPAL", body:"gago si rj", author:"Duraemondpog", id:2},
   {title:"RJ KUPAL", body:"gago si rj", author:"Duraemondpog", id:3}
]);


    return ( 
        <div className="home">

            {friends.map((friends) => 
            <div className="friends-preview" key={friends.id}>
            <h1>{friends.title}</h1>
            <h2 className="text-2xl font-bold text-blue-600">Made by {friends.author}</h2>
            <p>{friends.body}</p>
            </div>
            )}
            
        </div>
     );
}
 
export default Home;
