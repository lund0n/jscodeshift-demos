import { describe, test, expect } from 'vitest';
import dedent from 'dedent';
import { createTransformer, readInput, readOutput } from './test-helpers';
import transformer from './brace-yourselves';

const transform = createTransformer(transformer);

describe('using snapshots', () => {
  test('wraps the "if" in braces', () => {
    const input = dedent`
      if (true) return "Yes"
    `;
    const output = transform(input);
    expect(output).toMatchSnapshot();
  });

  test('ignores wrapping an "if" when already is in block', () => {
    const input = dedent`
      if (true) {
        return "Yes"
      }
    `;
    const output = transform(input);
    expect(output).toMatchSnapshot();
  });
});

describe('comparing strings', () => {
  test('ignores wrapping an "else" when already is in block', () => {
    const input = dedent`
        if (true) {
        return "Yes"
        } else {
        return "No"
        }
    `;

    const output = transform(input);
    expect(output).toEqual(input);
  });
});

describe('using inline snapshots', () => {
  test('wraps the else in braces', () => {
    const input = dedent`
        if (true) {
            return "Yes"
        } else return "No"
  `;

    const output = transform(input);
    expect(output).toMatchInlineSnapshot(`
      "if (true) {
          return \\"Yes\\"
      } else {
          return \\"No\\"
      }"
    `);
  });

  test('ignores wrapping the else when it is an else if', () => {
    const input = dedent`
      if (true) {
        return "Yes"
      } else if (maybe) {
        return "Maybe"
      } else {
        return "No"
      }
    `;

    const output = transform(input);
    expect(output).toEqual(input);
  });
});

describe('using fixtures', () => {
  test('does the proper transform', async () => {
    const input = await readInput('brace-yourselves');
    const expected = await readOutput('brace-yourselves');

    const output = transform(input);

    expect(output).toEqual(expected);
  });
});
