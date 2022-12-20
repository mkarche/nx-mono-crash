import {
  addProjectConfiguration,
  formatFiles,
  generateFiles,
  getWorkspaceLayout,
  names,
  offsetFromRoot,
  Tree,
} from '@nrwl/devkit';
import * as path from 'path';
import { MyGeneratorGeneratorSchema } from './schema';

import { libraryGenerator, applicationGenerator } from '@nxtensions/astro';

// interface NormalizedSchema extends MyGeneratorGeneratorSchema {
// projectName: string;
// projectRoot: string;
// projectDirectory: string;
// parsedTags: string[];
// }

// function normalizeOptions(tree: Tree, options: MyGeneratorGeneratorSchema): NormalizedSchema {
//   const name = names(options.name).fileName;
//   const projectDirectory = options.directory
//     ? `${names(options.directory).fileName}/${name}`
//     : name;
//   const projectName = projectDirectory.replace(new RegExp('/', 'g'), '-');
//   const projectRoot = `${getWorkspaceLayout(tree).libsDir}/${projectDirectory}`;
//   const parsedTags = options.tags
//     ? options.tags.split(',').map((s) => s.trim())
//     : [];

//   return {
//     ...options,
//     projectName,
//     projectRoot,
//     projectDirectory,
//     parsedTags,
//   };
// }

// function addFiles(tree: Tree, options: NormalizedSchema) {
//     const templateOptions = {
//       ...options,
//       ...names(options.name),
//       offsetFromRoot: offsetFromRoot(options.projectRoot),
//       template: ''
//     };
//     generateFiles(tree, path.join(__dirname, 'files'), options.projectRoot, templateOptions);
// }
const ALL_TYPES: MyGeneratorGeneratorSchema['type'][] = [
  'feature',
  'ui',
  'utils',
  'data-access',
];
export default async function (
  tree: Tree,
  options: MyGeneratorGeneratorSchema
) {
  options.importPath = `@astro/${options.name}`;
  if (options.type === 'all') {
    for (const type of ALL_TYPES) {
      options.type = type;
      options.tags = `scope:${options.scope},domain:${options.domain},type:${options.type}`;
      options.directory = `${options.scope}/${options.domain}/${options.type}`;
      console.log(options);

      //const updatedOptions: MyGeneratorGeneratorSchema = { ...options, type };
      await libraryGenerator(tree, options);
    }
  } else {
    options.tags = `scope:${options.scope},domain:${options.domain},type:${options.type}`;
    options.directory = `${options.scope}/${options.domain}/${options.type}`;
    await libraryGenerator(tree, options);
  }
}
