import React from "react";

export default function DashboardLayout({ children }) {
  return (
    <div>
      <div className="grid grid-cols-12 w-full">
        {/* Side Nav */}
        <div className="col-span-3">
            <ul className="">
                <li className="">User List</li>
            </ul>
        </div>
        {/* Dashboard Content */}
        <div className="col-span-9">{children}</div>
      </div>
    </div>
  );
}
