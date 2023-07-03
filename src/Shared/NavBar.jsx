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
    <nav className='mb-2 md:mb-6'>
      <ul className='flex justify-end w-11/12 py-4 mx-auto md:gap-4'>
        {navItems.map(n => (
          <li key={n.url}>
            <NavLink className='hover:underline' to={n.url}>
              {n.title}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default NavBar
