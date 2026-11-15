
import { useRef, useState } from 'react'
import { CreateMLCEngine, type MLCEngine } from '@mlc-ai/web-llm'
import { Sparkles, X, Send } from 'lucide-react'

type Props = {
  open: boolean
  onClose: () => void
}

type Message = {
  role: 'user' | 'assistant'
  content: string
}

const MODEL_ID = 'Qwen2.5-0.5B-Instruct-q4f16_1-MLC'

const ORI_PROMPT = `
You are ORI, a friendly educational space guide inside AFTER ORBIT.

Your responsibilities:
- Help users understand the AFTER ORBIT story and its characters.
- Explain astronomy, space science, and space technology clearly.
- Answer general questions about space, even when unrelated to a chapter.
- Use simple, engaging language suitable for young learners.
- Reply in the same language the user uses.
- Separate fictional story events from real scientific facts.
- Never invent NASA discoveries, missions, or scientific facts.
- If you are unsure, say so honestly.
- Be curious, patient, friendly, and concise.
`

export default function AlienGuide({ open, onClose }: Props) {
  const engineRef = useRef<MLCEngine | null>(null)

  const [input, setInput] = useState('')
  const [messages, setMessages] = useState<Message[]>([])
  const [isBusy, setIsBusy] = useState(false)
  const [status, setStatus] = useState('Ready')

  if (!open) return null

  const sendMessage = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const question = input.trim()

    if (!question || isBusy) return

    const nextMessages: Message[] = [
      ...messages,
      { role: 'user', content: question }
    ]

    setMessages(nextMessages)
    setInput('')
    setIsBusy(true)

    try {
      if (!('gpu' in navigator)) {
        throw new Error(
          'WebGPU is not available in this browser. Try an updated version of Chrome or Edge.'
        )
      }

      if (!engineRef.current) {
        setStatus('Preparing ORI...')

        engineRef.current = await CreateMLCEngine(MODEL_ID, {
          initProgressCallback: (progress) => {
            setStatus(progress.text)
          }
        })
      }

      setStatus('ORI is thinking...')

      const response = await engineRef.current.chat.completions.create({
        messages: [
          { role: 'system', content: ORI_PROMPT },
          ...nextMessages.slice(-10).map((message) => ({
            role: message.role,
            content: message.content
          }))
        ],
        temperature: 0.7,
        max_tokens: 350
      })

      const answer = response.choices[0]?.message?.content

      setMessages([
        ...nextMessages,
        {
          role: 'assistant',
          content: typeof answer === 'string'
            ? answer
            : 'I could not generate a response. Please try again.'
        }
      ])

      setStatus('Ready')
    } catch (error) {
      const errorText = error instanceof Error
        ? error.message
        : 'Unknown error'

      setMessages([
        ...nextMessages,
        {
          role: 'assistant',
          content: `I couldn't start properly. ${errorText}`
        }
      ])

      setStatus('Something went wrong')
    } finally {
      setIsBusy(false)
    }
  }

  return (
    <aside className="guide-panel">
      <div className="guide-top">
        <div className="alien-avatar">
          <span className="alien-eye left" />
          <span className="alien-eye right" />
          <span className="alien-glow" />
        </div>

        <div>
          <div className="eyebrow">ARCHIVE COMPANION</div>
          <strong>ORI <span className="online-dot" /></strong>
        </div>

        <button
          className="icon-button close-guide"
          onClick={onClose}
          aria-label="Close guide"
        >
          <X size={17} />
        </button>
      </div>

      <div className="guide-chat">
        <p className="guide-message">
          Transmission received. I'm ORI, your guide through the AFTER ORBIT archive.
        </p>

        <p className="guide-hint">
          Ask me anything about space, astronomy, or our adventures!
        </p>

        {messages.map((message, index) => (
          <div
            key={index}
            className={`chat-message ${message.role}`}
          >
            <strong>{message.role === 'user' ? 'YOU' : 'ORI'}</strong>
            <p>{message.content}</p>
          </div>
        ))}

        {isBusy && (
          <div className="chat-loading">
            <Sparkles size={14} />
            {status}
          </div>
        )}
      </div>

      <form className="guide-input" onSubmit={sendMessage}>
        <input
          value={input}
          onChange={(event) => setInput(event.target.value)}
          placeholder="Ask ORI something..."
          disabled={isBusy}
        />

        <button
          type="submit"
          disabled={isBusy || !input.trim()}
          aria-label="Send message"
        >
          <Send size={17} />
        </button>
      </form>

      <div className="guide-note">
        <Sparkles size={14} />
        AI GUIDE · LOCAL MODE
      </div>
    </aside>
  )
}
