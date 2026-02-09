import { FlatCompat } from '@eslint/eslintrc';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends('next/core-web-vitals', 'next/typescript'),
  {
    ignores: ['.next/**/*', 'next-env.d.ts'],
  },
  {
      rules: {
          'no-console': 'off',
          '@typescript-eslint/no-require-imports': 'off',
          'react/no-unescaped-entities': 'off',
          'react-hooks/exhaustive-deps': 'off',
          'no-unused-vars': 'off',
          '@typescript-eslint/no-unused-vars': 'off',
          '@typescript-eslint/no-explicit-any': 'off',
          'no-undef': 'off'
      }
  }
];

export default eslintConfig;
