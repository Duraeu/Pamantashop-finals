const Navbar = () => {
    return (
       <nav className="navbar">
        <h1>Pamantashop</h1>
        <div className="links list-none">
            <ul>
                <li><a href="/Home">Home</a></li>
                <li><a href="/About">About us</a></li>
                <li><a href="/Login">Login</a></li>
                <li><a href="/">shop</a></li>
            </ul>
        </div>
       </nav> 
    );
}
export default Navbar;