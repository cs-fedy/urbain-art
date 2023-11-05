import { useEffect, useRef } from "react"

const DEFAULT_EVENTS = ["mousedown", "touchstart"] as const

type UseOnClickOutsideProps = {
	handler: () => void
	nodes?: Array<HTMLElement | null>
}

export default function useClickOutside<T extends HTMLElement>({
	handler,
	nodes,
}: UseOnClickOutsideProps) {
	const ref = useRef<T>(null)

	useEffect(() => {
		const listener = (event: any) => {
			const target = event != null ? event.target : null
			if (Array.isArray(nodes)) {
				const shouldIgnore =
					(target == null
						? void 0
						: target.hasAttribute("data-ignore-outside-clicks")) ||
					(!document.body.contains(target) && target.tagName !== "HTML")
				const shouldTrigger = nodes.every(
					node => !!node && !event.composedPath().includes(node),
				)
				shouldTrigger && !shouldIgnore && handler()
			} else if (ref.current && !ref.current.contains(target)) {
				handler()
			}
		}

		DEFAULT_EVENTS.forEach(fn => document.addEventListener(fn, listener))

		return () => {
			DEFAULT_EVENTS.forEach(fn => document.removeEventListener(fn, listener))
		}
	}, [ref, handler, nodes])

	return ref
}
