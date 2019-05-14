export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
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
                  buildHookId: '5cdb25c3cdd06587db7ab0b2',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-ob6m8m6p',
                  apiId: '967a2268-6e07-43de-80b0-c665c641b8c5'
                },
                {
                  buildHookId: '5cdb25c448840580d6aa5f0e',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-mb5hpkwa',
                  apiId: '5810493c-d406-4f9c-891d-06d853d6ecd1'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/alfonsoluis/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gatsby-portfolio-web-mb5hpkwa.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['project']},
      layout: {width: 'medium'}
    }
  ]
}
