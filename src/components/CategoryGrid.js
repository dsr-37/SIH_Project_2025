// src/components/CategoryGrid.js
import React from "react";

const CATS = ["Road", "Garbage", "Streetlight", "Water", "Others"];
function CategoryGrid({ issues }) {
  return (
    <div>
      <h4>Category-wise</h4>
      <div className="cat-grid">
        {CATS.map(cat => (
          <div key={cat}>
            <h5>{cat}</h5>
            <div className="cat-images">
              {issues.filter(i => i.category === cat).slice(0,3).map(issue => (
                <img key={issue.id} src={issue.photoUrl} width="80" alt="" />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CategoryGrid;
