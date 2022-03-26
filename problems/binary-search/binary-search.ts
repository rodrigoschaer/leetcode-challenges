function search(nums: number[], target: number): number {
  let first = 0;
  let last = nums.length - 1;

  while (first <= last) {
    let middle = Math.floor((first + last) / 2);
    if (nums[middle] === target) {
      return middle;
    } else if (nums[middle] < target) {
      first = middle + 1;
    } else {
      last = middle - 1;
    }
  }
  return -1;
}
