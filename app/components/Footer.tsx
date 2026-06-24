export default function Footer() {
  return (
    <footer
      className="
        relative
        z-10
        border-t
        border-gray-300
        bg-[#f7f7f7]
        px-6
        lg:px-16
        py-4
        text-sm
        text-gray-600
        flex
        flex-col
        lg:flex-row
        items-center
        justify-between
        gap-3
      "
    >
      <div className="text-center lg:text-left">
        © Copyright 2026, Mega Move India Private Limited. All rights reserved.
      </div>

      <div
        className="
          flex
          flex-wrap
          justify-center
          lg:justify-end
          items-center
          gap-2
          lg:gap-4
          text-center
        "
      >
        <a
          href="#"
          className="hover:text-black transition-colors"
        >
          Site Map
        </a>

        <span className="hidden lg:inline">|</span>

        <a
          href="/documents/MegaMoveIndia%20Terms%20and%20Conditions.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-black transition-colors"
        >
          Terms & Conditions
        </a>

        <span className="hidden lg:inline">|</span>

        <a
          href="/privacy-policy"
          className="hover:text-black transition-colors"
        >
          Privacy Policy
        </a>
      </div>
    </footer>
  );
}