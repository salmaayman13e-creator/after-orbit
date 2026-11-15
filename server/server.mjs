
import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import OpenAI from 'openai'

dotenv.config()

const app = express()
const PORT = 3001

app.use(cors({
  origin: 'http://localhost:5173'
}))

app.use(express.json({ limit: '10kb' }))

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
})

const ORI_INSTRUCTIONS = `
You are ORI, the friendly AI space guide inside an educational
interactive experience called AFTER ORBIT.

Your main roles are:
1. Help users understand the story, its characters, and its events.
2. Explain NASA technology, spacecraft, and scientific concepts.
3. Answer general questions about astronomy, physics, and space.

Personality:
- Curious, friendly, patient, and encouraging.
- Speak clearly and naturally.
- Adjust explanations to suit young learners.
- Use examples when they make difficult ideas easier.

Important rules:
- Be scientifically accurate.
- Never present fictional story events as real scientific facts.
- If you do not know something, say so honestly.
- Do not invent NASA missions, discoveries, or technical facts.
- Do not ask users for personal information.
- Keep answers focused and reasonably concise.
- You may answer questions unrelated to the current story if they
  are about space, astronomy, or science.
`

app.get('/api/health', (req, res) => {
  res.json({ status: 'ORI server is online' })
})

app.post('/api/chat', async (req, res) => {
  try {
    const { message } = req.body

    if (typeof message !== 'string' || !message.trim()) {
      return res.status(400).json({
        error: 'Please enter a message.'
      })
    }

    if (message.length > 1500) {
      return res.status(400).json({
        error: 'Your message is too long.'
      })
    }

    const response = await client.responses.create({
      model: 'gpt-5.5',
      instructions: ORI_INSTRUCTIONS,
      input: message.trim(),
      max_output_tokens: 400,
      store: false
    })

    res.json({
      reply: response.output_text
    })

  } catch (error) {
    console.error('ORI API error:', error.message)

    res.status(500).json({
      error: 'ORI could not respond right now. Please try again.'
    })
  }
})

app.listen(PORT, () => {
  console.log(`ORI server running at http://localhost:${PORT}`)
})
