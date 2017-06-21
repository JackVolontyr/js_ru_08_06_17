import React, {Component} from 'react'

export default class CommentForm extends React.Component {
  state = {
      author: '',
      authorValid: false,
      newComment: '',
      newCommentValid: false
  }

  render() {
    return (
          <div>
              Author:<br /><input type = 'text' value = {this.state.author} onChange = {this.handleAuthorChange} /><br /><br />
              Add comment:<br /><textarea type = 'text' value = {this.state.newComment} onChange = {this.handleCommentChange} /><br />
              <button>{'add comment'}</button>
          </div>
    )
  }

  handleAuthorChange = (ev) => {
    if (ev.target.value.length < 5 || ev.target.value.length > 15) {
      ev.target.style.border = '2px solid red'

      this.setState({
          authorValid: false
      })

    } else {
      ev.target.style.border = ''

      this.setState({
          authorValid: true
      })
    }

    this.setState({
        author: ev.target.value,
    })
  }

  handleCommentChange = (ev) => {
    if (ev.target.value.length < 20 || ev.target.value.length > 50) {
      ev.target.style.border = '2px solid red'

      this.setState({
          newCommentValid: false
      })

    } else {
      ev.target.style.border = ''

      this.setState({
        newCommentValid: true,
      })
    }

    this.setState({
        newComment: ev.target.value,
    })
  }
}
