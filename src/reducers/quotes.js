import { defaultConfig } from 'sinon';
import uuid from 'uuid'

export default (state = [], action) => {
  
  switch(action.type){
    case 'ADD_QUOTE':
      // console.log(action)
      const quote = {
        id: action.quote.id,
        content: action.quote.content,
        author: action.quote.author,
        votes: action.quote.votes
      }
      // console.log(quote)
      return state.concat(quote)
    case 'REMOVE_QUOTE':
      const newState = state.filter(quote => action.quoteId !== quote.id)
      
      return newState
    case 'UPVOTE_QUOTE':
      const upvote = state.filter(quote => action.quoteId === quote.id )

      upvote[0].votes += 1
      // console.log(...state)

      return [...state]
    case 'DOWNVOTE_QUOTE':
      const downvote = state.filter(quote => action.quoteId === quote.id )

      downvote[0].votes > 0 ? downvote[0].votes -= 1 : null
      return [...state]
    default:
      return state;
  }
}
