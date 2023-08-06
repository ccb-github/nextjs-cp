import { PanelItem } from "#/types/webContent";

export const adminMainPanels: { name: string; items: PanelItem[] }[] = [	
   
    {
      name: 'Show data',
      items: [
        {
          name: 'Product',
          link: 'product',
          description:'QRCode sample',
          image: 'qrcode://'
        },
        {
          name: 'Enterprise',
          link: 'enterprise',
          description: 'All the enterprise',
        },
        {
          name: 'Account',
          link: 'account',
          description: 'Account management',
        },
        {
          name: 'Catgory',
          link: 'catogory/insert',
          description: 'Add new catgory',
        },
      ],
    }
]

export const enterpriseMainPanels: { name: string; items: PanelItem[] }[] = [	
    {
      name: 'Operation Panel',
      items: [
        {
          name: 'Product info enter',
          link: 'layouts',
          description: 'Create UI that is shared across routes',
        },
        {
          name: 'Grouped Layouts',
          link: 'route-groups',
          description: 'Organize routes without affecting URL paths',
        },
        {
          name: 'Streaming with Suspense',
          link: 'streaming',
          description:
            'Streaming data fetching from the server with React Suspense',
        },
      ],
    },
    
]
