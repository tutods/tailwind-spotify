import Link from "next/link";
import { Icon } from "@components/ui/Icon";
import { SpriteCategories } from "@/shared/enums/SpriteCategories";
import Image from "next/image";

export default function Home() {
  return (
    <div className={"h-screen flex flex-col"}>
      <div className={"flex flex-1"}>
        <aside className={"p-6 w-72 bg-zinc-950"}>
          <div className={"flex items-center gap-2"}>
            <span className={"w-3 h-3 rounded-full bg-red-500"} />
            <span className={"w-3 h-3 rounded-full bg-yellow-500"} />
            <span className={"w-3 h-3 rounded-full bg-green-500"} />
          </div>

          <nav className={"space-y-5 mt-10"}>
            <Link
              className={
                "flex items-center gap-4 text-xs font-semibold text-zinc-200"
              }
              href={"#"}
            >
              <Icon
                size={"xl"}
                name={"home"}
                category={SpriteCategories.MENU}
              />{" "}
              Home
            </Link>
            <Link
              className={
                "flex items-center gap-4 text-xs font-semibold text-zinc-200"
              }
              href={"#"}
            >
              <Icon
                size={"xl"}
                name={"search"}
                category={SpriteCategories.MENU}
              />{" "}
              Search
            </Link>
            <Link
              className={
                "flex items-center gap-4 text-xs font-semibold text-zinc-200"
              }
              href={"#"}
            >
              <Icon
                size={"xl"}
                name={"layers"}
                category={SpriteCategories.MENU}
              />{" "}
              Your Library
            </Link>
          </nav>

          <nav
            className={
              "mt-6 pt-6 border-t border-t-zinc-800 flex flex-col gap-3"
            }
          >
            <Link
              className={
                "text-sm text-zinc-400 hover:text-zinc-100 transition-colors ease-in-out duration-300"
              }
              href={"#"}
            >
              My Musics
            </Link>
            <Link
              className={
                "text-sm text-zinc-400 hover:text-zinc-100 transition-colors ease-in-out duration-300"
              }
              href={"#"}
            >
              Play Portugal
            </Link>
            <Link
              className={
                "text-sm text-zinc-400 hover:text-zinc-100 transition-colors ease-in-out duration-300"
              }
              href={"#"}
            >
              New Music Daily
            </Link>
          </nav>
        </aside>
        <main className={"flex-1 p-6"}>
          <section className={"flex items-center gap-4"}>
            <button
              className={
                "rounded-full bg-black/20 p-1 disabled:bg-black/5 disabled:text-zinc-100/20 enabled:hover:bg-black/80 transition-colors ease-in-out duration-300"
              }
            >
              <Icon
                name={"chevron-left"}
                category={SpriteCategories.ARROWS}
                size={"lg"}
              />
            </button>
            <button
              disabled
              className={
                "rounded-full bg-black/20 p-1 disabled:bg-black/5 disabled:text-zinc-100/20 enabled:hover:bg-black/80 transition-colors ease-in-out duration-300"
              }
            >
              <Icon
                name={"chevron-right"}
                category={SpriteCategories.ARROWS}
                size={"lg"}
              />
            </button>
          </section>

          <h1 className="font-semibold text-3xl mt-10">Good Afternoon</h1>
          <section className="grid grid-cols-3 gap-4 mt-4">
            <Link
              href={"#"}
              className={
                "group bg-white/5 rounded-md overflow-hidden flex items-center gap-4 hover:bg-white/10 transition-colors ease-in-out duration-300 pr-8"
              }
            >
              <Image
                width={104}
                height={104}
                src={"/assets/media/ac-dc-high-voltage.webp"}
                alt={"AC/DC - High Voltage"}
              />
              <strong>High Voltage</strong>

              <button
                className={
                  "invisible group-hover:visible inline-flex items-center justify-center p-2 rounded-full text-black bg-primary-500 ml-auto transition-all ease-in-out duration-300"
                }
              >
                <Icon
                  name={"play"}
                  category={SpriteCategories.AUDIO}
                  size={"xl"}
                  className={"fill-black"}
                />
              </button>
            </Link>
            <Link
              href={"#"}
              className={
                "group bg-white/5 rounded-md overflow-hidden flex items-center gap-4 hover:bg-white/10 transition-colors ease-in-out duration-300 pr-8"
              }
            >
              <Image
                width={104}
                height={104}
                src={"/assets/media/ac-dc-high-voltage.webp"}
                alt={"AC/DC - High Voltage"}
              />
              <strong className={"break-words"}>High Voltage</strong>
              <button
                className={
                  "invisible group-hover:visible inline-flex items-center justify-center p-2 rounded-full text-black bg-primary-500 ml-auto transition-all ease-in-out duration-300"
                }
              >
                <Icon
                  name={"play"}
                  category={SpriteCategories.AUDIO}
                  size={"xl"}
                  className={"fill-black"}
                />
              </button>
            </Link>
            <Link
              href={"#"}
              className={
                "group bg-white/5 rounded-md overflow-hidden flex items-center gap-4 hover:bg-white/10 transition-colors ease-in-out duration-300 pr-8"
              }
            >
              <Image
                width={104}
                height={104}
                src={"/assets/media/ac-dc-high-voltage.webp"}
                alt={"AC/DC - High Voltage"}
              />
              <strong>High Voltage</strong>
              <button
                className={
                  "invisible group-hover:visible inline-flex items-center justify-center p-2 rounded-full text-black bg-primary-500 ml-auto transition-all ease-in-out duration-300"
                }
              >
                <Icon
                  name={"play"}
                  category={SpriteCategories.AUDIO}
                  size={"xl"}
                  className={"fill-black"}
                />
              </button>
            </Link>
          </section>

          <h2 className="font-semibold text-2xl mt-10">
            Made for Daniel Sousa
          </h2>
          <section className="grid md:grid-cols-5 grid-cols-3 lg:grid-cols-6 gap-4 mt-4">
            <Link
              className={
                "bg-white/5 flex flex-col gap-2 p-3 group rounded-md hover:bg-white/10 transition-colors ease-in-out"
              }
              href={"#"}
            >
              <figure className="relative overflow-hidden rounded-md w-full h-32 ">
                <Image
                  fill
                  className={"absolute inset-0 object-cover object-center"}
                  src={"/assets/media/ac-dc-high-voltage.webp"}
                  alt={"AC/DC - High Voltage"}
                />
                <figcaption className="sr-only">
                  AC/DC - High Voltage
                </figcaption>
                <button
                  className={
                    "hidden group-hover:inline-flex items-center justify-center p-2 rounded-full text-black bg-primary-500 transition-all ease-in-out duration-300 absolute bottom-2 right-2"
                  }
                >
                  <Icon
                    name={"play"}
                    category={SpriteCategories.AUDIO}
                    size={"xl"}
                    className={"fill-black"}
                  />
                </button>
              </figure>
              <strong className={"font-semibold"}>High Voltage</strong>
              <span className={"text-sm text-zinc-500"}>AC/DC</span>
            </Link>
          </section>
        </main>
      </div>
      <footer
        className={
          "bg-zinc-800 border-t border-t-zinc-700 p-6 flex items-center justify-between"
        }
      >
        <section className={"flex items-center gap-3"}>
          <Image
            width={56}
            height={56}
            className={"rounded-md"}
            src={"/assets/media/ac-dc-high-voltage.webp"}
            alt={"AC/DC - High Voltage"}
          />
          <div>
            <p className={""}>T.N.T</p>
            <p className={"text-xs text-zinc-400"}>AC/DC</p>
          </div>
        </section>
        <section className={"flex flex-col items-center"}>
          <div></div>
        </section>
        <section></section>
      </footer>
    </div>
  );
}
