// The homepage's slow-drifting colour glows (see .card-glow in globals.css),
// for any page. Place it as the first child of a page's root element and give
// that root `relative isolate`: the glows then sit above the page's own
// background colour but behind its cards and text.
export default function PageGlow() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden" aria-hidden="true">
      <div className="card-glow card-glow-1" />
      <div className="card-glow card-glow-2" />
      <div className="card-glow card-glow-3" />
      <div className="card-glow card-glow-4" />
    </div>
  );
}
