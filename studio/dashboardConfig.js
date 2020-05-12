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
                  buildHookId: '5ebb22f4938b7b9182376331',
                  title: 'Sanity Studio',
                  name: 'preview-test-studio',
                  apiId: 'ae9b1be5-110b-408e-ae91-971c16c3d55a'
                },
                {
                  buildHookId: '5ebb22f57a239b8fe64cd385',
                  title: 'Portfolio Website',
                  name: 'preview-test-web',
                  apiId: 'a4c1aae2-5d9a-4805-81ee-24798d14d66d'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/sharan7blue/preview-test',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://preview-test-web.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
