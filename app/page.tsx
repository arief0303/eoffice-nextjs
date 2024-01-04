import Image from 'next/image'

export default function Home() {
  return (
    <>
      <div className="h-24 flex items-center justify-center">
        {/* <button className="w-12 h-12 absolute left-0 ml-7" onClick={() => navigate(-1)}> */}
        <button className="w-12 h-12 absolute left-0 ml-7">
          <div className="w-12 h-12 left-0 top-0 absolute bg-white rounded-[18px] border border-zinc-300"></div>
          <div className="w-6 h-6 left-[12px] top-[12px] absolute">
            <img src="/icons/chevron-left.png" alt="chevron-left" />
          </div>
        </button>
        <div className="w-screen text-center text-gray-800 text-base font-bold font-sans">E Office</div>
      </div>
      <div className="ml-8 text-gray-800 text-base font-medium font-sans">Aktivitas</div>
      <div className="mt-4 ml-4 w-[280px] h-24 justify-start items-start gap-3.5 inline-flex">
        {/* <Link to='/human-resource'> */}
          <div className="flex-col justify-start items-center gap-2 inline-flex">
            <div className="w-[54px] p-[11px] bg-white rounded-[18px] shadow justify-start items-start gap-2.5 inline-flex">
              <div className="w-8 h-8 justify-center items-center flex">
                <div className="w-8 h-8 relative">
                  <img src="/icons/personalcard.png" alt="personalcard" />
                </div>
              </div>
            </div>
            <div className="w-[82px] h-[34px] text-center text-slate-500 text-xs font-normal font-sans">HR</div>
          </div>
        {/* </Link> */}
        <div className="flex-col justify-center items-center gap-2 inline-flex">
          <div className="w-[54px] p-[11px] bg-white rounded-[18px] shadow justify-start items-start gap-2.5 inline-flex">
            <div className="w-8 h-8 justify-center items-center flex">
              <div className="w-8 h-8 relative">
                <img src="/icons/box-tick.png" alt="box-tick" />

              </div>
            </div>
          </div>
          <div className="w-[88px] text-center text-slate-500 text-xs font-normal font-sans">Asset<br />Management</div>
        </div>
        <div className="flex-col justify-center items-center gap-2 inline-flex">
          <div className="w-[54px] p-[11px] bg-white rounded-[18px] shadow justify-start items-start gap-2.5 inline-flex">
            <div className="w-8 h-8 justify-center items-center flex">
              <div className="w-8 h-8 relative">
                <img src="/icons/dollar-square.png" alt="dollar-square" />
              </div>
            </div>
          </div>
          <div className="w-[82px] h-[17px] text-center text-slate-500 text-xs font-normal font-sans">Accounting</div>
        </div>
      </div>
    </>
  )
}
