import Link from "next/link";

export default function Navbar() {
  const examples = [
    "header_groups",
    "filters_faceted",
    "column_odering",
    "column_sizing",
    "editable",
    "expanding",
    "fully_controlled",
    "grouping",
    "pagnation",
    "per_column_sizing",
    "pinning",
    "row_dnd",
    "row_pinning",
    "row_selection",
    "sorting",
    "sticky_pinning",
    "sub_components",
    "fuzzy_search"
  ];

  const formatText = (text:string) => {
    return text
      .split('_')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };

  return (
    <nav className="w-64 h-screen bg-white shadow-lg left-0 overflow-y-auto">
      <div className="p-4">
        <h2 className="text-xl font-bold mb-6 text-gray-800 border-b pb-2">
          Examples
        </h2>
        <ul className="space-y-2">
          {examples.map((item, index) => (
            <li key={index}>
              <Link 
                href={`/examples/${item}`}
                className="block px-4 py-2 rounded-md text-gray-700 hover:bg-blue-50 
                  hover:text-blue-600 transition-colors border border-transparent
                  hover:border-blue-100"
              >
                {formatText(item)}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}