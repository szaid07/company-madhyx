export default function Categories({ categories = [] }) {
  const categoriesList = [...categories];
  if (categoriesList.length === 0) return null;
  return (
    <div className="sidebar__widget">
      <h4 className="sidebar__widget-title">Categories</h4>
      <div className="sidebar__cat-list">
        <ul className="list-wrap">
          {categoriesList.map((category) => (
            <li key={category.id}>
              <a href="#">{category.text}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
