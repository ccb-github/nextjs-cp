export type NavItem = {
  name: string,
  link?: string,
  description?: string,
  items?: NavItem[]
}

export type PanelItem = {
  name: string,
  link?: string,
  description?: string,
  image?: string
}