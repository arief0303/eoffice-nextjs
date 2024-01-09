'use client'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

const Absensi = () => {
    /* const navigate = useNavigate();
    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate('/login');
    };
 */
    const router = useRouter();

    return (
        <>
            <div className="h-24 flex items-center justify-center">
                <button className="w-12 h-12 absolute left-0 ml-7" onClick={() => router.back()}>
                    <div className="w-12 h-12 left-0 top-0 absolute bg-white rounded-[18px] border border-zinc-300"></div>
                    <div className="w-6 h-6 left-[12px] top-[12px] absolute">
                        <img src="/icons/chevron-left.png" alt="chevron-left" />
                    </div>
                </button>
                <div className="w-screen text-center text-gray-800 text-base font-bold font-sans">Data Karyawan</div>
            </div>
            <div className='flex flex-col items-center'>
                <div className="w-[374px] h-12 p-3 bg-neutral-100 rounded-lg border justify-between items-center inline-flex">
                    <div className="text-slate-500 text-base font-normal font-sans tracking-tight">Pilih Bulan</div>
                    <div className="origin-top-center -rotate-90 w-6 h-6 relative">
                        <img src="/icons/chevron-left.png" alt="chevron-left" />
                    </div>
                </div>
                <div className='flex flex-col items-center mt-8'>
                    <div className="w-[374px] h-12 justify-between items-center inline-flex">
                        <div className="justify-start items-center gap-3.5 flex">
                            <div className="w-12 h-12 p-3 bg-neutral-100 rounded-[36px] justify-center items-center flex">
                                <div className="w-6 h-6 justify-center items-center flex">
                                    <div className="w-6 h-6 relative">
                                        <img src="/icons/timer2.png" alt="timer2" />
                                    </div>
                                </div>
                            </div>
                            <div className="flex-col justify-start items-start gap-2 inline-flex">
                                <div className="text-zinc-800 text-base font-semibold font-sans tracking-tight">07 : 53 : 50  WIB</div>
                                <div className="text-stone-500 text-opacity-90 text-xs font-normal font-sans tracking-tight">12 Nov 2020</div>
                            </div>
                        </div>
                        <div className="flex-col justify-start items-end gap-2 inline-flex">
                            <div className="text-primary text-right text-slate-500 text-base font-medium font-sans tracking-tight">Tepat Waktu</div>
                            <div className="text-stone-500 text-opacity-90 text-xs font-normal font-sans tracking-tight">Shift pagi</div>
                        </div>
                    </div>
                    <div className="mt-6 w-[374px] h-12 justify-between items-center inline-flex">
                        <div className="justify-start items-center gap-3.5 flex">
                            <div className="w-12 h-12 p-3 bg-neutral-100 rounded-[36px] justify-center items-center flex">
                                <div className="w-6 h-6 justify-center items-center flex">
                                    <div className="w-6 h-6 relative">
                                        <img src="/icons/timer2.png" alt="timer2" />
                                    </div>
                                </div>
                            </div>
                            <div className="flex-col justify-start items-start gap-2 inline-flex">
                                <div className="text-zinc-800 text-base font-semibold font-sans tracking-tight">07 : 53 : 50  WIB</div>
                                <div className="text-stone-500 text-opacity-90 text-xs font-normal font-sans tracking-tight">12 Nov 2020</div>
                            </div>
                        </div>
                        <div className="flex-col justify-start items-end gap-2 inline-flex">
                            <div className="text-right text-red text-base font-medium font-sans tracking-tight">Terlambat</div>
                            {/* <div className="text-stone-500 text-opacity-90 text-xs font-normal font-['Montserrat'] tracking-tight">Shift pagi</div> */}
                            <div className="text-stone-500 text-opacity-90 text-xs font-normal font-sans tracking-tight">Shift pagi</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Absensi