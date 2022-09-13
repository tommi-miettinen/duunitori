interface PaginationProps {
  pages: number;
  page: number;
  setPage: (page: number) => void;
}

const Pagination = ({ pages, page, setPage }: PaginationProps) => {
  return (
    <div className="flex items-center">
      <button
        onClick={() => setPage(page - 1 > 1 ? page - 1 : 1)}
        className="rounded-lg shadow border w-[40px] h-[40px] hover:bg-gray-100 font-semibold"
      >
        {`<`}
      </button>
      <div className="mx-4 font-semibold">
        {pages >= 1 ? `${Math.floor(page)} / ${Math.floor(pages)}` : "1 / 1"}
      </div>
      <button
        onClick={() => setPage(page + 1 < pages ? page + 1 : pages)}
        className="rounded-lg shadow border w-[40px] h-[40px] hover:bg-gray-100 font-semibold"
      >
        {`>`}
      </button>
    </div>
  );
};

export default Pagination;
