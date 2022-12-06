import { readFile } from 'fs/promises';
import jscodeshift, { Transform } from 'jscodeshift';
import { dirname, resolve } from 'path';
import { fileURLToPath } from 'url';
import { vi } from 'vitest';

export const createTransformer =
  (transformer: Transform) =>
  (source: string, path: string = 'index.js') =>
    transformer(
      { path, source },
      { j: jscodeshift, jscodeshift, report: vi.fn(), stats: vi.fn() },
      {}
    );

export async function readInput(
  filename: string,
  base = resolve(dirname(fileURLToPath(import.meta.url)), '__testfixtures__')
) {
  return await readFile(resolve(base, `${filename}.input.txt`), 'utf-8');
}

export async function readOutput(
  filename: string,
  base = resolve(dirname(fileURLToPath(import.meta.url)), '__testfixtures__')
) {
  return await readFile(resolve(base, `${filename}.output.txt`), 'utf-8');
}
