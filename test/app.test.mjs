// app.test.mjs
import add from '../app.js';  // 确保路径正确
import { expect } from 'chai'; // 使用 ESM 导入

describe('Add function', () => {
  it('should return 5 when adding 2 and 3', () => {
    expect(add(2, 3)).to.equal(5);
  });
});
