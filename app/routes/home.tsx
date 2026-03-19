import Header from '~/components/Header'
import type { Route } from './+types/home'

export function meta({}: Route.MetaArgs) {
  return [{ title: 'New React Router App' }, { name: 'description', content: 'Welcome to React Router!' }]
}

export default function Home() {
  return (
    <div className='min-h-screen bg-[#f4f5f9]'>
      {/* header */}
      <Header />
      {/* title */}
      <main className='max-w-5xl mx-auto px-6 py-7 pb-16'>
        <section className='flex items-baseline gap-3 mb-5'>
          <h1
            className='font-black text-[26px] text-slate-800 tracking-tight'
            style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
          >
            Dashboard
          </h1>
          <span className='text-sm text-slate-400 font-medium'>
            {new Date().toLocaleDateString('vi-VN', {
              weekday: 'long',
              day: '2-digit',
              month: 'long',
              year: 'numeric'
            })}
          </span>
        </section>
      </main>
    </div>
  )
}
