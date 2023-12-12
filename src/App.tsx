import './App.css'

function App() {
  return (
    <>
      <div className='container mx-auto'>
        <h1 className='text-2xl text-center'>
          Create Vite project with React, TypeScript, Tailwind CSS, ESLint, and Prettier
        </h1>
        <ul className='list-decimal'>
          <li>
            <div className='text-lg'>Create a new Vite project:</div>
            <div className='bg-gray-100'>
              npx create-vite my-react-app --template react-ts
              <br />
              cd my-react-app
            </div>
          </li>
          <li>
            <div className='text-lg'>Install Tailwind CSS:</div>
            <div className='bg-gray-100'>npm install -D tailwindcss postcss autoprefixer</div>
          </li>
          <li>
            <div className='text-lg'>Install Tailwind CSS:</div>
            <div className='bg-gray-100'>npx tailwindcss init -p</div>
          </li>
          <li>
            <div className='text-lg'>Install Tailwind CSS:</div>
            Edit the postcss.config.js file to include the tailwindcss and autoprefixer plugins:
            <div className='bg-gray-100'>
              module.exports = {'{'}
              plugins: {'{'}
              tailwindcss: {'{'}
              {'}'}, autoprefixer: {'{'}
              {'}'},{'}'},{'}'}
            </div>
          </li>

          <li>
            <div className='text-lg'>Modify index.css to include Tailwind styles:</div>
            Replace the content of src/index.css with the following:
            <div className='bg-gray-100'>
              @import 'tailwindcss/base'; @import 'tailwindcss/components'; @import 'tailwindcss/utilities';
            </div>
          </li>

          <li>
            <div className='text-lg'>Install ESLint and Prettier packages:</div>
            <div className='bg-gray-100'>
              npm install -D eslint prettier eslint-plugin-react eslint-plugin-react-hooks eslint-plugin-jsx-a11y
              @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint-config-prettier eslint-plugin-prettier
            </div>
          </li>

          <li>
            <div className='text-lg'>Create ESLint configuration file:</div>
            Create a .eslintrc.js file in the project root with the following content:
            <div className='bg-gray-100'>
              <div>
                module.exports = {'{'}
                parser: '@typescript-eslint/parser', extends: [ 'plugin:react/recommended',
                'plugin:@typescript-eslint/recommended', 'prettier', 'prettier/react', 'prettier/@typescript-eslint', ],
                plugins: ['react', 'react-hooks', '@typescript-eslint', 'prettier'], rules: {'{'}
                'react/react-in-jsx-scope': 'off', 'react-hooks/rules-of-hooks': 'error', 'react-hooks/exhaustive-deps':
                'warn', '@typescript-eslint/explicit-module-boundary-types': 'off',
                {'}'}, settings: {'{'}
                react: {'{'}
                version: 'detect',
                {'}'},{'}'},{'}'};
              </div>
            </div>
          </li>

          <li>
            <div className='text-lg'>Create Prettier configuration file:</div>
            Create a .prettierrc file in the project root with the following content:
            <div className='bg-gray-100'>
              <div>
                {'{'}
                "semi": false, "singleQuote": true, "jsxSingleQuote": true, "trailingComma": "all", "printWidth": 120
                {'}'}
              </div>
            </div>
          </li>
          <li>
            <div className='text-lg'>Update scripts in package.json to include lint and format commands:</div>
            <div className='bg-gray-100'>
              <div>
                "scripts": {'{'}
                "dev": "vite", "build": "vite build", "serve": "vite preview", "lint": "eslint . --ext
                .js,.jsx,.ts,.tsx", "format": "prettier --write ."
                {'}'}
              </div>
            </div>
          </li>
          <li>
            <div className='text-lg'>Run linting and formatting</div>
            <div className='bg-gray-100'>npm run lint npm run format</div>
          </li>
        </ul>

        <div className='text-xl font-bold'>Notes:</div>
        You may have got this error:
        <div className='bg-gray-100'>
          Error [ERR_REQUIRE_ESM]: require() of ES Module .eslintrc.js from
          node_modules\@eslint\eslintrc\dist\eslintrc.cjs not supported.
        </div>
        As because Vite updated https://vitejs.dev/guide/troubleshooting.html Solution : Change .eslintrc.js to
        .eslintrc.cjs: Rename your .eslintrc.js file to .eslintrc.cjs. Update package.json script: Modify your lint
        script in package.json to use the .cjs extension:
        <div className='bg-gray-100'>
          "scripts": {'{'}
          "lint": "eslint . --ext .js,.jsx,.ts,.tsx --config .eslintrc.cjs", // other scripts...
          {'}'}
        </div>
        Update extends in .eslintrc.cjs: Inside your .eslintrc.cjs file, change the extends array to include the .cjs
        extension:
        <div className='bg-gray-100'>
          module.exports = {'{'}
          // other config... extends: [ 'plugin:react/recommended', 'plugin:@typescript-eslint/recommended', 'prettier',
          'prettier/react', 'prettier/@typescript-eslint', // other extends... ].map((str) =&gt; str.endsWith('.js') ?
          str.slice(0, -3) + '.cjs' : str), // other config...
          {'}'};
        </div>
        Change "type": "module" to "type": "commonjs" in your package.json file
      </div>
    </>
  )
}

export default App
