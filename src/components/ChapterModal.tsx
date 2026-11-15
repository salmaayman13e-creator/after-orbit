
import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowRight, Clock3, MapPin, Mic, Square, X } from 'lucide-react'
import type { Chapter } from '../data/chapters'

export default function ChapterModal({
  chapter,
  onClose,
  onNext
}: {
  chapter: Chapter | null
  onClose: () => void
  onNext: (id: string) => void
}) {
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentLine, setCurrentLine] = useState<number | null>(null)
  const playbackId = useRef(0)

  useEffect(() => {
    window.speechSynthesis.cancel()
    playbackId.current += 1
    setIsPlaying(false)
    setCurrentLine(null)

    return () => {
      window.speechSynthesis.cancel()
      playbackId.current += 1
    }
  }, [chapter?.id])

  const stopStory = () => {
    playbackId.current += 1
    window.speechSynthesis.cancel()
    setIsPlaying(false)
    setCurrentLine(null)
  }

  const playFullStory = () => {
    if (isPlaying) {
      stopStory()
      return
    }

    const dialogue = chapter?.dialogue

    if (!dialogue || dialogue.length === 0) return

    window.speechSynthesis.cancel()

    const currentPlayback = ++playbackId.current

    setIsPlaying(true)
    setCurrentLine(0)

    const speakLine = (index: number) => {
      if (playbackId.current !== currentPlayback) return

      if (index >= dialogue.length) {
        setIsPlaying(false)
        setCurrentLine(null)
        return
      }

      const line = dialogue[index]
      const speech = new SpeechSynthesisUtterance(line.text)

      speech.lang = 'en-US'
      speech.rate = line.speaker === 'SOFIA' ? 0.94 : 0.92
      speech.pitch = line.speaker === 'SOFIA' ? 1.25 : 0.95

      const voices = window.speechSynthesis.getVoices()
      const englishVoices = voices.filter(voice =>
        voice.lang.toLowerCase().startsWith('en')
      )

      if (line.speaker === 'SOFIA') {
        const femaleVoice = englishVoices.find(voice =>
          /samantha|jenny|aria|ava|zira|susan|karen|victoria|female/i.test(voice.name)
        )

        if (femaleVoice) speech.voice = femaleVoice
      } else {
        const maleVoice = englishVoices.find(voice =>
          /david|guy|mark|alex|daniel|james|richard|george|male/i.test(voice.name)
        )

        if (maleVoice) speech.voice = maleVoice
      }

      setCurrentLine(index)

      speech.onend = () => {
        if (playbackId.current !== currentPlayback) return

        if (index + 1 < dialogue.length) {
          speakLine(index + 1)
        } else {
          setIsPlaying(false)
          setCurrentLine(null)
        }
      }

      speech.onerror = () => {
        if (playbackId.current !== currentPlayback) return

        setIsPlaying(false)
        setCurrentLine(null)
      }

      window.speechSynthesis.speak(speech)
    }

    speakLine(0)
  }

  return (
    <AnimatePresence>
      {chapter && (
        <motion.div
          className="modal-backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onMouseDown={e => {
            if (e.target === e.currentTarget) {
              stopStory()
              onClose()
            }
          }}
        >
          <motion.article
            className={`chapter-modal ${chapter.id === 'apollo11' ? 'apollo-modal' : ''}`}
            initial={{ opacity: 0, y: 28, scale: .98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 18 }}
            transition={{ duration: .3 }}
          >
            <button
              className="icon-button modal-close"
              onClick={() => {
                stopStory()
                onClose()
              }}
              aria-label="Close chapter"
            >
              <X />
            </button>

            <div
              className="modal-visual"
              style={{
                background: `radial-gradient(circle at 72% 48%, ${chapter.accent}55, transparent 38%), #0b1220`
              }}
            >
              <img src={chapter.image} alt="" />
              <div className="modal-visual-label">
                CHAPTER {chapter.number} / AFTER ORBIT ARCHIVE
              </div>
            </div>

            <div className="modal-body">
              <div className="eyebrow">
                {chapter.category} · {chapter.status}
              </div>

              <h2>{chapter.title}</h2>
              <p className="modal-subtitle">{chapter.subtitle}</p>

              <div className="modal-stats">
                <span><MapPin size={14} />{chapter.destination}</span>
                <span><Clock3 size={14} />{chapter.year}</span>
              </div>

              <p className="modal-description">{chapter.description}</p>

              <div className="story-label">
                {chapter.dialogue ? 'THE MISSION STORY' : 'THE STORY'}
                <span>FIELD NOTES / {chapter.number}</span>
              </div>

              {chapter.dialogue ? (
                <>
                  <button
                    className={`dialogue-voice-button full-story-voice-button ${isPlaying ? 'active' : ''}`}
                    onClick={playFullStory}
                  >
                    {isPlaying ? <Square size={16} /> : <Mic size={17} />}
                    {isPlaying ? 'STOP STORY' : 'PLAY FULL STORY'}
                  </button>

                  <div className="apollo-dialogue story-flow">
                    {chapter.dialogue.map((line, index) => (
                      <motion.div
                        key={index}
                        className={`story-line ${line.speaker.toLowerCase()} ${currentLine === index ? 'currently-speaking' : ''}`}
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.04 }}
                      >
                        <span className="story-speaker">
                          {line.speaker === 'TOPI' ? '✦ TOPI' : '☀ SOFIA'}
                        </span>

                        <span className="story-text">
                          {line.text}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </>
              ) : (
                <p className="story-copy">{chapter.story}</p>
              )}

              <div className="fact-grid">
                {chapter.facts.map((fact, i) => (
                  <div className="fact" key={i}>
                    <span>0{i + 1}</span>
                    {fact}
                  </div>
                ))}
              </div>

              <div className="modal-footer">
                <span>NASA DATASET-BASED STORY</span>

                <button
                  className="text-button"
                  onClick={() => {
                    stopStory()
                    onNext(chapter.id)
                  }}
                >
                  NEXT CHAPTER <ArrowRight size={15} />
                </button>
              </div>
            </div>
          </motion.article>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
