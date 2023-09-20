import logo from "../../assets/logo.png";

export const Footer = () => {
  return (
    <footer>
      <img src={logo} alt="Logo de KASA" />
      <div className="copyright">
        <p>&copy; 2020 Kasa. All</p>
        <p>Rights reserved</p>
      </div>
    </footer>
  );
};
