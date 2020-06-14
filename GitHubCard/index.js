/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/

// console.log(axios)    //its like a method. returns a promise(pending, )

                         // higher order functions take in callback   
                         //parameters represents one item in the array and will change at each iteration, has meaning//

// axios.get("https://google.com")
//     .then(function(res) {           or   ((res) =>
//           console.log(res.data)   runs if successful    // multiple then() 
//           cards.appendChild(mycard(res.data))
//     })              
                     
//     .catch((err) => {             
//           console.log(err)        runs if error           res.data is whatever API is sending you
//                                                           // single   catches everything
//     })              



axios.get('https://api.github.com/users/max821023')
    .then((res) => {
            console.log(res.data);   //runs if successful
            //     cards.appendChild(mycard(res.data))
            
            let parent = document.querySelector('.cards');
            parent.append(githubCard(res.data));
    })              

    .catch((err) => {
      console.log(err);              //runs if error
})              








/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

const followersArray = [];


// followersArray.forEach(item)                  //pass in the an item in array


/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:  
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>

*/




function githubCard(obj) {
    //CREATING COMPONENT//
    const Card = document.createElement('div');
    const Img = document.createElement('img');
    // const ImgURL = document.createElement('a');
    const Info = document.createElement('div');
    const Name = document.createElement('h3');
    const UserName = document.createElement('p');
    const Location = document.createElement('p');
    const Profile = document.createElement('p');
    const Link = document.createElement('a');
    const Followers = document.createElement('p');
    const FollowingMe = document.createElement('p');
    const Bio = document.createElement('p');



    //STYLING//
  
    Card.classList.add('card');
    Info.classList.add('card-info');
    // Img.classList.add('card-img');
    // Name.classList.add('card-title');
    Name.classList.add('name');
    UserName.classList.add('user-name');



    //PROGRAMMATICALLY UPDATE CONTENT
    
    Img.src = obj.avatar_url;
    Name.textContent = obj.name;
    UserName.textContent = obj.login;
    Location.textContent = obj.location;
    Followers.textContent = obj.followers;
    FollowingMe.textContent = obj.following;
    Bio.textContent = obj.bio;
    // Link.textContent = obj.html_url;
    Link.href = obj.html_url;


    //APPENDING//
    Card.appendChild(Info);
    Card.appendChild(Img);
    Info.appendChild(Name);
    Info.appendChild(UserName);
    Info.appendChild(Location);
    Info.appendChild(Profile);
    Profile.appendChild(Link);
    Info.appendChild(Followers);
    Info.appendChild(FollowingMe);
    Info.appendChild(Bio);


    //EVENTS//
    // Card.addEventListener('click', () => {
    // Card.classList.toggle('selected');
    // });
    return Card;
  }
  // const cards = document.querySelector('.card');
  // data.forEach((obj) => {
  //   cards.appendChild(githubCard(obj));
  // });

  

  // mycard

/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/
