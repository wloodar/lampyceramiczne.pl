import Link from 'next/link'

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
    // const location = useLocation()

    return (
        <li className="mb-5 text-black">
            <Link href={href} passHref>
                <a className="text-base font-normal text-black transition-[color] duration-300 ease-in-out border-hover">
                    {label}
                </a>
            </Link>
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
