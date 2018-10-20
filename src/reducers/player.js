import * as PlayerActionTypes from '../actiontypes/player';
import mock_players from '../mock/mock_players';

const initialState = mock_players;

export default function Player(state = initialState, action) {

    let date = new Date();
    let day = date.getDate();
    let month = date.getMonth();
    let year = date.getYear();

    switch (action.type) {
        case PlayerActionTypes.ADD_PLAYER: {
            const addPlayerList = [
                ...state.players, {
                    name: action.name,
                    score: 0,
                    createdDate: `${day}/${month}/${year}`
                }];
            return {
                ...state,
                players: addPlayerList
            };
        }

        case PlayerActionTypes.REMOVE_PLAYER: {
            const removePlayerList = [
                ...state.slice(0, action.index),
                ...state.slice(action.index + 1)
            ];
            return {
                ...state,
                players: removePlayerList
            }
        }

        case PlayerActionTypes.UPDATE_PLAYER_SCORE: {
            const updatePlayerList = state.players.map((player, index) => {
                if (index === action.index) {
                    return {
                        ...player,
                        score: player.score + action.score,
                        updatedDate: `${day}/${month}/${year}`
                    };
                }
                return player;
            });
            return {
                ...state,
                player: updatePlayerList
            }
        }

        case PlayerActionTypes.SELECT_PLAYER:
            return {
                ...state,
                selectedPlayerIndex: action.index
            }

        default:
            return state;
    }
}