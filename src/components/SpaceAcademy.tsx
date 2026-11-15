
import { useState } from 'react'
import { ArrowRight, ArrowLeft, Sparkles, BookOpen, Telescope, RotateCcw } from 'lucide-react'
// @ts-ignore CSS side-effect imports are not declared in this TypeScript setup.
import './SpaceAcademy.css'

type Unit = {
  id: number
  number: string
  icon: string
  title: string
  subtitle: string
  level: string
  duration: string
  introduction: string
  simple: string
  deeper: string
  facts: string[]
  question: string
  options: string[]
  correct: number
  explanation: string
}

const units: Unit[] = [
  {
    id: 1,
    number: '01',
    icon: '🌌',
    title: 'Welcome to Space',
    subtitle: 'Discover the universe around you',
    level: 'Beginner',
    duration: '5 min',
    introduction: 'Have you ever looked at the night sky and wondered what is beyond the stars? Space is the enormous region beyond Earth’s atmosphere. It contains planets, stars, galaxies, and much more.',
    simple: 'Space is everything beyond the air surrounding our planet. It is incredibly large, and Earth is only a tiny part of it.',
    deeper: 'The universe includes all space, time, matter, and energy. Scientists study it using telescopes, spacecraft, and observations of light.',
    facts: [
      'Space does not have air like the atmosphere we breathe.',
      'The universe contains billions of galaxies.',
      'Light needs time to travel, so looking far into space also means looking into the past.'
    ],
    question: 'What is the universe?',
    options: [
      'Only the planets in our Solar System',
      'Everything that exists, including space, time, matter, and energy',
      'The space between Earth and the Moon'
    ],
    correct: 1,
    explanation: 'Exactly! The universe includes everything: galaxies, stars, planets, space, time, matter, and energy.'
  },
  {
    id: 2,
    number: '02',
    icon: '☀️',
    title: 'Our Solar System',
    subtitle: 'Meet the Sun and its planets',
    level: 'Beginner',
    duration: '7 min',
    introduction: 'Our Solar System is our cosmic neighborhood. At its center is the Sun, a star whose gravity keeps planets and other objects moving around it.',
    simple: 'There are eight planets in our Solar System. They travel around the Sun along paths called orbits.',
    deeper: 'The four inner planets are rocky worlds. The outer planets are giant planets: Jupiter and Saturn are gas giants, while Uranus and Neptune are ice giants.',
    facts: [
      'The Sun contains most of the Solar System’s mass.',
      'Jupiter is the largest planet in our Solar System.',
      'Pluto is classified as a dwarf planet, not one of the eight planets.'
    ],
    question: 'How many planets orbit the Sun in our Solar System?',
    options: ['Seven', 'Eight', 'Nine'],
    correct: 1,
    explanation: 'Correct! There are eight recognized planets orbiting our Sun.'
  },
  {
    id: 3,
    number: '03',
    icon: '🌍',
    title: 'Earth, Our Home',
    subtitle: 'Understand our special planet',
    level: 'Beginner',
    duration: '6 min',
    introduction: 'Earth is the planet we call home. It has liquid water on its surface, an atmosphere, and conditions that support a huge variety of living things.',
    simple: 'Earth moves around the Sun, and it also spins around an imaginary line called its axis.',
    deeper: 'Earth takes about 365.25 days to orbit the Sun. One rotation takes about 24 hours. Its tilted axis helps produce the seasons as Earth travels around the Sun.',
    facts: [
      'About 71% of Earth’s surface is covered by water.',
      'Earth has one natural moon.',
      'Earth’s atmosphere helps protect life and keeps the planet warm enough for many living things.'
    ],
    question: 'What causes day and night on Earth?',
    options: [
      'Earth spinning on its axis',
      'The Moon moving around Earth',
      'The Sun moving around Earth'
    ],
    correct: 0,
    explanation: 'That’s right! As Earth rotates, different places turn toward the Sun and then away from it.'
  },
  {
    id: 4,
    number: '04',
    icon: '🌙',
    title: 'The Moon',
    subtitle: 'Explore our closest space neighbor',
    level: 'Beginner',
    duration: '6 min',
    introduction: 'The Moon is Earth’s natural satellite. It travels around Earth and shines in our sky because its surface reflects sunlight.',
    simple: 'The Moon seems to change shape during the month. These changing appearances are called phases.',
    deeper: 'The phases happen because we see different portions of the Moon’s sunlit half as it orbits Earth. The Moon does not make its own light.',
    facts: [
      'The Moon takes about 27.3 days to orbit Earth relative to distant stars.',
      'The Moon has much weaker gravity than Earth.',
      'The same side of the Moon mostly faces Earth because its rotation and orbit take nearly the same amount of time.'
    ],
    question: 'Why does the Moon shine?',
    options: [
      'It makes its own light',
      'It reflects sunlight',
      'It is made of glowing clouds'
    ],
    correct: 1,
    explanation: 'Exactly! The Moon reflects light from the Sun. It is not a star and does not make its own light.'
  },
  {
    id: 5,
    number: '05',
    icon: '⭐',
    title: 'Stars & Galaxies',
    subtitle: 'Travel through giant cosmic cities',
    level: 'Explorer',
    duration: '8 min',
    introduction: 'Stars are enormous glowing balls of hot gas. Our Sun is a star, and it belongs to a huge collection of stars called the Milky Way galaxy.',
    simple: 'A galaxy is a giant collection of stars, gas, dust, and other objects held together by gravity.',
    deeper: 'Stars produce energy through nuclear fusion in their cores. Galaxies come in different shapes, including spiral, elliptical, and irregular forms.',
    facts: [
      'The Milky Way is the galaxy that contains our Solar System.',
      'Stars have different colors related to their surface temperatures.',
      'Some galaxies contain hundreds of billions of stars.'
    ],
    question: 'What is the name of our galaxy?',
    options: ['Andromeda', 'The Milky Way', 'Orion'],
    correct: 1,
    explanation: 'Correct! Our Solar System is part of the Milky Way galaxy.'
  },
  {
    id: 6,
    number: '06',
    icon: '🚀',
    title: 'Space Exploration',
    subtitle: 'How humans explore beyond Earth',
    level: 'Explorer',
    duration: '8 min',
    introduction: 'People explore space using telescopes, satellites, robotic spacecraft, and crewed missions. These tools help us learn about worlds far beyond Earth.',
    simple: 'A rocket carries spacecraft away from Earth. Satellites can orbit Earth and help with communication, weather forecasts, and scientific research.',
    deeper: 'Spacecraft use carefully planned paths and the motion of planets to travel through the Solar System. Robotic missions can explore places that are difficult for humans to visit.',
    facts: [
      'The International Space Station is a laboratory that orbits Earth.',
      'Robotic rovers have explored the surface of Mars.',
      'Space telescopes observe the universe from above much of Earth’s atmosphere.'
    ],
    question: 'What is one important job of an Earth-orbiting satellite?',
    options: [
      'Making the Sun shine',
      'Helping with communication and weather observations',
      'Changing the seasons'
    ],
    correct: 1,
    explanation: 'Exactly! Satellites support communication, weather forecasting, navigation, and scientific research.'
  }
]


type SpaceAcademyProps = {
  onBack: () => void
}

export default function SpaceAcademy({ onBack }: SpaceAcademyProps) {
  const [selectedId, setSelectedId] = useState<number | null>(null)
  const [answer, setAnswer] = useState<number | null>(null)

  const selectedUnit = units.find(unit => unit.id === selectedId)

  const openUnit = (id: number) => {
    setSelectedId(id)
    setAnswer(null)
  }

  const closeUnit = () => {
    setSelectedId(null)
    setAnswer(null)
  }

  return (
    <section className="academy-section" id="academy">
      <div className="academy-container">

        <button className="academy-back academy-home-button" onClick={onBack}>
          <ArrowLeft size={17} />
          BACK TO AFTER ORBIT
        </button>

        <div className="academy-heading">
          <div className="academy-eyebrow">
            <Sparkles size={14} />
            YOUR LEARNING UNIVERSE
          </div>

          <h2>
            SPACE <span>ACADEMY</span>
          </h2>

          <p>
            Curious about the universe? Start exploring.
            Learn about planets, stars, galaxies, and the science
            behind our amazing universe.
          </p>
        </div>

        {!selectedUnit ? (
          <>
            <div className="academy-section-title">
              <div>
                <span className="academy-label">YOUR JOURNEY STARTS HERE</span>
                <h3>Choose your next discovery</h3>
              </div>
              <BookOpen size={24} />
            </div>

            <div className="academy-grid">
              {units.map(unit => (
                <button
                  className="academy-card"
                  key={unit.id}
                  onClick={() => openUnit(unit.id)}
                >
                  <div className="academy-card-top">
                    <span className="academy-number">{unit.number}</span>
                    <span className="academy-icon">{unit.icon}</span>
                  </div>

                  <div className="academy-card-content">
                    <span className="academy-level">{unit.level}</span>
                    <h3>{unit.title}</h3>
                    <p>{unit.subtitle}</p>
                  </div>

                  <div className="academy-card-bottom">
                    <span>{unit.duration} READ</span>
                    <span className="academy-card-arrow">
                      <ArrowRight size={17} />
                    </span>
                  </div>
                </button>
              ))}
            </div>

            <div className="academy-discovery">
              <div className="discovery-icon">
                <Telescope size={27} />
              </div>
              <div>
                <span className="academy-label">A LITTLE REMINDER</span>
                <h3>Every great discovery starts with a question.</h3>
                <p>
                  Take your time, explore at your own pace,
                  and never stop asking why.
                </p>
              </div>
            </div>
          </>
        ) : (
          <div className="academy-lesson">
            <button className="academy-back" onClick={closeUnit}>
              <ArrowLeft size={17} />
              BACK TO ALL UNITS
            </button>

            <div className="lesson-heading">
              <span className="lesson-icon">{selectedUnit.icon}</span>
              <div>
                <span className="academy-label">
                  UNIT {selectedUnit.number} · {selectedUnit.level}
                </span>
                <h3>{selectedUnit.title}</h3>
                <p>{selectedUnit.subtitle}</p>
              </div>
            </div>

            <div className="lesson-intro">
              <span className="academy-label">LET'S BEGIN</span>
              <p>{selectedUnit.introduction}</p>
            </div>

            <div className="lesson-levels">
              <article>
                <span className="lesson-tag">THE BASICS</span>
                <h4>First, understand this</h4>
                <p>{selectedUnit.simple}</p>
              </article>

              <article>
                <span className="lesson-tag">GO A LITTLE DEEPER</span>
                <h4>Ready for more?</h4>
                <p>{selectedUnit.deeper}</p>
              </article>
            </div>

            <div className="lesson-facts">
              <span className="academy-label">DID YOU KNOW?</span>
              {selectedUnit.facts.map((fact, index) => (
                <div className="lesson-fact" key={index}>
                  <Sparkles size={15} />
                  <p>{fact}</p>
                </div>
              ))}
            </div>

            <div className="lesson-quiz">
              <div className="quiz-heading">
                <span className="academy-label">CHECK YOUR KNOWLEDGE</span>
                <span>QUICK QUIZ</span>
              </div>

              <h4>{selectedUnit.question}</h4>

              <div className="quiz-options">
                {selectedUnit.options.map((option, index) => (
                  <button
                    key={index}
                    className={`quiz-option ${
                      answer === index
                        ? index === selectedUnit.correct
                          ? 'correct'
                          : 'incorrect'
                        : ''
                    }`}
                    disabled={answer !== null}
                    onClick={() => setAnswer(index)}
                  >
                    <span>{String.fromCharCode(65 + index)}</span>
                    {option}
                  </button>
                ))}
              </div>

              {answer !== null && (
                <div className={`quiz-feedback ${
                  answer === selectedUnit.correct ? 'success' : 'try-again'
                }`}>
                  <strong>
                    {answer === selectedUnit.correct
                      ? 'Brilliant discovery!'
                      : 'Not quite! Keep exploring.'}
                  </strong>
                  <p>{selectedUnit.explanation}</p>
                  <button onClick={() => setAnswer(null)}>
                    <RotateCcw size={14} />
                    TRY AGAIN
                  </button>
                </div>
              )}
            </div>

            <button className="academy-back lesson-finish" onClick={closeUnit}>
              <ArrowLeft size={16} />
              EXPLORE MORE UNITS
            </button>
          </div>
        )}

      </div>
    </section>
  )
}
