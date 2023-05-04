import { HorizontalCard } from '@components/cards/HorizontalCard';
import { VerticalCard } from '@components/cards/VerticalCard';
import { Footer } from '@components/Footer';
import { Icon } from '@components/Icon';
import { Sidebar } from '@components/Sidebar';
import { SpriteCategories } from '@/shared/enums/SpriteCategories';

export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 p-6">
          <section className="flex items-center gap-4">
            <button className="rounded-full bg-black/20 p-1 disabled:bg-black/5 disabled:text-zinc-100/20 enabled:hover:bg-black/80 transition-colors ease-in-out duration-300">
              <Icon
                category={SpriteCategories.ARROWS}
                name="chevron-left"
                size="lg"
              />
            </button>
            <button
              disabled
              className="rounded-full bg-black/20 p-1 disabled:bg-black/5 disabled:text-zinc-100/20 enabled:hover:bg-black/80 transition-colors ease-in-out duration-300"
            >
              <Icon
                category={SpriteCategories.ARROWS}
                name="chevron-right"
                size="lg"
              />
            </button>
          </section>

          <h1 className="font-semibold text-3xl mt-10">Good Afternoon</h1>
          <section className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
            <HorizontalCard
              album="Album or Playlist Name"
              artist="Artist/Band"
              cover="/assets/media/cover.webp"
              href="#"
            />
            <HorizontalCard
              album="Album or Playlist Name"
              artist="Artist/Band"
              cover="/assets/media/cover.webp"
              href="#"
            />
            <HorizontalCard
              album="Album or Playlist Name"
              artist="Artist/Band"
              cover="/assets/media/cover.webp"
              href="#"
            />
          </section>

          <h2 className="font-semibold text-2xl mt-10">
            Made for Daniel Sousa
          </h2>
          <section className="grid md:grid-cols-5 grid-cols-2 lg:grid-cols-6 gap-4 mt-4">
            <VerticalCard
              album="Album or Playlist Name"
              artist="Artist/Band"
              cover="/assets/media/cover.webp"
              href="#"
            />
            <VerticalCard
              album="Album or Playlist Name"
              artist="Artist/Band"
              cover="/assets/media/cover.webp"
              href="#"
            />
            <VerticalCard
              album="Album or Playlist Name"
              artist="Artist/Band"
              cover="/assets/media/cover.webp"
              href="#"
            />
            <VerticalCard
              album="Album or Playlist Name"
              artist="Artist/Band"
              cover="/assets/media/cover.webp"
              href="#"
            />
            <VerticalCard
              album="Album or Playlist Name"
              artist="Artist/Band"
              cover="/assets/media/cover.webp"
              href="#"
            />
            <VerticalCard
              album="Album or Playlist Name"
              artist="Artist/Band"
              cover="/assets/media/cover.webp"
              href="#"
            />
          </section>
        </main>
      </div>

      <Footer
        artist="Artist or Band"
        cover="/assets/media/cover.webp"
        music="Music"
      />
    </div>
  );
}
