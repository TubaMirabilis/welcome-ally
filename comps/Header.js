import Link from 'next/link'

const Header = () => {
  return (
    <header>
        <nav className='bg-primary'>
            <Link href=""><a>Welcome Ally</a></Link>
            <Link href=""><a>Home</a></Link>
            <Link href=""><a>Link 2</a></Link>
            <Link href=""><a>Link 3</a></Link>
            <Link href=""><a>Link 4</a></Link>
            <Link href=""><a>Register</a></Link>
            <Link href=""><a>Login</a></Link>
        </nav>
    </header>
  )
}

export default Header