import Link from 'next/link'

const Nav = () => {
  return (
    <nav>
      <Link href="/">
        <p>Home</p>
      </Link>

      <Link href="/newNote">
        <p>New note</p>
      </Link>
      <Link href="/allNotes">
        <p>All notes</p>
        </Link>

      
    </nav>
  )
}

export default Nav