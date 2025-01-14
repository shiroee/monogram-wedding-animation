import WeddingMonogramAnimation from "../components/wedding-monogram-animation";

export default function Home() {
  return (
    <main className="bg-rose-50 min-h-screen">
      <WeddingMonogramAnimation initials="P R" date="01.17.2025" delay={1} />
    </main>
  )
}

