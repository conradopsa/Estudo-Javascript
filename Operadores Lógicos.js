let p = true, q = false;

console.log(`${p} e ${q} =`, p && q);

console.log(`${p} ou ${q} =`, p || q);

//Not
console.log(`!${p} =`, !p);
console.log(`!${q} =`, !q);

//xor bit a bit, substitu�vel por p != q
console.log(`${p} xor ${q} =`, !!(p ^ q)); 