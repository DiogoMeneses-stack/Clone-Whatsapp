import './recursos/header.css';

function Header(props) {
    return (
        <div className="Header">
            <div className="link">
            <a className="home" href="#">Home</a>
            <a className="sobre" href="#">Sobre</a>
        </div>
    </div >
  );
}

export default Header;