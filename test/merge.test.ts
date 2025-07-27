import { describe, it, expect } from 'vitest';
import { merge } from '../src/merge';

describe('merge', () => {

  // ทดสอบกรณีปกติ: รวมอาร์เรย์ที่เรียงจากน้อยไปมาก + มากไปน้อย
  it('merges three sorted arrays correctly', () => {
    const a = [1, 3, 5];
    const b = [2, 4, 6];
    const c = [9, 7, 0]; // อันนี้เรียงจากมากไปน้อย

    console.log('\n[Case: merge sorted arrays]');
    console.log('ก่อน merge:', 'a =', a, 'b =', b, 'c =', c);

    const result = merge(a, b, c);
    console.log('หลัง merge:', result);

    expect(result).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 9]);
  });

  // ทดสอบกรณีอาร์เรย์ว่าง
  it('handles empty arrays', () => {
    const case1 = merge([], [], []);
    console.log('\n[Case: empty case 1]');
    console.log('ก่อน merge:', [], [], []);
    console.log('หลัง merge:', case1);
    expect(case1).toEqual([]);

    const case2 = merge([1], [], []);
    console.log('\n[Case: empty case 2]');
    console.log('ก่อน merge:', [1], [], []);
    console.log('หลัง merge:', case2);
    expect(case2).toEqual([1]);

    const case3 = merge([], [2], [3]);
    console.log('\n[Case: empty case 3]');
    console.log('ก่อน merge:', [], [2], [3]);
    console.log('หลัง merge:', case3);
    expect(case3).toEqual([2, 3]);
  });

  // ทดสอบกรณีมีค่าซ้ำ และค่าติดลบ
  it('handles duplicates and negatives', () => {
    const a = [-3, 0, 1];
    const b = [1, 2, 2];
    const c = [5, 4, 3]; // descending

    console.log('\n[Case: duplicates & negatives]');
    console.log('ก่อน merge:', 'a =', a, 'b =', b, 'c =', c);

    const result = merge(a, b, c);
    console.log('หลัง merge:', result);

    expect(result).toEqual([-3, 0, 1, 1, 2, 2, 3, 4, 5]);
  });

  // ทดสอบกรณี collection_3 มีแค่ 1 ตัว
  it('handles collection_3 with a single value', () => {
    const a = [1, 2, 3];
    const b = [4, 5];
    const c = [6]; // descending แต่มีแค่ตัวเดียว

    console.log('\n[Case: c has 1 value]');
    console.log('ก่อน merge:', a, b, c);

    const result = merge(a, b, c);
    console.log('หลัง merge:', result);

    expect(result).toEqual([1, 2, 3, 4, 5, 6]);
  });

  // ทดสอบกรณี a และ b มีค่าซ้ำกัน
  it('handles a and b with same values', () => {
    const a = [1, 2, 3];
    const b = [1, 2, 3];
    const c = [6, 5, 4];

    console.log('\n[Case: a and b are the same]');
    console.log('ก่อน merge:', a, b, c);

    const result = merge(a, b, c);
    console.log('หลัง merge:', result);

    expect(result).toEqual([1, 1, 2, 2, 3, 3, 4, 5, 6]);
  });

  // ทดสอบกรณีค่าต่อเนื่องแบบเรียงครบ
  it('handles full consecutive sequence', () => {
    const a = [1, 2, 3];
    const b = [4, 5, 6];
    const c = [9, 8, 7]; // descending

    console.log('\n[Case: consecutive full merge]');
    console.log('ก่อน merge:', a, b, c);

    const result = merge(a, b, c);
    console.log('หลัง merge:', result);

    expect(result).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  });

});