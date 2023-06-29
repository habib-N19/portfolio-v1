import { NavLink } from 'react-router-dom'

const NavBar = () => {
  const navItems = [
    {
      url: '/',
      title: 'Home'
    },
    {
      url: '/blog',
      title: 'Blogs'
    },
    {
      url: '/contact',
      title: 'Contact '
    }
  ]

  return (
    <nav>
      <ul>
        {navItems.map(n => (
          <li key={n.url}>
            <NavLink to={n.url}>{n.title}</NavLink>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default NavBar
