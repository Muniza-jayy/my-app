import "./FooterStyles.css";

const footerColumns = [
  {
    title: "Project",
    links: ["Changelog", "Status", "License", "All Versions"],
  },
  {
    title: "Community",
    links: ["GitHub", "Issues", "Project", "Twitter"],
  },
  {
    title: "Help",
    links: ["Support", "Troubleshooting", "Contact Us"],
  },
  {
    title: "Others",
    links: ["Terms of Service", "Privacy Policy", "Travel Guide"],
  },
];

function Footer() {
  return (
    <footer className="footer">
      <div className="top">
        <div>
          <h1>Trippy</h1>
          <p>Choose your favourite destination and make every journey memorable.</p>
        </div>
        <div className="social-icons">
          <a href="/" aria-label="Facebook">
            <i className="fa-brands fa-facebook-f"></i>
          </a>
          <a href="/" aria-label="Instagram">
            <i className="fa-brands fa-instagram"></i>
          </a>
          <a href="/" aria-label="Twitter">
            <i className="fa-brands fa-twitter"></i>
          </a>
          <a href="/" aria-label="YouTube">
            <i className="fa-brands fa-youtube"></i>
          </a>
        </div>
      </div>
      <div className="bottom">
        {footerColumns.map((column) => (
          <div key={column.title}>
            <h4>{column.title}</h4>
            {column.links.map((link) => (
              <a key={link} href="/">
                {link}
              </a>
            ))}
          </div>
        ))}
      </div>
    </footer>
  );
}

export default Footer;
