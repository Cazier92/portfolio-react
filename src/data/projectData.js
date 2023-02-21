import mazeImg from '../assets/maze-raider.png'
import dogPark from '../assets/dog-park.png'
import psynch from '../assets/psynch.png'

const projectData = [
  {
    name: 'PSYNCH',
    image: psynch,
    info: "PSYNCH is an app focused on altering the scene of social media, ultimately changing how we connect as a society. Track emotions through posts to your friends and/or the world. Let your friends know exactly how you feel at any time with no shame or worry. Keep tabs on how you feel throughout your life's journey. Get support when you need it. With PSYNCH, you will finally experience meaningful connections and emotionally enriching conversations through social networking. Share your feelings and get to know those around you on a deeper level.",
    gitHub: 'https://github.com/Cazier92/PSYNCH-front-end',
    deploy: 'https://psynch.netlify.app/',
    summary: 'A social networking app to communicate and keep track of your friends and your own emotions!'
  },
  {
    name: 'The Dog Park Network',
    image: dogPark,
    info: "The Dog Park is a blogging and networking app, made just for dog owners! Users can post stories about their dogs and any cool tips and tricks they've learned, display info about the dogs they own, and connect with other users by adding them as friends!",
    gitHub: 'https://github.com/Cazier92/dog-park',
    deploy: 'https://the-dog-park-network.fly.dev/',
    summary: 'A blogging and networking app for dog owners!'
  },
  {
    name: 'Maze Raider',
    image: mazeImg,
    info: 'Maze Raider is a choose your own adventure styled game where you explore ancient ruins in search of treasure and adventure. At various points you may be faced with battling theives, wild animals, or risking your life on the edge of a cliff! At every step you will be given two choices, just click on whichever option sounds like the better adventure to you! Be warned though, as certain options will lead to paths where you need to click multiple times on a button or icon in order to escape danger!',
    gitHub: 'https://github.com/Cazier92/Choose-your-adventure-maze',
    deploy: 'https://bryce-cazier-maze.netlify.app/',
    summary: 'A fun choose-your-own-adventure type game with dark twists and turns!'
  },
]

export {
  projectData
}