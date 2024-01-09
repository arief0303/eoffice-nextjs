'use client'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

const DataKaryawan = () => {
    const router = useRouter();

    return (
        <div>
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
                <div className="mt-4 w-[374px] h-[168px] relative bg-primary rounded-[20px]">
                    <img className="w-[395.40px] h-[168px] left-[-10.70px] top-0 absolute" src="/images/Solusi Negeri 3 1.png" />
                    <div className="left-[20px] top-[24px] absolute flex-col justify-start items-start gap-3 inline-flex">
                        <div className="text-neutral-50 text-lg font-black font-sans">Farras Afifni Zakki</div>
                        <div className="text-neutral-50 text-base font-normal font-sans">af************.com</div>
                        <div className="text-neutral-50 text-base font-normal font-sans">085********0</div>
                    </div>
                    <div className="w-[374px] h-10 left-0 top-[128px] absolute bg-white bg-opacity-10 rounded-bl-[20px] rounded-br-[20px] backdrop-blur-sm"></div>
                    <div className="left-[22px] top-[140px] absolute justify-start items-start gap-4 inline-flex">
                        <div className="justify-start items-center gap-1 flex">
                            <div className="text-right text-yellow-400 text-xs font-medium font-sans">NO ID :</div>
                            <div className="text-right text-yellow-400 text-xs font-medium font-sans">1234 **** **** 5217</div>
                        </div>
                    </div>
                    <div className="absolute w-[245px] h-[42px] bg-zinc-800 blur-[25px] -z-50 bottom-0 left-[16%] origin-center"></div>
                </div>
                <div className="mt-20 w-[372px] h-11 p-3 bg-neutral-100 rounded-lg border justify-between items-center inline-flex">
                    <div className="text-slate-500 text-base font-normal font-sans tracking-tight">Data Diri</div>
                    <div className="w-4 h-4 justify-center items-center flex">
                        <div className="w-4 h-4 relative">
                        </div>
                    </div>
                </div>
                <div className="mt-8 w-[372px] h-11 p-3 bg-neutral-100 rounded-lg border justify-between items-center inline-flex">
                    <div className="text-slate-500 text-base font-normal font-sans tracking-tight">Posisi / Jabatan</div>
                    <div className="w-4 h-4 justify-center items-center flex">
                        <div className="w-4 h-4 relative">
                        </div>
                    </div>
                </div>
                <div className="mt-8 w-[372px] h-11 p-3 bg-neutral-100 rounded-lg border justify-between items-center inline-flex">
                    <div className="text-slate-500 text-base font-normal font-sans tracking-tight">Pendidikan</div>
                    <div className="w-4 h-4 justify-center items-center flex">
                        <div className="w-4 h-4 relative">
                        </div>
                    </div>
                </div>
                <div className="mt-8 w-[372px] h-11 p-3 bg-neutral-100 rounded-lg border justify-between items-center inline-flex">
                    <div className="text-slate-500 text-base font-normal font-sans tracking-tight">Data Keluarga</div>
                    <div className="w-4 h-4 justify-center items-center flex">
                        <div className="w-4 h-4 relative">
                        </div>
                    </div>
                </div>
                <div className="mt-8 w-[372px] h-11 p-3 bg-neutral-100 rounded-lg border justify-between items-center inline-flex">
                    <div className="text-slate-500 text-base font-normal font-sans tracking-tight">BPJS</div>
                    <div className="w-4 h-4 justify-center items-center flex">
                        <div className="w-4 h-4 relative">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DataKaryawan;