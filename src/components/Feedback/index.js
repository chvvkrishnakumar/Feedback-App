import {Component} from 'react'
import './index.css'

class Feedback extends Component {
  state = {feedback: false}

  onFeedback = () => {
    this.setState(prevState => ({feedback: !prevState.feedback}))
  }

  render() {
    const {feedback} = this.state
    const {resources} = this.props
    const {emojis, loveEmojiUrl} = resources

    const result = feedback ? (
      <div className="main">
        <img src={loveEmojiUrl} alt="love emoji" />
        <h1>Thank you</h1>
        <p>
          We will use your feedback to improve our customer support performance
        </p>
      </div>
    ) : (
      <div className="main">
        <h1>How satisfied are you with our customer support performance</h1>
        <ul className="sub">
          {emojis.map(each => (
            <li key={each.id} className="img-container">
              <img
                src={each.imageUrl}
                alt={each.name}
                onClick={this.onFeedback}
              />
              <p>{each.name}</p>
            </li>
          ))}
        </ul>
      </div>
    )
    return <div>{result}</div>
  }
}

export default Feedback
