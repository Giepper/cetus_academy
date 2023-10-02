export function Addition() {
  let nums = [Math.floor(Math.random() * 26), Math.floor(Math.random() * 26)];
  console.log(nums[0], nums[1]);
  return (
    <>
      <p>
        {nums[0]} <span className="">+</span> {nums[1]}
      </p>
    </>
  );
}
