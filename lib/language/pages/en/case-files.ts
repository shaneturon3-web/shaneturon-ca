export const enCaseFiles = {
      metadata: {
        title: 'Case Files — Shane Turon',
        description:
          'Structured operational analysis. Problem → Constraints → Analysis → Design → Results → Lessons.',
      },
      list: {
        hero: {
          eyebrow: 'Analysis',
          titlePrefix: 'Case',
          titleAccent: 'Files',
          intro:
            'Structured operational analysis. Each case follows the format: Problem → Constraints → Analysis → Design → Results → Lessons.',
        },
        defaultCategory: 'Case File',
        empty: 'Case files are being compiled. Check back soon.',
      },
      detail: {
        back: 'Back to Case Files',
        defaultCategory: 'Case File',
        sections: [
          { key: 'problem', label: 'Problem' },
          { key: 'constraints', label: 'Constraints' },
          { key: 'analysis', label: 'Systems Analysis' },
          { key: 'design', label: 'Architecture Design' },
          { key: 'results', label: 'Operational Result' },
          { key: 'lessons', label: 'Lessons Learned' },
        ],
      },
    };
