// This is a module export statement for exporting an object
module.exports = {
  // This is an object containing various settings
  settings: {
    prefix: '!', // the prefix for commands example, !help
    botName: 'TesterBot', // this is your bot name, it has to be the same in game
    owerName: 'Atekinz', // change this to the owner name
    ownerId: '', // change this with the owner of the bot ID
    botId: 'a5b1e7974817e84e92651c73c7b34875b9545b1cdeba12aea1b27a77cf1f1afa', // change this with your bot ID, you can get the bot id once you start the bot.
    developers: ['Atekinz'], // you can add as many as you want
    moderators: ['Atekinz',
], // add as many as you want
    roomName: 'Changeme', // change this to your room name
    // change this to where you want the bot to teleport on start
    coordinates: {
      x: 0,
      y: 0,
      z: 0,
      facing: 'FrontLeft'
    },
    reactionName: 'wink' // the reaction you want to use to kick players, 'wink', 'wave, 'heart', 'clap', 'thumbsup'
  },
  // This is an object containing authentication data
  authentication: {
    room:"65b0c62e2ba06c8f8a095355" , // your room ID can be found in highrise.game/room/
    token: "a5b1e7974817e84e92651c73c7b34875b9545b1cdeba12aea1b27a77cf1f1afa" // your token ID     you can get one from https://highrise.game
  }
}