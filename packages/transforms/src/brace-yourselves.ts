import { Transform } from 'jscodeshift';

const transformer: Transform = (file, api) => {
  const j = api.jscodeshift;

  const root = j(file.source);

  root
    .find(j.IfStatement)
    .filter((p) => p.value.consequent.type !== 'BlockStatement')
    .forEach((p) => {
      p.value.consequent = j.blockStatement([p.value.consequent]);
    });

  root
    .find(j.IfStatement)
    .filter(
      (p) =>
        p.value.alternate != null &&
        p.value.alternate.type !== 'BlockStatement' &&
        p.value.alternate.type !== 'IfStatement'
    )
    .forEach((p) => {
      p.value.alternate = j.blockStatement([p.value.alternate!]);
    });

  return root.toSource();
};

export default transformer;
