export interface Response {
    companies: Company[]
    nextPage: string
    prevPage: string
    page: number
    totalPages: number
}

export interface Company {
    id: number
    name: string
    slug: string
    website: string
    smallLogoUrl: string
    oneLiner: string
    longDescription: string
    teamSize: number
    url: string
    batch: string
    tags: string[]
    status: string
    industries: string[]
    regions: string[]
    locations: string[]
    badges: string[]
}
