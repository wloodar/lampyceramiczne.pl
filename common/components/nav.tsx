import Link from 'next/link'
import ActiveLink from '../utils/link'
import { useRouter } from 'next/router'
import clsx from 'clsx'

const MENU_LINKS = [
    {
        label: (
            <>
                <span className="text-[10px] text-[#717171] mr-2">I</span> Wstęp
            </>
        ),
        href: '/',
    },
    {
        label: (
            <>
                <span className="text-[10px] text-[#717171] mr-2">II</span> Na
                temat ELCO
            </>
        ),
        href: '/na-temat-elco',
    },
    {
        label: (
            <>
                <span className="text-[10px] text-[#717171] mr-2">III</span>{' '}
                Oferta
            </>
        ),
        href: '/oferta',
    },
    {
        label: (
            <>
                <span className="text-[10px] text-[#717171] mr-2">IV</span>{' '}
                Współpraca
            </>
        ),
        href: '/wspolpraca',
    },
    {
        label: (
            <>
                <span className="text-[10px] text-[#717171] mr-2">V</span>{' '}
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
        <li className="mb-5 text-black">
            <ActiveLink
                href={href}
                activeClassName="before:w-full"
                activeSubClassName="before:w-full"
            >
                <a
                    className={clsx(
                        'text-base font-normal text-black transition-[color] duration-300 ease-in-out border-hover before:bg-neutral-800',
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
        <ul>
            {MENU_LINKS.map(link => (
                <NavLink key={link.href} href={link.href} label={link.label} />
            ))}
        </ul>
    )
}

export { Nav }
