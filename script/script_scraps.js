const red_scrap = document.querySelector('.red_scrap');
const black_scrap = document.querySelector('.black_scrap');
var select_scraps = document.getElementsByName('select_scraps');

console.log(select_scraps);
console.log(red_scrap);
console.log(black_scrap);

function $(a){
    alert(a);


}

$("222");


select_scraps[0].onclick = function (i,c,f){

    console.log(this);
    console.dir(i);
    console.log(c);
    console.log(f);

    if (this.checked){
        red_scrap.style.display = 'flex';
    }else{
        red_scrap.style.display = 'none';
    }
}
select_scraps[1].onclick = function (i, c, f) {

  console.log(this);
  console.log(i);
  console.log(c);
  console.log(f);

  if (this.checked) {
    red_scrap.style.display = "flex";
  } else {
    red_scrap.style.display = "none";
  }
};