import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import type { Chapter } from '../data/chapters'

export default function ChapterCard({ chapter, onSelect, index }: { chapter: Chapter; onSelect: (id: string) => void; index: number }) {
  return (
    <motion.button className="chapter-card" onClick={() => onSelect(chapter.id)} initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .18 }} transition={{ delay: (index % 3) * .07, duration: .55 }}>
      <div className="card-art" style={{ background: `radial-gradient(circle at 68% 43%, ${chapter.accent}55, transparent 37%), linear-gradient(145deg, #111b2c, #080d18)` }}>
        <img src={chapter.image} alt="" />
        <span className="card-number">{chapter.number}</span>
        <span className="card-arrow"><ArrowUpRight size={18}/></span>
        <span className="card-destination">{chapter.destination}</span>
      </div>
      <div className="card-copy">
        <div className="card-meta"><span>{chapter.category}</span><span>{chapter.year}</span></div>
        <h3>{chapter.title}</h3>
        <p>{chapter.subtitle}</p>
      </div>
    </motion.button>
  )
}
