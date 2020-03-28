export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5e7f16ffccd9c7a833764006',
                  title: 'Sanity Studio',
                  name: 'omni-website-studio',
                  apiId: 'd9d1a226-02cc-4262-a033-fd434ea18690'
                },
                {
                  buildHookId: '5e7f16ffba4c829a1fddc8b7',
                  title: 'Landing pages Website',
                  name: 'omni-website',
                  apiId: '3a1e33e5-c5e8-4223-84a3-d8f89f994c98'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/hunvreus/omni-website',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://omni-website.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
