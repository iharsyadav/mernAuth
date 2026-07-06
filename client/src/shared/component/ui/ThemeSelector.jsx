import useTheme from "@/hooks/useTheme";

export default function ThemeSelector() {
  const { colorTheme, setColorTheme } = useTheme();

  const isGreen = colorTheme === "theme-green";

  return (
    <label className="relative inline-flex items-center cursor-pointer">
      <input
        type="checkbox"
        className="sr-only peer"
        checked={isGreen}
        onChange={() =>
          setColorTheme(
            isGreen
              ? "theme-default"
              : "theme-green"
          )
        }
      />

      <div
        className="
          peer
          relative

          w-10
          h-4

          rounded-full

          ring-1
          ring-gray-500

          bg-gradient-to-r
          from-rose-400
          to-red-900

          duration-500

          peer-checked:from-emerald-500
          peer-checked:to-emerald-900

          shadow-inner
          shadow-gray-900

          after:absolute
          after:content-['']
          after:h-6
          after:w-6
          after:-top-1
          after:-left-1

          after:rounded-full
          after:bg-gray-900

          after:border-2
          after:border-gray-500

          after:duration-300

          peer-checked:after:translate-x-7
        "
      />
    </label>
  );
}