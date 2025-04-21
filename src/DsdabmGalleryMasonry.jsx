import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Marquee from '~/components/ui/marquee'
import { PlayCircle } from 'lucide-react'

const mediaItems = [
  { type: 'image', src: '/dsdabm/masonry/File1.jpg' },
//   { type: 'video', src: 'https://www.youtube.com/embed/IZNzMG_BDoE?si=M1zj5ck0uPDzGg6z' },
//   { type: 'video', src: 'https://www.youtube.com/embed/vFI2TQN3RnI?si=5uhQ17i724wM7SY8' },
  { type: 'video', src: '/dsdabm/masonry/movie.mp4' },
  { type: 'image', src: '/dsdabm/masonry/File2.jpg' },
  { type: 'image', src: '/dsdabm/masonry/File3.jpg' },
//   { type: 'video', src: 'https://www.youtube.com/embed/CjgzWY12lcE?si=Wy06XqxvcG5Dj3ZZ' },
  { type: 'image', src: '/dsdabm/masonry/File4.jpg' },
  { type: 'image', src: '/dsdabm/masonry/File5.jpg' },
  { type: 'image', src: '/dsdabm/masonry/File16.jpg' },
//   { type: 'video', src: '/dsdabm/masonry/movie.mp4' },
  { type: 'image', src: '/dsdabm/masonry/File6.jpg' },
  { type: 'image', src: '/dsdabm/masonry/File7.jpg' },
  { type: 'image', src: '/dsdabm/masonry/File8.jpg' },
  { type: 'image', src: '/dsdabm/masonry/File9.jpg' },
  { type: 'image', src: '/dsdabm/masonry/File10.jpg' },
  { type: 'image', src: '/dsdabm/masonry/File11.jpg' },
  { type: 'image', src: '/dsdabm/masonry/File12.jpg' },
  { type: 'image', src: '/dsdabm/masonry/File13.jpg' },
  { type: 'image', src: '/dsdabm/masonry/File14.jpg' },
  { type: 'image', src: '/dsdabm/masonry/File15.jpg' },
]


function DsdabmGalleryMasonry() {
  const [selected, setSelected] = useState(null)

  return (
    <div className="relative flex size-full flex-col items-center justify-center overflow-hidden rounded-lg py-2">
      <Marquee pauseOnHover className="[--duration:20s]">
      <div className="columns-2 gap-4 space-y-4">
         {mediaItems.map((item, index) => (
            <div key={index} className="break-inside-avoid cursor-pointer">
               {item.type === 'image' && (
               <img
                  src={item.src}
                  alt=""
                  className="rounded w-[290px] object-cover"
                  onClick={() => setSelected(item)}
               />
               )}

               {item.type === 'video' && item.src.includes('youtube') ? (
               <div className="relative w-[290px] aspect-video rounded overflow-hidden">
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
               <div className="relative w-[290px] cursor-pointer" onClick={() => setSelected(item)}>
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
