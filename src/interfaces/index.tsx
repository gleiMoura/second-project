import { ReactNode } from "react"

export interface PostType {
    title: string
    body: string
}

export interface globalType {
    title: string,
    counter: number,
    body: string
}

export interface ContextProviderProps {
    children: ReactNode
}
