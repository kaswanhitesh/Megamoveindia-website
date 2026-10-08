import { FaWhatsapp } from "react-icons/fa";

// Floating chat button on every page (Mumbai office number).
export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/919321499970"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Mega Move India on WhatsApp"
      className="fixed bottom-5 right-5 z-[150] flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-3xl text-white shadow-[0_6px_20px_rgba(0,0,0,0.25)] hover:bg-[#1ebe5b]"
    >
      <FaWhatsapp />
    </a>
  );
}
