// app.test.js
let add;
let expect;

before(async () => {
  add = (await import('../app.js')).default; // 动态导入默认导出
  expect = (await import('chai')).expect;     // 动态导入 expect
});

describe('Add function', () => {
  it('should return 5 when adding 2 and 3', () => {
    expect(add(2, 3)).to.equal(5);
  });
});
