import Image from "next/image";
import { SwitchButton } from "@components/ui/buttons/SwitchButton";
import { SpriteCategories } from "@enums";
import { Icon } from "@components/ui/Icon";
import { PlayButton } from "@components/Footer/partials/PlayButton";

export const Footer = () => {
  return (
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
          <p>T.N.T</p>
          <p className={"text-xs text-zinc-400"}>AC/DC</p>
        </div>

        <Icon
          name={"heart"}
          category={SpriteCategories.COMMON}
          size={"lg"}
          className={
            "text-zinc-400 hover:text-zinc-100 cursor-pointer transition-colors ease-in-out duration-300"
          }
        />
      </section>
      <section className={"flex flex-col items-center gap-2"}>
        <div className={"flex items-center gap-4"}>
          <SwitchButton
            defaultState={true}
            icon={{
              name: "shuffle",
              size: "xl",
              category: SpriteCategories.AUDIO,
            }}
          />
          <Icon
            className={"text-zinc-200"}
            size={"xl"}
            name={"chevron-first"}
            category={SpriteCategories.ARROWS}
          />

          <PlayButton />

          <Icon
            className={"text-zinc-200"}
            size={"xl"}
            name={"chevron-last"}
            category={SpriteCategories.ARROWS}
          />

          <SwitchButton
            icon={{
              name: "loop",
              size: "xl",
              category: SpriteCategories.AUDIO,
            }}
          />
        </div>

        <div className="flex items-center gap-2">
          <span className="text-xs text-zinc-4 00">0:31</span>

          <progress
            className="h-1 w-96 [&::-webkit-progress-bar]:rounded-full [&::-webkit-progress-value]:rounded-full [&::-webkit-progress-bar]:bg-zinc-600 [&::-webkit-progress-value]:bg-zinc-200"
            max={100}
            value={20}
          />
          <span className="text-xs text-zinc-4 00">2:14</span>
        </div>
      </section>
      <section className={"flex items-center gap-2"}>
        <Icon
          className={"cursor-pointer"}
          size={"lg"}
          name={"list"}
          category={SpriteCategories.COMMON}
        />
        <Icon
          className={"cursor-pointer"}
          size={"lg"}
          name={"computer"}
          category={SpriteCategories.COMMON}
        />

        <div className="flex items-center gap-1">
          <Icon size={"lg"} name={"volume"} category={SpriteCategories.AUDIO} />

          <progress
            className="h-1 w-24 [&::-webkit-progress-bar]:rounded-full [&::-webkit-progress-value]:rounded-full [&::-webkit-progress-bar]:bg-zinc-600 [&::-webkit-progress-value]:bg-zinc-200"
            max={100}
            value={20}
          />
        </div>
        <Icon
          className={"cursor-pointer"}
          size={"lg"}
          name={"fullscreen"}
          category={SpriteCategories.ACTIONS}
        />
      </section>
    </footer>
  );
};