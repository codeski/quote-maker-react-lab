import React, { Component } from 'react';
import { connect } from 'react-redux';
import QuoteCard from '../components/QuoteCard';
import { removeQuote, upvoteQuote, downvoteQuote } from '../actions/quotes';

class Quotes extends Component {

  renderQuoteCards = () => this.props.state.quotes.map(quote => <QuoteCard key={quote.id} quote={quote} id={quote.id} content={quote.content} author={quote.author} removeQuote={this.props.removeQuote} upvoteQuote={this.props.upvoteQuote} downvoteQuote={this.props.downvoteQuote} />)
  
  render() {
    return (
      <div>
        <hr />
        <div className="row justify-content-center">
          <h2>Quotes</h2>
        </div>
        <hr />
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              {this.renderQuoteCards()}
              {/*
                TODO:

                Render Quotes With QuoteCard component and pass down callback props for removing, upvoting and downvoting quotes
               */}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { state }
}

const mapDispatchToProps = (dispatch) => ({
  removeQuote: id => dispatch(removeQuote(id)), 
  upvoteQuote: id => dispatch(upvoteQuote(id)), 
  downvoteQuote: id => dispatch(downvoteQuote(id))
  // removeQuote: quoteId => dispatch({type: 'REMOVE_QUOTE', quoteId}),
  // upvoteQuote: quoteId => dispatch({type: 'UPVOTE_QUOTE', quoteId}),
  // downvoteQuote: quoteId => dispatch({type: 'DOWNVOTE_QUOTE', quoteId})
})

//add arguments to connect as needed
export default connect(mapStateToProps, mapDispatchToProps)(Quotes);
