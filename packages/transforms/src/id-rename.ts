import { Transform } from 'jscodeshift';

const transformer: Transform = (file, api) => {
  const j = api.jscodeshift;

  return j(file.source)
    .find(j.Identifier, { name: 'a' })
    .replaceWith(j.identifier('greeting'))
    .toSource();
};

export default transformer;
