'use client'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

const Cuti = () => {
    const router = useRouter()

    return (<>
        <div className="h-24 flex items-center justify-center">
            <button className="w-12 h-12 absolute left-0 ml-7" onClick={() => router.back()}>
                <div className="w-12 h-12 left-0 top-0 absolute bg-white rounded-[18px] border border-zinc-300"></div>
                <div className="w-6 h-6 left-[12px] top-[12px] absolute">
                    <img src="/icons/chevron-left.png" alt="chevron-left" />
                </div>
            </button>
            <div className="w-screen text-center text-gray-800 text-base font-bold font-sans">Cuti</div>
        </div>
        <div className="w-[374px] h-12 bg-slate-500 rounded-[10px] border inline-flex justify-start ">
            <div className="w-6 h-6 justify-start gap-3 inline-flex items-center">
                <div className="w-6 h-6 relative">
                    <div className="w-6 h-6 left-0 top-0 absolute bg-white rounded-full"></div>
                    <div className="w-[2.67px] h-[11.56px] left-[10.67px] top-[6.22px] absolute bg-slate-500 rounded-[10px]"></div>
                    <div className="w-[2.67px] h-[11.56px] left-[6.22px] top-[13.34px] absolute origin-top-left -rotate-90 bg-slate-500 rounded-[10px]"></div>
                </div>
            </div>
            <div className="text-white text-base font-medium font-sans">Ajukan Cuti</div>
        </div>
        <div class="w-[374px] h-12 p-3 bg-neutral-100 rounded-lg border justify-between items-center inline-flex">
            {/* <div class="text-slate-500 text-base font-normal font-sans tracking-tight">Ajukan Cuti</div>
            <div class="origin-top-center -rotate-90 w-6 h-6 relative">
                <img src="/icons/chevron-left.png" alt="chevron-left" />
            </div> */}
            <div className="w-6 h-6 justify-start gap-3 inline-flex items-center">
                <div className="w-6 h-6 relative">
                    <div className="w-6 h-6 left-0 top-0 absolute bg-white rounded-full"></div>
                    <div className="w-[2.67px] h-[11.56px] left-[10.67px] top-[6.22px] absolute bg-slate-500 rounded-[10px]"></div>
                    <div className="w-[2.67px] h-[11.56px] left-[6.22px] top-[13.34px] absolute origin-top-left -rotate-90 bg-slate-500 rounded-[10px]"></div>
                </div>
            </div>
            <div className="text-white text-base font-medium font-sans">Ajukan Cuti</div>
        </div>
    </>)
}

export default Cuti;