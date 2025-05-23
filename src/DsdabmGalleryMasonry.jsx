import { useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Marquee from '~/components/ui/marquee'
import { PlayCircle } from 'lucide-react'

const mediaItems = [
  { type: 'image', src: '/dsdabm/masonry/file1.webp' },
  // { type: 'video', src: '/dsdabm/masonry/movie.mp4' },
  { type: 'image', src: '/dsdabm/masonry/file2.webp' },
  { type: 'image', src: '/dsdabm/masonry/file3.webp' },
  { type: 'image', src: '/dsdabm/masonry/file4.webp' },
  { type: 'image', src: '/dsdabm/masonry/file5.webp' },
  { type: 'image', src: '/dsdabm/masonry/file6.webp' },
  { type: 'image', src: '/dsdabm/masonry/file6.webp' },
  { type: 'image', src: '/dsdabm/masonry/file7.webp' },
  { type: 'image', src: '/dsdabm/masonry/file8.webp' },
  { type: 'image', src: '/dsdabm/masonry/file9.webp' },
  { type: 'image', src: '/dsdabm/masonry/file10.webp' },
  { type: 'image', src: '/dsdabm/masonry/file11.webp' },
  { type: 'image', src: '/dsdabm/masonry/file12.webp' },
  { type: 'image', src: '/dsdabm/masonry/file13.webp' },
  { type: 'image', src: '/dsdabm/masonry/file14.webp' },
  { type: 'image', src: '/dsdabm/masonry/file15.webp' },
  { type: 'image', src: '/dsdabm/masonry/file16.webp' },
  { type: 'image', src: '/dsdabm/masonry/file17.webp' },
  { type: 'image', src: '/dsdabm/masonry/file18.webp' },
  { type: 'image', src: '/dsdabm/masonry/file19.webp' },
  { type: 'image', src: '/dsdabm/masonry/file20.webp' },
  { type: 'image', src: '/dsdabm/masonry/file21.webp' },
  { type: 'image', src: '/dsdabm/masonry/file22.webp' },
  { type: 'image', src: '/dsdabm/masonry/file23.webp' },
  { type: 'image', src: '/dsdabm/masonry/file24.webp' },
  { type: 'image', src: '/dsdabm/masonry/file25.webp' },
  { type: 'image', src: '/dsdabm/masonry/file26.webp' },
  { type: 'image', src: '/dsdabm/masonry/file27.webp' },
  { type: 'image', src: '/dsdabm/masonry/file28.webp' },
  { type: 'image', src: '/dsdabm/masonry/file29.webp' },
  { type: 'image', src: '/dsdabm/masonry/file30.webp' },
]

function shuffleArray(array) {
  const shuffled = [...array]
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
  }
  return shuffled
}

function DsdabmGalleryMasonry() {
  const [selected, setSelected] = useState(null)

  const randomizedMediaItems = useMemo(() => shuffleArray(mediaItems), [])

  return (
    <div className="relative flex size-full flex-col items-center justify-center overflow-hidden rounded-lg py-2">
      <Marquee pauseOnHover className="[--duration:20s]">
        <div className="columns-4 gap-3 space-y-3">
          {randomizedMediaItems.map((item, index) => (
            <div key={index} className="break-inside-avoid cursor-pointer">
              {item.type === 'image' && (
                <img
                  src={item.src}
                  alt=""
                  className="rounded w-[182px] max-h-[150px] rounded-md object-cover"
                  onClick={() => setSelected(item)}
                />
              )}

              {item.type === 'video' && item.src.includes('youtube') ? (
                <div className="relative w-[182px] rounded-md aspect-video rounded overflow-hidden">
                  <iframe
                    className="w-full h-full"
                    src={item.src}
                    title="YouTube Video"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              ) : item.type === 'video' ? (
                <div className="relative w-[182px] rounded-md cursor-pointer" onClick={() => setSelected(item)}>
                  <video
                    src={item.src}
                    className="rounded w-full object-cover"
                    muted
                    playsInline
                    loop
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/30 rounded">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-10 h-10 text-white opacity-80"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
              ) : null}
            </div>
          ))}
        </div>
      </Marquee>

      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 z-[999] flex items-center justify-center bg-black/80"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
          >
            <motion.div
              className="max-w-3xl w-full p-4"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              onClick={(e) => e.stopPropagation()}
            >
              {selected.type === 'image' ? (
                <img src={selected.src} className="rounded w-full" />
              ) : (
                <video src={selected.src} className="rounded w-full" controls autoPlay />
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default DsdabmGalleryMasonry
