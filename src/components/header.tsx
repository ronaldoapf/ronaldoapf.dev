import Link from 'next/link'
import { navigationLinks } from '../app/content'
import { NavigationMenu } from './navigation-menu'
import { ToggleTheme } from './toggle-theme'

export function Header() {
  return (
    <>
      <header className="max-w-3xl mx-auto container h-14 flex items-center p-4 justify-between">
        <span className="text-sm">ronaldoapf.dev</span>

        <nav className="text-sm hidden md:block">
          <ul className="flex gap-4">
            {navigationLinks.map((item) => {
              return (
                <li
                  key={item.label}
                  className="rounded-lg text-sm transition-all hover:opacity-80 p-1"
                >
                  <Link href={item.href}>{item.label}</Link>
                </li>
              )
            })}
          </ul>
        </nav>
        <div className="flex gap-2">
          <ToggleTheme />
          <NavigationMenu />
        </div>
      </header>
    </>
  )
}
