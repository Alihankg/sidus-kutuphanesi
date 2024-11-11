/* eslint-disable @next/next/no-img-element */
'use client'

export default function Home() {
	return (
		<div className="flex items-center justify-center h-dvh bg-[url('/img/library-bg.jpg')] bg-center bg-cover bg-opacity-75">
			<div className="card bg-opacity-70 bg-black p-5 rounded-md min-w-80 w-[50%] flex flex-col gap-2 justify-center items-center">
				<p className="text-3xl lg:text-2xl text-center">
					<span className="font-bold bg-gradient-to-br from-[#DF3AD9] to-[#F67B6B] bg-clip-text text-transparent">
						Sidus Kütüphanesi
					</span>
					&apos;ne hoşgeldin!
				</p>
				<p className="text-2xl lg:text-xl">
					Burada çeşitli ve tatlı karakterlerle evrenin sırlarını
					keşfedebileceksin!
				</p>
				<img
					src="/img/schro2.png"
					alt="schrodinger"
					className="w-96 animate-stretchShrink origin-bottom"
				/>
				<div
					className="bg-gradient-to-br from-[#696EFF] to-[#F8ACFF] text-gray-800 rounded-md px-4 py-2 hover:cursor-pointer"
					onClick={() => console.log('start')}>
					Hemen Başla!
				</div>
			</div>

			<div className="absolute bottom-10 right-10">
				Image by{' '}
				<a
					className=" underline hover:text-blue-500"
					href="https://www.freepik.com/free-vector/abandoned-library-with-old-books-dusty-shelves-working-desks-with-lamps-vector-cartoon-illustration-large-room-with-bookshelves-walls-covered-with-cobweb-haunted-archive-interior_69439840.htm#fromView=keyword&page=1&position=1&uuid=1b982509-1035-49f2-9a9b-1cc0fcf7e15b">
					Freepik
				</a>
			</div>
		</div>
	)
}
