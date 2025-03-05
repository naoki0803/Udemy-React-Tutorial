/**
 * ファイル作成時はファイル名と拡張子の間にtest.を含める
 *  ※ Greet.test.js
 * test()関数はvitestの関数だが、
 * testファイルは自動的に vitest が読み込まれた状態になっており、
 * import を記述しなくても利用ができる。
 */

import { render, screen } from "@testing-library/react";
import Greet from "./Greet";
// 第一引数にテスト名

test("h1が存在するかどうか", () => {
    render(<Greet />);
    const h1EL = screen.getByText("こんにちは");
    expect(h1EL).toBeInTheDocument();
});

// test("h1が存在するかどうか(失敗)", () => {
//     render(<Greet />);
//     const h1EL = screen.getByText("こんばんわ");
//     expect(h1EL).toBeInTheDocument();
// });

/*
RERUN  src/010_first_test_run/start/components/Greet.jsx x6

❯ src/010_first_test_run/start/components/Greet.test.jsx (2)
  ✓ h1が存在するかどうか
  × h1が存在するかどうか(失敗)

⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯ Failed Tests 1 ⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯

FAIL  src/010_first_test_run/start/components/Greet.test.jsx > h1が存在するかどうか(失敗)
TestingLibraryElementError: Unable to find an element with the text: こんばんわ. This could be because the text is broken up by multiple elements. In this case, you can provide a function for your text matcher to make your matcher more flexible.

Ignored nodes: comments, script, style
<body>
 <div>
   <div>
     <h1>
       こんにちは
     </h1>
   </div>
 </div>
</body>
❯ Object.getElementError node_modules/@testing-library/react/node_modules/@testing-library/dom/dist/config.js:37:19
❯ node_modules/@testing-library/react/node_modules/@testing-library/dom/dist/query-helpers.js:76:38
❯ node_modules/@testing-library/react/node_modules/@testing-library/dom/dist/query-helpers.js:52:17
❯ getByText node_modules/@testing-library/react/node_modules/@testing-library/dom/dist/query-helpers.js:95:19
❯ src/010_first_test_run/start/components/Greet.test.jsx:21:25
    19| test("h1が存在するかどうか(失敗)", () => {
    20|     render(<Greet />);
    21|     const h1EL = screen.getByText("こんばんわ");
      |                         ^
    22|     expect(h1EL).toBeInTheDocument();
    23| });

⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯[1/1]⎯

Test Files  1 failed (1)
     Tests  1 failed | 1 passed (2)
  Start at  06:21:48
  Duration  99ms


FAIL  Tests failed. Watching for file changes...
      press h to show help, press q to quit

press h 

  Watch Usage
  press a, return to rerun all tests
  press r to rerun current pattern tests
  press f to rerun only failed tests
  press u to update snapshot
  press p to filter by a filename
  press t to filter by a test name regex pattern
  press w to filter by a project name
  press q to quit
*/
