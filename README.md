# contributors-stat

insert contributors info into a file

## Install

```bash
npm install contributors-stat -g
# or
yarn add global contributors-stat
```

## Usage

```bash
$ contributors-stat -h

  Usage: contributors-stat <options>


  Commands:

    insert|i [file]

  insert contributors info into a file

  Options:

    -h, --help     output usage information
    -V, --version  output the version number
```

## Example

```markdown

## Contributors

<!-- @stat-start -->    // remove this comment
<!-- @stat-end -->      // remove this comment

// run command: contributors-stat insert ./README.md
// and it will insert table like this:

<table>
<thead>
  <td>Contributors</td>
  <td>Commit</td>
  <td>Add Code</td>
  <td>Remove Code</td>
  <td>Total Changes</td>
</th>
</thead>
<tbody>
<tr>
  <td><a href="https://www.github.com/axetroy">axetroy</a></td>
  <td>12</td>
  <td>+475(87.64%)</td>
  <td>-53(9.78%)</td>
  <td>528(97.42%)</td>
</tr>
<tr>
  <td><a href="https://www.github.com/GitHub">GitHub</a></td>
  <td>1</td>
  <td>+7(1.29%)</td>
  <td>-7(1.29%)</td>
  <td>14(2.58%)</td>
</tr>
</tbody>
</table>

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

<!-- @stat-start -->
<table>
<thead>
  <td>Contributors</td>
  <td>Commit</td>
  <td>Add Code</td>
  <td>Remove Code</td>
  <td>Total Changes</td>
</th>
</thead>
<tbody>
<tr>
  <td><a href="https://www.github.com/axetroy">axetroy</a></td>
  <td>15</td>
  <td>+1015(67.67%)</td>
  <td>-485(32.33%)</td>
  <td>1500(100.00%)</td>
</tr>
</tbody>
</table>
<!-- @stat-end -->
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
