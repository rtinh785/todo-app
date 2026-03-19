const Header = () => {
  return (
    <header className='bg-white border-b border-slate-100 sticky top-0 z-50'>
      <div className='max-w-5xl mx-auto px-6 h-14 flex items-center justify-between'>
        <div className='flex items-center gap-2.5'>
          <div
            className='size-7.5 bg-indigo-600 rounded-[9px]
                flex items-center justify-center text-white font-black text-sm'
          >
            ✦
          </div>
          <span
            className='font-black text-[18px] text-slate-800 tracking-tight'
            style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
          >
            Týnh
          </span>
        </div>
        <button
          className='flex items-center gap-1.5 px-4 py-2 rounded-xl bg-indigo-600
                text-white text-sm font-bold hover:bg-indigo-700 transition-colors
                shadow shadow-indigo-200 cursor-pointer'
        >
          <span className='text-lg leading-none'>+</span> Thêm task
        </button>
      </div>
    </header>
  )
}

export default Header
