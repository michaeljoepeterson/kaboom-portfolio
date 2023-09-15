import Image from 'next/image'
import GameWrapper from './_components/game/game-wrapper'
import ClientWrapper from './_components/client-wrapper'

export default function Home() {
  
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-5">
      <ClientWrapper>
        <GameWrapper />
      </ClientWrapper>
    </main>
  )
}
