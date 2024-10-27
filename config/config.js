// This is a module export statement for exporting an object
module.exports = {
  // This is an object containing various settings
  settings: {
    prefix: '!', // the prefix for commands example, !help
    botName: '', // this is your bot name, it has to be the same in game
    owerName: 'OnurV', // change this to the owner name
    ownerId: '6417b7c9b38fcbc2f504a811', // change this with the owner of the bot ID
    botId: '39da48650d335d5bdf239a31ee0bac789ad77d8dd2bcb2c203f15f3ba03a3061', // change this with your bot ID, you can get the bot id once you start the bot.
    developers: ['65676929f1310172b5a01327'], // you can add as many as you want
    moderators: ['65676929f1310172b5a01327',
], // add as many as you want
    roomName: 'Changeme', // change this to your room name
    // change this to where you want the bot to teleport on start
    coordinates: {
      x: 15,
      y: 1,
      z: 4,
      facing: 'FrontRight'
    },
    reactionName: 'wink' // the reaction you want to use to kick players, 'wink', 'wave, 'heart', 'clap', 'thumbsup'
  },
  // This is an object containing authentication data
  authentication: {
    room:"66eec146961875a0239e0fcf" , // your room ID can be found in highrise.game/room/
    token: "b350dbbbb343dcff86546906b33952416ce80933bea0419d45240756e45cc5dc" // your token ID     you can get one from https://highrise.game
  }
}