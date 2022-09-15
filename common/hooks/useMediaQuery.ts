import * as React from 'react'

const sizes = {
    sm: '(min-width: 640px)',
    md: '(min-width: 768px)',
}

const useMediaQuery = (mediaSize: 'sm' | 'md') => {
    const [matches, setMatches] = React.useState(false)
    const size = sizes[mediaSize]

    React.useEffect(() => {
        const media = window.matchMedia(size)

        if (media.matches !== matches) {
            setMatches(media.matches)
        }
        const listener = () => {
            setMatches(media.matches)
        }
        media.addListener(listener)
        return () => media.removeListener(listener)
    }, [matches, size])

    return matches
}

export { useMediaQuery }
