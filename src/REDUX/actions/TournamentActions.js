export const SIGN_UP = 'SIGN_UP'
export const SCHEDULE_GAME = 'SCHEDULE_GAME'
export const CONFIRM_GAME_TIME = 'CONFIRM_GAME_TIME'

export function Sign_Up(tournament) {
  return {
    type: SIGN_UP,
    payload: {
      tournament: tournament
    }
  }
}

export function Schedule_Game(tournament, game, dateTime) {
  return {
    type: SCHEDULE_GAME,
    payload: {
      tournament: tournament,
      game: game,
      dateTime: dateTime
    }
  }
}

export function Confirm_Game_Time(tournament, game) {
  return {
    type: CONFIRM_GAME_TIME,
    payload: {
      tournament: tournament,
      game: game
    }
  }
}
