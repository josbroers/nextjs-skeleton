import { useEffect, useState } from 'react'

const useCurrentUrl = () => {
    const [currentUrl, setCurrentUrl] = useState('');
    useEffect(() => {
		setCurrentUrl(window.location.href)
	}, [])
    return currentUrl;
}

export default useCurrentUrl
