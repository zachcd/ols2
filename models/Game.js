const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const gameSchema = new Schema({
  seasonId: Number,
  queueId: Number,
  gameId: { type: Number, index: true },
  participantIdentities: [Schema.Types.Mixed],
  gameVersion: String,
  platformId: String,
  gameMode: String,
  mapId: Number,
  gameType: String,
  teams: [Schema.Types.Mixed],
  participants: [Schema.Types.Mixed],
  gameDuration: Number,
  gameCreation: Number
});

gameSchema.index({ gameId: 1 }, { unique: true });

module.exports = mongoose.model('Game', gameSchema)
