export const Tabs = ({ tabs, activeTab, onTabSelected }) => {
  return (
    <div className="tabs is-boxed">
      <ul>
        {tabs.map(t => {
          const selected = activeTab === t.id;

          return (
            <li
              key={t.id}
              className={selected ? 'is-active' : ''}
              data-cy="Tab"
            >
              <a
                href={`#${t.id}`}
                data-cy="TabLink"
                onClick={e => {
                  e.preventDefault();
                  if (!selected) {
                    onTabSelected(t.id);
                  }
                }}
              >
                {t.title}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
