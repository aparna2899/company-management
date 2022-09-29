export default function Header() {
  return (
    <header className="bg-indigo-600">
      <nav
        className="mx-auto max-w-7xl px-4 py-2 sm:px-6 lg:px-8"
        aria-label="Top"
      >
        <div className="flex w-full items-center justify-end border-b border-indigo-500 lg:border-none">
          <a
            href="/"
            className="inline-block rounded-md border border-transparent bg-white py-2 px-4 mx-8 text-base font-medium text-indigo-600 hover:bg-indigo-50"
          >
            Home
          </a>
        </div>
      </nav>
    </header>
  );
}
