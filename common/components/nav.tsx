import Link from 'next/link'
import ActiveLink from './link'
import { useRouter } from 'next/router'
import clsx from 'clsx'

const MENU_LINKS = [
    {
        label: (
            <>
                <span className="mr-2 text-[10px] text-[#717171]">I</span> Wstęp
            </>
        ),
        href: '/',
    },
    {
        label: (
            <>
                <span className="mr-2 text-[10px] text-[#717171]">II</span> Na
                temat ELCO
            </>
        ),
        href: '/na-temat-elco',
    },
    {
        label: (
            <>
                <span className="mr-2 text-[10px] text-[#717171]">III</span>{' '}
                Oferta
            </>
        ),
        href: '/oferta',
    },
    {
        label: (
            <>
                <span className="mr-2 text-[10px] text-[#717171]">IV</span>{' '}
                Kontakt
            </>
        ),
        href: '/kontakt',
    },
]

const NavLink = ({
    href,
    label,
    ...formatter
}: Omit<Parameters<typeof Link>['0'], 'href'> & {
    href: string
    label: React.ReactNode
}) => {
    const router = useRouter()

    return (
        <li className="my-5 text-black lg:my-4">
            <ActiveLink
                href={href}
                activeClassName="before:w-full"
                activeSubClassName="before:w-full"
            >
                <a
                    className={clsx(
                        'base border-hover text-2xl font-medium text-black transition-[color] duration-300 ease-in-out before:bg-neutral-800 lg:text-[.95rem] lg:font-normal',
                        {
                            'before:w-full': router.pathname === href,
                        },
                    )}
                >
                    {label}
                </a>
            </ActiveLink>
        </li>
    )
}

const Nav = () => {
    return (
        <ul className="mb-5">
            {MENU_LINKS.map(link => (
                <NavLink key={link.href} href={link.href} label={link.label} />
            ))}
        </ul>
    )
}

export { Nav, MENU_LINKS }
