import PropTypes from 'prop-types';
function User({name, surname, age, isLoggedIn, friends, famname}){
    console.log(name);
    console.log(surname);
    console.log(isLoggedIn);
    console.log(friends);
    console.log(famname);

    return (
    <>
   <h1>
    {
        isLoggedIn ? `${name} ${surname} ${age}`
                         : "Giriş yapmadınız"
    }
   </h1>
   {
        friends.map((friends, index) => (
            <div key={index}>
            {index+1} - {friends}
            </div>) 
            )
        }
    

    <h2>Family name, who, age:{ 
        famname.map((famname, index) => (
            <div key={index}>
            {index+1} - {famname.name}, {famname.who}, {famname.age}
                </div>)
            )
            }
            </h2>



   </>
    );
}

User.propTypes = {
 name: PropTypes.string.isRequired,
 surname:PropTypes.string,
 age:PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
 isLoggedIn: PropTypes.bool,
 friends: PropTypes.array,
 famname: PropTypes.array,
};

export default User;