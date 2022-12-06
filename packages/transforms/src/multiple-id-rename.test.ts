import { test, expect } from 'vitest';
import { createTransformer, readInput, readOutput } from './test-helpers';
import transformer from './multiple-id-rename';

const transform = createTransformer(transformer);

test('transforms correctly', async () => {
  const input = await readInput('multiple-id-rename');
  const expected = await readOutput('multiple-id-rename');

  const output = transform(input);

  expect(output).toEqual(expected);
});
