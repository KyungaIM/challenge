export default function Footer() {
  return (
    <footer className="text-gray-600 body-font border-t-2">
      <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col ">
        <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
          © 2023 구현하기 챌린지 —
          <a
            href="https://github.com/KyungaIM/challenge"
            className="text-gray-600 ml-1"
            rel="noopener noreferrer"
            target="_blank"
          >
            @github
          </a>
        </p>
      </div>
    </footer>
  );
}
