"use client"
import React from "react";

export default function BlogSort() {
  return (
    <div className="sort">
      <div className="sort_title">Сортувати за:</div>
      <ul className="sort_list">
        <li>Date</li>
        <li>Name</li>
        <li>Views</li>
      </ul>
    </div>
  );
}
