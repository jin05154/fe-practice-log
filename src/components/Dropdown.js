import React, { useState } from "react";

import { ReactComponent as ExpandIcon } from "../icons/expand.svg";
import { ReactComponent as SearchIcon } from "../icons/search.svg";

const menuOptions = [
  { id: 1, name: "APPLE" },
  { id: 2, name: "CUCUMBER" },
  { id: 3, name: "PINEAPPLE" },
  { id: 4, name: "PEACH" },
  { id: 5, name: "LETTUCE" },
  { id: 6, name: "GRAPE" },
  { id: 7, name: "EGG" },
  { id: 8, name: "MILK" },
];

export default function Dropdown() {
  const [selected, setSelected] = useState("");
  const [search, setSearch] = useState("");
  const [expand, setExpand] = useState(false);
  const handleExpand = () => setExpand(!expand);
  const mouseOverMenu = (e) => {
    e.currentTarget.style.background = "var(--background-default)";
  };
  const mouseOutMenu = (e) => {
    e.currentTarget.style.background = "white";
  };
  const selectMenu = (menu) => {
    setSelected(menu);
    setExpand(false);
  };

  return (
    <>
      <h2 className="subtitle">5. Dropdown</h2>
      <div className="menu-wrap">
        <div className="menu-btn" onClick={handleExpand}>
          <span>{selected ? selected : "All groceries"}</span>
          <div>
            <ExpandIcon />
          </div>
        </div>
        {expand && (
          <div className="dropdown-menu">
            <div className="search-bar">
              <span>
                <SearchIcon />
              </span>
              <input
                type="text"
                placeholder="Search Grocery"
                value={search ? search : null}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
            <div
              onMouseOver={mouseOverMenu}
              onMouseOut={mouseOutMenu}
              onClick={() => selectMenu("All groceries")}
            >
              All groceries
            </div>
            {search === "" ? (
              <>
                {menuOptions.map((menu) => (
                  <div
                    key={menu.id}
                    onMouseOver={mouseOverMenu}
                    onMouseOut={mouseOutMenu}
                    onClick={() => selectMenu(menu.name)}
                  >
                    {menu.name}
                  </div>
                ))}
              </>
            ) : (
              <>
                {menuOptions
                  .filter(
                    (menu) =>
                      menu.name.includes(search) ||
                      menu.name.toLowerCase().includes(search)
                  )
                  .map((filteredMenu) => (
                    <div
                      key={filteredMenu.id}
                      onMouseOver={mouseOverMenu}
                      onMouseOut={mouseOutMenu}
                      onClick={() => selectMenu(filteredMenu.name)}
                    >
                      {filteredMenu.name}
                    </div>
                  ))}
              </>
            )}
          </div>
        )}
      </div>
    </>
  );
}
