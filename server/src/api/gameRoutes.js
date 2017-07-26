import api from 'koa-router'
import mongoose from 'mongoose'
import Game from '../../../models/Game'

const router = new api({ prefix: '/api/games' })

router
  .get('/', async(ctx, next) => {
    console.log('You have arrived at the game API!')
    Game.find({}, function(err, games) {
      var gameMap = []

      games.forEach(function(game) {
        gameMap[game.gameId] = game
        console.log(game.participants[0].spell1Id)
      })

      ctx.body = gameMap
    })
  })

  .post('/', async(ctx, next) => {
    console.log("POST : /api/games")
    const body = ctx.request.body
    console.log("ID : " + body.gameId)

    var game = new Game({
      seasonId: body.seasonId,
      queueId: body.queueId,
      gameId: body.gameId,
      participantIdentities: body.participantIdentities,
      gameVersion: body.gameVersion,
      platformId: body.platformId,
      gameMode: body.gameMode,
      mapId: body.mapId,
      gameType: body.gameType,
      teams: body.teams,
      participants: body.participants,
      gameDuration: body.gameDuration,
      gameCreation: body.gameCreation
    })

    game.save()
  })

  .delete('/all', async(ctx, next) => {
    console.log("The fuck you tryna do right now?")
  })

export default router
