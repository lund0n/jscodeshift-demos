import { Transform } from 'jscodeshift';

const transformer: Transform = (file, api) => {
  const j = api.jscodeshift;

  const root = j(file.source);

  root
    .find(j.Identifier, {
      name: 'a',
    })
    .replaceWith(j.identifier('greeting'));

  root
    .find(j.Identifier, {
      name: 'b',
    })
    .replaceWith(j.identifier('farewell'));

  return root.toSource();
};

const transformer2: Transform = (file, { j }) => {
  const toUpdate: Record<string, string> = {
    a: 'greeting',
    b: 'farewell',
  };

  return j(file.source)
    .find(j.Identifier)
    .filter((p) => toUpdate[p.value.name] != null)
    .replaceWith((p) => j.identifier(toUpdate[p.value.name]))
    .toSource();
};

export default transformer;
