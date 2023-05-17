function Header(){
    return (
        <header style={{display: 'flex', justifyContent: 'space-between', padding: '10px 20px'}}>
        <img src='https://img.freepik.com/free-vector/golden-bird-logo-design_1195-336.jpg?w=2000' alt='logo' width={50} height={50}/>
        <nav>
          <ul style={{display: 'flex',listStyleType: 'none'}}>
            <li>
              <a href='#'>Home</a>
            </li>
            <li>
              <a href='#'>Food</a>
            </li>
            <li>
              <a href='#'>About Us</a>
            </li>
            <li>
              <a href='#'>Contact Us</a>
            </li>
          </ul>
        </nav>
      </header>
    )
}

export default Header