import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";

// Example items, to simulate fetching from another resources.
const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

function Items({ currentItems }) {
  return (
    <>
      <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 md:gap-12 px-12 sm:px-0 h-full max-w-screen-xl mx-auto">
        {currentItems &&
          currentItems.map((item) => (
            <div
              key={item.id}
              className="bg-cyan-500 h-logical mb-6 md:mb-0 rounded-lg relative w-96  group overflow-hidden"
            >
              <div>
                <a href={item.href} target="_blank" rel="noreferrer">
                  <img
                    src={item.src}
                    alt={item.title}
                    className="rounded-md w-full mx-auto h-logical object-fill px-2 py-1 hover:scale-105 duration-500 cursor-pointer"
                  />
                  <p className="text-center hidden absolute bottom-0 bg-primary_color w-full py-2 group-hover:inline-flex duration-500 justify-center items-center font-body_font text-2xl">
                    {item.title}
                  </p>
                </a>
              </div>
            </div>
          ))}
      </div>
    </>
  );
}

const Pagination = ({ itemsPerPage, projects }) => {
  // We start with an empty list of items.
  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);

  useEffect(() => {
    // Fetch items from another resources.
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(projects.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(projects.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, projects]);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    setItemOffset(newOffset);
  };

  return (
    <div>
      <Items currentItems={currentItems} />
      <div>
        <ReactPaginate
          breakLabel="..."
          nextLabel="next  >"
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={pageCount}
          previousLabel="<  previous"
          renderOnZeroPageCount={null}
          className="flex gap-5 justify-center mt-6 font-bodyFont font-semibold text-[18px] text-gray-400 hover:text-gray-100 duration-200"
        />
      </div>
    </div>
  );
};

export default Pagination;
