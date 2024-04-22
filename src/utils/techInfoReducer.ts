type TechInfoActionType = {
  type: 'action'
  payload: boolean
}

export default function techInfoReducer(state: boolean, action: TechInfoActionType) {
  switch (action.type) {
    case 'action': {
      return (state = !state)
    }
    default: {
      throw Error('Unknown action: ' + action.type)
    }
  }
}
