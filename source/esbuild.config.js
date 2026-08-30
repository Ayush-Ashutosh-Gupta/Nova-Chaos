
const esbuild = require('esbuild');
const fs = require('fs');
const path = require('path');
const postcss = require('postcss');
const tailwindcss = require('tailwindcss');
const autoprefixer = require('autoprefixer');

const isWatch = process.argv.includes('--watch');

const postcssPlugin = {
  name: 'postcss-tailwind',
  setup(build) {
    build.onLoad({ filter: /\.css$/ }, async (args) => {
      const source = fs.readFileSync(args.path, 'utf8');
      const result = await postcss([tailwindcss, autoprefixer]).process(source, { from: args.path });
      return { contents: result.css, loader: 'css' };
    });
  },
};

const buildOptions = {
  entryPoints: {
    'popup': './src/popup/index.tsx',
    'content': './src/content/content.tsx',
    'background': './src/background/background.ts',
  },
  bundle: true,
  outdir: '..',
  format: 'iife',
  target: ['chrome90'],
  loader: {
    '.tsx': 'tsx',
    '.ts': 'ts',
    '.css': 'css',
  },
  plugins: [postcssPlugin],
  minify: !isWatch,
  sourcemap: isWatch,
  define: {
    'process.env.NODE_ENV': isWatch ? '"development"' : '"production"',
  }
};

async function build() {
  try {
    if (isWatch) {
      const ctx = await esbuild.context(buildOptions);
      await ctx.watch();
      console.log('Watching for changes...');
    } else {
      await esbuild.build(buildOptions);
      console.log('Build complete!');
    }
  } catch (error) {
    console.error('Build failed:', error);
    process.exit(1);
  }
}

build();
