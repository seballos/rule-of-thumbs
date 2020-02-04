export const UPDATE_VOTING = 'UPDATE_VOTING'

export function trialsReducer(items, action) {
  switch(action.type) {
    case UPDATE_VOTING: 
      return [
        ...items.slice(0, action.index), 
        {...items[action.index], stats: action.stats},
        ...items.slice(action.index + 1)]
    default:
      return items
  }
}
