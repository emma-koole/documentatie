import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  richtlijnen: [
    {
      type: 'category',
      label: 'Richtlijnen',
      collapsible: false,
      className: 'sidebar__main-category',
      link: {
        type: 'generated-index',
        title: 'Richtlijnen',
        slug: 'richtlijnen',
        keywords: ['Richtlijnen', 'overzicht'],
      },
      items: [
        { type: 'doc', id: 'richtlijnen/tekst-en-taalgebruik' },
        {
          type: 'category',
          label: 'Stijl',
          link: {
            type: 'generated-index',
            title: 'Stijl',
            slug: '/richtlijnen/stijl/overzicht',
            keywords: ['Stijl', 'overzicht'],
          },
          items: [{ type: 'autogenerated', dirName: 'richtlijnen/stijl' }],
        },
        {
          type: 'category',
          label: 'Formulieren',
          link: {
            type: 'generated-index',
            title: 'Formulieren',
            slug: '/richtlijnen/formulieren/overzicht',
            keywords: ['Formulieren', 'overzicht'],
          },
          items: [{ type: 'autogenerated', dirName: 'richtlijnen/formulieren' }],
        },
      ],
    },
  ],
  componenten: [
    {
      type: 'category',
      label: 'Componenten',
      collapsible: false,
      className: 'sidebar__main-category',
      items: [
        'componenten/README',
        'componenten/definition-of-done',
        {
          type: 'category',
          label: 'Componenten',
          collapsible: false,
          items: [{ type: 'autogenerated', dirName: 'componenten/build' }],
        },
      ],
    },
  ],
  meedoen: [
    {
      type: 'category',
      label: 'Meedoen',
      collapsible: false,
      className: 'sidebar__main-category',
      link: {
        type: 'generated-index',
        title: 'Meedoen',
        slug: 'meedoen',
        keywords: ['Meedoen', 'overzicht'],
      },
      items: [
        { type: 'doc', id: 'meedoen/introductie' },
        { type: 'doc', id: 'meedoen/estafettemodel' },
        { type: 'autogenerated', dirName: 'meedoen/design-tokens' },
        {
          type: 'category',
          label: 'Voor designers',
          link: {
            type: 'generated-index',
            title: 'Voor designers',
            slug: '/meedoen/als-designer/overzicht',
            keywords: ['designers', 'overzicht'],
          },
          items: [{ type: 'autogenerated', dirName: 'meedoen/als-designer' }],
        },
        {
          type: 'category',
          label: 'Voor developers',
          link: {
            type: 'generated-index',
            title: 'Voor developers',
            slug: '/meedoen/als-developer/overzicht',
            keywords: ['developer', 'overzicht'],
          },
          items: [{ type: 'autogenerated', dirName: 'meedoen/als-developer' }],
        },
        {
          type: 'category',
          label: 'Voor organisaties',
          link: {
            type: 'generated-index',
            title: 'Voor organisaties',
            slug: '/meedoen/als-organisatie/overzicht',
            keywords: ['organisaties', 'overzicht'],
          },
          items: [{ type: 'autogenerated', dirName: 'meedoen/als-organisatie' }],
        },
        {
          type: 'category',
          label: 'Voor leveranciers',
          link: {
            type: 'generated-index',
            title: 'Overzicht',
            slug: '/meedoen/als-leverancier/overzicht',
            keywords: ['leveranciers', 'overzicht'],
          },
          items: [{ type: 'autogenerated', dirName: 'meedoen/als-leverancier' }],
        },
      ],
    },
  ],
  voorbeelden: [
    {
      type: 'category',
      label: 'Voorbeelden',
      collapsible: false,
      className: 'sidebar__main-category',
      link: {
        type: 'generated-index',
        title: 'Voorbeelden',
        slug: 'voorbeelden',
        keywords: ['Voorbeelden', 'overzicht'],
      },
      items: [
        { type: 'doc', id: 'voorbeelden/README' },
        {
          type: 'category',
          label: 'Patronen',
          items: [{ type: 'autogenerated', dirName: 'voorbeelden/patronen' }],
        },
        {
          type: 'category',
          label: 'Templates',
          items: [{ type: 'autogenerated', dirName: 'voorbeelden/templates' }],
        },
      ],
    },
  ],
  onderzoek: [{ type: 'autogenerated', dirName: 'onderzoek' }],
  project: [
    {
      type: 'category',
      label: 'Project',
      collapsible: false,
      className: 'sidebar__main-category',
      link: {
        type: 'generated-index',
        title: 'Project',
        slug: 'project',
        keywords: ['Project', 'overzicht'],
      },
      items: [
        { type: 'doc', id: 'project/kernteam' },
        {
          type: 'category',
          label: 'Events',
          collapsible: true,
          link: {
            type: 'generated-index',
            title: 'Events',
            slug: '/project/events/overzicht',
          },
          items: [
            {
              type: 'category',
              label: 'Design Systems Week 2023',
              link: {
                type: 'generated-index',
                title: 'Design Systems Week 2023',
                slug: '/events/design-systems-week-2023/overzicht',
              },
              items: [
                {
                  type: 'autogenerated',
                  dirName: 'project/events/design-systems-week-2023',
                },
              ],
            },
            { type: 'doc', id: 'project/events/design-systems-week-2022' },
            { type: 'doc', id: 'project/events/heartbeat' },
          ],
        },
        { type: 'doc', id: 'project/wie-doet-mee' },
        { type: 'doc', id: 'project/blijf-op-de-hoogte' },
        { type: 'doc', id: 'project/links' },
        { type: 'link', label: 'Blog', href: '/blog' },
      ],
    },
  ],
};

export default sidebars;
