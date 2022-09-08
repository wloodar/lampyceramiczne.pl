import X from './icons/x'
import Plus from './icons/plus'
import Send from './icons/send'
import Heart from './icons/heart'

interface Icon {
    name: string
    className?: string
}

const Icon = ({
    name,
    className,
    ...rest
}: Icon & JSX.IntrinsicElements['svg']) => {
    switch (name) {
        case 'x':
            return <X className={className} />
        case 'plus':
            return <Plus className={className} />
        case 'send':
            return <Send className={className} />
        case 'heart':
            return <Heart className={className} />
        default:
            return <></>
    }
}

export default Icon
