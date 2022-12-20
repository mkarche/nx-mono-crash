export interface MyGeneratorGeneratorSchema {
  name: string;
  tags?: string;
  directory?: string;
  importPath?: string;
  scope: 'nx-app' | 'nx-mobile' | 'shared';
  domain: 'cats' | 'dogs' | 'birds' | 'reptiles' | 'other';
  type: 'feature' | 'ui' | 'utils' | 'data-access' | 'all';
}
