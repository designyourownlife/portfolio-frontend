import React from "react"
import ReactMarkdown from "react-markdown"

const TextContent = ({ content }) => {
  return (
    <React.Fragment>
      <section className="content text-content">
        <ReactMarkdown>{content}</ReactMarkdown>
      </section>
    </React.Fragment>
  )
}

export default TextContent
