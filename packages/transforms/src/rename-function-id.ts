import { ASTPath, Transform } from 'jscodeshift';

const transformer: Transform = (file, { j }) => {
  const root = j(file.source);

  function replaceIdentifier(path: ASTPath, from: string, to: string) {
    j(path).find(j.Identifier, { name: from }).replaceWith(j.identifier(to));
  }

  root
    .find(j.FunctionDeclaration, {
      id: {
        type: 'Identifier',
        name: 'showGreeting',
      },
    })
    .forEach((p) => {
      replaceIdentifier(p, 'name', 'anotherName');
    });
  return root.toSource();
};

export default transformer;
