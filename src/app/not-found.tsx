import Link from 'next/link'
import Page404 from './components/Page404'
 
export default function NotFound() {
  return (
    <div className='w-full h-screen bg-black text-white flex flex-col items-center justify-center'>
      <Page404 />
    </div>
  )
}