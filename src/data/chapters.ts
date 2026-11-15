export type Chapter = {
  id: string
  number: string
  title: string
  subtitle: string
  category: 'MISSION' | 'PROTOTYPE' | 'TECHNOLOGY'
  destination: string
  year: string
  status: string
  accent: string
  description: string
  story: string
  facts: string[]
  image: string
    dialogue?: {
    speaker: 'TOPI' | 'SOFIA'
    text: string
  }[]
}

export const chapters: Chapter[] = [
    {
    id: 'apollo11',
    number: '01',
    title: 'Apollo 11',
    subtitle: 'The first journey to the Moon',
    category: 'MISSION',
    destination: 'THE MOON',
    year: '1969',
    status: 'MISSION COMPLETED',
    accent: '#c6b9e8',
    image: '/chapters/chapter-1.jpg',
    description: 'The historic mission that carried the first humans to walk on the Moon.',
    story: 'On July 16, 1969, three astronauts began a historic journey aboard the Saturn V rocket. Neil Armstrong and Buzz Aldrin landed on the Moon in the Eagle lunar module, while Michael Collins remained in lunar orbit. After exploring the surface, the astronauts reunited and safely returned to Earth on July 24, 1969.',
    facts: [
      'Launch date: July 16, 1969',
      'Moon landing: July 20, 1969',
      'First person to walk on the Moon: Neil Armstrong',
      'Second person to walk on the Moon: Buzz Aldrin',
      'Command Module Pilot: Michael Collins',
      'Returned to Earth: July 24, 1969'
    ],
    dialogue: [
      {
        speaker: 'TOPI',
        text: "Have you ever wondered if humans have really walked on the Moon?"
      },
      {
        speaker: 'TOPI',
        text: "Well, they have! On July 16, 1969, three astronauts launched into space aboard a powerful rocket called Saturn V."
      },
      {
        speaker: 'TOPI',
        text: "Their names were Neil Armstrong, Buzz Aldrin, and Michael Collins. It took them about three days to reach the Moon!"
      },
      {
        speaker: 'TOPI',
        text: "Neil and Buzz entered a special spacecraft called the Eagle, while Michael stayed in the Command Module, orbiting the Moon."
      },
      {
        speaker: 'TOPI',
        text: "The Eagle had four landing legs and two main parts: one designed to land on the Moon, and another to carry the astronauts back into space."
      },
      {
        speaker: 'SOFIA',
        text: "The Eagle landed in a place on the Moon called the Sea of Tranquility."
      },
      {
        speaker: 'SOFIA',
        text: "Neil Armstrong became the first human to walk on the Moon! Buzz Aldrin followed him shortly after."
      },
      {
        speaker: 'SOFIA',
        text: "Together, they planted the American flag and set up scientific instruments to help scientists study the Moon."
      },
      {
        speaker: 'TOPI',
        text: "After completing their mission, Neil and Buzz returned to the Command Module to meet Michael."
      },
      {
        speaker: 'SOFIA',
        text: "On July 24, 1969, all three astronauts safely returned to Earth."
      },
      {
        speaker: 'SOFIA',
        text: "Apollo 11 made history and showed the world that even the Moon could be explored!"
      }
    ]
  },
  
 
{
  id: 'apollo15-17',
  number: '02',
  title: 'Apollo 15, 16, and 17',
  subtitle: 'Three missions. One lunar adventure.',
  category: 'MISSION',
  destination: 'THE MOON',
  year: '1971—1972',
  status: 'MISSIONS COMPLETED',
  accent: '#c6b9e8',
  image: '/chapters/chapter-2.jpg',
  description: 'Three historic Apollo missions that explored the lunar surface using the Lunar Roving Vehicles, helping astronauts travel farther and discover more of the Moon.',
  story: 'Apollo 15, Apollo 16, and Apollo 17 expanded lunar exploration by introducing the Lunar Roving Vehicle. These electric vehicles helped astronauts travel across the Moon, explore new locations, collect samples, and share their discoveries with Earth.',
  facts: [
    'Apollo 15 launch: July 26, 1971',
    'Apollo 16 launch: April 16, 1972',
    'Apollo 17 launch: December 7, 1972',
    'Apollo 15 landing site: Hadley–Apennine',
    'Apollo 16 landing site: Descartes Highlands',
    'Apollo 17 landing site: Taurus–Littrow',
    'The Lunar Roving Vehicle carried two astronauts'
  ],
  dialogue: [
    {
      speaker: 'TOPI',
      text: 'What are you doing, Sofia?'
    },
    {
      speaker: 'SOFIA',
      text: 'I am reading a magazine about missions to the Moon.'
    },
    {
      speaker: 'TOPI',
      text: 'Interesting!'
    },
    {
      speaker: 'SOFIA',
      text: 'Do you know anything about missions to the Moon?'
    },
    {
      speaker: 'TOPI',
      text: 'Let me think... Oh! Apollo!'
    },
    {
      speaker: 'SOFIA',
      text: 'Apollo? What is it?'
    },
    {
      speaker: 'TOPI',
      text: 'Apollo 15, 16, and 17 are missions that explored the surface of the Moon.'
    },
    {
      speaker: 'SOFIA',
      text: 'What equipment did they use for their missions?'
    },
    {
      speaker: 'TOPI',
      text: 'Nice question. They used Lunar Roving Vehicles, known as LRVs, for their missions: LRV-1 was used on Apollo 15 and landed at Hadley–Apennine. LRV-2 was used on Apollo 16 and landed at the Descartes Highlands. LRV-3 was used on Apollo 17 and landed at Taurus–Littrow.'
    },
    {
      speaker: 'SOFIA',
      text: 'Wait! When did these missions happen?'
    },
    {
      speaker: 'TOPI',
      text: 'Good question! Apollo 15 launched on July 26, 1971, at 13:34 UTC. Apollo 16 launched on April 16, 1972, at 17:54 UTC. Apollo 17 launched on December 7, 1972, at 05:33 UTC, and landed on the Moon on December 11, 1972, at 19:54 UTC.'
    },
    {
      speaker: 'SOFIA',
      text: 'Amazing! But how did the LRVs do their missions?'
    },
    {
      speaker: 'TOPI',
      text: 'Well, there are six main steps!'
    },
    {
      speaker: 'TOPI',
      text: 'First: Folded Delivery. The rover was folded and attached to the Lunar Module, then unfolded on the Moon using cables and pulleys.'
    },
    {
      speaker: 'TOPI',
      text: 'Second: Electric Power. It used two 36-volt batteries to power four electric motors.'
    },
    {
      speaker: 'TOPI',
      text: 'Third: Special Wheels. It had steel-wire mesh wheels with titanium treads to move across lunar dust.'
    },
    {
      speaker: 'TOPI',
      text: 'Fourth: Joystick Driving. Astronauts controlled it using a T-shaped joystick instead of a steering wheel.'
    },
    {
      speaker: 'TOPI',
      text: 'Fifth: Exploration and Science. It carried two astronauts, cameras, and scientific tools to explore the Moon and collect rock samples.'
    },
    {
      speaker: 'TOPI',
      text: 'Sixth: Communication. It helped broadcast live color television images from the Moon to Earth.'
    }
  ]
},

  
  {
    id: 'alsep',
    number: '03',
    title: 'ALSEP Scientific Packages',
    subtitle: 'Tiny scientists left behind on the Moon',
    category: 'MISSION',
    destination: 'THE MOON',
    year: '1969—1977',
    status: 'MISSION COMPLETED',
    accent: '#a9c9d9',
    image: '/chapters/chapter-3.jpg',
    description: 'A collection of scientific instruments left on the Moon to study its environment and send valuable data back to Earth.',
    story: 'ALSEP, short for Apollo Lunar Surface Experiments Package, was a group of scientific instruments deployed by astronauts during five Apollo missions. Powered by radioisotope thermoelectric generators, these instruments studied moonquakes, magnetic fields, solar wind, and the lunar atmosphere. They continued sending scientific data to Earth for years until NASA switched them off in 1977.',
    facts: [
      'First deployed: Apollo 12, November 19, 1969',
      'Used on five missions: Apollo 12, 14, 15, 16, and 17',
      'Apollo 11 deployed a smaller package called EASEP',
      'Power source: Radioisotope Thermoelectric Generator (RTG)',
      'Studied moonquakes, magnetic fields, solar wind, and the lunar atmosphere',
      'Stations switched off: September 30, 1977'
    ],
    dialogue: [
      { speaker: 'SOFIA', text: 'Topi, imagine leaving a team of tiny scientists on the Moon after you return to Earth. What would they do?' },
      { speaker: 'TOPI', text: 'Tiny scientists? That sounds like one of your stories, Sofia!' },
      { speaker: 'SOFIA', text: "I'm serious! I read that Apollo astronauts left scientific machines on the Moon. They kept working even after the astronauts went home." },
      { speaker: 'TOPI', text: "You're talking about ALSEP! Its full name is Apollo Lunar Surface Experiments Package. It was a group of scientific instruments that astronauts set up on the Moon to study it and send information back to Earth." },
      { speaker: 'SOFIA', text: 'Did all the Apollo astronauts leave one behind?' },
      { speaker: 'TOPI', text: 'Not all of them. Full ALSEP stations were deployed on five missions: Apollo 12, 14, 15, 16, and 17. Apollo 11 used a smaller, simpler package called EASEP.' },
      { speaker: 'SOFIA', text: 'When did the first full ALSEP package arrive?' },
      { speaker: 'TOPI', text: 'Apollo 12 was the first mission to deploy one. It launched from Earth on November 14, 1969, and reached the Moon on November 19, 1969.' },
      { speaker: 'SOFIA', text: "That's incredible! But how did the astronauts get all that equipment onto the Moon?" },
      { speaker: 'TOPI', text: 'The instruments were packed into two aluminum subpackages attached to the Lunar Module. The astronauts unloaded the parts, carried them across the lunar surface, and assembled them.' },
      { speaker: 'SOFIA', text: 'And how could these machines keep working without anyone there?' },
      { speaker: 'TOPI', text: 'They had their own power source! A small nuclear generator called an RTG used heat from the natural decay of plutonium to produce electricity.' },
      { speaker: 'SOFIA', text: 'So what did the ALSEP instruments investigate?' },
      { speaker: 'TOPI', text: "They studied different parts of the Moon and its environment. They measured moonquakes, magnetic fields, and the solar wind, and studied the Moon's very thin atmosphere." },
      { speaker: 'SOFIA', text: 'Did they send all those discoveries back to Earth?' },
      { speaker: 'TOPI', text: 'Yes! The instruments sent scientific data by radio to researchers on Earth. They worked automatically for years, even after the astronauts had returned home.' },
      { speaker: 'SOFIA', text: 'Do they still send messages from the Moon?' },
      { speaker: 'TOPI', text: 'Not anymore. NASA remotely switched off the ALSEP stations on September 30, 1977, to end the experiment program and save money.' },
      { speaker: 'SOFIA', text: 'Were they brought back to Earth?' },
      { speaker: 'TOPI', text: 'No. The equipment was left on the Moon. It no longer sends data, but the physical instruments are still there today!' }
    ]
  },

 
  {
    id: 'surveyor',
    number: '04',
    title: 'Surveyor Landers',
    subtitle: 'Robotic explorers that prepared the way for humans',
    category: 'MISSION',
    destination: 'THE MOON',
    year: '1966—1968',
    status: 'MISSION COMPLETED',
    accent: '#9ec9d4',
    image: '/chapters/chapter-4.jpg',
    description: 'A series of robotic spacecraft sent to investigate the lunar surface and help NASA prepare for future human landings.',
    story: 'NASA launched seven Surveyor probes between 1966 and 1968. Five landed successfully, while two failed. Surveyor 1 was the first successful mission, landing on the Moon on June 2, 1966. Its cameras and scientific instruments studied the lunar surface and soil. In 1969, Apollo 12 astronauts visited Surveyor 3 and brought some of its components back to Earth for study.',
    facts: [
      'Seven Surveyor probes launched between 1966 and 1968',
      'Five probes landed successfully on the Moon',
      'Surveyor 1 launched: May 30, 1966',
      'Surveyor 1 landed: June 2, 1966',
      'Studied lunar soil and surface conditions',
      'Apollo 12 astronauts visited Surveyor 3 in 1969',
      'NASA ended contact with Surveyor 1: January 7, 1967'
    ],
    dialogue: [
      { speaker: 'TOPI', text: 'Sofia! Quick, look at the Moon! Imagine we are about to land there. What is the first thing we need to know?' },
      { speaker: 'SOFIA', text: 'Whether it is safe to land? I would not want our spacecraft sinking into the lunar dust!' },
      { speaker: 'TOPI', text: 'Exactly! Before astronauts could land, NASA had to find out whether the Moon’s surface could support a heavy spacecraft.' },
      { speaker: 'SOFIA', text: 'So how did they investigate it?' },
      { speaker: 'TOPI', text: 'They sent robotic explorers called the Surveyor Landers. Surveyor 1 through 7 were American spacecraft designed to test whether a spacecraft could make a safe, gentle landing on the Moon.' },
      { speaker: 'SOFIA', text: 'Robots went first? That sounds like a space adventure!' },
      { speaker: 'TOPI', text: 'It was! NASA launched seven Surveyor probes between 1966 and 1968. Five landed successfully, while two crashed because of equipment failures.' },
      { speaker: 'SOFIA', text: 'Which one should we follow on our mission?' },
      { speaker: 'TOPI', text: 'Let’s follow Surveyor 1, the first example. It launched from Earth on May 30, 1966, and reached the Moon on June 2, after a flight of about 63 hours.' },
      { speaker: 'SOFIA', text: 'We are getting close! But how can a spacecraft land without crashing?' },
      { speaker: 'TOPI', text: 'The Surveyors travelled toward the Moon on powerful Atlas-Centaur rockets. As they approached the surface, onboard radar measured their speed and distance.' },
      { speaker: 'SOFIA', text: 'The radar helped the spacecraft know when to slow down?' },
      { speaker: 'TOPI', text: 'That’s right! The radar triggered large retrorockets to slow the lander. Just a few feet above the ground, the engines shut off, and the spacecraft gently touched down on its shock-absorbing legs.' },
      { speaker: 'SOFIA', text: 'Touchdown! We made it! What happened next?' },
      { speaker: 'TOPI', text: 'The lander opened its solar panels and began its scientific work. Its powerful television cameras took pictures, while soil-testing tools helped scientists study the lunar ground.' },
      { speaker: 'SOFIA', text: 'And it sent the pictures all the way back to Earth?' },
      { speaker: 'TOPI', text: 'Yes! Surveyor landers sent thousands of pictures and important information about the strength of the lunar soil to scientists on Earth.' },
      { speaker: 'SOFIA', text: 'How long did Surveyor 1 keep working?' },
      { speaker: 'TOPI', text: 'Its main picture-taking mission ended in July 1966. NASA officially ended contact with it on January 7, 1967.' },
      { speaker: 'SOFIA', text: 'Did the Surveyors return home after their missions?' },
      { speaker: 'TOPI', text: 'No. They were not designed to return to Earth, so all the landers were left on the Moon where they landed.' },
      { speaker: 'SOFIA', text: 'Wait! Does that mean astronauts saw one of them later?' },
      { speaker: 'TOPI', text: 'Yes! During Apollo 12 in 1969, astronauts deliberately landed near Surveyor 3. They walked over to it, removed some parts, including its television camera, and brought them back to Earth. Scientists studied those parts to learn how space equipment survived the Moon’s harsh environment.' },
      { speaker: 'SOFIA', text: 'So the Surveyors were not just exploring the Moon. They were helping prepare for the astronauts who came later!' },
      { speaker: 'TOPI', text: 'Exactly! Their discoveries helped NASA understand the lunar surface and made future human missions safer. The remaining Surveyor landers are still on the Moon today.' },
      { speaker: 'SOFIA', text: 'What an amazing team of robot explorers!' }
    ]
  },

  {
    id: 'sojourner',
    number: '05',
    title: 'Sojourner Rover',
    subtitle: 'The little pioneer that drove across Mars',
    category: 'MISSION',
    destination: 'MARS',
    year: '1996—1997',
    status: 'MISSION ENDED',
    accent: '#e69b78',
    image: '/chapters/chapter-5.jpg',
    description: 'The first successful wheeled robotic rover to explore the surface of another planet, opening a new chapter in planetary exploration.',
    story: 'Sojourner was a small robotic rover that traveled to Mars as part of NASA’s Mars Pathfinder mission. About the size of a microwave oven, it landed on July 4, 1997, protected by giant airbags. It explored the Martian surface, photographed rocks, studied soil, and used hazard-detection cameras to avoid obstacles. Its mission greatly exceeded its original seven-day design, but communication ended on September 27, 1997.',
    facts: [
      'Part of: Mars Pathfinder mission',
      'Launched: December 4, 1996',
      'Landed on Mars: July 4, 1997',
      'First wheeled rover to operate on another planet',
      'Approximately the size of a microwave oven',
      'Used airbags to protect itself during landing',
      'Original mission design: 7 days',
      'Last communication: September 27, 1997',
      'Landing region: Ares Vallis, Mars'
    ],
    dialogue: [
      { speaker: 'TOPI', text: 'Sofia! Look up at the night sky. See that bright red dot? Today our adventure leaves the Moon behind and blasts off to Mars!' },
      { speaker: 'SOFIA', text: 'Mars! I was just sketching it in my notebook! Did NASA send a rover there just like the Moon Buggies?' },
      { speaker: 'TOPI', text: 'Almost, except nobody drove this one in person! It was a tiny robot named Sojourner, part of the Mars Pathfinder mission.' },
      { speaker: 'SOFIA', text: 'What made Sojourner so special?' },
      { speaker: 'TOPI', text: 'It was the very first robotic, wheeled vehicle, or rover, ever sent to drive on another planet, and it was only about the size of a microwave oven!' },
      { speaker: 'SOFIA', text: 'A microwave oven on wheels?! What was its mission on Mars?' },
      { speaker: 'TOPI', text: 'It traveled alongside a stationary lander to test a brand-new landing method, take close-up photos of the Martian terrain, and use a special tool called a spectrometer to analyze what Martian rocks and soil were made of.' },
      { speaker: 'SOFIA', text: 'When did this little explorer go to Mars?' },
      { speaker: 'TOPI', text: 'It launched from Florida, USA, on December 4, 1996, and landed on Mars on July 4, 1997.' },
      { speaker: 'SOFIA', text: 'How did it land safely without crashing on the rocky ground?' },
      { speaker: 'TOPI', text: 'Inside a protective cocoon of giant airbags! It bounced across the rocky Martian surface before stopping and opening up. After the lander unfolded its solar panels, Sojourner drove down a ramp onto the red dirt of Mars.' },
      { speaker: 'SOFIA', text: 'Did scientists on Earth steer it with a joystick?' },
      { speaker: 'TOPI', text: 'No! Mars is so far away that radio signals took too long for scientists to drive it in real time. Instead, they sent a list of commands, and Sojourner used its own hazard-detection cameras to navigate around rocks and avoid obstacles.' },
      { speaker: 'SOFIA', text: 'How long did it work, and did it ever come back to Earth?' },
      { speaker: 'TOPI', text: 'It vastly outlasted its original seven-day design, working until September 27, 1997, when communication with the Pathfinder base station was lost. It had no way to return to Earth, so it remained on Mars in the Ares Vallis region.' },
      { speaker: 'SOFIA', text: 'What an incredible little pioneer! Come on, Topi. Let’s see what NASA adventure comes next!' }
    ]
  },


 
  {
    id: 'spirit-opportunity',
    number: '06',
    title: 'Spirit & Opportunity',
    subtitle: 'Twin explorers searching for ancient water on Mars',
    category: 'MISSION',
    destination: 'MARS',
    year: '2003—2019',
    status: 'MISSIONS COMPLETED',
    accent: '#d9a17e',
    image: '/chapters/chapter-6.jpg',
    description: 'Two robotic explorers sent to opposite sides of Mars to search for evidence of ancient water and investigate whether the planet once had conditions suitable for life.',
    story: 'Spirit and Opportunity were twin robotic rovers launched as part of NASA’s Mars Exploration Rover mission. Both were approximately golf-cart-sized and powered by solar panels. They used scientific instruments and robotic arms to examine Martian rocks and soil for clues about ancient water. Designed for only 90 Martian days, both rovers operated far longer than expected. Spirit’s mission officially ended in 2011, while Opportunity’s ended in 2019 after a planet-wide dust storm interrupted communication.',
    facts: [
      'Mission: Mars Exploration Rover',
      'Spirit launched: June 10, 2003',
      'Spirit landed: January 4, 2004',
      'Opportunity launched: July 7, 2003',
      'Opportunity landed: January 25, 2004',
      'Original mission duration: 90 Martian days',
      'Power source: Solar panels',
      'Spirit mission ended: May 25, 2011',
      'Opportunity mission ended: February 13, 2019',
      'Main scientific goal: Find evidence of ancient water on Mars'
    ],
    dialogue: [
      { speaker: 'TOPI', text: 'Sofia! Back on my home planet before Mortose attacked, royal scouts used twin hover-pods to map out hidden rivers, and NASA did something just as awesome on Mars!' },
      { speaker: 'SOFIA', text: 'Twin hover-pods? Are you talking about NASA’s Mars Exploration Rovers, Spirit and Opportunity?' },
      { speaker: 'TOPI', text: 'Bingo! They were two identical, robotic, golf-cart-sized vehicles sent to explore opposite sides of Mars.' },
      { speaker: 'SOFIA', text: 'Golf-cart-sized?! Why did NASA send two of them at once?' },
      { speaker: 'TOPI', text: 'That was the Twin Plan! NASA sent two rovers to different parts of the planet to maximize their chances of making discoveries. Their main goal was to search for clues about past water on Mars. They explored rocks and soil, took close-up pictures, and used special scientific tools on robotic arms to investigate whether Mars once had conditions suitable for life.' },
      { speaker: 'SOFIA', text: 'When did the twins launch and reach Mars?' },
      { speaker: 'TOPI', text: 'They launched and landed separately. Spirit, also called Rover A, launched on June 10, 2003, and arrived on Mars on January 4, 2004. Opportunity, or Rover B, launched on July 7, 2003, and arrived on January 25, 2004.' },
      { speaker: 'SOFIA', text: 'How did golf-cart-sized rovers land safely on Mars?' },
      { speaker: 'TOPI', text: 'Both rovers used a dramatic airbag landing system! They entered the Martian atmosphere inside protective shells, deployed parachutes, and then bounced across the rocky surface enclosed in giant airbags until they came to a stop.' },
      { speaker: 'SOFIA', text: 'Once they stopped bouncing, how did they get power and drive around?' },
      { speaker: 'TOPI', text: 'They ran on electricity generated by solar panels on top of their bodies. Scientists on Earth sent daily commands telling the rovers where to drive, and the rovers used onboard hazard cameras to navigate around rocks and craters.' },
      { speaker: 'SOFIA', text: 'How long did they work, and what happened to them?' },
      { speaker: 'TOPI', text: 'Both shattered their original 90-day goal! Spirit explored for years until it became stuck in a sand trap in 2009. It could no longer move to a better position to collect sunlight, and its last communication came in March 2010. NASA officially ended its mission on May 25, 2011.' },
      { speaker: 'SOFIA', text: 'What about Opportunity?' },
      { speaker: 'TOPI', text: 'Opportunity survived for nearly 15 years! A planet-wide dust storm in 2018 blocked sunlight from reaching its solar panels and interrupted communication. NASA officially ended Opportunity’s mission on February 13, 2019.' },
      { speaker: 'SOFIA', text: 'Did either rover return to Earth?' },
      { speaker: 'TOPI', text: 'No. Neither rover was built to return to Earth, so both remain on the surface of Mars.' },
      { speaker: 'SOFIA', text: 'Two little explorers, one enormous adventure!' }
    ]
  },


  {
    id: 'viking',
    number: '07',
    title: 'Viking 1 & 2 Landers',
    subtitle: 'The robotic detectives who made history on Mars',
    category: 'MISSION',
    destination: 'MARS',
    year: '1975—1982',
    status: 'MISSIONS COMPLETED',
    accent: '#c69a85',
    image: '/chapters/chapter-7.jpg',
    description: 'NASA’s first successful Mars landing missions, designed to photograph the surface, study the Martian environment, and search for possible signs of life.',
    story: 'Viking 1 and Viking 2 were NASA spacecraft that each combined an orbiter with a lander. Launched in 1975, they became the first missions to successfully land and operate spacecraft on the surface of Mars. Their landers photographed the planet, studied its weather, collected soil samples, and performed experiments searching for signs of life. Viking 1 landed at Chryse Planitia, while Viking 2 landed at Utopia Planitia. Their discoveries transformed our understanding of Mars.',
    facts: [
      'Viking 1 launched: August 20, 1975',
      'Viking 1 landed: July 20, 1976',
      'Viking 1 landing site: Chryse Planitia',
      'Viking 2 launched: September 9, 1975',
      'Viking 2 landed: September 3, 1976',
      'Viking 2 landing site: Utopia Planitia',
      'Each mission included an orbiter and a lander',
      'Scientific experiments searched for signs of life',
      'Viking 1 lander operations ended: November 13, 1982',
      'Viking 2 lander operations ended: April 11, 1980'
    ],
    dialogue: [
      { speaker: 'TOPI', text: 'Sofia! Put on your space-detective hat! Before Spirit, Opportunity, or Sojourner ever rolled a wheel on Mars, two legendary explorers pulled off the ultimate space first!' },
      { speaker: 'SOFIA', text: 'A Mars mystery! Who were these explorers?' },
      { speaker: 'TOPI', text: 'Meet the Viking 1 Lander and Viking 2 Lander! Each lander was paired with a matching orbiter that flew high above the planet while the lander explored the ground.' },
      { speaker: 'SOFIA', text: 'What was their big mission?' },
      { speaker: 'TOPI', text: 'It was NASA’s ambitious mission to successfully land spacecraft on Mars for the very first time, take the first clear close-up photographs of the surface, check the weather, and perform chemical and biological experiments on Martian soil to search for signs of life!' },
      { speaker: 'SOFIA', text: 'Searching for signs of life in the dirt?! When did they launch and land?' },
      { speaker: 'TOPI', text: 'They launched from Earth just weeks apart in 1975. Viking 1 launched on August 20, 1975, entered Mars orbit on June 19, 1976, and landed on July 20, 1976. Viking 2 launched on September 9, 1975, entered Mars orbit on August 7, 1976, and landed on September 3, 1976.' },
      { speaker: 'SOFIA', text: 'How did they land safely without crashing?' },
      { speaker: 'TOPI', text: 'Like cosmic acrobats! Each lander traveled with its orbiter, then separated and entered the Martian atmosphere inside a protective aeroshell. Parachutes deployed to slow it down, and large retrorockets fired just before touchdown so it could land gently on three shock-absorbing legs.' },
      { speaker: 'SOFIA', text: 'What did they do once they landed on the red dirt?' },
      { speaker: 'TOPI', text: 'They used cameras to take historic 360-degree color panoramas, used a mechanical arm to scoop up soil samples for onboard biology and chemistry laboratories, and continuously recorded weather data.' },
      { speaker: 'SOFIA', text: 'How long did they keep working, and when did their missions end?' },
      { speaker: 'TOPI', text: 'Both landers operated far longer than their original 90-day goal! Viking 1 landed on July 20, 1976, at Chryse Planitia and continued working until November 13, 1982.' },
      { speaker: 'SOFIA', text: 'What about Viking 2?' },
      { speaker: 'TOPI', text: 'Viking 2 landed on September 3, 1976, at Utopia Planitia and continued working until April 11, 1980, when its batteries failed.' },
      { speaker: 'SOFIA', text: 'Did either of them ever return to Earth?' },
      { speaker: 'TOPI', text: 'No! Neither lander was built to return, so both remain where they touched down as historic reminders of humanity’s early exploration of Mars!' }
    ]
  },

]
