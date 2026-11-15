
import { useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowDown, ArrowRight, Atom, Menu, Orbit, Search, Sparkles, X, Mic, Square } from 'lucide-react'
import SpaceScene from './components/SpaceScene'
import AlienGuide from './components/AlienGuide'
import ChapterCard from './components/ChapterCard'
import ChapterModal from './components/ChapterModal'
import SpaceAcademy from './components/SpaceAcademy'
import { chapters } from './data/chapters'


function App() {
  const [selected, setSelected] = useState<string | null>(null)
  const [filter, setFilter] = useState('ALL')
  const [search, setSearch] = useState('')
  const [guideOpen, setGuideOpen] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [topiSpeaking, setTopiSpeaking] = useState(false)

  const visibleChapters = useMemo(() => chapters.filter(ch => {
    const matchesFilter = filter === 'ALL' || ch.category === filter
    const term = search.toLowerCase()
    const matchesSearch = !term || `${ch.title} ${ch.subtitle} ${ch.destination}`.toLowerCase().includes(term)
    return matchesFilter && matchesSearch
  }), [filter, search])

  const activeChapter = chapters.find(ch => ch.id === selected) ?? null

  const goNext = (id: string) => {
    const index = chapters.findIndex(ch => ch.id === id)
    setSelected(chapters[(index + 1) % chapters.length].id)
  }

  const topiMessage = `Hi! I'm Topi. Wondering what I'm doing here? Well, let me tell you how it all began.

It was just an ordinary day on my home planet. I was living my life as a cosmic prince, when suddenly, Mortose attacked our planet!

I had no choice but to escape and find another planet where I could be safe.

And that's how I ended up here on Earth. Quite an interesting story, isn't it?

Luckily, I didn't have to explore this strange new planet alone. I met a girl named Sofia, and she became my first friend on Earth.

People here are really friendly. And Sofia? She's incredibly curious!

Now, we're having a daily adventure, discovering NASA's equipment and the amazing machines that have traveled into space.

It's so much fun!

Wait... why don't you come along with us?`

  const toggleTopiVoice = () => {
    if (topiSpeaking) {
      window.speechSynthesis.cancel()
      setTopiSpeaking(false)
      return
    }

    const speech = new SpeechSynthesisUtterance(topiMessage)
    speech.lang = 'en-US'
    speech.rate = 0.92
    speech.pitch = 1.05

    speech.onend = () => setTopiSpeaking(false)
    speech.onerror = () => setTopiSpeaking(false)

    window.speechSynthesis.cancel()
    window.speechSynthesis.speak(speech)
    setTopiSpeaking(true)
  }

  return (
    <main>
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />

      <header className="topbar">
        <a className="brand" href="#">
          <span className="brand-mark"><Orbit size={19} /></span>
          <span>
            AFTER<span className="brand-light"> ORBIT</span>
            <small>THE SPACE ARCHIVE</small>
          </span>
        </a>

        <nav className={menuOpen ? 'nav-links nav-open' : 'nav-links'}>
          <a href="#archive" onClick={() => setMenuOpen(false)}>THE ARCHIVE</a>
          <a href="#academy" onClick={() => setMenuOpen(false)}>SPACE ACADEMY</a>
          <a href="#experience" onClick={() => setMenuOpen(false)}>EXPERIENCE</a>
          <a href="#about" onClick={() => setMenuOpen(false)}>AI ASSISTANTE</a>
        </nav>

        <div className="top-actions">
          <span className="status"><i /> ARCHIVE ONLINE</span>
          <button
            className="icon-button mobile-menu"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </header>

      <section className="hero" id="experience">
        <div className="hero-copy">
          <motion.div
            className="eyebrow hero-eyebrow"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: .2 }}
          >
            AN INTERACTIVE SPACE ARCHIVE <span>·</span> EST. 2026
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: .3, duration: .8 }}
          >
            Every mission<br />leaves a <em>trace.</em>
          </motion.h1>

          <motion.p
            className="hero-intro"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: .65 }}
          >
            Beyond the photographs and data, there are stories of machines that crossed the void, studied distant worlds, and left their mark behind.
          </motion.p>

          <motion.div
            className="hero-actions"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: .8 }}
          >
            <a className="primary-button" href="#archive">
              ENTER THE ARCHIVE <ArrowRight size={16} />
            </a>
            <span className="hero-caption">
              <span className="tiny-orbit" /> 07 FEATURED STORIES
            </span>
          </motion.div>
        </div>

        <div className="hero-visual">
          <div className="visual-grid" />
          <div className="scene-frame"><SpaceScene /></div>

          <div className="orbit-label label-top">
            <span>OBJECT 001</span>
            <strong>DEEP SPACE / 3D</strong>
          </div>

          <div className="orbit-label label-bottom">
            <span>LIVE SIMULATION</span>
            <strong>DRAG TO ORBIT ↗</strong>
          </div>

          <div className="coordinate coord-one">
            14° 32' 08.4" N<br />
            41° 54' 22.1" E
          </div>

          <div className="coordinate coord-two">FIG. 01 / CELESTIAL BODY</div>
        </div>

        <div className="scroll-cue">
          <span>SCROLL TO EXPLORE</span>
          <ArrowDown size={15} />
        </div>

        <div className="hero-index">01 <span>/</span> 04</div>
      </section>

      <section className="intro-strip">
        <div className="strip-label">A DIFFERENT KIND OF ARCHIVE</div>

        <p>
          Not everything that reaches for space becomes a mission. Some ideas stay on Earth. Some machines go quiet. <span>Every record has a place in the story.</span>
        </p>

      </section>

      <motion.section
        className="story-intro"
        id="story"
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="story-inner">
          <div className="story-heading">
            <span className="story-eyebrow">BEFORE THE ADVENTURE BEGINS</span>
            <h2>Every story has a <em>beginning.</em></h2>
            <p>And this one started far beyond Earth.</p>
          </div>

          <div className="story-panel">
            <div className="story-panel-top">
              <div className="story-character-icon">
                <Orbit size={23} />
              </div>

              <div>
                <span className="story-speaker">A MESSAGE FROM</span>
                <h3>TOPI</h3>
              </div>

              <span className="story-signal">COSMIC TRANSMISSION</span>
            </div>

            <div className="story-dialogue">
              <p>Hi! I'm Topi. Wondering what I'm doing here? Well, let me tell you how it all began.</p>

              <p>It was just an ordinary day on my home planet. I was living my life as a cosmic prince, when suddenly, <strong>Mortose attacked our planet!</strong></p>

              <p>I had no choice but to escape and find another planet where I could be safe.</p>

              <p>And that's how I ended up here on Earth. Quite an interesting story, isn't it?</p>

              <p>Luckily, I didn't have to explore this strange new planet alone. I met a girl named Sofia, and she became my first friend on Earth.</p>

              <p>People here are really friendly. And Sofia? She's incredibly curious!</p>

              <p>Now, we're having a daily adventure, discovering NASA's equipment and the amazing machines that have traveled into space.</p>

              <p>It's so much fun!</p>

              <p className="story-ending">
                Wait... why don't you come along with us? <Sparkles size={17} />
              </p>
            </div>

            <button
              className={`topi-voice-button ${topiSpeaking ? 'speaking' : ''}`}
              onClick={toggleTopiVoice}
            >
              {topiSpeaking ? <Square size={16} /> : <Mic size={17} />}
              {topiSpeaking ? 'STOP TOPI' : 'LISTEN TO TOPI'}
            </button>

            <div className="story-panel-footer">
              <span>TRANSMISSION ENDS</span>
              <span>YOUR ADVENTURE STARTS HERE ✦</span>
            </div>
          </div>
        </div>
      </motion.section>

      {/* SPACE ACADEMY */}
      <SpaceAcademy onBack={() => window.scrollTo({ top: 0, behavior: 'smooth' })} />

      <section className="archive-section" id="archive">
        <div className="section-heading">
          <div>
            <div className="eyebrow">THE COLLECTION / VOL. 01</div>
            <h2>Choose your <em>trajectory.</em></h2>
            <p>Explore the missions, prototypes, and technologies behind the records.</p>
          </div>

          <div className="archive-count">
            <span>01—07</span>
            <small>CURATED CHAPTERS</small>
          </div>
        </div>

        <div className="archive-controls">
          <div className="filter-tabs">
            {['ALL', 'MISSION', 'PROTOTYPE', 'TECHNOLOGY'].map(item => (
              <button
                key={item}
                className={filter === item ? 'filter active' : 'filter'}
                onClick={() => setFilter(item)}
              >
                {item}
              </button>
            ))}
          </div>

          <label className="search-box">
            <Search size={15} />
            <input
              value={search}
              onChange={e => setSearch(e.target.value)}
              placeholder="Search the archive..."
            />
          </label>
        </div>

        <div className="chapter-grid">
          {visibleChapters.map((chapter, index) => (
            <ChapterCard
              key={chapter.id}
              chapter={chapter}
              index={index}
              onSelect={setSelected}
            />
          ))}
        </div>

        {visibleChapters.length === 0 && (
          <div className="empty-state">
            NO RECORDS FOUND. TRY ANOTHER SEARCH.
          </div>
        )}

        <div className="archive-footnote">
          <span><Atom size={15} /> SCIENCE FIRST. STORIES ALWAYS.</span>
          <span>DATASET RECORDS ARE NOT THE SAME AS UNIQUE SPACECRAFT.</span>
        </div>
      </section>

      <section className="guide-section" id="about">
        <div className="guide-orbit-art">
          <div className="guide-orbit-ring ring-a" />
          <div className="guide-orbit-ring ring-b" />
          <div className="guide-orb"><span /><i /><b /></div>
          <div className="guide-spark spark-a" />
          <div className="guide-spark spark-b" />
        </div>

        <div className="guide-copy">
          <div className="eyebrow">YOUR ARCHIVE COMPANION</div>
          <h2>Meet <em>ORI.</em></h2>
          <p>
            A curious little signal from somewhere out there. ORI will guide you through the archive, point out details worth noticing, and help make the science easier to explore.
          </p>

          <button
            className="secondary-button"
            onClick={() => setGuideOpen(true)}
          >
            MEET YOUR GUIDE <Sparkles size={15} />
          </button>

          <span className="guide-disclaimer">
            AI COMPANION · INTERACTIVE FEATURES COMING NEXT
          </span>
        </div>
      </section>

      <footer>
        <a className="brand footer-brand" href="#">
          <span className="brand-mark"><Orbit size={17} /></span>
          <span>
            AFTER<span className="brand-light"> ORBIT</span>
            <small>THE SPACE ARCHIVE</small>
          </span>
        </a>

        <span className="footer-center">
          A STORY-LED EXPLORATION OF SPACE TECHNOLOGY
        </span>

        <span className="footer-right">
          BUILT TO LOOK UP <span>✳</span>
        </span>
      </footer>

      <AlienGuide
        open={guideOpen}
        onClose={() => setGuideOpen(false)}
      />

      <ChapterModal
        chapter={activeChapter}
        onClose={() => setSelected(null)}
        onNext={goNext}
      />
    </main>
  )
}

export default App
