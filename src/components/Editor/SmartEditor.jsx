// Import React!
import React from 'react'
import { Editor } from 'slate-react'
import { Value } from 'slate'
import Plain from 'slate-plain-serializer'
import Lists from "@convertkit/slate-lists"

const existingValue = localStorage.getItem('content')
const initialValue = Plain.deserialize(
  existingValue || 'A string of plain text.'
)

// Create an array of plugins.
const plugins = [
  Lists({
    blocks: {
      ordered_list: "ordered-list",
      unordered_list: "unordered-list",
      list_item: "list-item",
    },
    classNames: {
      ordered_list: "ordered-list",
      unordered_list: "unordered-list",
      list_item: "list-item"
    }
  }),
  MarkHotkey({ key: 'b', type: 'bold' }),
  MarkHotkey({ key: '`', type: 'code' }),
  MarkHotkey({ key: 'i', type: 'italic' }),
  MarkHotkey({ key: '~', type: 'strikethrough' }),
  MarkHotkey({ key: 'u', type: 'underline' }),
]

function MarkHotkey(options) {
  const { type, key } = options

  // Return our "plugin" object, containing the `onKeyDown` handler.
  return {
    onKeyDown(event, editor, next) {
      // If it doesn't match our `key`, let other plugins handle it.
      if (!event.ctrlKey || event.key != key) return next()

      // Prevent the default characters from being inserted.
      event.preventDefault()

      // Toggle the mark `type`.
      editor.toggleMark(type)
    },
  }
}

// Define our app...
class SmartEditor extends React.Component {
  state = {
    value: initialValue,
  }

  onChange = ({ value }) => {
    // Save the value to Local Storage.
    // Check to see if the document has changed before saving.
    if (value.document != this.state.value.document) {
      const content = Plain.serialize(value)
      localStorage.setItem('content', content)
    }
    console.log('Local storage +++', localStorage.getItem('content'));
    this.setState({ value })
  }

  toolBar(){
    return (<div>
list ........
    </div>)
  }

  render() {
    console.log('Local storage +++', this.state);
    return (
      <div>
      {this.toolBar()}
      <Editor
        plugins={plugins}
        value={this.state.value}
        onChange={this.onChange}
        renderMark={this.renderMark}
      />
      </div>
    )
  }

  renderMark = (props, editor, next) => {
    switch (props.mark.type) {
      case 'bold':
        return <strong>{props.children}</strong>
      // Add our new mark renderers...
      case 'code':
        return <code>{props.children}</code>
      case 'italic':
        return <em>{props.children}</em>
      case 'strikethrough':
        return <del>{props.children}</del>
      case 'underline':
        return <u>{props.children}</u>
      default:
        return next()
    }
  }
}

export default SmartEditor;