import BioImage from '../assets/CE13BA46-71B4-4CDE-841F-EA906B9B4B13_1_105_c.jpeg'
import './Bio.css'

const Bio = (props) => {
  return ( 
    <>
      <div className='bio-body'>
        <h1>About</h1>
        <div className='bio-img-text'>
          <img src={BioImage} alt="" className='bio-img'/>
          <p className='bio-text'>Bio Here: Then define your profileSchema however is appropriate for your app. In order to make the friend requests function properly, we will need to specify three specific fields:
friendCode: this is where we will utilize that uuid!
friendRequests: other users’ uuids will be pushed here when they send you a friend request.
friends: we will find other users based on their profile id when a friend request is accepted, and at the same time we will remove their uuid from friend requests.

In my app, I decided to cut down the character count that uuid generates because a lengthy code wasn’t necessary. An eight-digit code was sufficient for my needs, but if you need it to be longer you can skip this next step:

Set the value of friendCode to have a type of String, and use a function for the default value that returns v4 (uuidv4 in my code), sliced starting at character 0, and ending at character 8.

Need some help defining fields and values? Here’s my example code:
</p>
        </div>
      </div>
    </>
   );
}
 
export default Bio;