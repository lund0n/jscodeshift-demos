import { test, expect } from 'vitest';
import { createTransformer, readInput, readOutput } from './test-helpers';
import transformer from './id-rename';

const transform = createTransformer(transformer);

test('transforms correctly', async () => {
  const input = await readInput('id-rename');
  const expected = await readOutput('id-rename');

  const output = transform(input);

  expect(output).toEqual(expected);
});
