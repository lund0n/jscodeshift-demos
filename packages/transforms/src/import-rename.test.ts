import { test, expect } from 'vitest';
import { createTransformer, readInput, readOutput } from './test-helpers';
import transformer from './import-rename';

const transform = createTransformer(transformer);

test('transforms correctly', async () => {
  const input = await readInput('import-rename');
  const expected = await readOutput('import-rename');

  const output = transform(input);

  expect(output).toEqual(expected);
});
