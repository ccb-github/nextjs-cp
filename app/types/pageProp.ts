export type CommonLayoutProps = {
  children: React.ReactNode
  params: {
    lng: string
  }
}
export type BasePageParams = {
  lng: string
}

export type BasePageProps = {
  params: BasePageParams
  searchParams: {[key: string]: string | string[]}
}