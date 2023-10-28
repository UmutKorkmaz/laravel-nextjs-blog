type Post = {
    id: string
    title: string
    date?: string
    description: string
    body?: HTMLElement
    slug: string,
    likes?: number,
    comments?: Comments[],
}