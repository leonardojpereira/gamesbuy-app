import { produce } from "immer";

const initialState = JSON.parse(localStorage.getItem("wishlist")) || [];

export default function wishlist(state = initialState, action) {
  switch (action.type) {
    case "ADD_GAME_TO_WISHLIST":
      const newStateAdd = [...state, action.game];
      localStorage.setItem("wishlist", JSON.stringify(newStateAdd));
      return newStateAdd;
    case "REMOVE_GAME_FROM_WISHLIST":
      const newStateRemove = produce(state, (draft) => {
        const gameIndex = draft.findIndex((game) => game.id === action.id);

        if (gameIndex >= 0) {
          draft.splice(gameIndex, 1);
        }
      });
      localStorage.setItem("wishlist", JSON.stringify(newStateRemove));
      return newStateRemove;
    case "TOGGLE_GAME_WISHLIST":
      const newStateToggle = produce(state, (draft) => {
        const gameIndex = draft.findIndex((game) => game.id === action.id);

        if (gameIndex >= 0) {
          draft[gameIndex].wishlist = !draft[gameIndex].wishlist;
        }
      });
      localStorage.setItem("wishlist", JSON.stringify(newStateToggle));
      return newStateToggle;
    default:
      return state;
  }
}