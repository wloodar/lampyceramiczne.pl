import X from './icons/x'
import Plus from './icons/plus'
import Send from './icons/send'

interface Icon {
    name: string
}

const Icon = ({ name, ...rest }: Icon & JSX.IntrinsicElements['svg']) => {
    switch (name) {
        case 'x':
            return <X />
        case 'plus':
            return <Plus />
        case 'send':
            return <Send />
        default:
            return <></>
    }
}

export default Icon
