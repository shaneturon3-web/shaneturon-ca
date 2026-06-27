export type PublisherKind =
  | 'essay'
  | 'article'
  | 'guide'
  | 'manual'
  | 'book'
  | 'chapter'
  | 'story'
  | 'fable'
  | 'joke'
  | 'white-paper'
  | 'lecture'
  | 'note'
  | 'infographic'
  | 'project-brief';

export type PublisherWorkType =
  | 'standalone'
  | 'series'
  | 'collection'
  | 'manuscript'
  | 'companion'
  | 'tactical'
  | 'source-map'
  | 'project-brief';

export type PublisherStatus =
  | 'candidate'
  | 'extracted'
  | 'reviewed'
  | 'draft'
  | 'public'
  | 'parked'
  | 'internal'
  | 'restricted';

export type PublisherPublicSafety = true | false | 'partial' | 'unknown';

export type PublisherSourceType =
  | 'drive'
  | 'gmail'
  | 'blogger'
  | 'github-old-repo'
  | 'attachment'
  | 'manual'
  | 'screenshot'
  | 'unknown';

export type PublisherSourceStatus =
  | 'raw'
  | 'duplicate'
  | 'unsanitized'
  | 'reviewed'
  | 'canonical';

export type PublisherAudience =
  | 'public'
  | 'public-candidate'
  | 'internal'
  | 'restricted'
  | 'mixed';

export type PublisherSurfaceId = 'books' | 'essays' | 'stories' | 'archive';

export type PublisherContentBlock = {
  type: 'paragraph' | 'note';
  text: string;
};

export type PublisherContentItem = {
  slug: string;
  title: string;
  subtitle?: string;
  kind: PublisherKind;
  workType: PublisherWorkType;
  status: PublisherStatus;
  publicStatus: PublisherStatus;
  audience: PublisherAudience;
  publicSafe: PublisherPublicSafety;
  sourceType: PublisherSourceType;
  sourceLabel: string;
  sourceStatus: PublisherSourceStatus;
  surface: PublisherSurfaceId[];
  publicLabel?: string;
  series?: string;
  parentWork?: string;
  order?: number;
  language: 'en' | 'es' | 'fr' | 'mixed';
  tags: string[];
  description: string;
  editorialContent?: PublisherContentBlock[];
  routeEnabled: boolean;
  href?: string;
};

export type PublisherSurface = {
  id: PublisherSurfaceId;
  title: string;
  eyebrow: string;
  description: string;
};

export type PublisherShelfBucket = {
  id: string;
  title: string;
  description: string;
  target: 'publisher' | 'systems' | 'psynova-v2' | 'internal-only' | 'parked';
};
