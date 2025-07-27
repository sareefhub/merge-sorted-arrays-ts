// ฟังก์ชันหลักที่ใช้รวมอาร์เรย์ทั้ง 3 ชุดให้เรียงจากน้อยไปมาก
export function merge(
  collection_1: number[],
  collection_2: number[],
  collection_3: number[]
): number[] {
  // ขั้นตอนที่ 1: กลับลำดับ collection_3 จากมาก→น้อย ให้เป็น น้อย→มาก
  const reversed3 = reverseDescending(collection_3);

  // ขั้นตอนที่ 2: รวม collection_1 และ collection_2 (ทั้งสองเรียงจากน้อย→มากแล้ว)
  const merged12 = mergeSorted(collection_1, collection_2);

  // ขั้นตอนที่ 3: รวมผลลัพธ์ที่ได้กับ reversed3 และส่งกลับ
  return mergeSorted(merged12, reversed3);
}

// ฟังก์ชันช่วย: ใช้สำหรับกลับอาร์เรย์ที่เรียงจากมาก→น้อย ให้กลายเป็นน้อย→มาก
function reverseDescending(arr: number[]): number[] {
  const result: number[] = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    result.push(arr[i]);
  }
  return result;
}

// ฟังก์ชันช่วย: รวมอาร์เรย์ 2 ชุดที่เรียงจากน้อย→มากให้เป็นอาร์เรย์เดียวที่เรียงอยู่เช่นกัน
function mergeSorted(a: number[], b: number[]): number[] {
  const result: number[] = [];
  let i = 0, j = 0;

  // วนลูปเทียบค่าทีละตัวจาก a และ b แล้วเก็บค่าที่น้อยกว่าไว้ใน result
  while (i < a.length && j < b.length) {
    if (a[i] <= b[j]) {
      result.push(a[i++]);
    } else {
      result.push(b[j++]);
    }
  }

  // ดึงค่าที่เหลือใน a มาใส่ต่อ (ถ้ามี)
  while (i < a.length) result.push(a[i++]);

  // ดึงค่าที่เหลือใน b มาใส่ต่อ (ถ้ามี)
  while (j < b.length) result.push(b[j++]);

  return result;
}
