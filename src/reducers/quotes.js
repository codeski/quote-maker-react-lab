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

      console.log(upvote.votes)
      
      return [...state, {...state, upVote}]
    case 'DOWNVOTE_QUOTE':
      return state
    default:
      return state;
  }
}
