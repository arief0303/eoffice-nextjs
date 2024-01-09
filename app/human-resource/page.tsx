'use client'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

const HR = () => {
    // const navigate = useNavigate();
    const router = useRouter()

    return (
        <>
            <div className="h-24 flex items-center justify-center">
                {/* <button className="w-12 h-12 absolute left-0 ml-7" onClick={() => navigate(-1)}> */}
                <button className="w-12 h-12 absolute left-0 ml-7" onClick={() => router.back()}>
                    <div className="w-12 h-12 left-0 top-0 absolute bg-white rounded-[18px] border border-zinc-300"></div>
                    <div className="w-6 h-6 left-[12px] top-[12px] absolute">
                        <img src="/icons/chevron-left.png" alt="chevron-left" />
                    </div>
                </button>
                <div className="w-screen text-center text-gray-800 text-base font-bold font-sans">HRD</div>
            </div>
            <div className='flex ml-8 mr-8 mb-3 justify-evenly'>
                <div className="text-gray-800 text-base font-medium font-sans basis-1/2">Aktivitas</div>
                <div className="w-[147px] h-8 px-3 py-2 bg-gray-50 rounded-2xl justify-start items-start gap-1.5 inline-flex basis-1/2">
                    <div className="text-slate-500 text-xs font-medium font-sans">September 2023</div>
                    <div className="w-4 h-4 relative origin-center -rotate-90">
                        <img src="/icons/chevron-left.png" alt="chevron-left" />
                    </div>
                </div>
            </div>
            <div className="flex items-center justify-center p-5">
                <div className="grid grid-cols-2 gap-4 w-screen">
                    <div className="basis-1/2 w-full h-[107px] bg-gray-50 rounded-[10px] shadow flex flex-wrap">
                        <div className="ml-3 my-auto w-0 h-6 px-[2.50px] py-0.5 basis-7">
                            <img className="w-[19px] h-5" src="/icons/Login.png" alt="Login Img" />
                        </div>
                        <span className="my-auto text-slate-500 text-xs font-medium font-sans">
                            Masuk
                        </span>
                        <span className="my-auto ml-3 text-gray-800 text-xl font-medium font-sans basis-full">07.30</span>
                        <div className="ml-3 text-slate-500 text-xs font-normal font-sans">On Time</div>
                    </div>
                    <div className="basis-1/2 w-full h-[107px] bg-gray-50 rounded-[10px] shadow flex flex-wrap">
                        <div className="ml-3 my-auto w-0 h-6 px-[2.50px] py-0.5 basis-7">
                            <img className="w-[19px] h-5" src="/icons/Logout.png" alt="Login Img" />
                        </div>
                        <span className="my-auto text-slate-500 text-xs font-medium font-sans">
                            Keluar
                        </span>
                        <span className="my-auto ml-3 text-gray-800 text-xl font-medium font-sans basis-full">16.30</span>
                        <div className="ml-3 text-slate-500 text-xs font-normal font-sans">On Time</div>
                    </div>
                    <div className="basis-1/2 w-full h-[107px] bg-gray-50 rounded-[10px] shadow flex flex-wrap">
                        <div className="ml-3 my-auto w-0 h-6 px-[2.50px] py-0.5 basis-7">
                            <img className="w-[19px] h-5" src="/icons/Tick Square.png" alt="Login Img" />
                        </div>
                        <span className="my-auto text-slate-500 text-xs font-medium font-sans">
                            Ketepatan
                        </span>
                        <span className="my-auto ml-3 text-gray-800 text-xl font-medium font-sans basis-full">96%</span>
                        <div className="ml-3 text-slate-500 text-xs font-normal font-sans'">Tepat Waktu</div>
                    </div>
                    <div className="basis-1/2 w-full h-[107px] bg-gray-50 rounded-[10px] shadow flex flex-wrap">
                        <div className="ml-3 my-auto w-0 h-6 px-[2.50px] py-0.5 basis-7">
                            <img className="w-[19px] h-5" src="/icons/Calendar.png" alt="Login Img" />
                        </div>
                        <span className="my-auto text-slate-500 text-xs font-medium font-sans'">
                            Kehadiran
                        </span>
                        <span className="my-auto ml-3 text-gray-800 text-xl font-medium font-sans' basis-full">31 Hari</span>
                        <div className="ml-3 text-slate-500 text-xs font-normal font-sans'">Hadir</div>
                    </div>
                </div>
            </div>
            <div className="mt-8 mb-3 ml-8 text-gray-800 text-base font-medium font-sans'">Kelola Data Pribadimu</div>
            <div className="mt-5 ml-4 mr-4">
                <Link href='/data-karyawan'>
                    <div className="flex-col justify-start items-center gap-2 inline-flex">
                        <div className="w-[54px] p-[11px] bg-white rounded-[18px] shadow justify-start items-start gap-2.5 inline-flex">
                            <div className="w-8 h-8 justify-center items-center flex">
                                <div className="w-8 h-8 relative">
                                    <img src="/icons/profile-circle.png" alt="profile-circle" />
                                </div>
                            </div>
                        </div>
                        <div className="w-[82px] h-[34px] text-center text-slate-500 text-xs font-normal font-sans'">Data Karyawan</div>
                    </div>
                </Link>
                <Link href='/absensi'>
                    <div className="flex-col justify-center items-center gap-2 inline-flex">
                        <div className="w-[54px] p-[11px] bg-white rounded-[18px] shadow justify-start items-start gap-2.5 inline-flex">
                            <div className="w-8 h-8 justify-center items-center flex">
                                <div className="w-8 h-8 relative">
                                    <img src="/icons/timer.png" alt="timer" />
                                </div>
                            </div>
                        </div>
                        <div className="w-[88px] text-center text-slate-500 text-xs font-normal font-sans'">Absensi</div>
                    </div>
                </Link>
                <Link href='/cuti'>
                <div className="flex-col justify-center items-center gap-2 inline-flex">
                    <div className="w-[54px] p-[11px] bg-white rounded-[18px] shadow justify-start items-start gap-2.5 inline-flex">
                        <div className="w-8 h-8 justify-center items-center flex">
                            <div className="w-8 h-8 relative">
                                <img src="/icons/airplane-square.png" alt="airplane-square" />
                            </div>
                        </div>
                    </div>
                    <div className="w-[82px] h-[17px] text-center text-slate-500 text-xs font-normal font-sans'">Cuti</div>
                </div>
                </Link>
                <div className="flex-col justify-center items-center gap-2 inline-flex">
                    <div className="w-[54px] p-[11px] bg-white rounded-[18px] shadow justify-start items-start gap-2.5 inline-flex">
                        <div className="w-8 h-8 justify-center items-center flex">
                            <div className="w-8 h-8 relative">
                                <img src="/icons/smart-car.png" alt="smart-car" />
                            </div>
                        </div>
                    </div>
                    <div className="w-[82px] h-[17px] text-center text-slate-500 text-xs font-normal font-sans'">Perjalanan Dinas</div>
                </div>
                <div className="flex-col justify-center items-center gap-2 inline-flex">
                    <div className="w-[54px] p-[11px] bg-white rounded-[18px] shadow justify-start items-start gap-2.5 inline-flex">
                        <div className="w-8 h-8 justify-center items-center flex">
                            <div className="w-8 h-8 relative">
                                <img src="/icons/receipt-edit.png" alt="receipt-edit" />
                            </div>
                        </div>
                    </div>
                    <div className="w-[82px] h-[17px] text-center text-slate-500 text-xs font-normal font-sans'">Evaluasi</div>
                </div>
                <div className="flex-col justify-center items-center gap-2 inline-flex">
                    <div className="w-[54px] p-[11px] bg-white rounded-[18px] shadow justify-start items-start gap-2.5 inline-flex">
                        <div className="w-8 h-8 justify-center items-center flex">
                            <div className="w-8 h-8 relative">
                                <img src="/icons/receipt-item.png" alt="receipt-item" />
                            </div>
                        </div>
                    </div>
                    <div className="w-[82px] h-[17px] text-center text-slate-500 text-xs font-normal font-sans'">Slip Gaji</div>
                </div>
            </div>
        </>
    )
}
export default HR;