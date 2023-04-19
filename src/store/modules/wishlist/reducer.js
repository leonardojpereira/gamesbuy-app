import { produce } from "immer";

export default function wishlist(state = [], action) {
    switch (action.type) {
        case 'ADD_GAME_TO_WISHLIST':
            return [ ...state, action.game ];
        case 'REMOVE_GAME_FROM_WISHLIST':
                return produce(state, draft => {
                    const gameIndex = draft.findIndex(game => game.id === action.id);

                    if(gameIndex >= 0) {
                        draft.splice(gameIndex, 1);
                    }
                });
        default:
            return state;
    }
}
