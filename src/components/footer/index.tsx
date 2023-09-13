const Footer = () => (
  <footer className="bg-base border-t border-gray-100 py-4">
    <div className="max-w-7xl mx-auto text-white px-4 lg:px-0 flex flex-wrap justify-between">
      <p className="mb-0">
        Copyrights &copy;{` `}
        {new Date().getFullYear()}. All rights reserved.
      </p>
      <p className="mb-0">
        Made with &hearts; by
        <a
          href="https://arkisoul.github.io"
          target="_blank"
          rel="noreferrer noopener author"
          className="inline-block mx-1"
        >
          Arkisoul
        </a>
      </p>
    </div>
  </footer>
);

export default Footer;
