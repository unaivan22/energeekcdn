import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "~/components/ui/table"

function App() {
  const links = [
    {
      desc: "DSDABM Masonry Gallery",
      url: "/dsdabmgallerymasonry"
    }
  ]


  return (
    <>
      <div className='grid min-h-screen place-items-center'>
        <div className='container max-w-4xl'>
          <Table>
            <TableCaption>A list of url</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead className='text-center'>Deskripsi</TableHead>
                <TableHead className='text-center'>URL</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {links.map((link) => (
                <TableRow key={link.desc}>
                  <TableCell>{link.desc}</TableCell>
                  <TableCell>
                    <a href={link.url} /> {link.url}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </>
  )
}

export default App
