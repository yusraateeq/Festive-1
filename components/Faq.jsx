/* Accessible FAQ accordion (native <details> - works without JS). */
export default function Faq({ items }) {
  return (
    <div>
      {items.map((f, i) => (
        <details key={i} className="acc">
          <summary>
            {f.q}
            <span className="plus" aria-hidden="true">+</span>
          </summary>
          <div className="acc-body">
            <p>{f.a}</p>
          </div>
        </details>
      ))}
    </div>
  );
}