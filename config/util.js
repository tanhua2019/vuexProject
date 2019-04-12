//获取屏幕宽高
export function getClientSize(){
  let h = document.documentElement.clientHeight || document.body.clientHeight;
  let w = document.documentElement.clientWidth || document.body.clientWidth;
  return {
      width:w,
      height:h
  }
}
