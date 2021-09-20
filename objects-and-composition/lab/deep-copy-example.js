function deepCopy(target){
  if (Array.isArray(target)){
    return target.map(deepCopy(target));
  }
  else if (typeof target == "object"){
    return [...Object.entries(target)].reduce((a, [k,v]) => Object.assign(a, {[k]: deepCopy(v)}), {});
  }
  else{
    return target;
  }
}
// Vitor Kostadinov exapmle!!!