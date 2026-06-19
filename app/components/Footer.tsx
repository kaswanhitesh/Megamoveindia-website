export default function Footer() {
  return (
    <footer className="border-t border-gray-300 bg-[#f7f7f7] px-16 py-3 text-sm text-gray-600 flex justify-between">
      <div>
        © Copyright 2026, Mega Move India Private Limited. All rights reserved.
      </div>

      <div className="space-x-4">
        <a href="#">Site Map</a>
        <span>|</span>
        <a href="#">Terms & Conditions</a>
        <span>|</span>
        <a href="/privacy-policy">
          Privacy Policy
        </a>
      </div>
    </footer>
  );
}
