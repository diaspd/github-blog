import ReactMarkdown from 'react-markdown/'
import { Prism } from 'react-syntax-highlighter'
import { darcula } from 'react-syntax-highlighter/dist/cjs/styles/prism'
import { MainContent } from './styles'

interface ContentProps {
  content: string
}

export function Content({ content }: ContentProps) {
  return (
    <MainContent>
      <p>
        <strong>
          <ReactMarkdown
            components={{
              code({ node, inline, className, children, ...props }) {
                const match = /language-(\w+)/.exec(className || '')
                return !inline && match ? (
                  <Prism
                    style={darcula as any}
                    language={match[1]}
                    PreTag="div"
                    {...props}
                  >
                    {String(children).replace(/\n$/, '')}
                  </Prism>
                ) : (
                  <code className={className} {...props}>
                    {children}
                  </code>
                )
              },
            }}
          >
            {content}
          </ReactMarkdown>
        </strong>
      </p>
    </MainContent>
  )
}
