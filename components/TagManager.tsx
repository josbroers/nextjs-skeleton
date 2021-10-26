import { useEffect } from "react"
import { useRouter } from "next/router"
import { Pageview } from "@lib/gtm"

type Data = {
	children: React.ReactNode
}

const TagManager = ({ children }: Data) => {
	const router = useRouter()

	useEffect(() => {
		router.events.on("routeChangeComplete", Pageview)
		return () => {
			router.events.off("routeChangeComplete", Pageview)
		}
	}, [router.events])

	return children
}

export default TagManager
