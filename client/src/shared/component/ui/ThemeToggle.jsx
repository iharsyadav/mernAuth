import useTheme from "@/shared/hooks/useTheme";

export default function ThemeToggle() {
  const { mode, setMode } = useTheme();

  return (
    <label className="inline-flex items-center relative cursor-pointer">
      <input
        type="checkbox"
        className="peer hidden"
        checked={mode === "dark"}
        onChange={() =>
          setMode(mode === "dark" ? "light" : "dark")
        }
      />

      <div
        className="
          relative
          w-[55px]
          h-[25px]
          bg-white
          peer-checked:bg-zinc-600
          rounded-full
          shadow-sm
          duration-300

          after:absolute
          after:content-['']
          after:w-[20px]
          after:h-[20px]
          after:rounded-full
          after:top-[2.5px]
          after:left-[2.5px]

          after:bg-gradient-to-r
          after:from-orange-500
          after:to-yellow-400

          peer-checked:after:from-zinc-900
          peer-checked:after:to-zinc-900

          after:shadow-md
          after:duration-300

          peer-checked:after:left-[52px]
          peer-checked:after:-translate-x-full
        "
      />

      {/* Sun Icon */}
      <svg
        viewBox="0 0 24 24"
        className="
          absolute
          left-[6px]
          w-3.5
          h-3.5
          fill-white
          transition-opacity
          duration-300
          peer-checked:opacity-50
        "
      >
        <path d="M12,17c-2.76,0-5-2.24-5-5s2.24-5,5-5,5,2.24,5,5-2.24,5-5,5ZM13,0h-2V5h2V0Zm0,19h-2v5h2v-5ZM5,11H0v2H5v-2Zm19,0h-5v2h5v-2Zm-2.81-6.78l-1.41-1.41-3.54,3.54,1.41,1.41,3.54-3.54ZM7.76,17.66l-1.41-1.41-3.54,3.54,1.41,1.41,3.54-3.54Zm0-11.31l-3.54-3.54-1.41,1.41,3.54,3.54,1.41-1.41Zm13.44,13.44l-3.54-3.54-1.41,1.41,3.54,3.54,1.41-1.41Z" />
      </svg>

      {/* Moon Icon */}
      <svg
        viewBox="0 0 24 24"
        className="
          absolute
          right-[6px]
          w-3.5
          h-3.5
          fill-black
          opacity-60
          transition-all
          duration-300
          peer-checked:fill-white
          peer-checked:opacity-100
        "
      >
        <path d="M12.009,24A12.067,12.067,0,0,1,.075,10.725,12.121,12.121,0,0,1,10.1.152a13,13,0,0,1,5.03.206,2.5,2.5,0,0,1,1.8,1.8,2.47,2.47,0,0,1-.7,2.425c-4.559,4.168-4.165,10.645.807,14.412a2.5,2.5,0,0,1-.7,4.319A13.875,13.875,0,0,1,12.009,24Z" />
      </svg>
    </label>
  );
}