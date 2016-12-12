# readme-stat

insert contributors info into a file

## Install

```bash
npm install readme-stat -g
# or
yarn add global readme-stat
```

## Usage

```bash
$ readme-stat -h

  Usage: readme-stat <options>

  insert contributor into README.md

  Options:

    -h, --help         output usage information
    -V, --version      output the version number
    -f, --file [file]  specify a .md file, default README.md in current work dir
    -r, --raw          only print raw in stdout

```

## Example

**README.md**
```markdown
## test

[#](#contributors)

[#](#contributors-end)
```

```bash
readme-stat

cat ./README.md

## test

[#](#contributors)
it will rewrite this block with contributors info
please keep at least one line in this block
[#](#contributors-end)
```

## Test

```bash
yarn run test
```

## Contributing

```bash
git clone
yarn
./bin/readme-stat
```


## Contributors

[](#contributors)

- @axetroy --- ▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇
  - 100.00%
  - +470
  - -48

[](#contributors-end)

## License

The MIT License (MIT)

Copyright (c) 2016 axetroy

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
