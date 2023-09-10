import Image from 'next/image'
import GameWrapper from './_components/game-wrapper'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <GameWrapper />
    </main>
  )
}
