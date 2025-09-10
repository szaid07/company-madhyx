export default function Tags({ tags = [] }) {
  const tagsList = [...tags];
  if (tagsList.length === 0) return null;
  return (
    <div className="sidebar__widget">
      <h4 className="sidebar__widget-title">Tags</h4>
      <div className="sidebar__tag-list">
        <ul className="list-wrap">
          {tagsList.map((tag) => (
            <li key={tag.id}>
              <a href="#">{tag.text}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
