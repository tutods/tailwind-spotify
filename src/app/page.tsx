import Link from "next/link";
import { Icon } from "@components/ui/Icon";
import { SpriteCategories } from "@/shared/enums/SpriteCategories";
import Image from "next/image";
import { Footer } from "@components/Footer";
import { Sidebar } from "@components/Sidebar";

export default function Home() {
  return (
    <div className={"h-screen flex flex-col"}>
      <div className={"flex flex-1"}>
        <Sidebar />
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
              <figure className="relative overflow-hidden rounded-md w-full aspect-square">
                <Image
                  fill
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
                  />
                </button>
              </figure>
              <strong className={"font-semibold"}>High Voltage</strong>
              <span className={"text-sm text-zinc-500"}>AC/DC</span>
            </Link>
            <Link
              className={
                "bg-white/5 flex flex-col gap-2 p-3 group rounded-md hover:bg-white/10 transition-colors ease-in-out"
              }
              href={"#"}
            >
              <figure className="relative overflow-hidden rounded-md w-full aspect-square">
                <Image
                  fill
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
                  />
                </button>
              </figure>
              <strong className={"font-semibold"}>High Voltage</strong>
              <span className={"text-sm text-zinc-500"}>AC/DC</span>
            </Link>
            <Link
              className={
                "bg-white/5 flex flex-col gap-2 p-3 group rounded-md hover:bg-white/10 transition-colors ease-in-out"
              }
              href={"#"}
            >
              <figure className="relative overflow-hidden rounded-md w-full aspect-square">
                <Image
                  fill
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
                  />
                </button>
              </figure>
              <strong className={"font-semibold"}>High Voltage</strong>
              <span className={"text-sm text-zinc-500"}>AC/DC</span>
            </Link>
            <Link
              className={
                "bg-white/5 flex flex-col gap-2 p-3 group rounded-md hover:bg-white/10 transition-colors ease-in-out"
              }
              href={"#"}
            >
              <figure className="relative overflow-hidden rounded-md w-full aspect-square">
                <Image
                  fill
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
                  />
                </button>
              </figure>
              <strong className={"font-semibold"}>High Voltage</strong>
              <span className={"text-sm text-zinc-500"}>AC/DC</span>
            </Link>
            <Link
              className={
                "bg-white/5 flex flex-col gap-2 p-3 group rounded-md hover:bg-white/10 transition-colors ease-in-out"
              }
              href={"#"}
            >
              <figure className="relative overflow-hidden rounded-md w-full aspect-square">
                <Image
                  fill
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
                  />
                </button>
              </figure>
              <strong className={"font-semibold"}>High Voltage</strong>
              <span className={"text-sm text-zinc-500"}>AC/DC</span>
            </Link>
            <Link
              className={
                "bg-white/5 flex flex-col gap-2 p-3 group rounded-md hover:bg-white/10 transition-colors ease-in-out"
              }
              href={"#"}
            >
              <figure className="relative overflow-hidden rounded-md w-full aspect-square">
                <Image
                  fill
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
                  />
                </button>
              </figure>
              <strong className={"font-semibold"}>High Voltage</strong>
              <span className={"text-sm text-zinc-500"}>AC/DC</span>
            </Link>
          </section>
        </main>
      </div>

      <Footer />
    </div>
  );
}
