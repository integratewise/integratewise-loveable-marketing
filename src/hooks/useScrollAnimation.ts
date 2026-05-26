import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function useScrollReveal(selector = '.reveal', options?: { y?: number; stagger?: number; duration?: number; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    if (!ref.current) return
    const els = ref.current.querySelectorAll(selector)
    if (!els.length) return
    gsap.from(els, {
      y: options?.y ?? 20,
      opacity: 0,
      duration: options?.duration ?? 0.5,
      stagger: options?.stagger ?? 0.08,
      ease: 'power2.out',
      delay: options?.delay ?? 0,
      scrollTrigger: { trigger: ref.current, start: 'top 88%', once: true },
    })
  }, [selector, options?.y, options?.stagger, options?.duration, options?.delay])
  return ref
}

export function useCountUp(end: number, duration = 2) {
  const ref = useRef<HTMLSpanElement>(null)
  useEffect(() => {
    if (!ref.current) return
    const obj = { val: 0 }
    gsap.to(obj, {
      val: end,
      duration,
      ease: 'power2.out',
      scrollTrigger: { trigger: ref.current, start: 'top 90%', once: true },
      onUpdate: () => {
        if (ref.current) ref.current.textContent = Math.round(obj.val).toString()
      },
    })
  }, [end, duration])
  return ref
}
