export default function MainBoard() {
  return (
    <main className="bg-lightGray w-full flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <p className="text-mediumGrey text-headingL font-headingL leading-headingL">
          This board is empty. Create a new column to get started.
        </p>
        <button className="bg-mainPurple w-[174px] p-4 font-headingM text-headingM leading-headingM text-white rounded-3xl">
          + Add New Column
        </button>
      </div>
    </main>
  );
}
